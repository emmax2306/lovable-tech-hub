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
    <section id="methode" className="py-32 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
              ↳ Notre méthode
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Cinq étapes pour
              <br />
              <span className="italic font-serif font-normal text-neutral-400">
                transformer votre IT.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Une approche éprouvée qui place la compréhension de votre métier
              avant la technique. Chaque étape est jalonnée, documentée et
              validée avec vous.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-white/5">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group bg-[#0c0d10] hover:bg-white/[0.02] transition-colors"
            >
              <div className="container mx-auto grid lg:grid-cols-12 gap-8 py-10 px-2 lg:px-0">
                <div className="lg:col-span-2">
                  <div className="text-5xl font-black text-amber-400/80 group-hover:text-amber-400 transition-colors">
                    {step.n}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-neutral-100">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <span className="inline-block text-xs uppercase tracking-wider text-neutral-500 border border-white/10 px-3 py-1.5 rounded-full">
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
