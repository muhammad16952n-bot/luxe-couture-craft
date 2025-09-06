import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxury-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-up">
          Luxury
          <span className="block text-luxury-gold animate-luxury-glow">
            Redefined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Discover our exclusive collection of premium fashion pieces crafted for the modern connoisseur.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            variant="hero" 
            size="xl"
            className="group"
          >
            Explore Collection
            <span className="ml-2 group-hover:translate-x-1 luxury-transition">→</span>
          </Button>
          
          <Button 
            variant="luxury-outline" 
            size="xl"
            className="text-white border-white hover:bg-white hover:text-primary"
          >
            Watch Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;