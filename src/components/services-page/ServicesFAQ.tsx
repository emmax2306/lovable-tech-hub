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
    q: "Avec quelles marques de matériel travaillez-vous ?",
    a: "Nous sommes partenaires Dell, HPE, Lenovo, Cisco, Fortinet, Microsoft et Veeam. Nous restons indépendants : la recommandation matériel suit toujours votre besoin, pas une commission.",
  },
  {
    q: "Que se passe-t-il si on n'est pas satisfait ?",
    a: "Tous nos contrats sont résiliables avec un préavis de 60 jours, sans pénalité. Nous préférons un client convaincu qu'un client engagé contre son gré.",
  },
];

const ServicesFAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Vos questions, nos réponses
          </h2>
          <p className="text-muted-foreground text-lg">
            Une question qui n'apparaît pas ici ? Écrivez-nous, on répond sous
            24h ouvrées.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-accent/40 shadow-soft"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-accent py-5 font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
