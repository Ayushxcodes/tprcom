import React from 'react';

interface LeaderItem {
  image: string;
  name: string;
  role: string;
  expertise: string;
}

const leaders: LeaderItem[] = [
  {
    image: 'https://picsum.photos/seed/tpr-exec-1/600/800',
    name: 'Manish Patel',
    role: 'Managing Partner & CEO',
    expertise: 'Former senior news editor & corporate strategist with 18+ years advising Fortune 500 boards.',
  },
  {
    image: 'https://picsum.photos/seed/tpr-exec-2/600/800',
    name: 'Claire Sharma',
    role: 'Director, Client Strategy',
    expertise: 'Specialist in high-stakes corporate narrative, reputation defense, and market entry messaging.',
  },
  {
    image: 'https://picsum.photos/seed/tpr-exec-3/600/800',
    name: 'Mark Redford',
    role: 'SVP, Media Relations',
    expertise: 'Deep newsroom connections across national dailies, financial press, and broadcast networks.',
  },
  {
    image: 'https://picsum.photos/seed/tpr-exec-4/600/800',
    name: 'Divya Chaudhry',
    role: 'VP, Digital & Content',
    expertise: 'Architect of executive online presence, platform crisis monitoring, and multi-channel campaign PR.',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="leadership">
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
        <div className="leadership-grid reveal">
          {leaders.map((leader, idx) => (
            <div className={`lead-photo-card reveal-delay-${idx + 1}`} key={idx}>
              <div className="photo">
                <img src={leader.image} alt={leader.name} />
              </div>
              <div className="info">
                <h3>{leader.name}</h3>
                <p className="title">{leader.role}</p>
                <p className="exp">{leader.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
