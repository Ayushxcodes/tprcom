import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ marginBottom: '16px' }}>
              <Image
                src="/Logofooter.png"
                alt="TPR Communications"
                width={220}
                height={56}
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p>
              A strategic public relations and corporate communications agency, headquartered in Delhi NCR, India. Built for market leaders, listed entities, and growth visionaries.
            </p>
          </div>

          <div className="footer-col">
            <p className="label">Navigate</p>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#sectors">Sectors</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#leadership">About</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="label">Practices</p>
            <ul>
              <li><a href="#services">Media Relations</a></li>
              <li><a href="#services">Crisis Management</a></li>
              <li><a href="#services">Investor Relations</a></li>
              <li><a href="#services">Public Affairs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="label">Contact</p>
            <ul>
              <li><a href="mailto:official@tprcommunications.com">official@tprcommunications.com</a></li>
              <li><a href="tel:+918796564094">+91 87965 64094</a></li>
              <li>Cloud 9 Vaishali, S1 Tower, Office no. 425, Delhi NCR. Pin - 201010</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 TPR Communications. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            STRATEGIC PR &amp; CORPORATE COMMUNICATIONS
          </span>
        </div>
      </div>
    </footer>
  );
}
