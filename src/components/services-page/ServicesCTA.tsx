import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section id="contact-cta" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            On en discute ?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 leading-tight">
            Parlons de votre prochain projet IT
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            30 minutes au téléphone, sans engagement. On comprend votre
            contexte et on vous dit franchement si on peut aider.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" variant="secondary" className="font-semibold" asChild>
              <a href="mailto:contact@techinfopro.fr">
                Demander un échange
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+33100000000">
                <Phone className="w-4 h-4 mr-1" />
                01 00 00 00 00
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-primary-foreground/15 text-left">
            <div>
              <Mail className="w-5 h-5 text-secondary mb-3" />
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1 font-semibold">
                Par email
              </div>
              <div className="text-primary-foreground">contact@techinfopro.fr</div>
            </div>
            <div>
              <Phone className="w-5 h-5 text-secondary mb-3" />
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1 font-semibold">
                Hotline
              </div>
              <div className="text-primary-foreground">Lun–Sam · 7h–20h</div>
            </div>
            <div>
              <MapPin className="w-5 h-5 text-secondary mb-3" />
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1 font-semibold">
                Sur place
              </div>
              <div className="text-primary-foreground">France entière</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
