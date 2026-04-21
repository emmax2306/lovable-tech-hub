const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-32 lg:py-40 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Nos services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
            On ne vend pas
            <br />
            du matériel.
            <br />
            <span className="text-amber-400 italic font-serif font-normal">
              On résout vos problèmes IT.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            De l'audit initial au support 24/7, nous accompagnons les PME et ETI
            dans la conception, le déploiement et la maintenance de leur
            infrastructure informatique. Une méthode claire, des résultats
            mesurables.
          </p>

          <div className="flex flex-wrap gap-12 pt-8 border-t border-white/10">
            {[
              { value: "180+", label: "Clients accompagnés" },
              { value: "12 ans", label: "D'expertise terrain" },
              { value: "98%", label: "Taux de satisfaction" },
              { value: "<1h", label: "Délai d'intervention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-neutral-100">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
