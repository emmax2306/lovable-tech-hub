import { Monitor, Server, ShieldCheck, Headphones, Settings, Code } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Matériel Informatique",
    description: "Ordinateurs, serveurs, périphériques et accessoires des meilleures marques pour équiper votre entreprise.",
  },
  {
    icon: Server,
    title: "Infrastructure IT",
    description: "Conception et déploiement d'infrastructures réseau robustes et évolutives pour votre croissance.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    description: "Protection de vos données et systèmes avec des solutions de sécurité avancées et conformes.",
  },
  {
    icon: Headphones,
    title: "Support Technique",
    description: "Assistance réactive et professionnelle pour résoudre tous vos problèmes techniques 24/7.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Contrats de maintenance préventive et curative pour garantir la continuité de vos opérations.",
  },
  {
    icon: Code,
    title: "Solutions DevOps",
    description: "Automatisation, CI/CD et optimisation de vos processus de développement et déploiement.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Des solutions complètes pour votre infrastructure IT
          </h2>
          <p className="text-muted-foreground text-lg">
            Nous proposons une gamme complète de services pour répondre à tous vos besoins informatiques, de l'équipement à la maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 shadow-soft hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
