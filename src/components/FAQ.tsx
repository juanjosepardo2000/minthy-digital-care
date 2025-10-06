import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquarePlus, Send } from "lucide-react";
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

export const FAQ = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "¿Minthy es legal y segura?",
      answer: "Sí, absolutamente. Utilizamos firma electrónica oficial, cumplimos con todas las normativas de salud digital y tus datos están protegidos con los más altos estándares de seguridad."
    },
    {
      question: "¿Cómo funciona el agendamiento de citas?",
      answer: "Es muy simple: seleccionas el médico que necesitas, eliges un horario disponible y confirmas. Recibirás recordatorios automáticos y podrás gestionar tus citas desde la app."
    },
    {
      question: "¿La receta digital tiene validez legal?",
      answer: "Sí, todas nuestras recetas digitales cuentan con firma electrónica oficial y son completamente legales. Puedes usarlas en cualquier farmacia."
    },
    {
      question: "¿Cómo llegan los medicamentos a casa?",
      answer: "Una vez que recibas tu receta digital, puedes solicitar que tus medicamentos sean entregados a domicilio desde nuestras farmacias aliadas. El tiempo de entrega varía según tu ubicación."
    },
    {
      question: "¿Los médicos pueden atender desde cualquier lugar?",
      answer: "Sí, nuestros médicos pueden realizar teleconsultas desde cualquier ubicación, ampliando su alcance geográfico y facilitando el acceso a la salud para más pacientes."
    },
    {
      question: "¿Cuánto cuesta usar Minthy?",
      answer: "El uso de la plataforma es gratuito. Solo pagas por las consultas médicas que realices, según las tarifas establecidas por cada profesional."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Guardar la pregunta en Firebase
      await addDoc(collection(db, "preguntas"), {
        nombre: name,
        email: email,
        pregunta: question,
        fecha: Timestamp.now(),
        leida: false
      });

      // Limpiar el formulario
      setName("");
      setEmail("");
      setQuestion("");

      // Mostrar mensaje de éxito
      toast.success("¡Pregunta enviada!", {
        description: "Gracias por tu pregunta. Te responderemos pronto."
      });
    } catch (error) {
      console.error("Error al enviar la pregunta:", error);
      toast.error("Error al enviar", {
        description: "Hubo un problema al enviar tu pregunta. Intenta de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre Minthy
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Accordion de Preguntas Frecuentes */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
              <AccordionTrigger className="text-left font-semibold text-base hover:text-primary">
                {faq.question}
              </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Formulario de Preguntas Personalizadas */}
          <Card className="p-8 border-2 border-primary/20 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquarePlus className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">¿Tienes otra pregunta?</h3>
                <p className="text-sm text-muted-foreground">
                  Envíanos tu consulta y te responderemos lo antes posible
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="faq-name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <Input 
                    id="faq-name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="faq-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="faq-email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="faq-question" className="block text-sm font-medium mb-2">
                  Tu pregunta
                </label>
                <Textarea 
                  id="faq-question"
                  placeholder="Escribe tu pregunta aquí..."
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Pregunta
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};