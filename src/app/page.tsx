import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Philosophy } from '@/components/Philosophy';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';
import { Sectors } from '@/components/Sectors';
import { Approach } from '@/components/Approach';
import { Manifesto } from '@/components/Manifesto';
import { Stats } from '@/components/Stats';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Work />
        <Sectors />
        <Approach />
        <Manifesto />
        <Stats />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
