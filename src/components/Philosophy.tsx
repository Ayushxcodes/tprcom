import React from 'react';
import Image from 'next/image';

export function Philosophy() {
  return (
    <section id="philosophy" className="philosophy" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div className="wrap phil-grid">
        <div className="phil-photo-wrap reveal">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
            <Image
              src="/aboutus.png"
              alt="TPR Communications — Who We Are"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>Who We Are</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontFamily: 'var(--serif)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.2 }}>
            Quality over Quantity.<br />Craft over noise.
          </h2>

          <div className="phil-body phil-text" style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
            <p>
              TPR Communications is a research-led, quality-driven full-service PR firm delivering strategic communications across the spectrum, helping brands to earn trust, build credibility, strengthen reputation, and stand out with purpose. Backed by academic insight and media experience, TPR Communications is committed to setting a new benchmark in client servicing.
            </p>
            <p style={{ marginTop: '16px' }}>
              TPR Stands for — <strong style={{ color: 'var(--gold)', fontWeight: 800 }}>Trust, Purpose and Reputation</strong>. We build communication programmes across platforms, aligning them with the long-term interests of the organisations and individuals we represent. We don’t chase headlines for the sake of them; we Create Memories.
            </p>
            <p style={{ marginTop: '16px', fontWeight: 700, color: 'var(--gold)' }}>
              TPR Communications is the trailblazer.
            </p>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div className="tpr-pill" style={{ padding: '14px 26px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--gold)', fontWeight: 900, letterSpacing: '0.15em' }}>TRUST</span>
            </div>
            <div className="tpr-pill" style={{ padding: '14px 26px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--gold)', fontWeight: 900, letterSpacing: '0.15em' }}>PURPOSE</span>
            </div>
            <div className="tpr-pill" style={{ padding: '14px 26px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--gold)', fontWeight: 900, letterSpacing: '0.15em' }}>REPUTATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
