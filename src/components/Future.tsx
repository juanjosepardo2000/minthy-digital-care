import { Heart, Activity, TestTube, Building2, Globe, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

// Importar las imágenes
import iomtImage from "@/assets/iomt-monitoring.jpg";
import labImage from "@/assets/lab-integration.jpg";
import ecosystemImage from "@/assets/health-ecosystem.jpg";
import expansionImage from "@/assets/regional-expansion.jpg";

export const Future = () => {
  const innovations = [
    {
      icon: Activity,
      title: "Monitoreo Remoto de Signos Vitales (IoMT)",
      description: "Minthy integrará dispositivos médicos inteligentes mediantes IoMT (Internet de las cosas médicas) que permitirán monitorear en tiempo real los signos vitales de los pacientes desde sus hogares (presión arterial, frecuencia cardíaca, temperatura, oxígeno en sangre, nivel de glucosa, entre otros).",
      innovations: [
        "Basado en el Internet de las Cosas Médicas (IoMT)",
        "Integración validada dentro del Parque Tecnológico y Científico de la UTPL",
        "Permite una atención preventiva, predictiva y personalizada"
      ],
      benefits: {
        doctors: "Seguimiento continuo sin necesidad de visitas presenciales, diagnósticos más precisos y prevención de emergencias",
        patients: "Tranquilidad total, ya que su salud es monitoreada 24/7 desde casa"
      },
      color: "primary",
      emoji: "❤️‍🩹",
      image: iomtImage
    },
    {
      icon: TestTube,
      title: "Integración con Laboratorios e Imagenología",
      description: "Los laboratorios clínicos y centros de imagenología aliados podrán subir directamente los resultados de exámenes (rayos X, ecografías, tomografías, análisis de sangre, etc.) al perfil digital del paciente.",
      innovations: [
        "Interconexión directa entre médicos y laboratorios",
        "Resultados digitales disponibles al instante",
        "Integración segura y certificada bajo estándares médicos"
      ],
      benefits: {
        doctors: "Diagnóstico ágil con acceso inmediato a resultados",
        patients: "Menos desplazamientos, tiempos de espera mínimos y resultados siempre disponibles en su historia clínica digital"
      },
      color: "secondary",
      emoji: "🧬",
      image: labImage
    },
    {
      icon: Building2,
      title: "Ecosistema Integral de Salud Digital",
      description: "Minthy se convertirá en un ecosistema completo de salud, conectando pacientes, médicos, clínicas, laboratorios y farmacias en un solo entorno digital.",
      innovations: [
        "Plataforma 360° interoperable",
        "Conexión en tiempo real entre los distintos servicios médicos",
        "Base sólida para expansión regional o alianzas con aseguradoras"
      ],
      benefits: {
        doctors: "Una red integrada que centraliza todo su flujo de trabajo",
        patients: "Una experiencia médica sin interrupciones, desde el diagnóstico hasta el tratamiento"
      },
      color: "accent",
      emoji: "🏥",
      image: ecosystemImage
    },
    {
      icon: Globe,
      title: "Expansión Regional y Alianzas Estratégicas",
      description: "Minthy proyecta su crecimiento a nivel regional mediante alianzas con clínicas, universidades y empresas de salud, convirtiéndose en una referencia tecnológica del sector médico en Latinoamérica.",
      innovations: [],
      benefits: {
        doctors: "Oportunidades de colaboración, docencia e investigación",
        patients: "Acceso a una red médica amplia y confiable"
      },
      color: "primary",
      emoji: "🌍",
      image: expansionImage
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "primary": return "bg-primary/10 text-primary border-primary/20";
      case "secondary": return "bg-secondary/10 text-secondary border-secondary/20";
      case "accent": return "bg-accent/10 text-accent border-accent/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="future" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Próximas Innovaciones
          </div>
          <h2 className="mb-6">El Futuro de Minthy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos construyendo un ecosistema médico completamente interconectado, donde la tecnología y la empatía trabajan juntas para ofrecer una atención más humana, inteligente y accesible.
          </p>
        </div>

        {/* Innovations Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                {/* Image Section */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <img 
                    src={innovation.image} 
                    alt={innovation.title}
                    className="w-full h-full object-cover"
                  />
             
  
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-10 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-3">{innovation.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>

                  {/* Innovations List */}
                  {innovation.innovations.length > 0 && (
                    <div className="mb-6 bg-muted/30 rounded-xl p-5">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Innovación
                      </h4>
                      <ul className="space-y-2">
                        {innovation.innovations.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  <div className="bg-muted/30 rounded-xl p-5">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-secondary" />
                      Beneficios
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Para médicos:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{innovation.benefits.doctors}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary mb-1">Para pacientes:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{innovation.benefits.patients}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Final */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold"> Visión Final</h3>
            </div>
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              El futuro de Minthy es un ecosistema médico completamente interconectado, donde la tecnología y la empatía trabajan juntas para ofrecer una atención más humana, inteligente y accesible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};