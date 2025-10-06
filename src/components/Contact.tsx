import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "medicalplatform6@gmail.com",
      link: "mailto:medicalplatform6@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+593 985883283",
      link: "tel:+593985883283",
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Loja, Ecuador",
      link: "#",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 8:00 AM - 6:00 PM",
      link: "#",
      color: "primary"
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
    <section id="contact" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8">
                Estamos disponibles para responder todas tus consultas sobre nuestros servicios de telemedicina.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={item.link}
                    className="block group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${getColorClass(item.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </a>
                </Card>
              ))}
            </div>

            {/* Map or Additional Info */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nuestra Ubicación
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                <br />
                Loja, Ecuador
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground/30" />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="+593 123 456 789"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo electrónico
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <Textarea 
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};