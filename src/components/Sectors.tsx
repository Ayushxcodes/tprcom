'use client';

import React, { useState, useEffect } from 'react';
import { Icon, IconName } from './Icons';

interface SectorItem {
  id: string;
  num: string;
  icon: IconName;
  image: string;
  title: string;
  description: string;
  detailedCopy: string;
  caseHighlight: string;
}

const sectorData: SectorItem[] = [
  {
    id: 'fmcg',
    num: '01',
    icon: 'bag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    title: 'FMCG',
    description: 'Consumer packaged goods, personal care, food & beverage, and retail leaders.',
    detailedCopy: 'Driving brand recall, product launch momentum, executive thought leadership, and proactive recall defense for national and global consumer brands.',
    caseHighlight: 'Led an omnichannel product launch campaign for a flagship consumer brand, securing widespread earned coverage across tier-1 media.',
  },
  {
    id: 'tech',
    num: '02',
    icon: 'chip',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    title: 'TECHNOLOGY',
    description: 'Deeptech, AI platforms, enterprise SaaS, and venture-backed innovators.',
    detailedCopy: 'Translating complex technology architectures into high-impact market value narratives, positioning tech founders as industry visionaries.',
    caseHighlight: 'Secured exclusive launch coverage across global technology wire outlets and tier-1 national press desks within 48 hours.',
  },
  {
    id: 'lifestyle',
    num: '03',
    icon: 'pen',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    title: 'LIFESTYLE AND FASHION',
    description: 'Luxury apparel, couture labels, beauty brands, and premium lifestyle experiences.',
    detailedCopy: 'Building cultural relevance, fashion editor relationships, influencer alignment, and brand prestige across leading digital and print lifestyle titles.',
    caseHighlight: 'Orchestrated exclusive press previews for a luxury fashion house, establishing market leadership in premium fashion media.',
  },
  {
    id: 'healthcare',
    num: '04',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    title: 'HEALTHCARE',
    description: 'Pharma leaders, hospital chains, diagnostics, and healthtech platforms.',
    detailedCopy: 'Highly compliant communications for medical breakthroughs, clinical trials, regulatory approvals, and patient-first reputation management.',
    caseHighlight: 'Positioned a healthcare innovator during pivotal clinical trial milestones, driving strategic global pharmaceutical partnerships.',
  },
  {
    id: 'realty',
    num: '05',
    icon: 'landmark',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'REAL ESTATE AND INFRASTRUCTURE',
    description: 'Commercial developers, REITs, mega-infrastructure, and urban projects.',
    detailedCopy: 'Navigating land development narratives, REIT listings, ESG compliance communications, and multi-stakeholder community sentiment.',
    caseHighlight: 'Managed strategic communications during complex regulatory proceedings, preserving market confidence and stakeholder trust.',
  },
  {
    id: 'power',
    num: '06',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    title: 'POWER AND ENERGY',
    description: 'Renewable IPPs, clean energy, EV infrastructure, and transition leaders.',
    detailedCopy: 'Highlighting decarbonization journeys, clean energy innovation, and green financing to institutional investors and regulatory policymakers.',
    caseHighlight: 'Crafted sustainability positioning for a major solar developer prior to their international green bond flotation.',
  },
  {
    id: 'govt',
    num: '07',
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    title: 'GOVERNMENT AND PUBLIC SECTOR',
    description: 'Public institutions, state enterprises, civic initiatives, and policy communications.',
    detailedCopy: 'Designing policy messaging, public awareness campaigns, and defensive crisis communications for government bodies and public sector organizations.',
    caseHighlight: 'Executed a nationwide public awareness campaign for a major civic infrastructure mandate.',
  },
  {
    id: 'bfsi',
    num: '08',
    icon: 'bank',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    title: 'BFSI AND FINTECH',
    description: 'Banking institutions, NBFCs, private equity, capital markets, and fintech pioneers.',
    detailedCopy: 'Managing earnings disclosures, investor relations, regulatory filings, and market perception for top financial organizations and fintech disruptors.',
    caseHighlight: 'Orchestrated the public communication strategy for a cross-border IPO, achieving full editorial coverage across national financial dailies.',
  },
  {
    id: 'hospitality',
    num: '09',
    icon: 'compass',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    title: 'HOSPITALITY',
    description: 'Luxury hotel chains, resort destinations, fine dining groups, and travel brands.',
    detailedCopy: 'Crafting experiential storytelling, destination launches, executive culinary profiles, and crisis reputation management across luxury hospitality.',
    caseHighlight: 'Managed nationwide launch PR for a flagship luxury resort brand, driving record editorial features and guest engagement.',
  },
  {
    id: 'mining',
    num: '10',
    icon: 'crane',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    title: 'MINING AND METALS',
    description: 'Industrial metals, natural resources, mining conglomerates, and heavy industries.',
    detailedCopy: 'Communicating industrial resilience, ESG compliance benchmarks, safety protocols, and community engagement for resource industry leaders.',
    caseHighlight: 'Navigated complex environmental and community relations communications for a major industrial mining group.',
  },
];

