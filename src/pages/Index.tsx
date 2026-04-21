import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
