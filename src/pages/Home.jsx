import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesSection />
      <CTASection />
    </div>
  );
}
