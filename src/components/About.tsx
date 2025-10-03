import { Shield, Zap, Heart, CheckCircle } from "lucide-react";

export const About = () => {
  const benefits = [
    "Agendamiento de citas en segundos",
    "Historia clínica digital segura",
    "Recetas con firma electrónica legal",
    "Medicamentos a domicilio",
    "Teleconsultas desde cualquier lugar",
    "Recomendaciones inteligentes de médicos"
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">
            ¿Qué es <span className="text-primary">Minthy</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Minthy es la plataforma digital que transforma la atención médica. Conectamos pacientes, médicos, clínicas y farmacias en un solo lugar para que la salud sea más rápida, segura y cómoda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature Cards */}
          <div className="group p-8 rounded-2xl border-2 border-border hover:border-primary bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rápido y Eficiente</h3>
            <p className="text-muted-foreground">
              Desde agendar consultas hasta recibir medicamentos, todo en minutos desde tu celular.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-border hover:border-secondary bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">100% Seguro y Legal</h3>
            <p className="text-muted-foreground">
              Firma electrónica oficial, datos protegidos y procesos validados legalmente.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-border hover:border-accent bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enfoque Humano</h3>
            <p className="text-muted-foreground">
              Tecnología al servicio de tu salud, con el toque humano que mereces.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Todo lo que necesitas en una sola plataforma
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
