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

const linePoints = [20, 45, 35, 70, 55, 85, 60, 75]

const ACCENT = '#7c3aed'

function AnimatedBar({ index }) {
  const count = 8
  const base = 30
  const amplitude = 50
  const heights = Array.from({ length: 4 }, (_, i) => {
    const t = (index + i * 2) / count
    const wave = Math.sin(t * Math.PI * 2) * amplitude + base
    return Math.max(15, Math.min(85, Math.round(wave)))
  })

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
        delay: index * 0.15,
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

function VibeCodeWidget() {
  const lineD = `M ${linePoints.map((y, i) => `${(i / (linePoints.length - 1)) * 100} ${100 - y}`).join(' L ')}`

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
            <div className="chart-line-wrap">
              <svg viewBox="0 0 100 100" className="chart-svg">
                <motion.path
                  d={lineD}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                />
                {linePoints.map((y, i) => (
                  <motion.circle
                    key={i}
                    cx={`${(i / (linePoints.length - 1)) * 100}`}
                    cy={`${100 - y}`}
                    r="2"
                    fill={ACCENT}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                ))}
              </svg>
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

      <div className="vibe-code">
        <code>
          --color-primary: {ACCENT};<br />
          --radius-base: 10px;<br />
          --space-unit: 16px;
        </code>
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
            <h2>I do not just design — I build.</h2>
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
            <p className="eyebrow">Business & Marketing</p>
            <h2>I do not just ship features — I ship outcomes.</h2>
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
