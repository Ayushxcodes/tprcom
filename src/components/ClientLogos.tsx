'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';

interface Partner {
  name: string;
  logo?: string;
}

export function ClientLogos() {
  const { content } = useContent();
  const clientLogosData = content.clientLogos;
  const partnerClients: Partner[] = clientLogosData.partners || [];

  // Only partners with image logos appear in ticker animation
  const tickerLogos = partnerClients.filter((p): p is Partner & { logo: string } => Boolean(p.logo));

  return (
    <section className="client-logos-section" style={{ background: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="wrap reveal" style={{ marginBottom: '36px', textAlign: 'center' }}>
        <p className="kicker kicker-centered" style={{ justifyContent: 'center', fontSize: '13px', letterSpacing: '0.28em' }}>
          {clientLogosData.kicker}
        </p>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontFamily: 'var(--serif)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
          {clientLogosData.title}
        </h2>
        <p className="sub" style={{ margin: '0 auto', maxWidth: '780px', fontSize: '17px', lineHeight: 1.6 }}>
          {clientLogosData.sub}
        </p>
      </div>

      {/* INFINITE MARQUEE TICKER (Only /assets/ downloaded logos) */}
      <div className="wrap">
        <div style={{ position: 'relative', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--border-color)', padding: '36px 0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {/* Edge Fade Gradients */}
          <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, bottom: 0, left: 0, width: '120px', background: 'linear-gradient(90deg, var(--bg-card) 0%, transparent 100%)', zIndex: 10 }} />
          <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, bottom: 0, right: 0, width: '120px', background: 'linear-gradient(270deg, var(--bg-card) 0%, transparent 100%)', zIndex: 10 }} />

          <div className="ticker-container">
            <div className="ticker-track">
              {/* First Set of /assets/ Logos */}
              {tickerLogos.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="ticker-item"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}
                >
                  <div style={{ width: '140px', height: '56px', position: 'relative', transition: 'all 0.3s ease', filter: 'grayscale(100%) opacity(0.85)', cursor: 'pointer' }}
                       onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                       onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.85)')}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                </div>
              ))}

              {/* Second Set for Seamless Infinite Loop */}
              {tickerLogos.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="ticker-item"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}
                >
                  <div style={{ width: '140px', height: '56px', position: 'relative', transition: 'all 0.3s ease', filter: 'grayscale(100%) opacity(0.85)', cursor: 'pointer' }}
                       onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                       onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.85)')}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UNIFORM PARTNER BADGE SHOWCASE (All 29 Partners Cleanly Rendered) */}
        <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {partnerClients.map((partner, pIdx) => (
            <div
              key={`pbadge-${pIdx}`}
              style={{
                padding: '8px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                fontSize: '12.5px',
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              {partner.name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          overflow: hidden;
          width: 100%;
        }

        .ticker-track {
          display: flex;
          align-items: center;
          animation: ticker-scroll 35s linear infinite;
          width: max-content;
        }

        .ticker-item {
          flex-shrink: 0;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
