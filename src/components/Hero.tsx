import React from 'react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://picsum.photos/seed/tpr-hero-2026/1800/1100" alt="" role="presentation" />
      </div>
      <div className="grid-bg-overlay" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="reveal">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>24/7 Strategic Crisis &amp; Media Command</span>
          </div>

          <p className="kicker">TPR Communication — Est. Gurugram</p>
          <h1>
            In the business of being <em>believed.</em>
          </h1>
          <p className="lede">
            TPR Communication is a corporate public relations and strategic communications agency. We help ambitious brands earn trust, command attention, and hold their ground when the story matters most.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Conversation
              <svg className="icon" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost">Explore Our Practice</a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 hero-visual-container">
          {/* CONTINUOUS PR STRATEGY PATHWAY SYSTEM */}
          <div className="hero-pathway-wrapper">
            <div className="pathway-flow-container">
              {/* WAYPOINT 01: BRAND INPUT */}
              <div className="pathway-node">
                <div className="step-badge">01</div>
                <div className="node-info">
                  <div className="lbl">● NARRATIVE ORIGIN</div>
                  <div className="val">Ambitious Enterprise Vision</div>
                </div>
              </div>

              {/* PATHWAY CONNECTING LINE 01 TO 02 */}
              <svg className="pathway-track-svg" viewBox="0 0 300 64">
                <line x1="150" y1="0" x2="150" y2="64" className="pathway-line-glow" strokeWidth="2.5" />
                <circle cx="150" cy="32" r="5" fill="#FF6A2B">
                  <animate attributeName="cy" values="0;64" dur="1.4s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* WAYPOINT 02: TPR ENGINE */}
              <div className="pathway-node" style={{ borderColor: 'var(--orange)' }}>
                <div className="step-badge" style={{ background: 'linear-gradient(135deg, var(--orange), #FF9D71)' }}>02</div>
                <div className="node-info">
                  <div className="lbl">● TPR STRATEGIC ENGINE</div>
                  <div className="val">Media Positioning &amp; Crisis Defense</div>
                </div>
              </div>

              {/* PATHWAY CONNECTING LINE 02 TO DESTINATIONS */}
              <svg className="pathway-track-svg" viewBox="0 0 300 64">
                <path d="M150 0 L150 28 L50 28 L50 64 M150 28 L150 64 M150 28 L250 28 L250 64" className="pathway-line-glow" fill="none" strokeWidth="2.2" />
                <circle cx="150" cy="28" r="4" fill="#10B981">
                  <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* DESTINATION TERMINALS (EARN TRUST, COMMAND ATTENTION, HOLD GROUND) */}
              <div className="pathway-destinations">
                <div className="pathway-dest-card">
                  <div className="icon-ring">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="title">Earn Trust</div>
                  <div className="tag">99.4% CREDIBILITY</div>
                </div>

                <div className="pathway-dest-card">
                  <div className="icon-ring">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M11 5L6 9H2v6h4l5 4V5z" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  </div>
                  <div className="title">Command Attention</div>
                  <div className="tag">TIER-1 REACH</div>
                </div>

                <div className="pathway-dest-card">
                  <div className="icon-ring">
                    <svg className="icon" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="title">Hold Ground</div>
                  <div className="tag">CRISIS SHIELD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
