import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services-page/ServicesHero";
import Methodology from "@/components/services-page/Methodology";
import ServiceCatalog from "@/components/services-page/ServiceCatalog";
import CaseStudies from "@/components/services-page/CaseStudies";
import Testimonials from "@/components/services-page/Testimonials";
import ServicesFAQ from "@/components/services-page/ServicesFAQ";
import ServicesCTA from "@/components/services-page/ServicesCTA";
import Contact from "@/components/Contact";

const NosServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHero />
        <ServiceCatalog />
        <Methodology />
        <CaseStudies />
        <Testimonials />
        <ServicesFAQ />
        <Contact />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default NosServices;
