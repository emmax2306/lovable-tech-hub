const cases = [
  {
    sector: "Industrie agroalimentaire",
    size: "120 collaborateurs",
    challenge:
      "Infrastructure vieillissante, pannes hebdomadaires, aucun plan de reprise.",
    solution:
      "Refonte complète du SI : virtualisation des serveurs, sauvegardes immuables, supervision 24/7 et formation des équipes.",
    results: [
      { kpi: "0", label: "Panne critique en 18 mois" },
      { kpi: "−65%", label: "De tickets support" },
      { kpi: "+40%", label: "De productivité utilisateurs" },
    ],
  },
  {
    sector: "Cabinet d'avocats",
    size: "35 collaborateurs",
    challenge:
      "Confidentialité des données clients, télétravail anarchique, conformité RGPD floue.",
    solution:
      "Migration Microsoft 365 sécurisée, MFA généralisé, EDR sur tous les postes, charte cyber et audit RGPD.",
    results: [
      { kpi: "100%", label: "Conformité RGPD" },
      { kpi: "0", label: "Incident de sécurité" },
      { kpi: "24/7", label: "Accès sécurisé partout" },
    ],
  },
  {
    sector: "Réseau de cliniques",
    size: "8 sites · 240 collaborateurs",
    challenge:
      "Sites isolés, partage de dossiers patients lent, support local insuffisant.",
    solution:
      "Réseau SD-WAN multisite, serveur centralisé haute dispo, helpdesk dédié et techniciens itinérants.",
    results: [
      { kpi: "×8", label: "Vitesse de partage" },
      { kpi: "<15min", label: "Temps moyen de réponse" },
      { kpi: "99,9%", label: "Disponibilité réseau" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="cas-clients" className="py-32 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            ↳ Cas clients
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Des résultats,
            <br />
            <span className="italic font-serif font-normal text-neutral-400">
              pas des promesses.
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {cases.map((c, idx) => (
            <article
              key={c.sector}
              className="grid lg:grid-cols-12 gap-8 p-10 border border-white/10 rounded-2xl hover:border-amber-500/30 transition-colors bg-gradient-to-br from-white/[0.02] to-transparent"
            >
              <div className="lg:col-span-3">
                <div className="text-xs font-mono text-neutral-600 mb-3">
                  CAS {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-amber-400 font-bold text-lg mb-1">
                  {c.sector}
                </div>
                <div className="text-sm text-neutral-500">{c.size}</div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                    Le défi
                  </div>
                  <p className="text-neutral-300">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                    Notre intervention
                  </div>
                  <p className="text-neutral-300">{c.solution}</p>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {c.results.map((r) => (
                  <div
                    key={r.label}
                    className="border-l-2 border-amber-500 pl-4"
                  >
                    <div className="text-2xl lg:text-3xl font-black text-neutral-100">
                      {r.kpi}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
