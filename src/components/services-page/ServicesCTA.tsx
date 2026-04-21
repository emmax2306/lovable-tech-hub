import { ArrowUpRight, Mail, Phone } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            ↳ On en discute ?
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1] mb-10">
            Parlons de votre
            <br />
            <span className="italic font-serif font-normal">
              prochain chantier IT.
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mb-12">
            30 minutes au téléphone, sans engagement. On comprend votre
            contexte, on vous dit franchement si on peut aider.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:contact@techinfopro.fr"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0c0d10] font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Demander un échange
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+33100000000"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 text-neutral-100 font-semibold px-7 py-4 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              01 00 00 00 00
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div>
              <Mail className="w-5 h-5 text-amber-400 mb-3" />
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Par email
              </div>
              <div className="text-neutral-200">contact@techinfopro.fr</div>
            </div>
            <div>
              <Phone className="w-5 h-5 text-amber-400 mb-3" />
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Hotline
              </div>
              <div className="text-neutral-200">Lun–Sam · 7h–20h</div>
            </div>
            <div>
              <ArrowUpRight className="w-5 h-5 text-amber-400 mb-3" />
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Sur place
              </div>
              <div className="text-neutral-200">France entière</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
