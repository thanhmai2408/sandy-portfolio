import { motion } from 'framer-motion'

const stages = [
  {
    num: 1,
    title: 'Entry & Orientation',
    headerColor: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    tasks: [
      'Log in to Core console',
      'Navigate to Policy → Workflow Rules',
      'Scan list of existing rules',
      'Understand rule order & zones',
    ],
    thinking: [
      'Which of these rules is actually active right now?',
      'What does this security zone mean? Is mine the right one?',
    ],
    painPoints: [
      { text: 'No visual overview of rules, zones, or relationships — just a flat list', severity: 'medium' },
      { text: 'Unfamiliar terminology (Zone, Template, Rule) with no in-UI explanation', severity: 'medium' },
    ],
    emotion: { label: 'Neutral / Cautious', gradient: 'linear-gradient(90deg, #f59e0b, #10b981)' },
    opportunities: [
      'Visual canvas showing rules, zones, and their relationships at a glance',
      'Inline glossary tooltips for zones, templates, and rules',
    ],
  },
  {
    num: 2,
    title: 'Create a Rule',
    headerColor: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    tasks: [
      'Click "Add New Rule"',
      'Name the rule',
      'Select a workflow template',
      'Select a security zone',
      'Set access/visibility roles',
    ],
    thinking: [
      'Which template should I start from? I can\'t tell the difference!',
      'Do I need to copy a template first, or can I just pick one?',
    ],
    painPoints: [
      { text: 'Predefined templates are locked — must copy first, creating duplication', severity: 'high' },
      { text: 'No guidance on which template to pick for a given use case', severity: 'medium' },
    ],
    emotion: { label: 'Uncertain', gradient: 'linear-gradient(90deg, #f97316, #f59e0b)' },
    opportunities: [
      'Template chooser with use-case descriptions and recommended starting points',
      'Allow direct editing of templates (or smart inheritance model)',
    ],
  },
  {
    num: 3,
    title: 'Configure the Rule',
    headerColor: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    tasks: [
      'Switch tabs (Archive, Scan, Deep CDR, Blacklist...)',
      'Enable/disable engines',
      'Set scan pool & failover',
      'Configure CDR per file type',
      'Configure blacklist/whitelist',
      'Set compression & archive limits',
      'Set external scanner & actions',
      'Scroll through long nested form',
    ],
    thinking: [
      'Where is the timeout setting? I\'ve been scrolling for 2 minutes.',
      'If I change this tab\'s setting, does it affect the template or just this rule?',
      'Did I already set this somewhere else? I can\'t tell what I\'ve changed.',
    ],
    painPoints: [
      { text: 'Extremely long, tab-heavy form with no search or jump navigation', severity: 'high' },
      { text: 'Under inheritance — changed fields don\'t visually distinguish from template defaults', severity: 'medium' },
      { text: 'No live validation or feedback while configuring — errors only surface in production', severity: 'high' },
    ],
    emotion: { label: 'Frustrated', gradient: 'linear-gradient(90deg, #ef4444, #f97316)' },
    opportunities: [
      'Config Search — jump to any setting by keyword (in progress per spec)',
      'Visual diff between rule and its template — highlight overridden fields',
      'Live inline validation and simulation before saving',
    ],
  },
  {
    num: 4,
    title: 'Assign & Prioritize',
    headerColor: 'linear-gradient(135deg, #60a5fa 0%, #0ea5e9 100%)',
    tasks: [
      'Link rule to security zone(s)',
      'Set rule at global / user / file level',
      'Reorder rules via drag & drop',
      'Verify priority order is correct',
    ],
    thinking: [
      'Rules are processed in order — but I can\'t tell which one will actually match first.',
      'If a user has a rule assigned, does that override my global setting?',
    ],
    painPoints: [
      { text: 'Three-level priority hierarchy (global/user/file) is not visible or explained', severity: 'high' },
      { text: 'No indication of what "first matching rule wins" looks like across your full rule set', severity: 'high' },
    ],
    emotion: { label: 'Anxious', gradient: 'linear-gradient(90deg, #dc2626, #f43f5e)' },
    opportunities: [
      'Priority simulator — show which rule would match for a given file/user/zone',
      'Visual priority ladder with clear "first match wins" indication',
    ],
  },
  {
    num: 5,
    title: 'Save & Export',
    headerColor: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    tasks: [
      'Click Save',
      'Verify rule appears in list',
      'Go to Settings → Export config',
      'Replicate rule to other servers',
    ],
    thinking: [
      'I saved, but did it actually apply? Nothing confirmed it worked.',
      'How do I export and push this to 3 other servers manually?',
    ],
    painPoints: [
      { text: 'No save confirmation or success state beyond rule appearing in list', severity: 'medium' },
      { text: 'Exporting = replicating to multiple servers is fully manual', severity: 'medium' },
    ],
    emotion: { label: 'Relieved but doubtful', gradient: 'linear-gradient(90deg, #f59e0b, #10b981)' },
    opportunities: [
      'Save confirmation with change summary and impact preview',
      'One-click sync/push rule to connected servers',
    ],
  },
  {
    num: 6,
    title: 'Monitor & Manage',
    headerColor: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    tasks: [
      'Monitor Processing History',
      'Filter history by file name',
      'Identify misconfigured rules',
      'Edit/delete rules over time',
      'Audit rule sprawl',
    ],
    thinking: [
      'Production traffic is failing — which rule is causing it?',
      'I have 200+ rules now. I don\'t know which ones are duplicates.',
    ],
    painPoints: [
      { text: 'No conflict detection across rules — overlapping configs silently co-exist', severity: 'high' },
      { text: 'Rule server accumulation with no audit or cleanup tooling', severity: 'medium' },
      { text: 'Diagnosing a misconfigured rule requires filtering Processing History manually', severity: 'high' },
    ],
    emotion: { label: 'Overwhelmed', gradient: 'linear-gradient(90deg, #dc2626, #991b1b)' },
    opportunities: [
      'Conflict detector — flags overlapping and redundant rules proactively',
      'Rule health dashboard — usage, last matched, inactive rules',
      'Visual Workflow Editor for end-to-end rules-based management (Phase 1)',
    ],
  },
]

