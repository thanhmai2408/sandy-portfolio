export default function App() {
  return (
    <div className="site">
      <nav className="nav">
        <span className="nav-logo">Sandy</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p className="eyebrow">Product Designer · 8 Years Experience</p>
        <h1>Hi, I'm Sandy.<br />I design products<br /><span className="accent">people love to use.</span></h1>
        <p className="hero-sub">
          I craft thoughtful digital experiences — from early research and strategy
          through to polished, ship-ready interfaces.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn">View my work</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="section-inner about-grid">
          <div className="about-text">
            <p className="eyebrow">About me</p>
            <h2>Design that starts with people</h2>
            <p className="body-text">
              With 8 years in product design, I've worked across early-stage startups
              and scaled teams — leading design for consumer apps, SaaS dashboards,
              and design systems. I believe great design is invisible: it just works.
            </p>
            <p className="body-text">
              Outside of screens I'm into ceramics, long hikes, and strong coffee.
            </p>
          </div>
          <div className="about-stats">
            {[
              { num: '8+', label: 'Years experience' },
              { num: '30+', label: 'Products shipped' },
              { num: '5', label: 'Design systems built' },
            ].map(s => (
              <div className="stat-card" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <div className="section-inner">
          <p className="eyebrow">Selected work</p>
          <h2>Recent projects</h2>
          <div className="projects-grid">
            {[
              { title: 'Fintech Dashboard', tag: 'Product Design · 2024', desc: 'End-to-end redesign of a financial analytics platform used by 50k+ users.' },
              { title: 'Mobile Onboarding', tag: 'UX Research · 2023', desc: 'Reduced drop-off by 40% through research-led onboarding flow redesign.' },
              { title: 'Design System', tag: 'Systems Design · 2023', desc: 'Built a scalable component library adopted across 4 product teams.' },
            ].map(p => (
              <div className="project-card" key={p.title}>
                <div className="project-thumb" />
                <div className="project-meta">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a href="#" className="project-link">View case study →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt" id="skills">
        <div className="section-inner">
          <p className="eyebrow">What I bring</p>
          <h2>Skills & tools</h2>
          <div className="skills-grid">
            {[
              { area: 'Design', items: ['Product Strategy', 'UX Research', 'Interaction Design', 'Visual Design', 'Prototyping'] },
              { area: 'Tools', items: ['Figma', 'FigJam', 'Principle', 'Framer', 'Maze'] },
              { area: 'Collaboration', items: ['Design Systems', 'Handoff', 'User Testing', 'Stakeholder Comms', 'Agile'] },
            ].map(g => (
              <div className="skill-group" key={g.area}>
                <h4>{g.area}</h4>
                <ul>
                  {g.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="section-inner contact-inner">
          <p className="eyebrow">Let's work together</p>
          <h2>Got a project in mind?</h2>
          <p className="body-text">
            I'm currently open to new opportunities — freelance, contract, or full-time.
            Drop me a line and let's chat.
          </p>
          <a href="mailto:sandy@example.com" className="btn">sandy@example.com</a>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
            <a href="#">Read.cv</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <small>© 2026 Sandy · Designed & built with care</small>
      </footer>
    </div>
  )
}
