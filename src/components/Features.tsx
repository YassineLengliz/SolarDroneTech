import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "☀️",
      title: "Solar Energy Integration",
      description: "Advanced photovoltaic cells provide unlimited flight time during daylight hours with efficient energy storage for extended operations.",
      stats: "Up to 8 hours continuous flight"
    },
    {
      icon: "🛰️",
      title: "Precision GPS Navigation",
      description: "Military-grade GPS with real-time tracking, waypoint navigation, and return-to-home functionality for ultimate reliability.",
      stats: "±1m accuracy"
    },
    {
      icon: "🎨",
      title: "Conservative Design Excellence", 
      description: "Meticulously engineered with premium materials, conservative aesthetics, and time-tested engineering principles for maximum durability.",
      stats: "5-year warranty"
    },
    {
      icon: "🔧",
      title: "Advanced Autonomous Systems",
      description: "Intelligent flight control with obstacle avoidance, weather adaptation, and autonomous mission planning capabilities.",
      stats: "AI-powered"
    },
    {
      icon: "📡",
      title: "Long-Range Communication",
      description: "Extended range telemetry and control systems with encrypted data transmission and real-time monitoring capabilities.",
      stats: "50km range"
    },
    {
      icon: "💼",
      title: "Professional Applications",
      description: "Purpose-built for surveying, monitoring, inspection, and research applications with modular payload systems.",
      stats: "Multi-role capable"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engineering Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every component designed with precision, tested for reliability, and built to exceed expectations in the most demanding environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-border hover:shadow-tech transition-spring group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                {feature.stats}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;