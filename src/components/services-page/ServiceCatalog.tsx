import { Server, ShieldCheck, Cloud, Headphones, Wrench, Users } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Infrastructure & Réseau",
    pitch: "Concevoir, déployer, faire évoluer.",
    desc: "Architecture serveur, virtualisation, réseau filaire et Wi-Fi pro, baies de brassage. Tout pensé pour la fiabilité.",
    deliverables: ["Audit réseau", "Schéma d'architecture", "Installation clé en main", "Documentation technique"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    pitch: "Protéger ce qui compte vraiment.",
    desc: "Pare-feu nouvelle génération, EDR, sauvegardes immuables, sensibilisation des équipes et conformité RGPD/NIS2.",
    deliverables: ["Audit de sécurité", "PCA / PRA", "MFA & gestion des accès", "Plan de remédiation"],
  },
  {
    icon: Cloud,
    title: "Cloud & Migration",
    pitch: "Migrer sans casser.",
    desc: "Stratégie cloud hybride ou full cloud (Microsoft 365, Azure, Google Workspace). Migration progressive et sécurisée.",
    deliverables: ["Étude de cadrage", "Migration boîtes mail / fichiers", "Configuration tenants", "Reprise de l'existant"],
  },
  {
    icon: Headphones,
    title: "Support & Helpdesk",
    pitch: "Une vraie personne au bout du fil.",
    desc: "Hotline francophone 6j/7, prise en main à distance, intervention sur site. SLA contractualisé et reporting mensuel.",
    deliverables: ["Ticketing dédié", "Hotline prioritaire", "Intervention sur site", "Rapport mensuel"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Supervision",
    pitch: "Anticiper plutôt que réparer.",
    desc: "Monitoring 24/7 de vos serveurs et équipements, mises à jour planifiées, gestion préventive des pannes matérielles.",
    deliverables: ["Supervision 24/7", "Patch management", "Sauvegardes vérifiées", "Pièces de rechange"],
  },
  {
    icon: Users,
    title: "Conseil & Formation",
    pitch: "Rendre vos équipes autonomes.",
    desc: "Accompagnement DSI à temps partagé, gouvernance IT, formation utilisateurs et sensibilisation aux risques cyber.",
    deliverables: ["DSI à temps partagé", "Roadmap IT", "Ateliers utilisateurs", "Sessions phishing"],
  },
];

const ServiceCatalog = () => {
  return (
    <section id="catalogue" className="py-32 border-b border-white/5 bg-[#0a0b0e]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            ↳ Catalogue
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            Six expertises,
            <br />
            <span className="italic font-serif font-normal text-neutral-400">
              une seule promesse.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Tous nos services sont modulaires et combinables. Vous prenez ce
            dont vous avez besoin, quand vous en avez besoin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#0a0b0e] p-10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                  <s.icon className="w-5 h-5 text-amber-400 group-hover:text-[#0c0d10] transition-colors" />
                </div>
                <span className="text-xs text-neutral-600 font-mono">
                  0{services.indexOf(s) + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-neutral-100">
                {s.title}
              </h3>
              <p className="text-amber-400/90 italic font-serif text-lg mb-4">
                {s.pitch}
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">{s.desc}</p>

              <div className="pt-6 border-t border-white/5">
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                  Livrables
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-neutral-300 flex items-start gap-2"
                    >
                      <span className="text-amber-400 mt-1">→</span>
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
