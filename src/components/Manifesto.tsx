'use client';

import React from 'react';

interface LeaderItem {
  image: string;
  name: string;
  role: string;
  expertise: string;
}

const leaders: LeaderItem[] = [
  {
    image: '/member1.jpeg',
    name: 'Tarun Purwaney',
    role: 'Founder & CEO',
    expertise: 'Former senior communications strategist with 18+ years advising Fortune 500 boards.',
  },
  {
    image: '/member2.jpeg',
    name: 'Research & Strategy Team',
    role: 'Strategic Counsel Desk',
    expertise: 'Specializing in evidence-based corporate narratives, reputation defense, and political advisory.',
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="manifesto-team-section" style={{ background: 'var(--navy-dark)', padding: '100px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', color: '#FFFFFF' }}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* LEFT COLUMN: BIG PERCEPTION QUOTE & PHILOSOPHY */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="kicker" style={{ color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '11px', fontWeight: 700, marginBottom: '14px' }}>
              ● OUR GUIDING MANIFESTO
            </p>
            
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontFamily: 'var(--serif)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '24px' }}>
              Our Team
            </h2>

            <blockquote style={{
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              color: 'var(--gold)',
              lineHeight: 1.5,
              borderLeft: '3px solid var(--gold)',
              paddingLeft: '24px',
              margin: '0 0 24px 0'
            }}>
              &ldquo;Perception is not an accident. It is authored, defended, and earned — one sentence, one story, one relationship at a time.&rdquo;
            </blockquote>

            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              No layers between strategy and execution — the people who plan the work are the people who stay on it. Every engagement receives direct, senior-level counsel.
            </p>
          </div>

          {/* RIGHT COLUMN: TEAM MEMBER CARDS */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="lead-photo-card"
                style={{
                  flex: '1 1 240px',
                  maxWidth: '270px',
                  aspectRatio: '4/5',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <div className="photo" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05) brightness(0.85)', transition: 'transform 0.6s ease' }}
                  />
                </div>

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(5,14,26,0.95) 100%)', zIndex: 1 }} />

                <div className="info" style={{ position: 'relative', zIndex: 2, color: '#FFFFFF' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>{leader.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 600, marginTop: '2px' }}>{leader.role}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginTop: '4px', lineHeight: 1.4 }}>{leader.expertise}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
