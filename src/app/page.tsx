import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { PoliticalComms } from '@/components/PoliticalComms';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';
import { Sectors } from '@/components/Sectors';
import { Approach } from '@/components/Approach';
import { ClientLogos } from '@/components/ClientLogos';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Approach />
        <Philosophy />
        <Services />
        <Work />
        <Sectors />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
