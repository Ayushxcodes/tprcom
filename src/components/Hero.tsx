'use client';

import React, { useState, useEffect } from 'react';

const heroImages = [
  { src: '/hero1.png', label: 'RESEARCH & MEDIA DESK' },
  { src: '/hero2.png', label: 'STRATEGIC COMMUNICATIONS' },
  { src: '/hero3.png', label: 'REPUTATION & SCRUTINY COUNSEL' },
];

export function Hero() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Automated background slideshow transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* AUTOMATED BACKGROUND SLIDESHOW WITH HERO1, HERO2, HERO3 */}
      <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: idx === currentIdx ? 1 : 0,
              transition: 'opacity 1.4s ease-in-out',
              zIndex: idx === currentIdx ? 1 : 0
            }}
          >
            <img
              src={img.src}
              alt="TPR Communications Strategic PR"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) brightness(0.72)',
                transform: idx === currentIdx ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 7s ease-out'
              }}
            />
          </div>
        ))}
        
        {/* SUBTLE NATURAL VIGNETTE GRADIENT FOR READABILITY */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.48) 50%, transparent 100%)',
          zIndex: 2
        }} />
      </div>

      {/* FAR-LEFT BOTTOM-CORNER CONTENT CONTAINER */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: '24px', paddingBottom: '56px', paddingTop: '120px' }}>
        <div className="reveal" style={{ maxWidth: '780px', textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>
              RESEARCH-LED STRATEGIC PR
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(40px, 5.2vw, 72px)', lineHeight: 1.08, color: '#FFFFFF', fontWeight: 700, margin: '0 0 18px 0', textShadow: '0 4px 20px rgba(0,0,0,0.85)' }}>
            Quintessentially<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)', textShadow: '0 0 35px rgba(184, 153, 94, 0.5)' }}>
              quality-driven.
            </em>
          </h1>

          <p className="lede" style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, maxWidth: '600px', margin: '0 0 28px 0', textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}>
            TPR Communications is a research-led, quality-driven full-service PR firm delivering strategic communications across the spectrum — helping brands earn trust, build credibility, strengthen reputation, and stand out with purpose.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '14.5px' }}>
              Get in Touch
              <svg className="icon" style={{ width: '16px', height: '16px', marginLeft: '6px' }} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost" style={{ padding: '15px 30px', fontSize: '14.5px' }}>
              Explore Our Services
            </a>
          </div>

          {/* SLIDESHOW PROGRESS INDICATORS */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '32px', alignItems: 'center' }}>
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                style={{
                  height: '4px',
                  width: idx === currentIdx ? '32px' : '10px',
                  borderRadius: '2px',
                  background: idx === currentIdx ? 'var(--gold)' : 'rgba(255, 255, 255, 0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease'
                }}
                aria-label={`Switch to slide ${idx + 1}`}
              />
            ))}
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', marginLeft: '10px', letterSpacing: '0.14em', fontWeight: 700 }}>
              0{currentIdx + 1} / 0{heroImages.length} ● {heroImages[currentIdx].label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
