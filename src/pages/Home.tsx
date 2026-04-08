import React from "react";
import { Hero } from "@/src/components/Hero";
import { ProductCard } from "@/src/components/ProductCard";
import { siteConfig } from "@/src/config/siteConfig";
import { motion } from "motion/react";
import { ArrowRight, Battery, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Value Propositions */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
            >
              <Sun className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Solar Integration</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                High-efficiency monocrystalline panels seamlessly integrated into the fabric. Charge even in low-light conditions.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
            >
              <Battery className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Power Management</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Internal housing for power banks with intelligent voltage regulation to protect your devices from surges.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
            >
              <Zap className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Universal Ports</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Dual USB-C and Lightning ports conveniently located for on-the-go charging without opening your bag.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">The Collection</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">SIGNATURE SERIES</h3>
            </div>
            <Link to="/shop">
              <Button variant="link" className="text-primary font-bold uppercase tracking-widest group">
                View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Teaser */}
      <section className="py-24 bg-primary text-black overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none">
                ENGINEERED FOR THE FUTURE.
              </h2>
              <p className="text-lg mb-8 font-medium opacity-80">
                Our proprietary Beam-Cell™ technology converts sunlight into usable energy with 24% more efficiency than standard portable panels.
              </p>
              <Link to="/technology">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-primary font-bold uppercase tracking-widest h-14 px-8">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 md:w-96 md:h-96 border-[20px] border-black/20 rounded-full flex items-center justify-center"
              >
                <Zap className="w-32 h-32 md:w-48 md:h-48" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
