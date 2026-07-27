import React from 'react';

const politicalDeliverables = [
  {
    tag: 'STRATEGIC DISCIPLINE',
    title: 'Communication',
    desc: 'End-to-end strategic communication planning and message discipline across every stakeholder group, from party workers to national media.'
  },
  {
    tag: 'EVIDENCE & ANALYTICS',
    title: 'Research',
    desc: 'Ground-level and academic research into voter sentiment, media landscape, opposition positioning, and issue mapping to inform every decision.'
  },
  {
    tag: 'DISTINCTIVE FRAMEWORK',
    title: 'Creative Narrative',
    desc: 'A distinctive, research-backed political narrative and messaging framework that stays consistent across speeches, campaigns, and moments of crisis.'
  },
  {
    tag: 'IN-HOUSE MEDIA DESK',
    title: 'Audio-Visual Production',
    desc: 'In-house production of films, campaign videos, social content, and visual assets that bring the narrative to life.'
  },
  {
    tag: 'TARGETED AMPLIFICATION',
    title: 'Digital Amplification',
    desc: 'Targeted digital strategy and platform-specific amplification to ensure the narrative reaches the right audience at the right moment, at scale.'
  }
];

export function PoliticalComms() {
  return (
    <section id="political-comms" style={{ background: 'var(--bg-dark)', color: '#FFFFFF', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ marginBottom: '48px' }}>
          <div>
            <p className="kicker" style={{ color: 'var(--gold)' }}>Special Focus Practice</p>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Political Communication
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--gold)', fontStyle: 'italic', marginTop: '8px' }}>
              Where research meets narrative, and narrative meets the electorate.
            </p>
          </div>
          <p className="sub" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Political communication demands speed without sacrificing accuracy, consistency across a fragmented media landscape, and a narrative that can withstand scrutiny.
          </p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {politicalDeliverables.map((item, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(184, 153, 94, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.35s ease'
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '12px'
                }}>{item.tag}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '12px', fontFamily: 'var(--mono)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                <span>INTEGRATED POLITICAL DESK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