export function Sectors() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance slideshow every 5 seconds unless user interacts
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectorData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeSector = sectorData[activeIndex];

  return (
    <section id="sectors" className="sectors" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Sectors We Serve</p>
            <h2>Deep domain literacy across complex industries.</h2>
          </div>
          <p className="sub">
            Hover or click any sector on the right to view its strategic domain intelligence and benchmark highlights.
          </p>
        </div>

        {/* SPLIT CONTAINER: LEFT SLIDESHOW + RIGHT INTERACTIVE LIST */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', marginTop: '48px', alignItems: 'stretch' }}>
          
          {/* LEFT SLIDESHOW CONTAINER */}
          <div
            className="sector-slideshow-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'var(--bg-dark)',
              border: '1px solid var(--border-color)',
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxShadow: '0 20px 50px rgba(0,0,0,0.18)'
            }}
          >
            {/* BACKGROUND SLIDESHOW IMAGE WITH SMOOTH TRANSITION */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <img
                key={activeSector.id}
                src={activeSector.image}
                alt={activeSector.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.1) brightness(0.65)',
                  transition: 'opacity 0.6s ease, transform 0.8s ease',
                  animation: 'fadeInImg 0.6s ease'
                }}
              />
            </div>

            {/* DARK GRADIENT OVERLAY */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(5,14,26,0.2) 0%, rgba(5,14,26,0.92) 80%)',
              zIndex: 1
            }} />

            {/* SLIDESHOW CONTENT OVERLAY */}
            <div style={{ position: 'relative', zIndex: 2, padding: '36px 32px', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: 'var(--gold)',
                  background: 'rgba(15, 23, 34, 0.85)',
                  border: '1px solid var(--gold)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  letterSpacing: '0.14em'
                }}>
                  SECTOR {activeSector.num} OF 08
                </span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                  color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={activeSector.icon} style={{ width: '16px', height: '16px' }} />
                </div>
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                {activeSector.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '18px' }}>
                {activeSector.detailedCopy}
              </p>

              <div style={{
                background: 'rgba(22, 34, 49, 0.75)',
                borderLeft: '3px solid var(--gold)',
                padding: '14px 16px',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.14em', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
                  BENCHMARK HIGHLIGHT
                </span>
                <p style={{ fontSize: '13px', color: '#FFFFFF', fontStyle: 'italic' }}>
                  {activeSector.caseHighlight}
                </p>
              </div>

              {/* SLIDE PROGRESS INDICATOR DOTS */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '24px', alignItems: 'center' }}>
                {sectorData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    style={{
                      height: '4px',
                      width: idx === activeIndex ? '28px' : '8px',
                      borderRadius: '2px',
                      background: idx === activeIndex ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT INTERACTIVE SECTOR LIST */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {sectorData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  style={{
                    background: isActive ? 'var(--bg-card)' : 'var(--bg-primary)',
                    border: isActive ? '1.5px solid var(--gold)' : '1px solid var(--border-color)',
                    borderRadius: '14px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 10px 25px rgba(184, 153, 94, 0.15)' : 'none',
                    transform: isActive ? 'translateX(6px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                      letterSpacing: '0.12em'
                    }}>
                      {item.num}
                    </span>

                    <div>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        transition: 'color 0.2s ease'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                    transition: 'transform 0.3s ease',
                    transform: isActive ? 'translateX(3px)' : 'none'
                  }}>
                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
