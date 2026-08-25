export interface HeroSlide {
  src: string;
  label: string;
}

export interface PillarItem {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface WorkItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
}

export interface SectorItem {
  id: string;
  num: string;
  icon: string;
  image: string;
  title: string;
  description: string;
  detailedCopy: string;
  caseHighlight: string;
}

export interface LeaderItem {
  image: string;
  name: string;
  role: string;
  expertise: string;
}

export interface PartnerClient {
  name: string;
  logo?: string;
}

export interface SiteContent {
  hero: {
    kicker: string;
    title: string;
    italicTitle: string;
    lede: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    slides: HeroSlide[];
  };
  philosophy: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    highlightText: string;
    pills: string[];
    image: string;
  };
  approach: {
    kicker: string;
    title: string;
    pillars: PillarItem[];
  };
  services: {
    kicker: string;
    title: string;
    sub: string;
    items: ServiceItem[];
  };
  work: {
    kicker: string;
    title: string;
    items: WorkItem[];
  };
  sectors: {
    kicker: string;
    title: string;
    items: SectorItem[];
  };
  leadership: {
    kicker: string;
    title: string;
    sub: string;
    members: LeaderItem[];
  };
  clientLogos: {
    kicker: string;
    title: string;
    sub: string;
    partners: PartnerClient[];
  };
  contact: {
    kicker: string;
    title: string;
    lede: string;
    address: string;
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const initialSiteContent: SiteContent = {
  hero: {
    kicker: 'RESEARCH-LED STRATEGIC PR',
    title: 'Quintessentially',
    italicTitle: 'quality-driven.',
    lede: 'TPR Communications is a research-led, quality-driven full-service PR firm delivering strategic communications across the spectrum, helping brands to earn trust, build credibility, strengthen reputation, and stand out with purpose. Backed by academic insight and media experience, TPR Communications is committed to setting a new benchmark in client servicing.',
    primaryBtnText: 'Get in Touch',
    primaryBtnLink: '#contact',
    secondaryBtnText: 'Explore Our Services',
    secondaryBtnLink: '#services',
    slides: [
      { src: '/hero1.png', label: 'STRATEGIC COMMUNICATIONS' },
      { src: '/hero2.png', label: 'PUBLIC RELATIONS & MEDIA' },
      { src: '/hero3.png', label: 'REPUTATION MANAGEMENT' },
    ],
  },
  philosophy: {
    kicker: 'Who We Are',
    title: 'Quality over Quantity.\nCraft over noise.',
    paragraph1: 'TPR Communications is a research-led, quality-driven full-service PR firm delivering strategic communications across the spectrum, helping brands to earn trust, build credibility, strengthen reputation, and stand out with purpose. Backed by academic insight and media experience, TPR Communications is committed to setting a new benchmark in client servicing.',
    paragraph2: 'TPR Stands for — Trust, Purpose and Reputation. We build communication programmes across platforms, aligning them with the long-term interests of the organisations and individuals we represent. We don’t chase headlines for the sake of them; we Create Memories.',
    highlightText: 'TPR Communications is the trailblazer.',
    pills: ['TRUST', 'PURPOSE', 'REPUTATION'],
    image: '/aboutus.png',
  },
  approach: {
    kicker: 'Why Partner With Us',
    title: 'What Sets Us Apart',
    pillars: [
      {
        id: 'research',
        num: '01',
        icon: 'chart',
        title: 'Research-led PR',
        description: 'TPR Communications believes every brand has compelling stories worth telling. As a full-service public relations firm, we amalgamate our media expertise with strategic thinking and research to create impactful communication that helps brands build trust, shape perception, and drive meaningful business outcomes. We are committed to delivering excellence through thoughtful counsel and exceptional client service.',
        tag: 'EVIDENCE-BASED'
      },
      {
        id: 'quality',
        num: '02',
        icon: 'shield',
        title: 'Quality-driven',
        description: 'More than quantity, TPR Communications believes quality should be the cornerstone of every activity that revolves around PR and communications. We believe in delivering strategic communication that builds credibility, strengthens reputation, and creates meaningful stakeholder engagement.',
        tag: 'QUALITY CORNERSTONE'
      },
      {
        id: 'fullspec',
        num: '03',
        icon: 'users',
        title: 'Full Spectrum Capability',
        description: 'From strategic communication to Crisis response and press relations to political advisory, TPR Communications delivers cutting-edge solutions across the spectrum, both traditional and new-age digital media.',
        tag: 'FULL SPECTRUM'
      },
      {
        id: 'media',
        num: '04',
        icon: 'newspaper',
        title: 'Media Fluency',
        description: 'Our team\'s newsroom and media experience understands not just what to say, but why and how to communicate it to targeted audiences, including journalists, stakeholders, and policymakers.',
        tag: 'NEWSROOM FLUENCY'
      },
      {
        id: 'benchmark',
        num: '05',
        icon: 'landmark',
        title: 'A Benchmark in Client Servicing',
        description: 'We measure ourselves not by output, but by outcomes — the trust earned, the reputations protected, and the credibility built for every client we serve.',
        tag: 'OUTCOME FOCUSED'
      }
    ],
  },
  services: {
    kicker: 'Our Services',
    title: 'Full-service PR across every stage of your communication journey.',
    sub: 'From everyday reputation building to high-stakes, high-visibility moments — delivered by an integrated team spanning research, strategy, and media.',
    items: [
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
    ],
  },
  work: {
    kicker: 'Where It Lands',
    title: 'The Corridors of Power, Boardrooms, the Fourth Estate and Digital Empire.',
    items: [
      {
        id: 'corridors',
        image: '/assets/Power Corridor Image.png',
        tag: 'Policy & Governance',
        title: 'Corridors of power',
        description: 'Navigating through corridors of power, our counsel builds narratives, plugs in the missing links, and ensures the client’s interests are fully protected.',
      },
      {
        id: 'boardroom',
        image: '/assets/Boaordroom.png',
        tag: 'Boardroom Counsel',
        title: 'Boardrooms',
        description: 'Our seasoned Team Leaders guide the Boards on achievable, research-based communication strategies.',
      },
      {
        id: 'digital',
        image: '/assets/digital feeed.png',
        tag: 'Public Square',
        title: 'Platforms, Feeds & Digital Brand Voice',
        description: 'The highly efficient digital diggers build multi-platform thought leadership and rapid-response digital communications across platforms.',
      },
      {
        id: 'newsroom',
        image: '/assets/tier1.png',
        tag: 'Newsroom Authority',
        title: 'Tier 1 Global Media and Press Desk',
        description: 'Team TPR ensures impactful editorial features and strategic executive commentary across global tier-1 mainline and financial publications.',
      },
    ],
  },
  sectors: {
    kicker: 'Sectors We Serve',
    title: 'Legacy, Traditional, Emerging, Sunrise & Tech-Powered Sectors',
    items: [
      {
        id: 'fmcg',
        num: '01',
        icon: 'bag',
        image: '/assets/fmcg.jpg',
        title: 'FMCG',
        description: 'Consumer packaged goods, personal care, food & beverage, and retail leaders.',
        detailedCopy: 'Driving brand recall, product launch momentum, executive thought leadership, and proactive recall defense for national and global consumer brands.',
        caseHighlight: 'Led an omnichannel product launch campaign for a flagship consumer brand, securing widespread earned coverage across tier-1 media.',
      },
      {
        id: 'tech',
        num: '02',
        icon: 'chip',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        title: 'TECHNOLOGY',
        description: 'Deep tech, AI platforms, enterprise SaaS, and venture-backed innovators.',
        detailedCopy: 'Translating complex technology architectures into high-impact market value narratives, positioning tech founders as industry visionaries.',
        caseHighlight: 'Secured exclusive launch coverage across global technology wire outlets and tier-1 national press desks within 48 hours.',
      },
      {
        id: 'lifestyle',
        num: '03',
        icon: 'pen',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
        title: 'LIFESTYLE AND FASHION',
        description: 'Luxury apparel, couture labels, beauty brands, and premium lifestyle experiences.',
        detailedCopy: 'Building cultural relevance, fashion editor relationships, influencer alignment, and brand prestige across leading digital and print lifestyle titles.',
        caseHighlight: 'Orchestrated exclusive press previews for a luxury fashion house, establishing market leadership in premium fashion media.',
      },
      {
        id: 'healthcare',
        num: '04',
        icon: 'heart',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        title: 'HEALTHCARE',
        description: 'Pharma leaders, hospital chains, diagnostics, doctors and health tech platforms.',
        detailedCopy: 'Highly compliant communications for medical breakthroughs, clinical trials, regulatory approvals, and patient-first reputation management.',
        caseHighlight: 'Positioned a healthcare innovator during pivotal clinical trial milestones, driving strategic global pharmaceutical partnerships.',
      },
      {
        id: 'realty',
        num: '05',
        icon: 'landmark',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        title: 'REAL ESTATE AND INFRASTRUCTURE',
        description: 'Developers, REITs, mega-infrastructure, urban, and public-funded projects.',
        detailedCopy: 'Navigating land development narratives, REIT listings, ESG compliance communications, and multi-stakeholder community sentiment.',
        caseHighlight: 'Managed strategic communications during complex regulatory proceedings, preserving market confidence and stakeholder trust.',
      },
      {
        id: 'power',
        num: '06',
        icon: 'leaf',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
        title: 'POWER AND ENERGY',
        description: 'Power, clean energy, renewable energy, Oil & Gas, and EV.',
        detailedCopy: 'Highlighting decarbonization journeys, clean energy innovation, and green financing to institutional investors and regulatory policymakers.',
        caseHighlight: 'Crafted sustainability positioning for a major solar developer prior to their international green bond flotation.',
      },
      {
        id: 'govt',
        num: '07',
        icon: 'shield',
        image: '/govt_sector.png',
        title: 'GOVERNMENT AND PUBLIC SECTOR',
        description: 'Public institutions, state enterprises, civic initiatives, and policy communications.',
        detailedCopy: 'Designing policy messaging, public awareness campaigns, and defensive crisis communications for government bodies and public sector organizations.',
        caseHighlight: 'Executed a nationwide public awareness campaign for a major civic infrastructure mandate.',
      },
      {
        id: 'bfsi',
        num: '08',
        icon: 'bank',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
        title: 'BFSI AND FINTECH',
        description: 'Lending institutions, insurers, NBFCs, private equity, capital markets, and fintech.',
        detailedCopy: 'Managing earnings disclosures, investor relations, regulatory filings, and market perception for top financial organizations and fintech disruptors.',
        caseHighlight: 'Orchestrated the public communication strategy for a cross-border IPO, achieving full editorial coverage across national financial dailies.',
      },
      {
        id: 'hospitality',
        num: '09',
        icon: 'compass',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        title: 'HOSPITALITY',
        description: 'Luxury hotel chains, resort destinations, fine dining groups, and travel brands.',
        detailedCopy: 'Crafting experiential storytelling, destination launches, executive culinary profiles, and crisis reputation management across luxury hospitality.',
        caseHighlight: 'Managed nationwide launch PR for a flagship luxury resort brand, driving record editorial features and guest engagement.',
      },
      {
        id: 'mining',
        num: '10',
        icon: 'crane',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
        title: 'MINING AND METALS',
        description: 'Industrial metals, natural resources, mining conglomerates, and heavy industries.',
        detailedCopy: 'Communicating industrial resilience, ESG compliance benchmarks, safety protocols, and community engagement for resource industry leaders.',
        caseHighlight: 'Navigated complex environmental and community relations communications for a major industrial mining group.',
      },
    ],
  },
  leadership: {
    kicker: 'Leadership',
    title: 'A senior team, close to every account.',
    sub: 'No layers between strategy and execution — the people who plan the work are the people who stay on it.',
    members: [
      {
        image: '/member1.jpeg',
        name: 'Tarun Purwaney',
        role: 'Founder & CEO',
        expertise: 'Former senior communications strategist with 18+ years advising top corporate boards.',
      },
      {
        image: '/member2.jpeg',
        name: 'Research & Strategy Team',
        role: 'Strategic Counsel Desk',
        expertise: 'Specializing in evidence-based corporate narratives, reputation defense, and political advisory.',
      },
    ],
  },
  clientLogos: {
    kicker: 'Institutional Trust',
    title: 'Our Revered Partners',
    sub: 'We are proud and privileged to serve trailblazers, iconoclasts, disruptors, leaders and reformers',
    partners: [
      { name: 'Govt of Rajasthan', logo: '/assets/govenrment of rajasthan.png' },
      { name: 'Reliance', logo: '/assets/Reliance.webp' },
      { name: 'Essar', logo: '/assets/essar.png' },
      { name: 'IIFL - 5Paisa', logo: '/assets/IIFL.png' },
      { name: 'Indian Aluminium Association', logo: '/assets/indian_aluminium_association.jpeg' },
      { name: 'Govt of India' },
      { name: 'International Copper Association', logo: '/assets/international_copper_association.png' },
      { name: 'Indian Steel Association', logo: '/assets/indian steel association.png' },
      { name: 'MDC' },
      { name: 'JSP' },
      { name: 'PGI' },
      { name: 'Zydus', logo: '/assets/Zydus.svg' },
      { name: 'SSEL', logo: '/assets/ssel.png' },
      { name: 'ICCEMA', logo: '/assets/icema.jpeg' },
      { name: 'Ministry of Health and Family Welfare', logo: '/assets/ministry of health.png' },
      { name: 'Su-vastika', logo: '/assets/suvastika.jpg' },
      { name: 'BigMint', logo: '/assets/bigmint.jpeg' },
      { name: 'Rosneft', logo: '/assets/rosneft.png' },
      { name: 'Paisalo', logo: '/assets/paisalo.jpeg' },
      { name: 'NAMTECH', logo: '/assets/namtech.avif' },
      { name: 'CDRI' },
      { name: 'Envision' },
      { name: 'Hiranandani Group', logo: '/assets/hiranadani.avif' },
      { name: 'Garo Education' },
      { name: 'JLL' },
      { name: 'SBRE Bank' },
      { name: 'Purple Finance', logo: '/assets/purple finance.jpeg' },
      { name: 'DMG Group' },
      { name: 'IntelliSmart', logo: '/assets/intellismart.jpg' },
    ],
  },
  contact: {
    kicker: 'Get In Touch',
    title: 'Let’s weave indelible memories',
    lede: 'TPR-Communications will take pride in building research-led, quality-driven, lasting, and long-term reputation strategy for you and your brand with time-tested and innovative solutions.',
    address: 'Cloud 9 Vaishali, S1 Tower, Office no. 425, Delhi NCR. Pin - 201010',
    email: 'official@tprcommunications.com',
    phone: '+91 87965 64094',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  footer: {
    tagline: 'Quintessentially quality-driven.',
    copyright: '© 2026 TPR Communications. All rights reserved.',
  },
};
