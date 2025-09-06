import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Navigation = ({ cartItemsCount = 0, onCartClick }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Women", items: ["Bags", "Shoes", "Accessories", "Ready-to-Wear"] },
    { name: "Men", items: ["Shoes", "Bags", "Accessories", "Ready-to-Wear"] },
    { name: "Collections", items: ["New Arrivals", "Signature", "Limited Edition"] },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary luxury-transition hover:text-luxury-gold cursor-pointer">
              LUXÉ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {categories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-luxury-gold luxury-transition group"
                    >
                      {category.name}
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-background border-border shadow-lg">
                    {category.items.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        className="cursor-pointer hover:bg-luxury-champagne hover:text-luxury-charcoal luxury-transition"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative hover:text-luxury-gold luxury-transition"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-luxury-gold text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <h3 className="font-semibold text-primary px-3 py-2">
                    {category.name}
                  </h3>
                  {category.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="w-full justify-start pl-6 text-muted-foreground hover:text-luxury-gold luxury-transition"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;