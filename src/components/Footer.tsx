import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Minthy
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              La plataforma digital que transforma la atención médica. Conectando pacientes, médicos y farmacias para una salud más rápida, segura y cómoda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Términos de uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aviso legal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Minthy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>para tu salud</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
