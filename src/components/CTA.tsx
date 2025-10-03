import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-5 -z-10" />
        
        {/* Animated shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-border rounded-3xl p-8 lg:p-16 shadow-strong relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
                  <Sparkles className="w-4 h-4" />
                  Únete a la revolución de la salud digital
                </div>

                {/* Heading */}
                <h2 className="text-4xl lg:text-5xl">
                  ¿Listo para transformar tu{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    experiencia médica
                  </span>?
                </h2>

                {/* Description */}
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Minthy: la salud digital, más cerca de ti. Comienza hoy y descubre la forma más moderna de cuidar tu salud.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="group"
                    onClick={() => scrollToSection("servicios")}
                  >
                    Agendar cita ahora
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="hero-outline" 
                    size="lg" 
                    className="group"
                    onClick={() => scrollToSection("medicos")}
                  >
                    Únete como médico
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Sin costo de registro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Configura tu perfil en minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 glass border-t border-border/40 animate-slide-in-up">
        <Button 
          className="w-full shadow-glow" 
          variant="hero"
          onClick={() => scrollToSection("servicios")}
        >
          Agendar Cita Ahora
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </>
  );
};
