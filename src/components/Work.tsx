'use client';

import React from 'react';
import { useContent } from '@/context/ContentContext';

export function Work() {
  const { content } = useContent();
  const workSection = content.work;
  const workData = workSection.items || [];

  return (
    <section id="work" className="work" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>{workSection.kicker}</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'var(--serif)', fontWeight: 800, lineHeight: 1.15 }}>
              {workSection.title}
            </h2>
          </div>    
        </div>

        <div className="work-grid-masonry reveal" style={{ marginTop: '48px' }}>
          {workData.map((item, idx) => (
            <div
              className={`work-card-large reveal-delay-${idx + 1}`}
              key={item.id || idx}
              style={{ cursor: 'default' }}
            >
              {/* PHOTO HEADER */}
              <div className="work-card-top-photo">
                <div className="duotone">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="work-info-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <p className="tag" style={{ fontSize: '12px', letterSpacing: '0.12em' }}>{item.tag}</p>
                  </div>

                  <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontFamily: 'var(--serif)', fontWeight: 700, marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p className="desc" style={{ fontSize: '15.5px', lineHeight: 1.6, opacity: 0.95 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