const severityColors = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#10b981',
}

const severityLabel = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
}

function SeverityDot({ level }) {
  return (
    <span
      className="jm-severity-dot"
      style={{ background: severityColors[level] }}
      title={`${severityLabel[level]} severity`}
    />
  )
}

export default function JourneyMap() {
  return (
    <div className="journey-map">
      {/* Header */}
      <div className="jm-header">
        <div className="jm-header-left">
          <h1 className="jm-title">Core Workflow Studio — Current User Journey Map</h1>
          <p className="jm-subtitle">MetaDefender Core v6 · Policy → Workflow Rules</p>
        </div>
        <div className="jm-header-right">
          <span className="jm-badge">AS-IS STATE</span>
          <p className="jm-meta">Product Design Research · April 2026</p>
          <p className="jm-meta">Based on Continuance docs & internal specs</p>
        </div>
      </div>

      {/* Persona & Goal */}
      <div className="jm-persona-bar">
        <div className="jm-persona">
          <div className="jm-persona-avatar">A</div>
          <div className="jm-persona-info">
            <span className="jm-persona-name">Security Administrator</span>
            <span className="jm-persona-desc">Power user · Manages policies, rules, and scan configurations across teams</span>
          </div>
        </div>
        <div className="jm-goal">
          <span className="jm-goal-label">Goal:</span>
          <span className="jm-goal-text">
            Create and maintain workflow rules that correctly route files through the right
            scanning engines, CDR, and DLP policies — without breaking production traffic.
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="jm-legend">
        <div className="jm-legend-item"><span className="jm-legend-dot" style={{ background: '#2563eb' }} /> User tasks</div>
        <div className="jm-legend-item"><span className="jm-legend-dot" style={{ background: '#7c3aed' }} /> Thinking / mental model</div>
        <div className="jm-legend-item"><span className="jm-legend-dot" style={{ background: '#ef4444' }} /> Pain points</div>
        <div className="jm-legend-item"><span className="jm-legend-dot" style={{ background: '#f59e0b' }} /> Emotional state</div>
        <div className="jm-legend-severity">
          <span className="jm-legend-sev-item"><SeverityDot level="high" /> High severity</span>
          <span className="jm-legend-sev-item"><SeverityDot level="medium" /> Medium</span>
          <span className="jm-legend-sev-item"><SeverityDot level="low" /> Low</span>
        </div>
      </div>

      {/* Stages Grid */}
      <div className="jm-stages-wrapper">
        <div className="jm-stages">
          {stages.map((stage, i) => (
            <motion.div
              className="jm-stage"
              key={stage.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Stage Header */}
              <div
                className="jm-stage-header"
                style={{ background: stage.headerColor }}
              >
                <span className="jm-stage-num">{stage.num}</span>
                <span className="jm-stage-title">{stage.title}</span>
              </div>

              {/* Tasks */}
              <div className="jm-row jm-row-tasks">
                {stage.tasks.map((task, idx) => (
                  <span className="jm-task-pill" key={idx}>{task}</span>
                ))}
              </div>

              {/* Thinking */}
              <div className="jm-row jm-row-thinking">
                {stage.thinking.map((t, idx) => (
                  <p className="jm-thinking-text" key={idx}>"{t}"</p>
                ))}
              </div>

              {/* Pain Points */}
              <div className="jm-row jm-row-pain">
                {stage.painPoints.map((pp, idx) => (
                  <div className="jm-pain-item" key={idx}>
                    <SeverityDot level={pp.severity} />
                    <span className="jm-pain-text">{pp.text}</span>
                    <span className="jm-pain-severity">{severityLabel[pp.severity]}</span>
                  </div>
                ))}
              </div>

              {/* Emotion */}
              <div className="jm-row jm-row-emotion">
                <div
                  className="jm-emotion-gradient"
                  style={{ background: stage.emotion.gradient }}
                />
                <span className="jm-emotion-label">{stage.emotion.label}</span>
              </div>

              {/* Opportunities */}
              <div className="jm-row jm-row-opps">
                {stage.opportunities.map((opp, idx) => (
                  <div className="jm-opp-item" key={idx}>
                    <span className="jm-opp-bulb">+</span>
                    <span className="jm-opp-text">{opp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row Labels (fixed left) */}
      <div className="jm-row-labels">
        <div className="jm-row-label" style={{ top: '104px' }}>TASKS</div>
        <div className="jm-row-label" style={{ top: '220px' }}>THINKING</div>
        <div className="jm-row-label" style={{ top: '310px' }}>PAIN POINTS</div>
        <div className="jm-row-label" style={{ top: '440px' }}>EMOTION</div>
        <div className="jm-row-label" style={{ top: '490px' }}>OPPORTUNITIES</div>
      </div>
    </div>
  )
}
