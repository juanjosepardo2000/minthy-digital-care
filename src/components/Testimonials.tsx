import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Paciente",
      text: "Agendé mi cita en segundos y recibí mis medicamentos en casa el mismo día. Minthy transformó mi experiencia médica completamente.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Dr. Carlos Ramírez",
      role: "Cardiólogo",
      text: "Ahora atiendo a mis pacientes sin depender del papel y con mayor alcance. La plataforma es intuitiva y realmente facilita mi trabajo diario.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Paciente",
      text: "La teleconsulta fue increíblemente cómoda. Pude hablar con mi médico desde casa y recibí mi receta digital al instante. ¡Excelente servicio!",
      rating: 5,
      avatar: "AM"
    },
    {
      name: "Dra. Laura Torres",
      role: "Pediatra",
      text: "Minthy me permite gestionar mi consultorio de forma moderna y eficiente. La firma electrónica es un cambio radical en mi práctica médica.",
      rating: 5,
      avatar: "LT"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Historias de éxito</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Minthy está transformando la experiencia médica de pacientes y profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 animate-fade-in-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote decoration */}
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="relative">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
