import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowRight, Layers, Code2, ShieldCheck, Briefcase } from 'lucide-react'
import { useState, useEffect } from 'react'

function AnimatedGradientText({ text }) {
  return (
    <span className="accent-animated">
      {text}
    </span>
  )
}

function AnimatedToken({ value, suffix = '' }) {
  const [display, setDisplay] = useState(value)
  useEffect(() => {
    const start = display
    const end = value
    if (start === end) return
    const duration = 400
    const startTime = performance.now()
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(start + (end - start) * eased))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return <span>{display}{suffix}</span>
}

const ACCENT = '#7c3aed'

function getBarHeights(index) {
  const count = 8
  const base = 30
  const amplitude = 50
  return Array.from({ length: 4 }, (_, i) => {
    const t = (index + i * 2) / count
    const wave = Math.sin(t * Math.PI * 2) * amplitude + base
    return Math.max(15, Math.min(85, Math.round(wave)))
  })
}

function AnimatedBar({ index }) {
  const heights = getBarHeights(index)
  return (
    <motion.div
      className="chart-bar"
      style={{ background: ACCENT }}
      animate={{ height: heights.map((h) => `${h}%`) }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  )
}

function LiveNumber({ target, suffix = '' }) {
  const [val, setVal] = useState(target)
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => {
        const next = Math.max(0, v + (Math.random() - 0.4) * target * 0.15)
        return Math.round(next)
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [target])
  return <span>{val}{suffix}</span>
}

function DataStoryChart() {
  const [hovered, setHovered] = useState(null)

  const data = [
    { month: 'Jan', value: 42 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 72 },
    { month: 'May', value: 68 },
    { month: 'Jun', value: 91 },
  ]

  const maxV = 100
  const pad = { top: 28, right: 12, bottom: 28, left: 36 }
  const W = 340
  const H = 180
  const plotW = W - pad.left - pad.right
  const plotH = H - pad.top - pad.bottom

  const x = (i) => pad.left + (i / (data.length - 1)) * plotW
  const y = (v) => pad.top + plotH - (v / maxV) * plotH

  const lineD = `M ${data.map((d, i) => `${x(i)} ${y(d.value)}`).join(' L ')}`
  const areaD = `${lineD} L ${x(data.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`

  const insightIndex = 5
  const ix = x(insightIndex)
  const iy = y(data[insightIndex].value)

  const hoverData = hovered !== null ? data[hovered] : null

  return (
    <div className="story-chart">
      <div className="story-chart-header">
        <span>User Activation Rate</span>
        <span className="story-chart-period">H1 2024</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="story-chart-svg">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => (
          <line
            key={v}
            x1={pad.left}
            y1={y(v)}
            x2={W - pad.right}
            y2={y(v)}
            className="story-grid"
          />
        ))}
        {/* Y labels */}
        {[0, 50, 100].map((v) => (
          <text key={v} x={pad.left - 8} y={y(v)} textAnchor="end" dominantBaseline="middle" className="story-axis-label">
            {v}%
          </text>
        ))}
        {/* X labels */}
        {data.map((d, i) => (
          <text key={i} x={x(i)} y={H - pad.bottom + 16} textAnchor="middle" className="story-axis-label">
            {d.month}
          </text>
        ))}
        {/* Area fill */}
        <motion.path
          d={areaD}
          fill="rgba(124, 58, 237, 0.06)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        {/* Line */}
        <motion.path
          d={lineD}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {/* Hover vertical guide line */}
        {hovered !== null && (
          <line
            x1={x(hovered)}
            y1={pad.top}
            x2={x(hovered)}
            y2={H - pad.bottom}
            stroke="#7c3aed"
            strokeWidth="1"
            strokeDasharray="4 2"
            opacity="0.4"
          />
        )}
        {/* Data dots + hit areas */}
        {data.map((d, i) => (
          <g key={i}>
            <circle
              cx={x(i)}
              cy={y(d.value)}
              r="14"
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
            <motion.circle
              cx={x(i)}
              cy={y(d.value)}
              r={hovered === i ? 6 : i === insightIndex ? 5 : 3}
              fill={i === insightIndex ? '#7c3aed' : '#ffffff'}
              stroke="#7c3aed"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
              style={{ pointerEvents: 'none' }}
            />
          </g>
        ))}
        {/* Tooltip */}
        {hoverData && (
          <g transform={`translate(${x(hovered) + 12}, ${y(hoverData.value) - 36})`}>
            <rect
              x="0"
              y="0"
              width="76"
              height="28"
              rx="6"
              fill="#1e1b4b"
              fillOpacity="0.92"
            />
            <text
              x="38"
              y="13"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="9"
              fontWeight="600"
              fontFamily="ui-sans-serif,system-ui,sans-serif"
            >
              {hoverData.month}
            </text>
            <text
              x="38"
              y="24"
              textAnchor="middle"
              fill="#c4b5fd"
              fontSize="10"
              fontWeight="700"
              fontFamily="ui-sans-serif,system-ui,sans-serif"
            >
              {hoverData.value}%
            </text>
          </g>
        )}
        {/* Insight annotation line */}
        <motion.line
          x1={ix}
          y1={iy - 6}
          x2={ix}
          y2={pad.top - 4}
          stroke="#7c3aed"
          strokeWidth="1"
          strokeDasharray="3 2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        />
        {/* Insight card */}
        <motion.g
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <rect x={ix - 68} y={6} width={68} height={18} rx={4} fill="#7c3aed" />
          <text x={ix - 34} y={18} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="ui-sans-serif,system-ui,sans-serif">
            +34% lift
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

function VibeCodeWidget() {
  return (
    <div className="vibe-widget">
      <div className="vibe-header">
        <Code2 size={18} />
        <span>Design Token Playground</span>
      </div>

      <motion.div
        className="vibe-preview"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="vibe-shimmer" aria-hidden="true" />

        {/* Live Mini Dashboard */}
        <div className="mini-dash">
          <div className="dash-metrics">
            <div className="dash-metric">
              <span className="dash-label">Sessions</span>
              <span className="dash-value">
                <LiveNumber target={1240} />
              </span>
            </div>
            <div className="dash-metric">
              <span className="dash-label">Conversion</span>
              <span className="dash-value">
                <LiveNumber target={68} suffix="%" />
              </span>
            </div>
          </div>

          {/* Animated Bar Chart */}
          <div className="chart-wrap">
            <div className="chart-bars">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="chart-col">
                  <AnimatedBar index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Live Pulse Indicator */}
          <div className="dash-pulse-row">
            <div className="pulse-dot" style={{ background: ACCENT }} />
            <span className="pulse-text">Live data simulation</span>
            <span className="pulse-time">Updated now</span>
          </div>
        </div>
      </motion.div>

      <div className="vibe-editor">
        <div className="vibe-editor-header">
          <span className="vibe-editor-dot red" />
          <span className="vibe-editor-dot yellow" />
          <span className="vibe-editor-dot green" />
          <span className="vibe-editor-filename">WorkflowCard.tsx</span>
        </div>
        <pre className="vibe-editor-body"><code>{`01  import { motion } from 'framer-motion'
02  import { useWorkflow } from './hooks'
03
04  export const WorkflowCard = ({ data }) => {
05    const { status, progress } = useWorkflow(data)
06    return (
07      <motion.div layout className="card"
08        animate={{ opacity: 1, y: 0 }}>
09        <StatusBadge state={status} />
10        <ProgressBar value={progress} />
11      </motion.div>
12    )
13  }`}</code></pre>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Senior Product Designer · 7 Years Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I design complex systems,<br />
            vibe-code the prototype, and <AnimatedGradientText text="ship the product" />.
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Senior product designer with 7 years in B2B enterprise, healthcare, and
            cybersecurity. Grounded in HTML, CSS, and React, I use design thinking to
            untangle complex workflows — then vibe-code the prototype to validate and ship.
            Vibe coding isn't a side skill; it's how I bridge research and production.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/work" className="btn">View my work <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-ghost">Get in touch</Link>
          </motion.div>

          <motion.div
            className="cred-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Briefcase, label: 'ServiceNow' },
              { icon: ShieldCheck, label: 'OPSWAT' },
              { icon: Layers, label: 'Hologic' },
              { icon: Code2, label: 'Vibe Coder' },
            ].map((item) => (
              <div className="cred-item" key={item.label}>
                <item.icon size={16} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section section-alt" id="work">
        <div className="section-inner">
          <p className="eyebrow">Selected work</p>
          <h2>Complex systems, shipped</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                className="project-card"
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="project-thumb">
                  <div className="project-thumb-label">{p.company}</div>
                </div>
                <div className="project-meta">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.shortDesc}</p>
                  <Link to={`/work/${p.slug}`} className="project-link">
                    View case study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/work" className="btn-ghost">See all projects <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Vibe Coding Proof */}
      <section className="section">
        <div className="section-inner vibe-section">
          <div className="vibe-text">
            <p className="eyebrow">Design + Code</p>
            <h2>Design thinking, engineering execution.</h2>
            <p className="body-text">
              Vibe coding lets me iterate in the browser. I prototype with React, animate
              with Framer Motion, and ship production-ready components. The widget on the
              right is a live, interactive design token playground — built in the same
              stack I use for real products.
            </p>
            <div className="vibe-tags">
              {['React', 'Framer Motion', 'CSS Animation', 'Component Libraries', 'Git'].map((tag) => (
                <span className="vibe-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <VibeCodeWidget />
        </div>
      </section>

      {/* Business & Marketing Background */}
      <section className="section section-alt">
        <div className="section-inner biz-section">
          <motion.div
            className="biz-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">Business &amp; Marketing</p>
            <h2>I do not just ship features — I ship outcomes</h2>
            <p className="body-text" style={{ marginTop: 16 }}>
              My background is not purely design — I have spent years in business and marketing,
              running campaigns, watching funnels, and optimizing for outcomes. That is why I do not
              stop at "looks good." I stop at "proves it." I can walk into a room of executives,
              show them a working prototype, and back it up with the business logic they already
              speak. Design becomes an easier sell when you speak both languages.
            </p>
          </motion.div>

          <motion.div
            className="biz-doc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="doc-header">
              <span className="doc-dot red" />
              <span className="doc-dot yellow" />
              <span className="doc-dot green" />
              <span className="doc-title">Design Planning — Q3 Initiative</span>
            </div>

            <div className="gantt-chart">
              {/* Timeline header */}
              <div className="gantt-timeline">
                <div className="gantt-task-header">Initiative</div>
                <div className="gantt-weeks">
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((w) => (
                    <span key={w} className="gantt-week">{w}</span>
                  ))}
                </div>
              </div>

              {/* Today marker */}
              <div className="gantt-today" style={{ left: '33.33%' }} />

              {/* Task rows */}
              {[
                { name: 'User research & discovery', start: 0, span: 2, status: 'st-validated', owner: 'Research' },
                { name: 'Reduce triage time', start: 1, span: 3, status: 'st-progress', owner: 'Security' },
                { name: 'Onboarding flow redesign', start: 2, span: 3, status: 'st-validated', owner: 'Growth' },
                { name: 'Data entry audit', start: 0, span: 2, status: 'st-shipped', owner: 'Healthcare' },
                { name: 'Admin dashboard v2', start: 3, span: 3, status: 'st-review', owner: 'Platform' },
                { name: 'Design system tokens', start: 2, span: 2, status: 'st-progress', owner: 'DesignOps' },
                { name: 'Accessibility audit', start: 4, span: 2, status: 'st-review', owner: 'Compliance' },
                { name: 'Cross-team alignment', start: 0, span: 6, status: 'st-progress', owner: 'Leadership' },
                { name: 'QA & rollout planning', start: 4, span: 2, status: 'st-review', owner: 'Delivery' },
              ].map((t, i) => (
                <div className="gantt-row" key={i}>
                  <div className="gantt-task">
                    <span className="gantt-task-name">{t.name}</span>
                    <span className="gantt-owner">{t.owner}</span>
                  </div>
                  <div className="gantt-track">
                    <div
                      className={`gantt-bar ${t.status}`}
                      style={{
                        left: `${(t.start / 6) * 100}%`,
                        width: `${(t.span / 6) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="gantt-legend">
              <span className="gantt-legend-item"><span className="gantt-dot st-validated" />Validated</span>
              <span className="gantt-legend-item"><span className="gantt-dot st-progress" />In Progress</span>
              <span className="gantt-legend-item"><span className="gantt-dot st-shipped" />Shipped</span>
              <span className="gantt-legend-item"><span className="gantt-dot st-review" />In Review</span>
              <span className="gantt-legend-today"><span className="gantt-today-line" />Today</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Storytelling */}
      <section className="section">
        <div className="section-inner story-section">
          <motion.div
            className="story-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">Data Storytelling</p>
            <h2>I turn data into decisions.</h2>
            <p className="body-text" style={{ marginTop: 16 }}>
              Complex dashboards should not need a manual. I choose the right visualization, surface the insight, and guide the next action — zero training required.
            </p>
            <div className="vibe-tags" style={{ marginTop: 20 }}>
              {['Data Visualization', 'Narrative UX', 'Insight Design', 'Zero-Training Onboarding'].map((tag) => (
                <span className="vibe-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <DataStoryChart />
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Impact */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="eyebrow">Impact</p>
          <h2>Outcomes across domains</h2>
          <div className="impact-grid">
            {[
              { value: '60%', label: 'Reduction in security triage time', context: 'OPSWAT' },
              { value: '55%', label: 'Cut in healthcare data entry errors', context: 'Hologic' },
              { value: '40%', label: 'Faster workflow setup for new admins', context: 'ServiceNow' },
              { value: '15+', label: 'Product teams aligned under one design system', context: 'ServiceNow' },
            ].map((item, i) => (
              <motion.div
                className="impact-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="impact-value">{item.value}</span>
                <span className="impact-label">{item.label}</span>
                <span className="impact-context">{item.context}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
