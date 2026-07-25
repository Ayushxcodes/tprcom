import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text">
              <span className="top">TPR Communication</span>
            </span>
            <p>
              A strategic public relations and corporate communications agency, headquartered in Gurugram, India.
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
            <p className="label">Services</p>
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
              <li><a href="mailto:hello@tprcommunication.com">hello@tprcommunication.com</a></li>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li>Gurugram, Haryana, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TPR Communication. All rights reserved.</span>
          <span>Strategic PR &amp; Corporate Communications</span>
        </div>
      </div>
    </footer>
  );
}
