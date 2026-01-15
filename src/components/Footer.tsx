import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: ["Matériel Informatique", "Infrastructure", "Cybersécurité", "Support Technique"],
    Entreprise: ["À propos", "Notre équipe", "Carrières", "Blog"],
    Support: ["Centre d'aide", "Documentation", "Statut système", "Contact"],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-bold text-lg text-accent-foreground">TI</span>
              </div>
              <span className="font-bold text-xl">TechInfo Pro</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Votre partenaire de confiance pour toutes vos solutions informatiques. De l'équipement au support, nous accompagnons votre transformation digitale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 TechInfo Pro. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-accent transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
