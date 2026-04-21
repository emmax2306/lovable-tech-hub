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
    <section
      id="temoignages"
      className="py-32 border-b border-white/5 bg-[#0a0b0e]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            ↳ Témoignages
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ce que disent
            <br />
            <span className="italic font-serif font-normal text-neutral-400">
              celles et ceux qu'on accompagne.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-10 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative"
            >
              <Quote className="w-8 h-8 text-amber-400/40 mb-6" />
              <blockquote className="text-lg text-neutral-200 leading-relaxed mb-8">
                « {t.quote} »
              </blockquote>
              <figcaption className="pt-6 border-t border-white/10">
                <div className="text-neutral-100 font-semibold">{t.author}</div>
                <div className="text-sm text-neutral-500 mt-0.5">
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
