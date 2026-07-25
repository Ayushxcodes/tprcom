import React from 'react';
import { Icon, IconName } from './Icons';

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'Corporate & Brand Communication',
    description: 'Positioning, messaging architecture, and narrative frameworks that give a brand a consistent point of view.',
    icon: 'megaphone',
    image: 'https://picsum.photos/seed/tpr-service-corp/600/800',
    tags: ['Narrative Frameworks', 'Brand Positioning'],
  },
  {
    num: '02',
    title: 'Reputation & Crisis Management',
    description: 'Preparedness, response protocols, and steady counsel when the story turns — built before the crisis.',
    icon: 'shield',
    image: 'https://picsum.photos/seed/tpr-service-crisis/600/800',
    tags: ['Crisis Playbooks', 'Issue Mitigation'],
  },
  {
    num: '03',
    title: 'Media Relations',
    description: 'Editorial-grade storytelling backed by real newsroom relationships, securing earned coverage.',
    icon: 'newspaper',
    image: 'https://picsum.photos/seed/tpr-service-media/600/800',
    tags: ['Press Conferences', 'Op-Ed Placement'],
  },
  {
    num: '04',
    title: 'Digital & Social Communication',
    description: 'Always-on brand voice, community response, and platform-native content extending PR into feeds.',
    icon: 'chat',
    image: 'https://picsum.photos/seed/tpr-service-digital/600/800',
    tags: ['Social Listening', 'Executive LinkedIn'],
  },
  {
    num: '05',
    title: 'Investor Relations',
    description: 'Clear, compliant, market-ready communication for listed and pre-IPO companies engaging analysts.',
    icon: 'chart',
    image: 'https://picsum.photos/seed/tpr-service-ir/600/800',
    tags: ['Earnings Briefings', 'IPO Comms'],
  },
  {
    num: '06',
    title: 'Public Affairs & Government',
    description: 'Policy-literate counsel for organisations operating at the intersection of business and public institutions.',
    icon: 'landmark',
    image: 'https://picsum.photos/seed/tpr-service-policy/600/800',
    tags: ['Policy Messaging', 'Regulatory PR'],
  },
  {
    num: '07',
    title: 'Internal Communication',
    description: 'Ensuring the story a company tells the world matches the one it tells its own team.',
    icon: 'users',
    image: 'https://picsum.photos/seed/tpr-service-internal/600/800',
    tags: ['Town Hall Comms', 'Change Management'],
  },
  {
    num: '08',
    title: 'Content & Narrative Strategy',
    description: 'Long-form thought leadership building authority in the rooms and feeds that matter most.',
    icon: 'pen',
    image: 'https://picsum.photos/seed/tpr-service-content/600/800',
    tags: ['White Papers', 'Speechwriting'],
  },
];

export function Services() {
  // Multiply data x 2 for endless loop continuity
  const loopData = [...servicesData, ...servicesData];

  return (
    <section id="services" className="services-visual">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">What We Do</p>
            <h2>Communications counsel across every stage of a brand&apos;s public life.</h2>
          </div>
          <p className="sub">
            From first mention to market moment, our services are built to work together — or stand alone when that&apos;s what the brief calls for.
          </p>
        </div>
      </div>

      <div className="services-marquee-wrapper reveal">
        <div className="services-infinite-track">
          {loopData.map((service, idx) => (
            <div className="service-photo-card" key={`srv-${idx}`}>
              <div className="bg-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <div className="icon-box">
                  <Icon name={service.icon} />
                </div>
                <p className="num">{service.num}</p>
                <h3>{service.title}</h3>
                <p className="desc">{service.description}</p>
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
