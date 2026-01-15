import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Avenue de la Tech\n75001 Paris, France",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+33 1 23 45 67 89",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@techinfopro.fr",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 9h00 - 18h00\nSupport 24/7",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground text-lg">
            Notre équipe est à votre écoute pour étudier vos besoins et vous proposer les meilleures solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-soft animate-fade-up">
            <h3 className="text-xl font-semibold text-foreground mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                  <Input
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="jean@entreprise.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Entreprise</label>
                <Input
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Décrivez votre projet ou vos besoins..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">Besoin d'une réponse rapide ?</h3>
              <p className="opacity-90 mb-6">
                Notre équipe commerciale est disponible pour discuter de vos besoins et vous proposer un devis personnalisé.
              </p>
              <Button variant="hero" size="lg">
                Demander un rappel
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl border border-border p-5 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
