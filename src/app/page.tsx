import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Logos from '@/components/Logos';
import Features from '@/components/Features/Features';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Pain from '@/components/sections/Pain';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Pain />
      <Container>
        <Features />
        
        <Section
          id="testimonials"
          title="お客様の声"
          description="Serviaをご利用いただいたお客様からの実際の声をご紹介します。"
        >
          <Testimonials />
        </Section>

        <Section
          id="pricing"
          title="料金プラン"
          description="明確で分かりやすい料金体系。追加費用は一切ありません。"
        >
          <Pricing />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
