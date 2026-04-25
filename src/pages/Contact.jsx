import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Code, Palette, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact-page">
      <div className="section-inner contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s build something complex.</h1>
          <p className="hero-sub" style={{ maxWidth: 560, margin: '0 auto 48px' }}>
            I am open to senior product design roles, freelance design contracts,
            and ambitious side projects. If you are working on a hard problem,
            I want to hear about it.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label>
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, the team, and the hardest design problem you are facing."
                />
              </label>
              <button type="submit" className="btn btn-full">
                <Send size={16} />
                Send message
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <CheckCircle size={48} />
              <h3>Message sent</h3>
              <p>Thanks for reaching out. I will get back to you within 48 hours.</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:sandy@example.com" className="contact-social">
            <Mail size={18} />
            <span>sandy@example.com</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social">
            <Globe size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-social">
            <Code size={18} />
            <span>GitHub</span>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="contact-social">
            <Palette size={18} />
            <span>Dribbble</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
