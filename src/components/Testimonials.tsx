'use client';

import React, { useState } from 'react';

interface TestimonialItem {
  id: string;
  avatar: string;
  quote: string;
  author: string;
  role: string;
  org: string;
  category: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    quote: 'TPR Communications handled our cross-border REIT flotation with extraordinary precision. Their research-led methodology ensured complete alignment across institutional investors and top financial desks.',
    author: 'Vikramaditya Sharma',
    role: 'Managing Director',
    org: 'Global Capital Infrastructure Fund',
    category: 'BFSI & CAPITAL MARKETS',
    rating: 5
  },
  {
    id: 't2',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    quote: 'When navigating complex regulatory news and enterprise positioning, TPR is our most trusted counsel. Their newsroom-grade media fluency delivered immediate clarity and market leadership.',
    author: 'Ananya Deshmukh',
    role: 'Chief Executive Officer',
    org: 'Nexus Enterprise SaaS Platform',
    category: 'TECHNOLOGY & SAAS',
    rating: 5
  },
  {
    id: 't3',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    quote: 'TPR does not chase cheap headlines — they defend reputation. Their crisis advisory team operated with unmatched speed and rigor, preserving market confidence during critical disclosures.',
    author: 'Rajesh Nair',
    role: 'Head of Corporate Affairs',
    org: 'Apex Financial Services Group',
    category: 'REPUTATION DEFENSE',
    rating: 5
  }
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="testimonials" className="testimonials-section" style={{ background: 'var(--bg-secondary)', padding: '100px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="wrap reveal">
        <div className="section-head" style={{ marginBottom: '48px' }}>
          <div>
            <p className="kicker">Client Endorsements</p>
            <h2>Trusted by Boardrooms & Industry Leaders.</h2>
          </div>
          <p className="sub">
            What chairpersons, CEOs, and corporate affairs directors say about our evidence-based counsel.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {testimonialsData.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={item.id}
                className="sector-clean-card"
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  background: 'var(--bg-card)',
                  border: isActive ? '1.5px solid var(--gold)' : '1px solid var(--border-color)',
                  borderRadius: '18px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isActive ? '0 16px 40px rgba(184, 153, 94, 0.18)' : '0 6px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.35s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10.5px',
                      color: 'var(--gold)',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      letterSpacing: '0.12em'
                    }}>
                      {item.category}
                    </span>

                    {/* GOLD RATING STARS */}
                    <div style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '2px' }}>
                      {'★'.repeat(item.rating)}
                    </div>
                  </div>

                  <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '28px' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* AUTHOR WITH REAL CLIENT AVATAR */}
                <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    position: 'relative',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 4px 12px rgba(184, 153, 94, 0.2)',
                    flexShrink: 0
                  }}>
                    <img
                      src={item.avatar}
                      alt={item.author}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.author}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--gold)', fontWeight: 600, marginTop: '2px' }}>
                      {item.role}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '1px' }}>
                      {item.org}
                    </p>
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
