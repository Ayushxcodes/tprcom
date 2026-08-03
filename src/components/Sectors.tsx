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
    image: '/assets/fmcg.jpg',
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
    description: 'Deep tech, AI platforms, enterprise SaaS, and venture-backed innovators.',
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
    description: 'Pharma leaders, hospital chains, diagnostics, doctors and health tech platforms.',
    detailedCopy: 'Highly compliant communications for medical breakthroughs, clinical trials, regulatory approvals, and patient-first reputation management.',
    caseHighlight: 'Positioned a healthcare innovator during pivotal clinical trial milestones, driving strategic global pharmaceutical partnerships.',
  },
  {
    id: 'realty',
    num: '05',
    icon: 'landmark',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'REAL ESTATE AND INFRASTRUCTURE',
    description: 'Developers, REITs, mega-infrastructure, urban, and public-funded projects.',
    detailedCopy: 'Navigating land development narratives, REIT listings, ESG compliance communications, and multi-stakeholder community sentiment.',
    caseHighlight: 'Managed strategic communications during complex regulatory proceedings, preserving market confidence and stakeholder trust.',
  },
  {
    id: 'power',
    num: '06',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    title: 'POWER AND ENERGY',
    description: 'Power, clean energy, renewable energy, Oil & Gas, and EV.',
    detailedCopy: 'Highlighting decarbonization journeys, clean energy innovation, and green financing to institutional investors and regulatory policymakers.',
    caseHighlight: 'Crafted sustainability positioning for a major solar developer prior to their international green bond flotation.',
  },
  {
    id: 'govt',
    num: '07',
    icon: 'shield',
    image: '/govt_sector.png',
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
    description: 'Lending institutions, insurers, NBFCs, private equity, capital markets, and fintech.',
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
    <section id="sectors" className="sectors" style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ display: 'block', marginBottom: '60px', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <p className="kicker" style={{ fontSize: '25px', letterSpacing: '0.32em', fontWeight: 800 }}>Sectors We Serve</p>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 66px)', fontFamily: 'var(--serif)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginTop: '12px', width: '100%', maxWidth: '100%' }}>
              Legacy, Traditional, Emerging, Sunrise &amp; Tech-Powered Sectors
            </h2>
          </div>
        </div>

        {/* SPLIT CONTAINER: LEFT SLIDESHOW + RIGHT INTERACTIVE LIST */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '48px', alignItems: 'stretch' }}>
          
          {/* LEFT SLIDESHOW CONTAINER */}
          <div
            className="sector-slideshow-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--bg-dark)',
              border: '2px solid var(--border-color)',
              minHeight: '580px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxShadow: '0 25px 60px rgba(0,0,0,0.22)'
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
                  filter: 'contrast(1.15) brightness(0.6)',
                  transition: 'opacity 0.6s ease, transform 0.8s ease',
                  animation: 'fadeInImg 0.6s ease'
                }}
              />
            </div>

            {/* DARK GRADIENT OVERLAY */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(5,14,26,0.15) 0%, rgba(5,14,26,0.95) 75%)',
              zIndex: 1
            }} />

            {/* SLIDESHOW CONTENT OVERLAY */}
            <div style={{ position: 'relative', zIndex: 2, padding: '40px 36px', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  color: 'var(--gold)',
                  background: 'rgba(15, 23, 34, 0.9)',
                  border: '1.5px solid var(--gold)',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  letterSpacing: '0.16em'
                }}>
                  SECTOR {activeSector.num} OF {sectorData.length.toString().padStart(2, '0')}
                </span>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                  color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={activeSector.icon} style={{ width: '18px', height: '18px' }} />
                </div>
              </div>

              <h3 style={{ fontSize: 'clamp(30px, 3.5vw, 42px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                {activeSector.title}
              </h3>
              <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, marginBottom: '22px', fontWeight: 400 }}>
                {activeSector.detailedCopy}
              </p>

              <div style={{
                background: 'rgba(22, 34, 49, 0.85)',
                borderLeft: '4px solid var(--gold)',
                padding: '16px 20px',
                borderRadius: '10px',
                backdropFilter: 'blur(12px)'
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.16em', display: 'block', marginBottom: '6px', fontWeight: 800 }}>
                  BENCHMARK HIGHLIGHT
                </span>
                <p style={{ fontSize: '14.5px', color: '#FFFFFF', fontStyle: 'italic', lineHeight: 1.5, fontWeight: 500 }}>
                  "{activeSector.caseHighlight}"
                </p>
              </div>

              {/* SLIDE PROGRESS INDICATOR DOTS */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '28px', alignItems: 'center' }}>
                {sectorData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    style={{
                      height: '5px',
                      width: idx === activeIndex ? '32px' : '10px',
                      borderRadius: '3px',
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
              gap: '14px'
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
                    border: isActive ? '2px solid var(--gold)' : '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '20px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 12px 30px rgba(184, 153, 94, 0.2)' : 'none',
                    transform: isActive ? 'translateX(8px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '15px',
                      fontWeight: 900,
                      color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                      letterSpacing: '0.12em'
                    }}>
                      {item.num}
                    </span>

                    <div>
                      <h4 style={{
                        fontSize: isActive ? '20px' : '18px',
                        fontWeight: 900,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        letterSpacing: '0.03em',
                        transition: 'all 0.2s ease'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                        marginTop: '4px',
                        lineHeight: 1.45
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                    transition: 'transform 0.3s ease',
                    transform: isActive ? 'translateX(5px) scale(1.15)' : 'none'
                  }}>
                    <svg style={{ width: '22px', height: '22px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
