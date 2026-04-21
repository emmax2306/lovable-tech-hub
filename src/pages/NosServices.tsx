import ServicesHeader from "@/components/services-page/ServicesHeader";
import ServicesHero from "@/components/services-page/ServicesHero";
import Methodology from "@/components/services-page/Methodology";
import ServiceCatalog from "@/components/services-page/ServiceCatalog";
import CaseStudies from "@/components/services-page/CaseStudies";
import Testimonials from "@/components/services-page/Testimonials";
import ServicesFAQ from "@/components/services-page/ServicesFAQ";
import ServicesCTA from "@/components/services-page/ServicesCTA";
import ServicesFooter from "@/components/services-page/ServicesFooter";

const NosServices = () => {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-neutral-100 selection:bg-amber-500/30 selection:text-amber-100">
      <ServicesHeader />
      <main>
        <ServicesHero />
        <Methodology />
        <ServiceCatalog />
        <CaseStudies />
        <Testimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <ServicesFooter />
    </div>
  );
};

export default NosServices;
