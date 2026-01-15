import { Cog, Users, Headset, HardDrive, Code2 } from "lucide-react";

const teamMembers = [
  {
    role: "DevOps Engineer",
    description: "Expert en automatisation et déploiement continu. Optimise vos pipelines CI/CD.",
    icon: Cog,
    color: "bg-accent",
  },
  {
    role: "Chef de Projet",
    description: "Pilote vos projets IT avec rigueur et méthodologie agile pour des livraisons réussies.",
    icon: Users,
    color: "bg-primary",
  },
  {
    role: "Responsable Support",
    description: "Coordonne l'équipe support pour une assistance rapide et efficace à vos utilisateurs.",
    icon: Headset,
    color: "bg-secondary",
  },
  {
    role: "Responsable Infrastructure",
    description: "Architecte de vos systèmes réseau et serveurs pour une performance optimale.",
    icon: HardDrive,
    color: "bg-accent",
  },
  {
    role: "Lead Développeur",
    description: "Développe des solutions logicielles sur-mesure adaptées à vos besoins métiers.",
    icon: Code2,
    color: "bg-primary",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Équipe</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Des experts passionnés à votre service
          </h2>
          <p className="text-muted-foreground text-lg">
            Notre équipe pluridisciplinaire combine expertise technique et sens du service pour vous accompagner dans tous vos projets.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.role}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 shadow-soft hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top Accent Bar */}
              <div className={`h-1.5 ${member.color}`} />
              
              <div className="p-8">
                {/* Icon Badge */}
                <div className={`w-16 h-16 rounded-2xl ${member.color}/10 flex items-center justify-center mb-6`}>
                  <member.icon className={`w-8 h-8 text-foreground`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.role}</h3>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
