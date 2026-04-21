import { Server, ShieldCheck, Cloud, Headphones, Wrench, Users, Check } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Infrastructure & Réseau",
    pitch: "Concevoir, déployer, faire évoluer.",
    desc: "Architecture serveur, virtualisation, réseau filaire et Wi-Fi professionnel, baies de brassage. Une infrastructure robuste pensée pour votre croissance.",
    deliverables: ["Audit réseau complet", "Schéma d'architecture", "Installation clé en main", "Documentation technique"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    pitch: "Protéger ce qui compte vraiment.",
    desc: "Pare-feu nouvelle génération, EDR, sauvegardes immuables, sensibilisation des équipes et conformité RGPD/NIS2 pour une protection à 360°.",
    deliverables: ["Audit de sécurité", "Plan PCA / PRA", "MFA & gestion des accès", "Plan de remédiation"],
  },
  {
    icon: Cloud,
    title: "Cloud & Migration",
    pitch: "Migrer sans rien casser.",
    desc: "Stratégie cloud hybride ou full cloud (Microsoft 365, Azure, Google Workspace). Migration progressive, sécurisée et sans interruption de service.",
    deliverables: ["Étude de cadrage", "Migration mails & fichiers", "Configuration tenants", "Reprise de l'existant"],
  },
  {
    icon: Headphones,
    title: "Support & Helpdesk",
    pitch: "Une vraie personne au bout du fil.",
    desc: "Hotline francophone 6j/7, prise en main à distance, intervention sur site. SLA contractualisé et reporting mensuel transparent.",
    deliverables: ["Ticketing dédié", "Hotline prioritaire", "Intervention sur site", "Rapport mensuel"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Supervision",
    pitch: "Anticiper plutôt que réparer.",
    desc: "Monitoring 24/7 de vos serveurs et équipements, mises à jour planifiées, gestion préventive des pannes matérielles avant qu'elles n'arrivent.",
    deliverables: ["Supervision 24/7", "Patch management", "Sauvegardes vérifiées", "Pièces de rechange"],
  },
  {
    icon: Users,
    title: "Conseil & Formation",
    pitch: "Rendre vos équipes autonomes.",
    desc: "Accompagnement DSI à temps partagé, gouvernance IT, formation des utilisateurs et sensibilisation continue aux risques cyber.",
    deliverables: ["DSI à temps partagé", "Roadmap IT", "Ateliers utilisateurs", "Sessions phishing"],
  },
];

const ServiceCatalog = () => {
  return (
    <section id="catalogue" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Catalogue
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Six expertises, une seule promesse
          </h2>
          <p className="text-muted-foreground text-lg">
            Tous nos services sont modulaires et combinables. Vous prenez ce
            dont vous avez besoin, quand vous en avez besoin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 shadow-soft hover:shadow-card animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-mono text-muted-foreground/60">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">{s.pitch}</p>
              <p className="text-muted-foreground mb-6 flex-grow">{s.desc}</p>

              <div className="pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  Ce que vous recevez
                </div>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-foreground/80 flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalog;
