import React from 'react';
import Image from 'next/image';

export function Philosophy() {
  return (
    <section className="philosophy" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
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
          <p className="kicker">Who We Are</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.25 }}>
            Evidence over instinct.<br />Craft over noise.
          </h2>

          <div className="phil-body phil-text" style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p>
              TPR Communications was founded on a simple conviction: that communication works best when it is built on evidence, not instinct. We bring together researchers, strategists, media professionals, and creative producers under one roof, so that every narrative we build for a client is grounded in insight and delivered with precision.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our name stands for a promise — <strong style={{ color: 'var(--gold)', fontWeight: 700 }}>Trust, Purpose, Reputation</strong> — the three outcomes every engagement is designed to deliver. We do not chase headlines for their own sake. We build communication programmes that are defensible under scrutiny, consistent across platforms, and aligned to the long-term interests of the organisations and individuals we represent.
            </p>
            <p style={{ marginTop: '16px' }}>
              From boardrooms to newsrooms, from public institutions to political campaigns, our teams operate with the same discipline: understand the landscape first, then design the message, then deliver it with craft.
            </p>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px 18px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', fontWeight: 700, display: 'block' }}>TRUST</span>
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>Evidence-Based Defense</span>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px 18px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', fontWeight: 700, display: 'block' }}>PURPOSE</span>
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>Strategic Alignment</span>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px 18px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', fontWeight: 700, display: 'block' }}>REPUTATION</span>
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>Protected Legacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
