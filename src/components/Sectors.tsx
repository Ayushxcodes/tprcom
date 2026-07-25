'use client';

import React, { useState } from 'react';
import { Icon, IconName } from './Icons';

interface MetricItem {
  val: string;
  lbl: string;
}

interface SectorItem {
  id: string;
  icon: IconName;
  image: string;
  title: string;
  description: string;
  detailedCopy: string;
  keyMetrics: MetricItem[];
  caseHighlight: string;
}

const sectorData: SectorItem[] = [
  {
    id: 'bfsi',
    icon: 'bank',
    image: 'https://picsum.photos/seed/tpr-sector-bfsi/800/1000',
    title: 'BFSI & Capital Markets',
    description: 'Listed entities, NBFCs, private equity firms, and fintech pioneers.',
    detailedCopy: 'We manage investor relations, earnings releases, regulatory disclosures, and market perception for top financial institutions. Our team maintains daily dialogues with leading financial editors and analyst networks.',
    keyMetrics: [
      { val: '99.4%', lbl: 'Accuracy Rate' },
      { val: '< 30 Min', lbl: 'Crisis Response' },
      { val: '450+', lbl: 'Tier-1 Stories' },
    ],
    caseHighlight: 'Orchestrated the public communication strategy for a $1.2B IPO, achieving 100% positive coverage across national financial dailies.',
  },
  {
    id: 'tech',
    icon: 'chip',
    image: 'https://picsum.photos/seed/tpr-sector-tech/800/1000',
    title: 'Technology & Enterprise SaaS',
    description: 'Deeptech, enterprise platforms, and venture-backed innovators.',
    detailedCopy: 'Translating complex tech architectures into compelling business value narratives. We position tech founders as industry visionaries across global media platforms.',
    keyMetrics: [
      { val: '$4.5B+', lbl: 'Client Valuations' },
      { val: '80%', lbl: 'SOV Leadership' },
      { val: '12', lbl: 'Global Markets' },
    ],
    caseHighlight: 'Secured exclusive launch coverage in TechCrunch, Reuters, and Bloomberg for a Series B SaaS unicorn within 48 hours.',
  },
  {
    id: 'realty',
    icon: 'landmark',
    image: 'https://picsum.photos/seed/tpr-sector-realty/800/1000',
    title: 'Real Estate & Infrastructure',
    description: 'Commercial developers, REITS, and mega-infrastructure projects.',
    detailedCopy: 'Navigating land development narratives, REIT listings, ESG compliance communications, and community stakeholder sentiment.',
    keyMetrics: [
      { val: '50M+ SQFT', lbl: 'Portfolio Scope' },
      { val: '94%', lbl: 'Favorable Sentiment' },
      { val: '24/7', lbl: 'Site Monitoring' },
    ],
    caseHighlight: 'Managed crisis communications during a complex zoning dispute, preserving market confidence and share price stability.',
  },
  {
    id: 'health',
    icon: 'heart',
    image: 'https://picsum.photos/seed/tpr-sector-health/800/1000',
    title: 'Healthcare & Lifesciences',
    description: 'Pharma manufacturers, hospital chains, and healthtech platforms.',
    detailedCopy: 'Highly compliant communications for medical breakthroughs, clinical trials, regulatory approvals, and patient-first reputation management.',
    keyMetrics: [
      { val: '100%', lbl: 'Regulatory Compliance' },
      { val: '15M+', lbl: 'Patient Reach' },
      { val: '35+', lbl: 'Medical Journals' },
    ],
    caseHighlight: 'Positioned a biotech firm during their pivotal Phase-3 trial announcements, leading to strategic pharmaceutical partnerships.',
  },
  {
    id: 'energy',
    icon: 'leaf',
    image: 'https://picsum.photos/seed/tpr-sector-energy/800/1000',
    title: 'Energy & Transition',
    description: 'Renewable IPPs, EV infrastructure, and industrial transition leaders.',
    detailedCopy: 'Highlighting decarbonization journeys, green bond issuance, and clean energy innovation to institutional investors and policymakers.',
    keyMetrics: [
      { val: '12 GW', lbl: 'Clean Energy Covered' },
      { val: '99%', lbl: 'ESG Alignment' },
      { val: '20+', lbl: 'Industry Awards' },
    ],
    caseHighlight: 'Crafted the sustainability positioning for a major solar developer prior to their international green bond flotation.',
  },
  {
    id: 'consumer',
    icon: 'bag',
    image: 'https://picsum.photos/seed/tpr-sector-consumer/800/1000',
    title: 'Consumer & D2C Brands',
    description: 'FMCG conglomerates, lifestyle brands, and digital retail leaders.',
    detailedCopy: 'Driving brand affinity, product launch momentum, executive thought leadership, and proactive consumer recall defense.',
    keyMetrics: [
      { val: '120M+', lbl: 'Consumer Impressions' },
      { val: '3.5x', lbl: 'Earned Reach' },
      { val: '99%', lbl: 'Brand Affinity' },
    ],
    caseHighlight: 'Led an omnichannel PR campaign for a D2C lifestyle brand launch, generating over 500 organic influencer mentions.',
  },
  {
    id: 'prof',
    icon: 'pen',
    image: 'https://picsum.photos/seed/tpr-sector-prof/800/1000',
    title: 'Professional Services',
    description: 'Management consultancies, law firms, and advisory practices.',
    detailedCopy: 'Establishing expert authority through research report launches, executive opinion pieces, and high-impact broadcast commentary.',
    keyMetrics: [
      { val: '100+', lbl: 'Op-Eds Published' },
      { val: '#1', lbl: 'Thought Leadership' },
      { val: '50+', lbl: 'Keynote Placement' },
    ],
    caseHighlight: 'Elevated a management consultancy’s annual economic report to become the primary benchmark cited by national economic media.',
  },
  {
    id: 'mobility',
    icon: 'compass',
    image: 'https://picsum.photos/seed/tpr-sector-mobility/800/1000',
    title: 'Logistics & Supply Chain',
    description: 'Cold-chain networks, cross-border freight, and fulfillment hubs.',
    detailedCopy: 'Communicating resilience in global supply chains, port operations, automated warehousing, and cross-border trade policy.',
    keyMetrics: [
      { val: '99.8%', lbl: 'Uptime Messaging' },
      { val: '18', lbl: 'Port Authorities' },
      { val: '24/7', lbl: 'Live Incident Desk' },
    ],
    caseHighlight: 'Mitigated global supply chain disruption messaging during peak season, protecting client B2B customer relationships.',
  },
];

