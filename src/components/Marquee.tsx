import React from 'react';

export function Marquee() {
  const row1 = [
    'Corporate Communication',
    'Reputation Management',
    'Media Relations',
    'Crisis Communication',
    'Investor Relations',
    'Public Affairs',
  ];

  const row2 = [
    'BFSI & Capital Markets',
    'Technology & Startups',
    'Real Estate & Infrastructure',
    'Healthcare & Pharma',
    'Energy Transition',
    'Consumer Brands',
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-track">
          {row1.map((item, index) => (
            <span key={`r1a-${index}`}>{item}</span>
          ))}
          {row1.map((item, index) => (
            <span key={`r1b-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track reverse">
          {row2.map((item, index) => (
            <span key={`r2a-${index}`}>{item}</span>
          ))}
          {row2.map((item, index) => (
            <span key={`r2b-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
