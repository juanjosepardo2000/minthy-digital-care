import { Calendar, Video, FileCheck, Package } from "lucide-react";

export const Journey = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Agenda tu cita",
      description: "Selecciona tu médico ideal y elige el horario que mejor te convenga en segundos.",
      color: "primary"
    },
    {
      icon: Video,
      title: "Recibe tu consulta",
      description: "Atención presencial o teleconsulta desde la comodidad de tu hogar.",
      color: "secondary"
    },
    {
      icon: FileCheck,
      title: "Obtén tu receta digital",
      description: "Receta legal con firma electrónica, disponible al instante en tu aplicación.",
      color: "accent"
    },
    {
      icon: Package,
      title: "Medicamentos a casa",
      description: "Tus medicamentos llegan a domicilio desde farmacias aliadas de confianza.",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case "primary": return {
        bg: "bg-primary",
        ring: "ring-primary/20",
        text: "text-primary"
      };
      case "secondary": return {
        bg: "bg-secondary",
        ring: "ring-secondary/20",
        text: "text-secondary"
      };
      case "accent": return {
        bg: "bg-accent",
        ring: "ring-accent/20",
        text: "text-accent"
      };
      default: return {
        bg: "bg-primary",
        ring: "ring-primary/20",
        text: "text-primary"
      };
    }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Tu salud en 4 pasos simples</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde agendar hasta recibir, todo el proceso es rápido, fácil y completamente digital
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step number */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${colors.bg} text-white flex items-center justify-center text-2xl font-bold shadow-medium ring-8 ${colors.ring} relative z-10`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${colors.bg}/10 flex items-center justify-center`}>
                    <step.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Todo el proceso en menos de 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
