import logo from "@/assets/minthy-logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre Nosotros", id: "about" },
    { label: "Servicios", id: "servicios" },
    { label: "Cómo Funciona", id: "journey" },
    { label: "Futuro", id: "future" },
    { label: "Contacto", id: "contact" },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Minthy - Plataforma de Telemedicina" 
            className="h-8 w-auto cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section - Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection("servicios")}
            >
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => scrollToSection("servicios")}
                >
                  Agendar Cita
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};