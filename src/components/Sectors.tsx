'use client';

import React, { useState, useEffect } from 'react';
import { Icon, IconName } from './Icons';
import { useContent } from '@/context/ContentContext';

export function Sectors() {
  const { content } = useContent();
  const sectorsSection = content.sectors;
  const sectorData = (sectorsSection.items || []).map((s) => ({
    ...s,
    icon: (s.icon || 'bag') as IconName,
  }));

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance slideshow every 5 seconds unless user interacts
  useEffect(() => {
    if (!isAutoPlaying || sectorData.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectorData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, sectorData.length]);

  const activeIdx = activeIndex < sectorData.length ? activeIndex : 0;
  const activeSector = sectorData[activeIdx] || {
    id: 'default',
    num: '01',
    icon: 'bag' as IconName,
    image: '/assets/fmcg.jpg',
    title: 'SECTORS',
    description: '',
    detailedCopy: '',
    caseHighlight: '',
  };

  return (
    <section id="sectors" className="sectors" style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ display: 'block', marginBottom: '60px', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <p className="kicker" style={{ fontSize: '25px', letterSpacing: '0.32em', fontWeight: 800 }}>{sectorsSection.kicker}</p>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 66px)', fontFamily: 'var(--serif)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginTop: '12px', width: '100%', maxWidth: '100%' }}>
              {sectorsSection.title}
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
