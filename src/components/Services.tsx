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
    description: 'Newsroom-grade drafting, tier-1 media relations, and earned coverage strategies that establish authority and trust across print, broadcast, and digital outlets.',
    icon: 'newspaper',
    tags: ['Media Outreach', 'Earned Coverage'],
  },
  {
    num: '02',
    title: 'Strategic Communications',
    description: 'Long-term communication architecture aligned to corporate, institutional, and leadership objectives — built on evidence and designed for consistency.',
    icon: 'megaphone',
    tags: ['Core Narrative', 'Research Frameworks'],
  },
  {
    num: '03',
    title: 'Political Communications',
    description: 'Strategic counsel for political leaders, parties, and policy campaigns — combining voter insight, narrative design, and disciplined message delivery.',
    icon: 'landmark',
    tags: ['Policy Counsel', 'Message Discipline'],
  },
  {
    num: '04',
    title: 'Digital & Content Strategy',
    description: 'Platform-specific content architecture and digital amplification strategies that extend corporate narratives across digital news cycles and networks.',
    icon: 'broadcast',
    tags: ['Digital Newsroom', 'Executive Amplification'],
  },
  {
    num: '05',
    title: 'Influencer & Creator Solutions',
    description: 'Targeted creator alliances, opinion leader engagements, and voice-amplification partnerships that connect brands with highly engaged digital communities.',
    icon: 'users',
    tags: ['KOL Alliances', 'Community Engagement'],
  },
  {
    num: '06',
    title: 'Reputation Management',
    description: 'Continuous sentiment monitoring, proactive positioning, and rapid-response crisis defense to build and protect institutional and personal equity.',
    icon: 'shield',
    tags: ['Sentiment Tracking', 'Crisis Defense'],
  },
  {
    num: '07',
    title: 'Events & Conferences',
    description: 'End-to-end media management, keynote positioning, and high-impact press briefings for corporate summits, product launches, and industry conferences.',
    icon: 'compass',
    tags: ['Summit Press Desks', 'Keynote Placement'],
  },
  {
    num: '08',
    title: 'Content & Newsletters',
    description: 'Editorial-grade corporate publications, executive newsletters, whitepapers, and thought pieces crafted for key stakeholders and decision-makers.',
    icon: 'pen',
    tags: ['Executive Briefings', 'Corporate Publishing'],
  },
  {
    num: '09',
    title: 'Media Space Buying',
    description: 'Strategic placement and media buying across premium print, digital news portals, and broadcast networks to guarantee high-impact brand visibility.',
    icon: 'chart',
    tags: ['Strategic Placement', 'High-Impact Visibility'],
  },
  {
    num: '10',
    title: 'Thought Leadership',
    description: 'Executive positioning, byline placement, op-ed strategies, and speaker bureau management that establish C-suite executives as industry authority figures.',
    icon: 'bank',
    tags: ['Op-Ed Placement', 'Executive Authority'],
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
