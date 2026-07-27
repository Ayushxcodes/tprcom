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
    id: 'bfsi',
    num: '01',
    icon: 'bank',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    title: 'BFSI & Capital Markets',
    description: 'Listed entities, NBFCs, private equity firms, and fintech pioneers.',
    detailedCopy: 'We manage investor relations, earnings releases, regulatory disclosures, and market perception for top financial institutions. Our team maintains daily dialogues with leading financial editors and analyst networks.',
    caseHighlight: 'Orchestrated the public communication strategy for a cross-border IPO, achieving full editorial coverage across national financial dailies.',
  },
  {
    id: 'tech',
    num: '02',
    icon: 'chip',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    title: 'Technology & Enterprise SaaS',
    description: 'Deeptech, enterprise platforms, and venture-backed innovators.',
    detailedCopy: 'Translating complex tech architectures into compelling business value narratives. We position tech founders as industry visionaries across global media platforms.',
    caseHighlight: 'Secured exclusive launch coverage across global technology wire outlets and tier-1 press desks within 48 hours.',
  },
  {
    id: 'realty',
    num: '03',
    icon: 'landmark',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'Real Estate & Infrastructure',
    description: 'Commercial developers, REITS, and mega-infrastructure projects.',
    detailedCopy: 'Navigating land development narratives, REIT listings, ESG compliance communications, and community stakeholder sentiment.',
    caseHighlight: 'Managed crisis communications during complex regulatory proceedings, preserving market confidence and stakeholder trust.',
  },
  {
    id: 'health',
    num: '04',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    title: 'Healthcare & Lifesciences',
    description: 'Pharma manufacturers, hospital chains, and healthtech platforms.',
    detailedCopy: 'Highly compliant communications for medical breakthroughs, clinical trials, regulatory approvals, and patient-first reputation management.',
    caseHighlight: 'Positioned a biotech firm during pivotal trial announcements, leading to strategic global pharmaceutical partnerships.',
  },
  {
    id: 'energy',
    num: '05',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    title: 'Energy & Transition',
    description: 'Renewable IPPs, EV infrastructure, and industrial transition leaders.',
    detailedCopy: 'Highlighting decarbonization journeys, green bond issuance, and clean energy innovation to institutional investors and policymakers.',
    caseHighlight: 'Crafted sustainability positioning for a major solar developer prior to their international green bond flotation.',
  },
  {
    id: 'consumer',
    num: '06',
    icon: 'bag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    title: 'Consumer & D2C Brands',
    description: 'FMCG conglomerates, lifestyle brands, and digital retail leaders.',
    detailedCopy: 'Driving brand affinity, product launch momentum, executive thought leadership, and proactive consumer recall defense.',
    caseHighlight: 'Led an omnichannel PR campaign for a D2C brand launch, generating extensive earned reach and industry commentary.',
  },
  {
    id: 'prof',
    num: '07',
    icon: 'pen',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    title: 'Professional Services',
    description: 'Management consultancies, law firms, and advisory practices.',
    detailedCopy: 'Establishing expert authority through research report launches, executive opinion pieces, and high-impact broadcast commentary.',
    caseHighlight: 'Elevated a management consultancy’s annual report to become the primary benchmark cited by national economic media.',
  },
  {
    id: 'mobility',
    num: '08',
    icon: 'compass',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    title: 'Logistics & Supply Chain',
    description: 'Cold-chain networks, cross-border freight, and fulfillment hubs.',
    detailedCopy: 'Communicating resilience in global supply chains, port operations, automated warehousing, and cross-border trade policy.',
    caseHighlight: 'Mitigated global supply chain disruption messaging, protecting long-term enterprise customer relationships.',
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
