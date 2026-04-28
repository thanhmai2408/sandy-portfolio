import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowLeft, ArrowRight, Target, Search, PenTool, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react'

const phaseIcons = {
  Research: Search,
  Synthesis: Target,
  Design: PenTool,
  Validation: CheckCircle,
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section">
        <div className="section-inner">
          <h1>Project not found</h1>
          <Link to="/work" className="btn">Back to work</Link>
        </div>
      </section>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* Case Study Hero */}
      <section className="case-hero">
        <div className="case-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="project-tag">{project.tag}</span>
            <h1>{project.title}</h1>
            <p className="case-hero-sub">{project.shortDesc}</p>

            <div className="case-meta-row">
              <div className="case-meta">
                <span className="case-meta-label">Role</span>
                <span className="case-meta-value">{project.role}</span>
              </div>
              <div className="case-meta">
                <span className="case-meta-label">Team</span>
                <span className="case-meta-value">{project.team}</span>
              </div>
              <div className="case-meta">
                <span className="case-meta-label">Domain</span>
                <span className="case-meta-value">{project.domain}</span>
              </div>
              <div className="case-meta">
                <span className="case-meta-label">Timeline</span>
                <span className="case-meta-value">{project.timeline}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="case-metrics">
        <div className="case-metrics-inner">
          {project.heroMetrics.map((m, i) => (
            <motion.div
              className="case-metric"
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className="case-metric-value">{m.value}</span>
              <span className="case-metric-label">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="case-body">
        <div className="case-body-inner">
          {/* Problem */}
          <motion.section
            className="case-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="case-section-header">
              <Target size={20} />
              <h2>Problem</h2>
            </div>
            <p className="case-section-text">{project.problem}</p>
          </motion.section>

          {/* Process */}
          <motion.section
            className="case-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="case-section-header">
              <PenTool size={20} />
              <h2>Process</h2>
            </div>
            <div className="process-steps">
              {project.process.map((step, i) => {
                const Icon = phaseIcons[step.phase] || Lightbulb
                return (
                  <div className="process-step" key={i}>
                    <div className="process-step-icon">
                      <Icon size={18} />
                    </div>
                    <div className="process-step-body">
                      <h3>{step.phase}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            className="case-section case-section-solution"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="case-section-header">
              <Lightbulb size={20} />
              <h2>Solution</h2>
            </div>
            <p className="case-section-text">{project.solution}</p>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            className="case-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="case-section-header">
              <TrendingUp size={20} />
              <h2>Outcomes</h2>
            </div>
            <ul className="outcome-list">
              {project.outcomes.map((o, i) => (
                <li key={i}>
                  <CheckCircle size={16} />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Reflection */}
          <motion.section
            className="case-section case-section-reflection"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="case-section-header">
              <Lightbulb size={20} />
              <h2>Reflection</h2>
            </div>
            <p className="case-section-text">{project.reflection}</p>
          </motion.section>
        </div>
      </div>

      {/* Prev / Next */}
      <section className="case-nav">
        <Link to={`/work/${prev.slug}`} className="case-nav-link">
          <ArrowLeft size={16} />
          <div>
            <span className="case-nav-label">Previous</span>
            <span className="case-nav-title">{prev.title}</span>
          </div>
        </Link>
        <Link to={`/work/${next.slug}`} className="case-nav-link case-nav-next">
          <div>
            <span className="case-nav-label">Next</span>
            <span className="case-nav-title">{next.title}</span>
          </div>
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
