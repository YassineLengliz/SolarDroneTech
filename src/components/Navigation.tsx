import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-tech-blue">
            SolarDrone<span className="text-eco-green">Tech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-tech-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('specifications')}
              className="text-foreground hover:text-tech-blue transition-colors"
            >
              Specifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-tech-blue transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex"
            >
              Get Quote
            </Button>
            <Button 
              variant="tech"
              onClick={() => scrollToSection('contact')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;