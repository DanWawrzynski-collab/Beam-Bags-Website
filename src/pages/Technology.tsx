import { motion } from "motion/react";
import { Zap, Sun, Shield, Cpu, Battery, Cable } from "lucide-react";

export default function TechnologyPage() {
  const features = [
    {
      icon: Sun,
      title: "Beam-Cell™ Panels",
      description: "Next-generation monocrystalline solar cells with a 24.2% conversion rate, the highest in the consumer market."
    },
    {
      icon: Cpu,
      title: "Smart-Flow™ Controller",
      description: "Intelligent power management system that optimizes charging speed based on device requirements and solar intensity."
    },
    {
      icon: Shield,
      title: "Weather-Shield™",
      description: "IP67-rated waterproofing for the solar array and internal electronics, ensuring performance in any environment."
    },
    {
      icon: Battery,
      title: "Power-Vault™ Housing",
      description: "Dedicated, shock-proof compartment for power banks with integrated cable management systems."
    },
    {
      icon: Cable,
      title: "Multi-Port Output",
      description: "External access ports including USB-C Power Delivery (PD) and Lightning for rapid charging of all modern devices."
    },
    {
      icon: Zap,
      title: "Rapid-Charge Tech",
      description: "Proprietary circuitry that enables 15W output directly from solar panels under optimal sunlight."
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none">
              The Science of <span className="text-primary">Beam-Bags</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              We didn't just add a solar panel to a backpack. We re-engineered the entire concept of portable energy. Every component is designed to maximize efficiency and durability.
            </p>
            <div className="flex items-center space-x-4 text-primary">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Advanced Engineering</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative glass p-8 rounded-3xl border-white/10 aspect-square flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-white/5 rounded-2xl border border-white/10" />
                <div className="bg-primary/20 rounded-2xl border border-primary/20" />
                <div className="bg-primary/20 rounded-2xl border border-primary/20" />
                <div className="bg-white/5 rounded-2xl border border-white/10" />
              </div>
              <Zap className="absolute w-32 h-32 text-primary drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-accent/50 hover:bg-accent transition-colors group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Table */}
        <div className="glass rounded-3xl border-white/10 overflow-hidden">
          <div className="p-8 border-b border-white/10 bg-white/5">
            <h2 className="text-2xl font-bold tracking-tight uppercase">Technical Specifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              { label: "Solar Type", value: "Monocrystalline Silicon" },
              { label: "Peak Power", value: "20 Watts" },
              { label: "Conversion Rate", value: "24.2%" },
              { label: "Output Ports", value: "USB-C PD (18W), Lightning (12W)" },
              { label: "Material", value: "1680D Ballistic Nylon" },
              { label: "Waterproofing", value: "IP67 Rated Electronics" },
              { label: "Weight", value: "1.2 kg (Empty)" },
              { label: "Capacity", value: "25 Liters" },
            ].map((spec, i) => (
              <div key={spec.label} className={`p-6 flex justify-between items-center border-white/5 ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 6 ? 'border-b' : ''}`}>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">{spec.label}</span>
                <span className="text-sm font-mono text-primary">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
