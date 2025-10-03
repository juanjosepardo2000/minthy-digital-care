import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
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

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre Minthy
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
