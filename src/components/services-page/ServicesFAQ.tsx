import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Travaillez-vous avec les TPE ou seulement les grandes structures ?",
    a: "Nous accompagnons des entreprises de 10 à 500 collaborateurs. Nos offres sont modulaires : une TPE peut commencer par un simple contrat de support, puis monter en gamme selon ses besoins.",
  },
  {
    q: "Combien coûte un accompagnement ?",
    a: "Tout dépend du périmètre. Un audit initial est facturé entre 1 500 € et 4 000 €. Les contrats de support démarrent à 35 €/poste/mois. Nous chiffrons toujours précisément après échange.",
  },
  {
    q: "Combien de temps prend une migration cloud ?",
    a: "Pour 50 utilisateurs, comptez 4 à 8 semaines entre le cadrage et la mise en production. Nous procédons par lots pour ne jamais interrompre votre activité.",
  },
  {
    q: "Êtes-vous disponibles en dehors des heures de bureau ?",
    a: "Notre helpdesk est ouvert 6j/7 de 7h à 20h. Pour les contrats Premium, une astreinte 24/7 est incluse avec engagement d'intervention sous 1 heure.",
  },
  {
    q: "Travaillez-vous avec quelles marques de matériel ?",
    a: "Nous sommes partenaires Dell, HPE, Lenovo, Cisco, Fortinet, Microsoft et Veeam. Nous restons indépendants : la recommandation matériel suit toujours votre besoin, pas une commission.",
  },
  {
    q: "Que se passe-t-il si on n'est pas satisfait ?",
    a: "Tous nos contrats sont résiliables avec un préavis de 60 jours, sans pénalité. Nous préférons un client convaincu qu'un client engagé contre son gré.",
  },
];

const ServicesFAQ = () => {
  return (
    <section id="faq" className="py-32 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
              ↳ FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Vos questions,
              <br />
              <span className="italic font-serif font-normal text-neutral-400">
                nos réponses.
              </span>
            </h2>
            <p className="text-neutral-400">
              Une question qui n'apparaît pas ici ? Écrivez-nous, on répond
              sous 24h ouvrées.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-white/10 rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04] data-[state=open]:border-amber-500/30"
                >
                  <AccordionTrigger className="text-left text-neutral-100 hover:no-underline hover:text-amber-400 py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400 leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
