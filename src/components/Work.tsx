'use client';

import React, { useState } from 'react';

interface WorkItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  deliverables: string[];
  executiveQuote: string;
}

const workData: WorkItem[] = [
  {
    id: 'boardroom',
    image: '/assets/boardroom.png',
    tag: 'Boardroom Counsel',
    title: 'Corporate Strategy & M&A Governance',
    description: 'Advising cross-border executive teams through sensitive merger disclosures, shareholder communications, and regulatory scrutiny.',
    metric: 'Over $2.4B Crisis Value Defended',
    deliverables: [
      'Regulatory Filing Narrative Strategy',
      'Shareholder Advisory & Earnings Statements',
      'Crisis Simulation & Leadership Prep Desk',
    ],
    executiveQuote: '“Precision in disclosures kept institutional confidence steady throughout the cross-border merger.”',
  },
  {
    id: 'newsroom',
    image: '/assets/newsroom.png',
    tag: 'Newsroom Authority',
    title: 'Tier-1 Global Media & Press Desk',
    description: 'Securing front-page editorial features and strategic executive commentary across global tier-1 financial publications.',
    metric: 'Featured in FT, WSJ, ET & Bloomberg',
    deliverables: [
      'Editorial Pitching & Exclusive Wire Access',
      'C-Suite Media Relations Desk',
      'Thought Leadership Op-Ed Series',
    ],
    executiveQuote: '“Our story landed on the front page of the Wall Street Journal before market opening.”',
  },
  {
    id: 'publicsq',
    image: '/assets/digital.png',
    tag: 'Public Square',
    title: 'Platforms, Feeds & Digital Brand Voice',
    description: 'Building multi-platform thought leadership and rapid-response digital communications for high-growth tech pioneers.',
    metric: '120M+ Organic Impressions',
    deliverables: [
      'Multi-Channel Executive Positioning',
      'Real-Time Brand Sentiment Analysis',
      'Viral Product Announcement Strategy',
    ],
    executiveQuote: '“Transformed our executive LinkedIn profiles into a high-converting industry publication.”',
  },
  {
    id: 'policy',
    image: '/assets/policy.png',
    tag: 'Policy Table',
    title: 'Government & Public Affairs Desk',
    description: 'Navigating complex policy shifts and institutional dialogues to foster long-term public trust and regulatory clarity.',
    metric: 'Trust Restored Across 5 Global Markets',
    deliverables: [
      'Policy Briefing & Stakeholder Mapping',
      'Regulatory Change Communication',
      'ESG & Public Trust Advisory',
    ],
    executiveQuote: '“Established our leadership position during crucial legislative deliberations in Europe and Asia.”',
  },
];

export function Work() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Where It Lands</p>
            <h2>The rooms and industries our counsel travels through.</h2>
          </div>
          <p className="sub">
            Click any card below to expand its dedicated strategic deliverables drawer.
          </p>
        </div>
        <div className="work-grid-masonry reveal">
          {workData.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                className={`work-card-large ${isExpanded ? 'expanded' : ''} reveal-delay-${idx + 1}`}
                key={item.id}
                onClick={(e) => toggleExpand(e, item.id)}
              >
                {/* PHOTO HEADER */}
                <div className="work-card-top-photo">
                  <div className="duotone">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="work-info-overlay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p className="tag">{item.tag}</p>
                      <div className="work-expand-indicator" style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '11px',
                        color: 'var(--gold)',
                        background: 'rgba(15, 23, 34, 0.88)',
                        border: '1px solid var(--border-color)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: 600,
                        transition: 'transform 0.3s ease'
                      }}>
                        {isExpanded ? '▲ Collapse' : '▼ Click to Expand'}
                      </div>
                    </div>

                    <h3>{item.title}</h3>
                    <p className="desc">{item.description}</p>
                    <div className="work-metric-pill">• {item.metric}</div>
                  </div>
                </div>

                {/* SINGLE ITEM ACCORDION DRAWER */}
                <div className="work-drawer-container">
                  <div className="work-drawer-content">
                    <div className="work-drawer-inner">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p className="tag">Strategic Advisory Scope</p>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text-muted)' }}>▲ Click to Close</span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>

                      <div className="work-drawer-deliverables">
                        {item.deliverables.map((del, dIdx) => (
                          <div className="item" key={dIdx}>
                            <span className="dot"></span>
                            {del}
                          </div>
                        ))}
                      </div>

                      <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '13.5px' }}>
                        {item.executiveQuote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