export function Sectors() {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);

  return (
    <section id="sectors" className="sectors">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Sectors We Serve</p>
            <h2>Deep domain literacy across complex industries.</h2>
          </div>
          <p className="sub">
            We don&apos;t learn an industry on your time. Click any sector card below to explore our specific strategic domain capabilities and metrics.
          </p>
        </div>

        <div className="sector-photo-grid reveal">
          {sectorData.map((item, idx) => (
            <div
              className={`sector-photo-card reveal-delay-${(idx % 4) + 1}`}
              key={item.id}
              onClick={() => setSelectedSector(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="bg-photo">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div className="icon-chip" style={{ marginBottom: 0 }}>
                    <Icon name={item.icon} style={{ width: '22px', height: '22px' }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10.5px',
                    color: 'var(--orange)',
                    background: 'rgba(5, 14, 26, 0.85)',
                    border: '1px solid rgba(255, 106, 43, 0.4)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontWeight: 600
                  }}>
                    ↗ Click to Expand
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED INTERACTIVE SECTOR POP-OUT MODAL */}
      <div
        className={`sector-modal-backdrop ${selectedSector ? 'open' : ''}`}
        onClick={() => setSelectedSector(null)}
      >
        {selectedSector && (
          <div
            className="sector-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sector-modal-close-btn"
              onClick={() => setSelectedSector(null)}
              aria-label="Close detail modal"
            >
              &times;
            </button>

            {/* LEFT PHOTO COLUMN */}
            <div className="sector-modal-photo-col">
              <img src={selectedSector.image} alt={selectedSector.title} />
              <div className="photo-icon-overlay">
                <Icon name={selectedSector.icon} style={{ width: '24px', height: '24px' }} />
              </div>
            </div>

            {/* RIGHT DETAIL BODY */}
            <div className="sector-modal-body">
              <div>
                <p className="badge">Sector Intelligence — {selectedSector.title}</p>
                <h2>{selectedSector.title}</h2>
                <p style={{ marginTop: '12px', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {selectedSector.detailedCopy}
                </p>

                {/* KEY METRICS */}
                <div className="sector-modal-metrics-grid">
                  {selectedSector.keyMetrics.map((m, i) => (
                    <div className="modal-metric-box" key={i}>
                      <div className="val">{m.val}</div>
                      <div className="lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CASE STUDY HIGHLIGHT */}
              <div className="sector-modal-case">
                <h4>Strategic Benchmark Highlight</h4>
                <p>{selectedSector.caseHighlight}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
