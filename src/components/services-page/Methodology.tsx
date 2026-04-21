const steps = [
  {
    n: "01",
    title: "Écoute & audit",
    desc: "Nous prenons le temps de comprendre votre activité, vos contraintes et vos objectifs. Audit complet de l'existant : matériel, réseau, sécurité, usages.",
    duration: "1 à 2 semaines",
  },
  {
    n: "02",
    title: "Diagnostic & recommandations",
    desc: "Restitution claire avec cartographie de votre SI, points faibles identifiés et plan d'action priorisé. Pas de jargon, des décisions éclairées.",
    duration: "1 semaine",
  },
  {
    n: "03",
    title: "Conception sur-mesure",
    desc: "Architecture technique adaptée à votre budget et votre croissance. Sélection rigoureuse du matériel, des logiciels et des partenaires cloud.",
    duration: "2 à 4 semaines",
  },
  {
    n: "04",
    title: "Déploiement maîtrisé",
    desc: "Installation, configuration et mise en production sans interruption de service. Migration progressive, tests utilisateurs, formation des équipes.",
    duration: "Selon projet",
  },
  {
    n: "05",
    title: "Support & évolution",
    desc: "Maintenance préventive, supervision 24/7, hotline dédiée et revues trimestrielles pour faire évoluer votre infrastructure avec votre activité.",
    duration: "En continu",
  },
];

const Methodology = () => {
  return (
    <section id="methode" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Cinq étapes pour transformer votre IT
          </h2>
          <p className="text-muted-foreground text-lg">
            Une approche éprouvée qui place la compréhension de votre métier
            avant la technique. Chaque étape est jalonnée, documentée et
            validée avec vous.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {steps.map((step, idx) => (
            <div
              key={step.n}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/40 transition-all shadow-soft hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-accent transition-colors">
                    {step.n}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
