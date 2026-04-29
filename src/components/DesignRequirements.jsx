import { motion } from 'framer-motion'
import { Table2 } from 'lucide-react'
import { useState } from 'react'

const rows = [
  {id:'JM-01',feature:'Visual Rule-Zones Canvas',phase:'Design',journey:'1. Entry & Orientation',priority:'P0',status:'Done',due:'2021-06-15',time:'4w',dev:'Frontend Lead',metric:'Zero confusion on zone mapping',notes:'No visual overview of rules/zones/relationships'},
  {id:'JM-02',feature:'Inline Glossary Tooltips',phase:'Design',journey:'1. Entry & Orientation',priority:'P1',status:'Done',due:'2021-06-30',time:'2w',dev:'Frontend Eng',metric:'Term lookup < 3 sec',notes:'Unfamiliar terminology with no in-UI explanation'},
  {id:'JM-03',feature:'Template Chooser w/ Guidance',phase:'Design',journey:'2. Create a Rule',priority:'P0',status:'Done',due:'2021-07-20',time:'3w',dev:'Frontend Lead + PM',metric:'Template selection -50%',notes:'No guidance on which template to pick'},
  {id:'JM-04',feature:'Smart Template Inheritance',phase:'Design',journey:'2. Create a Rule',priority:'P0',status:'Done',due:'2021-08-05',time:'3w',dev:'Backend Eng',metric:'Duplicate templates eliminated',notes:'Templates locked, must copy first'},
  {id:'JM-05',feature:'Config Search & Jump Nav',phase:'Design',journey:'3. Configure the Rule',priority:'P0',status:'Done',due:'2021-08-20',time:'3w',dev:'Frontend Eng',metric:'Setting find < 5 sec',notes:'Extremely long tab-heavy form with no search'},
  {id:'JM-06',feature:'Visual Diff / Override Indicators',phase:'Design',journey:'3. Configure the Rule',priority:'P1',status:'Done',due:'2021-09-05',time:'2w',dev:'Frontend Eng',metric:'Override visibility 100%',notes:'Changed fields not visually distinguished from defaults'},
  {id:'JM-07',feature:'Live Inline Validation & Simulation',phase:'Design',journey:'3. Configure the Rule',priority:'P0',status:'Done',due:'2021-09-20',time:'4w',dev:'Full-stack Eng',metric:'Pre-production errors caught 95%',notes:'No live validation, errors only surface in production'},
  {id:'JM-08',feature:'Priority Simulator',phase:'Design',journey:'4. Assign & Prioritize',priority:'P0',status:'Done',due:'2021-10-05',time:'3w',dev:'Backend + Frontend Lead',metric:'Priority clarity 100%',notes:'Cannot tell which rule matches first'},
  {id:'JM-09',feature:'Visual Priority Ladder',phase:'Design',journey:'4. Assign & Prioritize',priority:'P0',status:'Done',due:'2021-10-20',time:'3w',dev:'Frontend Eng',metric:'Hierarchy understood at glance',notes:'Three-level hierarchy not visible or explained'},
  {id:'JM-10',feature:'Save Confirmation & Impact Preview',phase:'Design',journey:'5. Save & Export',priority:'P1',status:'Done',due:'2021-11-01',time:'2w',dev:'Frontend Eng',metric:'Save confidence 4.5/5',notes:'No save confirmation or success state beyond rule list'},
  {id:'JM-11',feature:'One-Click Rule Sync / Push',phase:'Design',journey:'5. Save & Export',priority:'P1',status:'In Progress',due:'2021-11-20',time:'3w',dev:'DevOps + Backend Eng',metric:'Multi-server sync < 1 min',notes:'Exporting/replicating to multiple servers is fully manual'},
  {id:'JM-12',feature:'Conflict Detector',phase:'Design',journey:'6. Monitor & Manage',priority:'P0',status:'Done',due:'2021-11-30',time:'3w',dev:'Backend Eng',metric:'Overlapping rules flagged 100%',notes:'No conflict detection across rules, overlapping configs coexist silently'},
  {id:'JM-13',feature:'Rule Health Dashboard',phase:'Design',journey:'6. Monitor & Manage',priority:'P1',status:'In Progress',due:'2021-12-15',time:'4w',dev:'Frontend + Backend Eng',metric:'Inactive rules surfaced weekly',notes:'Rule server accumulation with no audit or cleanup tooling'},
  {id:'JM-14',feature:'Visual Workflow Editor Phase 1',phase:'Design',journey:'6. Monitor & Manage',priority:'P0',status:'Done',due:'2021-10-10',time:'6w',dev:'Frontend Lead',metric:'Misconfiguration down 73%',notes:'Diagnosing misconfigured rules requires filtering Processing History manually'},
]

