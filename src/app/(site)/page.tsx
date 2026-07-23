import AboutSection from "@/components/site/home/AboutSection";
import CTASection from "@/components/site/home/CTASection";
import FAQSection from "@/components/site/home/FAQSection";
import Hero from "@/components/site/home/Hero";
import PortfolioGrid from "@/components/site/home/PortfolioGrid";
import ServicesSection from "@/components/site/home/ServicesSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <PortfolioGrid/>
      <AboutSection/>
      <FAQSection/>
      <CTASection/>
    </main>
  );
}