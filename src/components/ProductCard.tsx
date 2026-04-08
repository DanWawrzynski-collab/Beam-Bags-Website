import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import React from "react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    features: string[];
    description?: string;
    colors?: string[];
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="aspect-[16/9] overflow-hidden relative bg-accent/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={() => console.error(`Failed to load image for ${product.name}: ${product.image}`)}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Eye className="w-5 h-5" />
          </Button>
          <Button size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
        <Badge className="absolute top-4 left-4 bg-primary text-black font-bold uppercase tracking-tighter">
          {product.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <span className="text-xl font-mono text-primary whitespace-nowrap">${product.price}</span>
        </div>
        
        <p className="text-sm text-muted-foreground font-light line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {product.features.slice(0, 3).map((feature) => (
            <span key={feature} className="text-[10px] uppercase tracking-widest text-muted-foreground border border-white/10 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
