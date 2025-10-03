import logo from "@/assets/minthy-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img 
            src={logo} 
            alt="Minthy - Plataforma de Telemedicina" 
            className="h-8 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
