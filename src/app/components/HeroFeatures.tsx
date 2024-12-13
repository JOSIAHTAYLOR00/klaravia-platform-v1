import { Shield, Clock, Zap } from "lucide-react";

export function HeroFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Instant Design",
      description: "Get your custom solar design instantly using our advanced AI technology.",
    },
    {
      icon: Shield,
      title: "Best Price Guarantee",
      description: "Compare vetted installers competing for your business at wholesale prices.",
    },
    {
      icon: Clock,
      title: "Track Progress",
      description: "Monitor your installation journey with real-time updates at every step.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 py-12">
      {features.map((feature) => (
        <div key={feature.title} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-white/10">
          <div className="bg-amber-500/20 rounded-full p-3 w-fit mb-4">
            <feature.icon className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-main dark:text-gray-100/60 text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
