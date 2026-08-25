'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';

export function Philosophy() {
  const { content } = useContent();
  const phil = content.philosophy;

  return (
    <section id="philosophy" className="philosophy" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div className="wrap phil-grid">
        <div className="phil-photo-wrap reveal">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
            <Image
              src={phil.image || '/aboutus.png'}
              alt="TPR Communications — Who We Are"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>{phil.kicker}</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontFamily: 'var(--serif)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.2, whiteSpace: 'pre-line' }}>
            {phil.title}
          </h2>

          <div className="phil-body phil-text" style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
            <p>{phil.paragraph1}</p>
            <p style={{ marginTop: '16px' }}>{phil.paragraph2}</p>
            <p style={{ marginTop: '16px', fontWeight: 700, color: 'var(--gold)' }}>
              {phil.highlightText}
            </p>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {(phil.pills || ['TRUST', 'PURPOSE', 'REPUTATION']).map((pill, idx) => (
              <div className="tpr-pill" style={{ padding: '14px 26px' }} key={idx}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--gold)', fontWeight: 900, letterSpacing: '0.15em' }}>
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
