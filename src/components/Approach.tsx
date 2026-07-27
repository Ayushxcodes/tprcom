'use client';

import React, { useState } from 'react';
import { Icon, IconName } from './Icons';

interface PillarItem {
  id: string;
  num: string;
  icon: IconName;
  title: string;
  description: string;
  tag: string;
}

const setsUsApartItems: PillarItem[] = [
  {
    id: 'research',
    num: '01',
    icon: 'chart',
    title: 'Research-Led Thinking',
    description: 'Every strategy begins with evidence — media landscape analysis, stakeholder mapping, sentiment tracking, and audience research so recommendations are grounded in fact.',
    tag: 'EVIDENCE-BASED'
  },
  {
    id: 'academic',
    num: '02',
    icon: 'newspaper',
    title: 'Academic Insight, Applied',
    description: 'Our approach draws on academic rigour in communication theory and behavioural insight, translated into practical strategies that hold up under tight news cycles.',
    tag: 'RIGOROUS METHOD'
  },
  {
    id: 'fullspec',
    num: '03',
    icon: 'users',
    title: 'Full-Spectrum Capability',
    description: 'From crisis response to IPO communications, press relations to political advisory — operating as a single integrated team rather than disconnected specialists.',
    tag: 'INTEGRATED DESK'
  },
  {
    id: 'media',
    num: '04',
    icon: 'newspaper',
    title: 'Media Fluency',
    description: 'Our team’s newsroom and media experience means we understand not just what to say, but how journalists, regulators, and audiences will read it.',
    tag: 'NEWSROOM GRADE'
  },
  {
    id: 'benchmark',
    num: '05',
    icon: 'shield',
    title: 'A New Benchmark in Client Service',
    description: 'We measure ourselves not by output, but by outcomes — the trust earned, the reputations protected, and the credibility built for every client we serve.',
    tag: 'OUTCOME FOCUSED'
  }
];

export function Approach() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="approach" className="approach-section" style={{ background: 'var(--bg-secondary)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Why Partner With Us</p>
            <h2>What Sets Us Apart</h2>
          </div>
          <p className="sub">
            The five strategic pillars that define our evidence-based counsel, flowing continuously from the TPR research core.
          </p>
        </div>

        {/* MOBILE VIEW: CLEAN STACKED CARDS CONTAINER */}
        <div className="approach-mobile-stack" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {setsUsApartItems.map((item) => (
            <div
              key={`mob-${item.id}`}
              className="sector-clean-card"
              style={{
                width: '100%',
                padding: '24px',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--gold)', fontWeight: 700 }}>
                  PILLAR {item.num}
                </span>
                <div className="card-icon" style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                  color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={item.icon} style={{ width: '18px', height: '18px' }} />
                </div>
              </div>

              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>

              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', fontWeight: 600 }}>
                  ● {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: CIRCULAR ORBITAL SYSTEM */}
        <div className="approach-desktop-system reveal" style={{ position: 'relative', marginTop: '60px', minHeight: '760px', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* SVG DOTTED DATA FLOW LINES (DESKTOP) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'visible' }} viewBox="0 0 1000 760" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D4B67A" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <path d="M 500 380 L 500 110" stroke="url(#goldLineGrad)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <path d="M 500 380 L 840 230" stroke="url(#goldLineGrad)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <path d="M 500 380 L 800 620" stroke="url(#goldLineGrad)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <path d="M 500 380 L 200 620" stroke="url(#goldLineGrad)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <path d="M 500 380 L 160 230" stroke="url(#goldLineGrad)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />

            <circle r="4.5" fill="var(--gold)">
              <animateMotion path="M 500 380 L 500 110" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="4.5" fill="var(--gold)">
              <animateMotion path="M 500 380 L 840 230" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="4.5" fill="var(--gold)">
              <animateMotion path="M 500 380 L 800 620" dur="2.7s" repeatCount="indefinite" />
            </circle>
            <circle r="4.5" fill="var(--gold)">
              <animateMotion path="M 500 380 L 200 620" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="4.5" fill="var(--gold)">
              <animateMotion path="M 500 380 L 160 230" dur="2.5s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* CENTRAL TPR CIRCLE */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '2.5px solid var(--gold)',
            boxShadow: '0 0 50px rgba(184, 153, 94, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textAlign: 'center',
            padding: '16px'
          }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.12em' }}>
              TPR
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.22em', color: 'var(--text-muted)', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
              RESEARCH CORE
            </span>
          </div>

          {/* 5 CARDS POSITIONED IN PERFECT ORBIT (DESKTOP) */}
          <div style={{ width: '100%', height: '760px', position: 'relative', zIndex: 5 }}>
            {setsUsApartItems.map((item, idx) => {
              const positions = [
                { top: '0px', left: '50%', transform: 'translateX(-50%)' },                 // 01: Top Center
                { top: '120px', right: '0px' },                                              // 02: Top Right
                { bottom: '20px', right: '40px' },                                           // 03: Bottom Right
                { bottom: '20px', left: '40px' },                                            // 04: Bottom Left
                { top: '120px', left: '0px' }                                                // 05: Top Left
              ];
              const pos = positions[idx];
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`sector-clean-card ${isActive ? 'active-selected' : ''}`}
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  style={{
                    position: 'absolute',
                    width: '320px',
                    minHeight: '220px',
                    padding: '24px',
                    background: 'var(--bg-card)',
                    boxShadow: isActive ? '0 20px 45px rgba(184, 153, 94, 0.25)' : '0 10px 30px rgba(0,0,0,0.06)',
                    ...pos
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--gold)', fontWeight: 700 }}>
                        PILLAR {item.num}
                      </span>
                      <div className="card-icon" style={{
                        width: '36px', height: '36px', borderRadius: '8px',
                        background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                        color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <Icon name={item.icon} style={{ width: '18px', height: '18px' }} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--gold)', fontWeight: 600 }}>
                      ● {item.tag}
                    </span>
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
