import React from 'react';

const whyPartnerPoints = [
  'A single, integrated team spanning research, strategy, creative, and media.',
  'A research-first methodology applied to every engagement, regardless of scale.',
  'Proven experience across crisis, capital markets, corporate, institutional, and political communication.',
  'A commitment to setting a new benchmark in client service — measured in outcomes, not outputs.'
];

export function Stats() {
  return (
    <section className="stat-banner" style={{ background: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="wrap reveal">
        <div className="section-head" style={{ marginBottom: '36px' }}>
          <div>
            <p className="kicker">Strategic Partnership</p>
            <h2>Why Partner With TPR Communications</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {whyPartnerPoints.map((point, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              padding: '24px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start'
            }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--gold)',
                background: 'var(--bg-primary)',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)'
              }}>0{idx + 1}</span>
              <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
