import { Link } from "react-router-dom";

const ServicesFooter = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#0a0b0e]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center text-[#0c0d10] font-black text-sm">
              T
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-200">
                TechInfo Pro
              </div>
              <div className="text-xs text-neutral-500">
                Services IT pour les entreprises
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              ← Site principal
            </Link>
            <a href="#methode" className="hover:text-amber-400 transition-colors">
              Méthode
            </a>
            <a href="#catalogue" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="text-xs text-neutral-600">
            © {new Date().getFullYear()} TechInfo Pro
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ServicesFooter;
