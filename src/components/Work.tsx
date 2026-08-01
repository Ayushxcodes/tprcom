import React from 'react';

interface WorkItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
}

const workData: WorkItem[] = [
  {
    id: 'corridors',
    image: '/assets/policy.png',
    tag: 'Policy & Governance',
    title: 'Corridors of power',
    description: 'Navigating through corridors of power, our counsel builds narratives, plugs in the missing links, and ensures the client’s interests are fully protected.',
  },
  {
    id: 'boardroom',
    image: '/assets/boardroom.png',
    tag: 'Boardroom Counsel',
    title: 'Boardrooms',
    description: 'Our seasoned Team Leaders guide the Boards on achievable, research-based communication strategies.',
  },
  {
    id: 'digital',
    image: '/assets/digital.png',
    tag: 'Public Square',
    title: 'Platforms, Feeds & Digital Brand Voice',
    description: 'The highly efficient digital diggers build multi-platform thought leadership and rapid-response digital communications across platforms.',
  },
  {
    id: 'newsroom',
    image: '/assets/newsroom.png',
    tag: 'Newsroom Authority',
    title: 'Tier 1 Global Media and Press Desk',
    description: 'Team TPR ensures impactful editorial features and strategic executive commentary across global tier-1 mainline and financial publications.',
  },
];

export function Work() {
  return (
    <section id="work" className="work" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>Where It Lands</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'var(--serif)', fontWeight: 800, lineHeight: 1.15 }}>
              The Corridors of Power, Boardrooms, the Fourth Estate and Digital Empire.
            </h2>
          </div>
          <p className="sub" style={{ fontSize: '17px', maxWidth: '720px' }}>
            The rooms, newsrooms, and digital networks through which our counsel travels.
          </p>
        </div>

        <div className="work-grid-masonry reveal" style={{ marginTop: '48px' }}>
          {workData.map((item, idx) => (
            <div
              className={`work-card-large reveal-delay-${idx + 1}`}
              key={item.id}
              style={{ cursor: 'default' }}
            >
              {/* PHOTO HEADER */}
              <div className="work-card-top-photo">
                <div className="duotone">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="work-info-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <p className="tag" style={{ fontSize: '12px', letterSpacing: '0.12em' }}>{item.tag}</p>
                  </div>

                  <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontFamily: 'var(--serif)', fontWeight: 700, marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p className="desc" style={{ fontSize: '15.5px', lineHeight: 1.6, opacity: 0.95 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
