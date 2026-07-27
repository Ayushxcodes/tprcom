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
    expertise: 'Former senior communications strategist with 18+ years advising top corporate boards.',
  },
  {
    image: '/member2.jpeg',
    name: 'Research & Strategy Team',
    role: 'Strategic Counsel Desk',
    expertise: 'Specializing in evidence-based corporate narratives, reputation defense, and political advisory.',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="leadership" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Leadership</p>
            <h2>A senior team, close to every account.</h2>
          </div>
          <p className="sub">
            No layers between strategy and execution — the people who plan the work are the people who stay on it.
          </p>
        </div>
        
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '36px'
          }}
        >
          {leaders.map((leader, idx) => (
            <div
              className={`lead-photo-card reveal-delay-${idx + 1}`}
              key={idx}
              style={{
                width: '100%',
                maxWidth: '300px',
                aspectRatio: '4/5',
                padding: '20px',
                borderRadius: '14px'
              }}
            >
              <div className="photo">
                <img src={leader.image} alt={leader.name} />
              </div>
              <div className="info">
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{leader.name}</h3>
                <p className="title" style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '2px' }}>{leader.role}</p>
                <p className="exp" style={{ fontSize: '12.5px', marginTop: '6px', lineHeight: 1.5 }}>{leader.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
