import { motion } from 'framer-motion'
import { aboutStats, skills } from '../data/projects'
import { Zap, Palette, Terminal, Coffee, Mountain, Layers } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">About</p>
            <h1>
              I design the system,<br />
              then I <span className="accent">vibe-code the prototype</span>.
            </h1>
            <p className="hero-sub" style={{ maxWidth: 620 }}>
              Senior product designer with 7 years in enterprise B2B, healthcare,
              and cybersecurity. Grounded in HTML, CSS, and React, I use design
              thinking to untangle complex workflows — then vibe-code working
              prototypes to validate ideas and align teams. A prototype in their
              hands beats a deck every time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow">The approach</p>
              <h2>Designer + Engineer</h2>
              <p className="body-text">
                I don't hand off static mockups and hope engineers read the
                annotations. I vibe-code the interaction, animate the transition,
                and ship the component. Rapid prototyping in code — grounded in
                my HTML, CSS, and React foundation — is my default mode of design
                communication.
              </p>
              <p className="body-text">
                This matters most in complex systems. When you are designing a
                security triage dashboard or a healthcare scheduling workflow,
                static screens lie. You need to feel the latency, test the error
                state, and validate the density. I build so I can validate.
              </p>
            </motion.div>

            <motion.div
              className="about-stats about-stats-alt"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {aboutStats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">What I bring</p>
          <h2>Skills & tools</h2>
          <div className="skills-grid">
            {skills.map((g, i) => (
              <motion.div
                className="skill-group"
                key={g.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="skill-group-header">
                  {g.area === 'Design' && <Palette size={18} />}
                  {g.area === 'Engineering' && <Terminal size={18} />}
                  {g.area === 'Tools' && <Layers size={18} />}
                  <h4>{g.area}</h4>
                </div>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <p className="eyebrow">Beyond work</p>
          <h2>When I am not designing</h2>
          <div className="about-personal">
            {[
              { icon: Mountain, label: 'Hiking', desc: 'Long trails, early starts, strong coffee at the summit.' },
              { icon: Coffee, label: 'Ceramics', desc: 'Hand-building pottery. The constraint of clay teaches patience.' },
              { icon: Zap, label: 'Vibe Coding', desc: 'Experimenting with generative UI, motion, and interactive prototypes.' },
            ].map((item, i) => (
              <motion.div
                className="personal-card"
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon size={20} />
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
