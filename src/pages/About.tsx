import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, FormEvent } from "react";

export default function AboutPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story */}
        <div className="flex flex-col gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Mission</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none">
              Powering the <span className="text-primary">Unbound</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
              Beam-Bags was born from a simple frustration: the tether. In a world where we can work from anywhere, we were still limited by the battery life of our devices.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We believe in mobile freedom. We believe that technology should empower us to explore further, stay longer, and create without boundaries—all while respecting the planet that provides our energy.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/5 bg-accent/20"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1ET3abJ9FGE7t3jKLbZPWcFqsVCo1YUzJ" 
              alt="Brand Story" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
              onError={() => console.error("Failed to load About page image")}
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-3xl font-bold tracking-tighter uppercase">Get in Touch</h3>
            <p className="text-muted-foreground font-light">
              Have questions about our tech or your order? Our team is ready to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center border border-white/5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">hello@beambags.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center border border-white/5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+1 (555) BEAM-BAG</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center border border-white/5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">HQ</p>
                  <p className="text-sm font-medium">Solar Valley, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</Label>
                  <Input 
                    id="name" 
                    required 
                    className="bg-accent border-white/5 h-12 focus-visible:ring-primary"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-accent border-white/5 h-12 focus-visible:ring-primary"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</Label>
                <textarea 
                  id="message" 
                  required 
                  rows={5}
                  className="w-full rounded-md bg-accent border border-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-bold uppercase tracking-widest group"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Message Sent" : "Send Message"}
                {!isSubmitted && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
