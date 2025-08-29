import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Custom
            <span className="block text-eco-green">Drones & Bags</span>
            <span className="block text-3xl lg:text-4xl font-light">Tailored for You</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
            Professional-grade customizable drones and conservative bags designed 
            to match your lifestyle and specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="eco" size="lg" className="text-lg px-8 py-4">
              Customize Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              View Products
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-eco-green rounded-full"></div>
              <span>Custom Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Personal Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-blue-lighter rounded-full"></div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional customizable drone with premium design"
              className="w-full h-auto rounded-2xl shadow-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating tech indicators */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-eco-green rounded-full animate-pulse"></div>
              <span>Customizable</span>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Ready to Ship</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;