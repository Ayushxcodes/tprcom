import React from 'react';

interface StatItem {
  num: string;
  label: string;
}

const statData: StatItem[] = [
  { num: '08', label: 'Specialist Services' },
  { num: '08', label: 'Sectors Served' },
  { num: '04', label: 'Core Disciplines' },
  { num: '1 Day', label: 'Response Time' },
];

export function Stats() {
  return (
    <section className="stat-banner">
      <div className="wrap stat-grid reveal">
        {statData.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <p className="num">{stat.num}</p>
            <p className="label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
