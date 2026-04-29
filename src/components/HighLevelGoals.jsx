import { motion } from 'framer-motion'

const goals = [
  {
    caption: 'Shrink time-to-publish from 40+ min to 11 min',
    placeholder: 1,
  },
  {
    caption: 'Cut workflow misconfiguration by 73%',
    placeholder: 2,
  },
  {
    caption: 'Unify 500+ security analysts on one view',
    placeholder: 3,
  },
]

export default function HighLevelGoals() {
  return (
    <motion.section
      className="goals-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
    >
      <div className="goals-section-inner">
        <h2 className="goals-title">High level goals</h2>
        <div className="goals-grid">
          {goals.map((g, i) => (
            <div className="goal-card" key={i}>
              <div className="goal-placeholder">{g.placeholder}</div>
              <span className="goal-caption">{g.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
