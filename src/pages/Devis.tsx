import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  "Infrastructure & Réseau",
  "Cybersécurité",
  "Cloud & Hébergement",
  "Support & Maintenance",
  "Postes de travail",
  "Téléphonie / VoIP",
  "Conseil & Audit",
  "Autre",
];

const BUDGETS = [
  "< 5 000 €",
  "5 000 € – 15 000 €",
  "15 000 € – 50 000 €",
  "50 000 € +",
  "À définir ensemble",
];

const DELAIS = [
  "Urgent (< 2 semaines)",
  "Sous 1 mois",
  "1 à 3 mois",
  "Pas de date fixe",
];

const Devis = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    employees: "",
    budget: "",
    deadline: "",
    description: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast({
        title: "Sélectionnez au moins un service",
        description: "Indiquez les prestations qui vous intéressent.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Demande envoyée !",
      description: "Nous revenons vers vous sous 24h ouvrées.",
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-hero relative overflow-hidden py-20 md:py-28">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Devis gratuit & sans engagement
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 leading-tight">
                Obtenez un devis personnalisé en 24h
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Décrivez votre projet IT, nous revenons vers vous avec une
                proposition claire, chiffrée et adaptée à vos besoins.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
                {[
                  { icon: Clock, label: "Réponse sous 24h" },
                  { icon: ShieldCheck, label: "Sans engagement" },
                  { icon: CheckCircle2, label: "Devis détaillé" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 justify-center text-primary-foreground/90 text-sm"
                  >
                    <item.icon className="w-4 h-4 text-secondary" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-card border border-border rounded-2xl p-10 md:p-14 text-center shadow-card animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Merci pour votre demande !
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Un de nos experts étudie votre projet et vous recontacte
                    sous 24h ouvrées avec une proposition personnalisée.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedServices([]);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        role: "",
                        employees: "",
                        budget: "",
                        deadline: "",
                        description: "",
                      });
                    }}
                  >
                    Faire une autre demande
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-card space-y-10"
                >
                  {/* Step 1 - Services */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        1
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Quels services vous intéressent ?
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {SERVICES.map((service) => {
                        const checked = selectedServices.includes(service);
                        return (
                          <label
                            key={service}
                            className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                              checked
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/40"
                            }`}
                          >
                            <Checkbox
                              checked={checked}
                              onCheckedChange={() => toggleService(service)}
                            />
                            <span className="text-sm font-medium text-foreground">
                              {service}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2 - Project */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        2
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Votre projet
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Budget estimé
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(v) =>
                            setFormData({ ...formData, budget: v })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            {BUDGETS.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Délai souhaité
                        </label>
                        <Select
                          value={formData.deadline}
                          onValueChange={(v) =>
                            setFormData({ ...formData, deadline: v })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            {DELAIS.map((d) => (
                              <SelectItem key={d} value={d}>
                                {d}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Décrivez votre besoin
                      </label>
                      <Textarea
                        rows={5}
                        placeholder="Contexte, objectifs, contraintes techniques, infrastructure existante..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Step 3 - Contact */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        3
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Vos coordonnées
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nom complet *
                        </label>
                        <Input
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Fonction
                        </label>
                        <Input
                          placeholder="Directeur, RSSI, DSI..."
                          value={formData.role}
                          onChange={(e) =>
                            setFormData({ ...formData, role: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email professionnel *
                        </label>
                        <Input
                          type="email"
                          placeholder="jean@entreprise.fr"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          placeholder="+33 1 23 45 67 89"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Entreprise *
                        </label>
                        <Input
                          placeholder="Nom de l'entreprise"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Effectif
                        </label>
                        <Select
                          value={formData.employees}
                          onValueChange={(v) =>
                            setFormData({ ...formData, employees: v })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1 à 10</SelectItem>
                            <SelectItem value="11-50">11 à 50</SelectItem>
                            <SelectItem value="51-200">51 à 200</SelectItem>
                            <SelectItem value="200+">200+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Envoyer ma demande
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Vos données restent confidentielles et ne sont utilisées
                      que pour traiter votre demande.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Devis;
