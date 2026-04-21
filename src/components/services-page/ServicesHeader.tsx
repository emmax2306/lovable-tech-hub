import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Méthode", href: "#methode" },
  { label: "Services", href: "#catalogue" },
  { label: "Cas clients", href: "#cas-clients" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
];

const ServicesHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0c0d10]/70 border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center text-[#0c0d10] font-black text-sm">
            T
          </div>
          <span className="text-sm font-medium tracking-wide text-neutral-200">
            TechInfo Pro <span className="text-neutral-500">/ Services</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0c0d10] bg-amber-500 hover:bg-amber-400 transition-colors px-4 py-2 rounded-full"
        >
          Démarrer un projet
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default ServicesHeader;
