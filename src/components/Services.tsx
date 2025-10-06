import { 
  Calendar, 
  Video, 
  FileText, 
  Pill, 
  Brain, 
  FolderHeart,
  UserCircle,
  Search,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Services = () => {
  const patientServices = [
    {
      icon: Search,
      title: "Encuentra tu médico ideal",
      description: "Asistente inteligente que te recomienda el especialista adecuado según tus síntomas.",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Agenda en segundos",
      description: "Olvida las filas y llamadas. Agenda tu cita en cualquier momento con recordatorios automáticos.",
      color: "secondary"
    },
    {
      icon: Video,
      title: "Consulta sin salir de casa",
      description: "Teleconsultas seguras con tu médico, con historia clínica registrada en la plataforma.",
      color: "accent"
    },
    {
      icon: FileText,
      title: "Tu receta legal al instante",
      description: "Recibe tu receta digital con firma electrónica válida, directo en tu app.",
      color: "primary"
    },
    {
      icon: Pill,
      title: "Medicamentos a domicilio",
      description: "Recibe tus medicamentos en casa desde farmacias aliadas. Rápido y confiable.",
      color: "secondary"
    },
    {
      icon: FolderHeart,
      title: "Tu historia clínica siempre contigo",
      description: "Accede a tu historial médico completo, firmado electrónicamente y 100% protegido.",
      color: "accent"
    }
  ];

  const doctorServices = [
    {
      icon: UserCircle,
      title: "Consultorio digital profesional",
      description: "Fortalece tu marca, muestra tu experiencia, logros e investigaciones. Tu identidad profesional visible.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Mayor visibilidad con IA",
      description: "Nuestra IA recomienda tu perfil a pacientes según sus necesidades. Amplía tu alcance sin esfuerzo.",
      color: "secondary"
    },
    {
      icon: Calendar,
      title: "Gestión automática de agenda",
      description: "Olvida las llamadas y anotaciones. Tu agenda se gestiona sola con recordatorios automáticos.",
      color: "accent"
    },
    {
      icon: Video,
      title: "Atiende desde cualquier lugar",
      description: "Amplía tu alcance geográfico con teleconsultas integradas. Más pacientes, más flexibilidad.",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Seguimiento continuo fácil",
      description: "Revisa el historial de consultas de cada paciente en segundos. Mejor continuidad de atención.",
      color: "secondary"
    },
    {
      icon: FileText,
      title: "Firma electrónica legal",
      description: "Prescribe y firma recetas digitales con validez legal en segundos. Sin papeles, sin riesgos.",
      color: "accent"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "primary": return "bg-primary/10 text-primary";
      case "secondary": return "bg-secondary/10 text-secondary";
      case "accent": return "bg-accent/10 text-accent";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Servicios diseñados para ti</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Minthy transforma la experiencia médica para pacientes y profesionales
          </p>
        </div>

        <Tabs defaultValue="patients" className="w-full" id="medicos">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="patients" className="text-base">Para Pacientes</TabsTrigger>
            <TabsTrigger value="doctors" className="text-base">Para Médicos</TabsTrigger>
          </TabsList>

          <TabsContent value="patients" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patientServices.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/50 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${getColorClass(service.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctorServices.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 border-2 hover:border-secondary/50 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${getColorClass(service.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
