import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceArea from "@/components/ServiceArea";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedEvents from "@/components/FeaturedEvents";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustSection />
        <ServicesGrid />
        <ServiceArea />
        <WhyChooseUs />
        <FeaturedEvents />
        <CtaBand />
      </main>
    </>
  );
}
