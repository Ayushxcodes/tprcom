'use client';

import React, { useState } from 'react';

export function Contact() {
  const [showNote, setShowNote] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNote(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => {
      setShowNote(false);
    }, 6000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <p className="kicker">Get In Touch</p>
          <h2>Let&apos;s shape the story before someone else tells it for you.</h2>
          <p className="lede">
            Tell us what you&apos;re building, defending, or launching — a member of our senior leadership team will respond within one business day.
          </p>

          <div className="studio-photo-card">
            <img src="https://picsum.photos/seed/tpr-hq-studio/800/450" alt="Gurugram Studio Headquarters" />
            <div className="overlay-pill">● GURUGRAM HEADQUARTERS &amp; MEDIA DESK</div>
          </div>

          <div className="contact-detail">
            <p className="label">Studio Location</p>
            <p className="value">Gurugram, Haryana, India</p>
          </div>
          <div className="contact-detail">
            <p className="label">Direct Inquiry</p>
            <p className="value">
              <a href="mailto:hello@tprcommunication.com">hello@tprcommunication.com</a>
            </p>
          </div>
          <div className="contact-detail">
            <p className="label">Telephone</p>
            <p className="value">
              <a href="tel:+910000000000">+91 00000 00000</a>
            </p>
          </div>

          <div className="social-row">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM.24 8h4.5V23H.24V8zM8.5 8h4.31v2.05h.06c.6-1.14 2.07-2.35 4.26-2.35 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23H8.5V8z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.6 8.7L23.5 22h-7l-5.5-7.2L4.6 22H1.5l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .24 2.4.4a4.9 4.9 0 011.8 1.15 4.9 4.9 0 011.15 1.8c.16.4.34 1.2.4 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.24 2-.4 2.4a4.9 4.9 0 01-1.15 1.8 4.9 4.9 0 01-1.8 1.15c-.4.16-1.2.34-2.4.4-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.24-2.4-.4a4.9 4.9 0 01-1.8-1.15 4.9 4.9 0 01-1.15-1.8c-.16-.4-.34-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.24-2 .4-2.4a4.9 4.9 0 011.15-1.8A4.9 4.9 0 015.6 2.75c.4-.16 1.2-.34 2.4-.4C9.3 2.2 9.7 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.77.07-.98.05-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86C3.06 8.42 3.05 8.79 3.05 12s0 3.58.07 4.83c.05.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.25.06 1.62.07 4.78.07s3.52 0 4.78-.07c.98-.05 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.25.07-1.62.07-4.83s0-3.58-.07-4.83c-.05-.98-.2-1.5-.34-1.86a2.9 2.9 0 00-.75-1.15 2.9 2.9 0 00-1.15-.75c-.36-.14-.88-.3-1.86-.34C15.52 4 15.15 4 12 4zm0 3.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm5.3-1.98a.98.98 0 11-1.96 0 .98.98 0 011.96 0z" />
              </svg>
            </a>
          </div>
        </div>

        <form id="contactForm" className="reveal reveal-delay-1" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Apex Global"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="s.jenkins@apexglobal.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">How can we support your brand?</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your strategic communications brief, upcoming announcement, or crisis counsel needs..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="submit-row">
            <button type="submit" className="btn btn-primary">
              Send Message
              <svg className="icon" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <span className={`form-note ${showNote ? 'show' : ''}`} id="formNote">
              ✓ Thank you — a member of our counsel team will reach out within one business day.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
