'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';

export function Footer() {
  const { content } = useContent();
  const footerData = content.footer;
  const contactData = content.contact;

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
            <p>{footerData.tagline}</p>
          </div>

          <div className="footer-col">
            <p className="label">Navigate</p>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#sectors">Sectors</a></li>
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
              <li><a href={`mailto:${contactData.email}`}>{contactData.email}</a></li>
              <li><a href={`tel:${contactData.phone.replace(/\s+/g, '')}`}>{contactData.phone}</a></li>
              <li>{contactData.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footerData.copyright}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            STRATEGIC PR &amp; CORPORATE COMMUNICATIONS
          </span>
        </div>
      </div>
    </footer>
  );
}
