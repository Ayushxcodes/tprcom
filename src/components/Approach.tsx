'use client';

import React, { useState } from 'react';
import { Icon, IconName } from './Icons';

interface StepItem {
  id: string;
  icon: IconName;
  image: string;
  stepNum: string;
  stepLabel: string;
  title: string;
  description: string;
  deliverables: string[];
}

const approachSteps: StepItem[] = [
  {
    id: 'listen',
    icon: 'ear',
    image: 'https://picsum.photos/seed/tpr-step-listen/800/600',
    stepNum: '01',
    stepLabel: 'STEP 01 — AUDIENCE AUDIT',
    title: 'Listen',
    description: 'Understand the audience, the market, and the hidden risks before writing a single word of public copy.',
    deliverables: ['Perception Intelligence Audit', 'Competitor Share of Voice Analysis', 'Vulnerability & Risk Index'],
  },
  {
    id: 'shape',
    icon: 'compass',
    image: 'https://picsum.photos/seed/tpr-step-shape/800/600',
    stepNum: '02',
    stepLabel: 'STEP 02 — NARRATIVE ARCHITECTURE',
    title: 'Shape',
    description: 'Build the core messaging, C-suite positioning, and press strategy around what is genuinely authentic.',
    deliverables: ['C-Suite Narrative Architecture', 'Core Messaging Playbook', 'Crisis Response Matrix'],
  },
  {
    id: 'amplify',
    icon: 'broadcast',
    image: 'https://picsum.photos/seed/tpr-step-amplify/800/600',
    stepNum: '03',
    stepLabel: 'STEP 03 — MEDIA EARNED REACH',
    title: 'Amplify',
    description: 'Place the story where it commands maximum authority — tier-1 newsrooms, investor feeds, and key events.',
    deliverables: ['Global Wire & Press Desk', 'Executive Op-Ed Syndication', 'Broadcast Interview Placements'],
  },
  {
    id: 'protect',
    icon: 'shield',
    image: 'https://picsum.photos/seed/tpr-step-protect/800/600',
    stepNum: '04',
    stepLabel: 'STEP 04 — REPUTATION DEFENSE',
    title: 'Protect',
    description: 'Stay ready. Corporate reputation is defended continuously through rapid response and steady governance.',
    deliverables: ['24/7 Rapid Response Desk', 'Shareholder Sentiment Defense', 'Issue Mitigation Desk'],
  },
];

export function Approach() {
  const [activeStep, setActiveStep] = useState<StepItem | null>(null);

  return (
    <section id="approach">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Our Approach</p>
            <h2>Four disciplines. One continuous orbital workflow.</h2>
          </div>
          <p className="sub">
            Communications work revolves around a central core — click any orbiting card below to halt the orbit and view its full strategic playbook.
          </p>
        </div>

        <div className="approach-orbital-section reveal">
          <div className="orbital-system-stage">
            {/* DASHED ORBITAL RING */}
            <div className="orbital-ring"></div>

            {/* CENTRAL STRATEGY HUB */}
            <div className="orbital-core-hub">
              <span className="core-tag">TPR ENGINE</span>
              <h3>Strategic Core</h3>
              <p>Continuous PR Discipline</p>
            </div>

            {/* ROTATING ORBITAL FULL PHOTO CARDS */}
            <div className={`orbital-satellites-track ${activeStep ? 'paused' : ''}`}>
              {approachSteps.map((step, idx) => (
                <div
                  className={`orbiting-card-node pos-${idx}`}
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  title={`Click to view ${step.title}`}
                >
                  <div className="orbiting-card-counter-rotate">
                    <div className="orbiting-card-photo">
                      <img src={step.image} alt={step.title} />
                    </div>

                    <div className="orbiting-card-header">
                      <div className="orbiting-card-icon">
                        <Icon name={step.icon} style={{ width: '20px', height: '20px' }} />
                      </div>
                      <span className="orbiting-card-num">{step.stepNum}</span>
                    </div>

                    <div className="orbiting-card-body">
                      <span className="orbiting-card-lbl">STEP {step.stepNum}</span>
                      <h3>{step.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* POP-UP DETAIL CARD WHEN CLICKED */}
            {activeStep && (
              <div className={`approach-popup-card ${activeStep ? 'active' : ''}`}>
                <button
                  className="approach-popup-close-btn"
                  onClick={() => setActiveStep(null)}
                  aria-label="Close pop-up"
                >
                  &times;
                </button>

                <div className="approach-popup-img">
                  <img src={activeStep.image} alt={activeStep.title} />
                </div>

                <div className="approach-popup-body">
                  <p className="step-tag">{activeStep.stepLabel}</p>
                  <h3>{activeStep.title}</h3>
                  <p>{activeStep.description}</p>

                  <div style={{ marginTop: '16px', display: 'grid', gap: '6px' }}>
                    {activeStep.deliverables.map((del, dIdx) => (
                      <div key={dIdx} style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--orange)' }}></span>
                        {del}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
