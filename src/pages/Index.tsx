import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="specifications">
        <Specifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
