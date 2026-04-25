import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowRight } from 'lucide-react'

export default function Work() {
  return (
    <section className="section work-page">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Work</p>
          <h1>Case studies</h1>
          <p className="hero-sub" style={{ maxWidth: 640 }}>
            Three complex domains. One consistent approach: understand the system,
            design the workflow, validate with real users, then ship.
          </p>
        </motion.div>

        <div className="work-list">
          {projects.map((p, i) => (
            <motion.article
              className="work-item"
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
            >
              <div className="work-item-visual">
                <div className="work-item-company">{p.company}</div>
              </div>
              <div className="work-item-body">
                <span className="project-tag">{p.tag}</span>
                <h2>{p.title}</h2>
                <p className="body-text">{p.shortDesc}</p>
                <div className="work-metrics">
                  {p.heroMetrics.map((m) => (
                    <div className="work-metric" key={m.label}>
                      <span className="work-metric-value">{m.value}</span>
                      <span className="work-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/work/${p.slug}`} className="project-link">
                  Read full case study <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
