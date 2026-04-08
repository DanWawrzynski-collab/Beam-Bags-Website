import { Link } from "react-router-dom";
import { siteConfig } from "@/src/config/siteConfig";
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                {siteConfig.name.toUpperCase()}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 font-light leading-relaxed">
              Redefining mobile freedom through sustainable energy. Our solar-powered backpacks are built for the modern explorer who refuses to be tethered.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.x} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">Navigation</h4>
            <ul className="space-y-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-muted-foreground hover:text-white transition-colors flex items-center group">
                    {item.title}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">Stay Charged</h4>
            <p className="text-xs text-muted-foreground mb-4">Join our community for exclusive drops and tech updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-accent border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-black p-2 rounded-lg hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} BEAM-BAGS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
