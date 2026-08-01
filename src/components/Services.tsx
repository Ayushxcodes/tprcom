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
    title: 'Public Relations',
    description: 'From strategic storytelling and media relations to executive profiling and reputation management, we help brands shape public perception and earn meaningful visibility. Our focus is on creating quality narratives that resonate with audiences and deliver positive impact.',
    icon: 'newspaper',
    tags: ['Media Relations', 'Research-driven'],
  },
  {
    num: '02',
    title: 'Strategic Communications',
    description: 'End-to-end strategic communication solutions that shape perception, strengthen stakeholder relationships, and support organisational objectives through purposeful messaging and integrated execution.',
    icon: 'megaphone',
    tags: ['Strategic Communications', 'Corporate Communications'],
  },
  {
    num: '03',
    title: 'Political Communications',
    description: 'Research-driven communication strategies that translate policy priorities into compelling public narratives, fostering meaningful engagement, boosting stakeholder confidence, and effective message dissemination.',
    icon: 'landmark',
    tags: ['Political Communication', 'Stakeholder Engagement'],
  },
  {
    num: '04',
    title: 'Digital & Content Strategy',
    description: 'Platform-specific content architecture and digital amplification strategies that extend corporate narratives across the digital spectrum.',
    icon: 'broadcast',
    tags: ['Social Media Marketing', 'Digital Marketing'],
  },
  {
    num: '05',
    title: 'Influencer & Creator Solutions',
    description: 'Strategic collaborations with influencers, content creators, and key opinion leaders to amplify brand narratives, enhance credibility, and drive authentic audience engagement across digital platforms.',
    icon: 'users',
    tags: ['Influencer Marketing', 'Influencer Relations'],
  },
  {
    num: '06',
    title: 'Reputation Management',
    description: 'Integrated public relations programmes designed to strengthen brand reputation, manage public perception, and build lasting trust through strategic communications, media relations, and leadership positioning.',
    icon: 'shield',
    tags: ['Reputation Management', 'Brand Building'],
  },
  {
    num: '07',
    title: 'Events & Conferences',
    description: 'Strategic communication support for corporate events, conferences, product launches, and industry forums through media relations, press conferences, spokesperson engagement, and impactful event publicity.',
    icon: 'compass',
    tags: ['Press Conferences', 'Spokesperson Engagement'],
  },
  {
    num: '08',
    title: 'Content & Newsletters',
    description: 'Weaving high-quality content meant for corporate publications, executive newsletters, whitepapers, and thought leadership pieces crafted for key stakeholders and decision-makers.',
    icon: 'pen',
    tags: ['Whitepaper', 'Thought Leadership Article'],
  },
  {
    num: '09',
    title: 'Media Space Buying',
    description: 'Strategic placement and media buying across print, digital news portals, and broadcast networks to amplify high-impact brand visibility.',
    icon: 'chart',
    tags: ['Media Space Buying', 'Digital News Portals'],
  },
  {
    num: '10',
    title: 'Thought Leadership',
    description: 'Executive positioning, byline placement, op-ed strategies, and speaker bureau management that establish C-suite executives as industry authority figures.',
    icon: 'bank',
    tags: ['Op-Ed', 'Speaking Opportunities'],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker" style={{ fontSize: '13px', letterSpacing: '0.28em' }}>Our Services</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'var(--serif)', fontWeight: 800 }}>
              Full-service PR across every stage of your communication journey.
            </h2>
          </div>
          <p className="sub" style={{ fontSize: '17px' }}>
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
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65 }}>{service.description}</p>
              </div>

              <div className="tags-row" style={{ marginTop: '16px' }}>
                {service.tags.map((tag, tIdx) => (
                  <span className="clean-tag" key={tIdx}>
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
