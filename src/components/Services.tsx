'use client';

import React from 'react';
import { Icon, IconName } from './Icons';
import { useContent } from '@/context/ContentContext';

export function Services() {
  const { content } = useContent();
  const servicesData = content.services;
  const items = (servicesData.items || []).map((s) => ({
    ...s,
    icon: (s.icon || 'newspaper') as IconName,
  }));

  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>{servicesData.kicker}</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'var(--serif)', fontWeight: 800 }}>
              {servicesData.title}
            </h2>
          </div>
          <p className="sub" style={{ fontSize: '17px' }}>
            {servicesData.sub}
          </p>
        </div>

        <div className="services-clean-grid reveal">
          {items.map((service, idx) => (
            <div className="service-clean-card" key={`srv-${idx}`}>
              <div className="card-top">
                <span className="card-num">{service.num}</span>
                <div className="card-icon">
                  <Icon name={service.icon} style={{ width: '20px', height: '20px' }} />
                </div>
              </div>

              <div className="card-mid">
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65 }}>{service.description}</p>
              </div>

              <div className="tags-row" style={{ marginTop: '16px' }}>
                {(service.tags || []).map((tag, tIdx) => (
                  <span className="clean-tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
