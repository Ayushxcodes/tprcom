import React from 'react';
import { Icon, IconName } from './Icons';

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  icon: IconName;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'Strategic Communication',
    description: 'Long-term communication architecture aligned to business, institutional, or personal objectives — built on research and designed for consistency across every touchpoint.',
    icon: 'megaphone',
    tags: ['Long-Term Architecture', 'Research-Led Frameworks'],
  },
  {
    num: '02',
    title: 'Crisis Communication',
    description: 'Rapid-response planning and real-time management to protect reputation, control narrative, and restore stakeholder trust during high-pressure situations.',
    icon: 'shield',
    tags: ['Rapid Response', 'Stakeholder Trust Restoration'],
  },
  {
    num: '03',
    title: 'IPO Solutions',
    description: 'End-to-end communication support for public listings — from pre-IPO positioning and investor narrative to post-listing reputation management.',
    icon: 'chart',
    tags: ['Pre-IPO Positioning', 'Investor Narrative Desk'],
  },
  {
    num: '04',
    title: 'Press Release & Media Relations',
    description: 'Newsroom-grade drafting and strategic media outreach that ensures the right story reaches the right audience through the right platform.',
    icon: 'newspaper',
    tags: ['Newsroom Drafting', 'Strategic Wire Outreach'],
  },
  {
    num: '05',
    title: 'Political Advisory',
    description: 'Strategic counsel for political leaders, parties, and institutions — combining research, narrative design, and disciplined message delivery.',
    icon: 'landmark',
    tags: ['Voter Research', 'Campaign Message Discipline'],
  },
  {
    num: '06',
    title: 'Corporate & Public Affairs',
    description: 'Stakeholder engagement, policy communication, and institutional messaging that build credibility with regulators, media, and the public.',
    icon: 'users',
    tags: ['Regulatory PR', 'Institutional Messaging'],
  },
  {
    num: '07',
    title: 'Reputation Management',
    description: 'Ongoing monitoring and proactive positioning to build, protect, and strengthen brand and personal reputation over time.',
    icon: 'compass',
    tags: ['Sentiment Monitoring', 'Proactive Defense'],
  },
  {
    num: '08',
    title: 'Digital & Content Strategy',
    description: 'Platform-specific content and amplification strategies that extend traditional PR narratives into the digital-first news cycle.',
    icon: 'broadcast',
    tags: ['Digital News Cycle', 'Executive Amplification'],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Our Services</p>
            <h2>Full-service PR across every stage of your communication journey.</h2>
          </div>
          <p className="sub">
            From everyday reputation building to high-stakes, high-visibility moments — delivered by an integrated team spanning research, strategy, and media.
          </p>
        </div>

        <div className="services-clean-grid reveal">
          {servicesData.map((service, idx) => (
            <div className="service-clean-card" key={`srv-${idx}`}>
              <div className="card-top">
                <span className="card-num">{service.num}</span>
                <div className="card-icon">
                  <Icon name={service.icon} style={{ width: '20px', height: '20px' }} />
                </div>
              </div>

              <div className="card-mid">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="tags-row">
                {service.tags.map((tag, tIdx) => (
                  <span className="tag-chip" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
