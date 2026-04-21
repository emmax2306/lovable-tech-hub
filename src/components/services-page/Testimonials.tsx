import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pour la première fois, on comprend ce qui se passe dans notre IT. Les rapports mensuels sont clairs, les interventions rapides. Une vraie tranquillité.",
    author: "Directrice administrative",
    company: "Groupe industriel · 150 personnes",
  },
  {
    quote:
      "Ils nous ont migrés vers le cloud sans qu'aucun collaborateur ne s'en aperçoive. Du travail d'orfèvre. On les recommande sans hésiter.",
    author: "DSI",
    company: "Cabinet de conseil · 60 personnes",
  },
  {
    quote:
      "Le support est humain, francophone, et les techniciens connaissent notre dossier. C'est rare, et ça change tout au quotidien.",
    author: "Responsable des opérations",
    company: "Réseau de cliniques",
  },
  {
    quote:
      "Audit pertinent, devis honnête, déploiement maîtrisé. Trois ans plus tard, on travaille toujours avec eux. Tout est dit.",
    author: "Gérant",
    company: "PME du BTP · 40 personnes",
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all shadow-soft hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              <blockquote className="text-foreground/85 leading-relaxed mb-6">
                « {t.quote} »
              </blockquote>
              <figcaption className="pt-5 border-t border-border">
                <div className="text-foreground font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
