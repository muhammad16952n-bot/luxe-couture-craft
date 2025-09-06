import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Customer Care": [
      "Contact Us",
      "Size Guide",
      "Shipping & Returns",
      "FAQ",
      "Track Your Order"
    ],
    "About LUXÉ": [
      "Our Story",
      "Craftsmanship",
      "Sustainability",
      "Careers",
      "Press"
    ],
    "Collections": [
      "New Arrivals",
      "Women",
      "Men",
      "Accessories",
      "Limited Edition"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Be the first to discover our latest collections and exclusive events
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-0"
              />
              <Button variant="gold" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-6">
              LUXÉ
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Crafting luxury fashion experiences since our foundation. Each piece tells a story of elegance, sophistication, and timeless design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-luxury-gold" />
                <span>123 Luxury Avenue, Fashion District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-luxury-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-luxury-gold" />
                <span>contact@luxebrand.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-luxury-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-luxury-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-luxury-gold">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-luxury-gold">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-luxury-gold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-primary-foreground/80 hover:text-luxury-gold justify-start font-normal"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-luxury-gold/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 LUXÉ. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Button variant="ghost" className="h-auto p-0 text-primary-foreground/60 hover:text-luxury-gold">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-primary-foreground/60 hover:text-luxury-gold">
              Terms of Service
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-primary-foreground/60 hover:text-luxury-gold">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;