export const siteConfig = {
  name: "Beam-Bags",
  tagline: "Effortless Charging: A Change in Normal Backpacks",
  description: "Premium solar-powered backpacks for the modern explorer. High-tech, sustainable, and futuristic gear.",
  theme: {
    primary: "#00D1FF", // Electric Blue
    secondary: "#FFD700", // Solar Yellow
    background: "#0A0A0A", // Deep Obsidian
    foreground: "#FFFFFF",
    accent: "#1A1A1A", // Charcoal
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "Technology", href: "/technology" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  products: [
    {
      id: "sig-01",
      name: "Signature Series: Stealth Black",
      price: 159,
      description: "The ultimate minimalist solar backpack. Sleek, durable, and powerful.",
      image: "https://lh3.googleusercontent.com/d/1SoXnWnQi1GTo-xx8ErqauUWqKqv7J55V",
      category: "Signature Series",
      features: ["20W Solar Panel", "USB-C PD Output", "Water Resistant", "Anti-Theft Pocket"],
      colors: ["Stealth Black", "Solar White", "Kinetic Grey"]
    },
    {
      id: "sig-02",
      name: "Signature Series: Solar White",
      price: 159,
      description: "Clean aesthetic with maximum solar efficiency. Perfect for the urban nomad.",
      image: "https://lh3.googleusercontent.com/d/1BnNI_azEvYKsMHnyZnzk0w_501uwO2l6",
      category: "Signature Series",
      features: ["20W Solar Panel", "USB-C PD Output", "Water Resistant", "Anti-Theft Pocket"],
      colors: ["Stealth Black", "Solar White", "Kinetic Grey"]
    },
    {
      id: "sig-03",
      name: "Signature Series: Kinetic Grey",
      price: 159,
      description: "Industrial design meets green energy. Built for the rugged explorer.",
      image: "https://lh3.googleusercontent.com/d/13PawlAxNyDwlYJ91ABERJDgpVUkBu1Ct",
      category: "Signature Series",
      features: ["20W Solar Panel", "USB-C PD Output", "Water Resistant", "Anti-Theft Pocket"],
      colors: ["Stealth Black", "Solar White", "Kinetic Grey"]
    }
  ],
  blog: [
    {
      id: "blog-1",
      title: "The Future of Mobile Energy",
      excerpt: "How solar technology is changing the way we travel and work remotely.",
      date: "2024-03-15",
      content: "Full content here..."
    },
    {
      id: "blog-2",
      title: "Sustainable Travel Tips",
      excerpt: "Minimize your carbon footprint while exploring the world.",
      date: "2024-03-10",
      content: "Full content here..."
    }
  ],
  social: {
    instagram: "https://instagram.com/beambags",
    x: "https://x.com/beambags",
    linkedin: "https://linkedin.com/company/beambags"
  }
};

export type SiteConfig = typeof siteConfig;
