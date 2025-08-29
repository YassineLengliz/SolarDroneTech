import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact our engineering team to discuss your specific requirements and discover how our solar-powered GPS drones can revolutionize your applications.
            </p>
            
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Sales</h3>
                <p className="text-muted-foreground mb-3">For enterprise inquiries and custom solutions</p>
                <p className="text-foreground font-medium">sales@solardronetech.com</p>
                <p className="text-foreground font-medium">+1 (555) 123-4567</p>
              </Card>
              
              <Card className="p-6 border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Support</h3>
                <p className="text-muted-foreground mb-3">Engineering consultation and technical specifications</p>
                <p className="text-foreground font-medium">engineering@solardronetech.com</p>
                <p className="text-foreground font-medium">+1 (555) 123-4568</p>
              </Card>
              
              <div className="bg-gradient-eco rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Why Choose Our Drones?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Zero operational emissions</li>
                  <li>• Minimal maintenance requirements</li>
                  <li>• Conservative, proven engineering</li>
                  <li>• Professional-grade reliability</li>
                  <li>• Comprehensive warranty coverage</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Card className="p-8 border-border shadow-tech">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Request Information
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Requirements *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements, expected flight time, payload needs, and operational environment..."
                />
              </div>
              
              <Button type="submit" variant="tech" size="lg" className="w-full text-lg py-4">
                Submit Inquiry
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by our sales team regarding our products and services.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;