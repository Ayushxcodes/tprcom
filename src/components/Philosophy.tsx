import React from 'react';

export function Philosophy() {
  return (
    <section className="philosophy">
      <div className="wrap phil-grid">
        <div className="phil-photo-wrap reveal">
          <div className="phil-photo duotone">
            <img src="https://picsum.photos/seed/tpr-phil-2026/900/1100" alt="TPR Communications Counsel" />
          </div>
          <div className="phil-photo-badge">
            <p className="badge-title">Counsel Discipline</p>
            <p className="badge-quote">&ldquo;Sitting close enough to strategy to know what&apos;s actually at stake.&rdquo;</p>
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="kicker">Our Philosophy</p>
          <p className="phil-quote">
            &ldquo;Reputation is not declared by a brand. It is decided, <strong>sentence by sentence</strong>, by everyone else.&rdquo;
          </p>

          <div className="phil-pillars">
            <div className="pillar-pill">
              <span>01</span> Truth Over Spin
            </div>
            <div className="pillar-pill">
              <span>02</span> Proactive Narrative
            </div>
            <div className="pillar-pill">
              <span>03</span> Newsroom Fluency
            </div>
          </div>

          <div className="phil-body phil-text">
            <p>
              Every organisation communicates whether it intends to or not — through what it says, what it withholds, and what it does under pressure. At TPR Communication, we treat that as the whole discipline of public relations: <strong style={{ color: 'var(--orange-dark)', fontWeight: 700 }}>shaping how a brand is understood, not just how it is announced.</strong>
            </p>
            <p>
              We work as counsel first and executors second — sitting close enough to strategy to know what&apos;s actually at stake, and close enough to the newsroom, the timeline, and the comment section to know how it will land. The standard stays the same: <strong style={{ color: 'var(--orange)', fontWeight: 700 }}>say the true thing, say it clearly, and say it before someone else says it for you.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
