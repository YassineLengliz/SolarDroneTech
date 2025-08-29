import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Specifications = () => {
  const specs = [
    {
      category: "Power System",
      items: [
        { label: "Solar Panels", value: "High-efficiency monocrystalline", highlight: true },
        { label: "Battery", value: "Lithium-ion 15,000mAh" },
        { label: "Charging Time", value: "4 hours (solar) / 2 hours (AC)" },
        { label: "Flight Time", value: "8+ hours continuous" }
      ]
    },
    {
      category: "Navigation & Control",
      items: [
        { label: "GPS System", value: "Dual-band RTK GPS", highlight: true },
        { label: "Positioning Accuracy", value: "±1 meter" },
        { label: "Communication Range", value: "50km line-of-sight" },
        { label: "Obstacle Avoidance", value: "360° LiDAR array" }
      ]
    },
    {
      category: "Physical Specifications",
      items: [
        { label: "Wingspan", value: "3.2 meters" },
        { label: "Weight", value: "8.5 kg (ready to fly)" },
        { label: "Max Payload", value: "2.5 kg" },
        { label: "Operating Altitude", value: "Up to 4,000m AGL", highlight: true }
      ]
    },
    {
      category: "Environmental",
      items: [
        { label: "Operating Temperature", value: "-20°C to +60°C" },
        { label: "Wind Resistance", value: "Up to 45 km/h" },
        { label: "Water Resistance", value: "IP65 rated", highlight: true },
        { label: "Materials", value: "Carbon fiber composite" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision-engineered components and conservative design principles ensure reliable performance in demanding professional applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((section, index) => (
            <Card key={index} className="p-8 border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                {section.category}
                <Badge variant="outline" className="text-xs">
                  CERTIFIED
                </Badge>
              </h3>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                    <span className="text-muted-foreground font-medium">
                      {item.label}
                    </span>
                    <span className={`font-semibold text-right max-w-xs ${
                      item.highlight ? 'text-eco-green' : 'text-foreground'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-tech text-white border-0 shadow-premium max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Professional Certification</h3>
            <p className="text-xl text-white/90 mb-6">
              All our drones meet international aviation standards and are certified for commercial operations.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-eco-green rounded-full"></div>
                <span>CE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>FCC Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-eco-green rounded-full"></div>
                <span>ISO 9001</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specifications;