import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Audit & conseil sur-mesure",
  "Déploiement clé en main",
  "Support réactif 6j/7",
];

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero">
      {/* Soft grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Des solutions IT complètes,
            <br />
            <span className="text-secondary">pensées pour votre entreprise</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            De l'audit initial au support quotidien, nous concevons, déployons
            et maintenons votre infrastructure informatique avec une méthode
            claire et des résultats mesurables.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2 text-primary-foreground/90 text-sm bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {h}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
              asChild
            >
              <a href="#catalogue">
                Découvrir nos services
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#contact">Demander un devis</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-primary-foreground/15">
            {[
              { value: "180+", label: "Clients accompagnés" },
              { value: "12 ans", label: "D'expertise terrain" },
              { value: "98%", label: "Taux de satisfaction" },
              { value: "<1h", label: "Délai d'intervention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
