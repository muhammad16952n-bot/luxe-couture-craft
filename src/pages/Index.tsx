import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ShoppingCart from "@/components/ShoppingCart";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

// Import product images for cart functionality
import luxuryHandbag from "@/assets/luxury-handbag.jpg";
import luxurySunglasses from "@/assets/luxury-sunglasses.jpg";
import luxuryWatch from "@/assets/luxury-watch.jpg";
import luxuryShirt from "@/assets/luxury-shirt.jpg";
import luxuryShoes from "@/assets/luxury-shoes.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const productImages: Record<number, string> = {
    1: luxuryHandbag,
    2: luxurySunglasses,
    3: luxuryWatch,
    4: luxuryShirt,
    5: luxuryShoes,
    6: luxuryHandbag,
  };

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { 
        ...product, 
        quantity: 1,
        image: productImages[product.id] || product.image
      }]);
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id: number) => {
    const removedItem = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    
    if (removedItem) {
      toast({
        title: "Removed from Cart",
        description: `${removedItem.name} has been removed from your cart.`,
      });
    }
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={handleCartClick}
      />
      
      <main>
        <HeroSection />
        <ProductGrid onAddToCart={addToCart} />
      </main>

      <Footer />

      <ShoppingCart
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <Toaster />
    </div>
  );
};

export default Index;