const pOrd = { P0:0, P1:1, P2:2, P3:3 }
const sOrd = { 'Done':0, 'In Progress':1, 'Backlog':2 }
const pCls = p => p==='P0'?'req-p0':p==='P1'?'req-p1':p==='P2'?'req-p2':'req-p3'
const sCls = s => s==='Done'?'req-done':s==='In Progress'?'req-progress':'req-backlog'

export default function DesignRequirements() {
  const [key, setKey] = useState('priority')
  const [dir, setDir] = useState(1)
  const toggle = k => { if(key===k) setDir(d=>-d); else { setKey(k); setDir(1) } }

  const sorted = [...rows].sort((a,b)=>{
    let va, vb
    if(key==='priority'){ va=pOrd[a.priority]; vb=pOrd[b.priority] }
    else if(key==='status'){ va=sOrd[a.status]; vb=sOrd[b.status] }
    else if(key==='due'){ va=new Date(a.due); vb=new Date(b.due) }
    else { va=a[key]; vb=b[key] }
    return va<vb?-dir:va>vb?dir:pOrd[a.priority]-pOrd[b.priority]
  })

  const H = ({l,k}) => (
    <th className={k?'req-th sortable':'req-th'} onClick={k?()=>toggle(k):undefined}>
      {l}{k&&key===k&&<span>{dir===1?' ▲':' ▼'}</span>}
    </th>
  )

  return (
    <motion.section className="case-section" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}}>
      <div className="case-section-header"><Table2 size={20}/><h2>Design Requirements Matrix</h2></div>
      <div className="req-table-wrap">
        <table className="req-table">
          <thead><tr>
            <H l="ID" k="id"/><H l="Feature" k="feature"/><H l="Phase" k="phase"/>
            <H l="Journey" k="journey"/><H l="Priority" k="priority"/><H l="Status" k="status"/>
            <H l="Due" k="due"/><H l="Time"/><H l="Dev"/><H l="Metric"/><H l="Notes"/>
          </tr></thead>
          <tbody>
            {sorted.map(r=> (
              <tr key={r.id}>
                <td className="req-td req-td-id">{r.id}</td>
                <td className="req-td req-td-feature">{r.feature}</td>
                <td className="req-td">{r.phase}</td>
                <td className="req-td">{r.journey}</td>
                <td className="req-td"><span className={`req-badge ${pCls(r.priority)}`}>{r.priority}</span></td>
                <td className="req-td"><span className={`req-badge ${sCls(r.status)}`}>{r.status}</span></td>
                <td className="req-td">{r.due}</td>
                <td className="req-td">{r.time}</td>
                <td className="req-td req-td-dev">{r.dev}</td>
                <td className="req-td">{r.metric}</td>
                <td className="req-td req-td-notes">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="req-legend">
        <span><span className="req-dot req-p0"/>P0</span>
        <span><span className="req-dot req-p1"/>P1</span>
        <span><span className="req-dot req-p2"/>P2</span>
        <span><span className="req-dot req-p3"/>P3</span>
        <span className="req-legend-gap"/>
        <span><span className="req-dot req-done"/>Done</span>
        <span><span className="req-dot req-progress"/>In Progress</span>
        <span><span className="req-dot req-backlog"/>Backlog</span>
      </div>
    </motion.section>
  )
}
