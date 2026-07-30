'use client';

import React from 'react';
import Image from 'next/image';

export function ClientLogos() {
  // Exact user-uploaded logo files in public/
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.webp',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7 copy.svg',
    'logo8.png',
    'logo9.png',
  ];

  return (
    <section className="client-logos-section" style={{ background: 'var(--bg-secondary)', padding: '70px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="wrap reveal" style={{ marginBottom: '36px', textAlign: 'center' }}>
        <p className="kicker kicker-centered" style={{ justifyContent: 'center' }}>Institutional Trust</p>
        <h2 style={{ fontSize: '32px', fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Our Revered Partners
        </h2>
        <p className="sub" style={{ margin: '0 auto', maxWidth: '600px' }}>
          We&apos;re proud to provide strategic counsel to industry leaders and innovative enterprise clients worldwide.
        </p>
      </div>

      {/* Infinite Ticker */}
      <div className="wrap">
        <div style={{ position: 'relative', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--border-color)', padding: '32px 0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {/* Edge Fade Gradients */}
          <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(90deg, var(--bg-card) 0%, transparent 100%)', zIndex: 10 }} />
          <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(270deg, var(--bg-card) 0%, transparent 100%)', zIndex: 10 }} />

          <div className="ticker-container">
            <div className="ticker-track">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="ticker-item"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}
                >
                  <div style={{ width: '140px', height: '54px', position: 'relative', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                    <Image
                      src={`/${logo}`}
                      alt={`Client Logo ${index + 1}`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="140px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="ticker-item"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}
                >
                  <div style={{ width: '140px', height: '54px', position: 'relative', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                    <Image
                      src={`/${logo}`}
                      alt={`Client Logo ${index + 1}`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="140px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          overflow: hidden;
          width: 100%;
        }

        .ticker-track {
          display: flex;
          animation: ticker-scroll 30s linear infinite;
          width: calc(200px * 18);
        }

        .ticker-item {
          flex-shrink: 0;
          width: 200px;
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

        @media (max-width: 768px) {
          .ticker-item {
            width: 150px;
          }
          .ticker-track {
            width: calc(150px * 18);
          }
        }
      `}</style>
    </section>
  );
}
