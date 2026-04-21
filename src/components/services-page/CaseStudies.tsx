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
      { kpi: "+40%", label: "De productivité" },
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
      { kpi: "<15min", label: "Temps de réponse" },
      { kpi: "99,9%", label: "Disponibilité réseau" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="cas-clients" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Cas clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Des résultats, pas des promesses
          </h2>
          <p className="text-muted-foreground text-lg">
            Trois exemples concrets de transformations menées avec nos clients.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {cases.map((c, idx) => (
            <article
              key={c.sector}
              className="grid lg:grid-cols-12 gap-8 p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all shadow-soft hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="lg:col-span-3">
                <div className="text-xs font-mono text-muted-foreground mb-2">
                  CAS {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-primary font-bold text-lg mb-1">
                  {c.sector}
                </div>
                <div className="text-sm text-muted-foreground">{c.size}</div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    Le défi
                  </div>
                  <p className="text-foreground/80">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    Notre intervention
                  </div>
                  <p className="text-foreground/80">{c.solution}</p>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {c.results.map((r) => (
                  <div
                    key={r.label}
                    className="border-l-4 border-accent pl-4"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">
                      {r.kpi}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
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
