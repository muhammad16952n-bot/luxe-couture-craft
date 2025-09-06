import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Eye } from "lucide-react";

// Import product images
import luxuryHandbag from "@/assets/luxury-handbag.jpg";
import luxurySunglasses from "@/assets/luxury-sunglasses.jpg";
import luxuryWatch from "@/assets/luxury-watch.jpg";
import luxuryShirt from "@/assets/luxury-shirt.jpg";
import luxuryShoes from "@/assets/luxury-shoes.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Signature Leather Handbag",
    price: 2450,
    category: "Bags",
    image: luxuryHandbag,
    isNew: true,
  },
  {
    id: 2,
    name: "Classic Gold Frame Sunglasses",
    price: 890,
    originalPrice: 1200,
    category: "Accessories",
    image: luxurySunglasses,
    isOnSale: true,
  },
  {
    id: 3,
    name: "Executive Gold Watch",
    price: 4200,
    category: "Watches",
    image: luxuryWatch,
  },
  {
    id: 4,
    name: "Premium Silk Dress Shirt",
    price: 650,
    category: "Ready-to-Wear",
    image: luxuryShirt,
  },
  {
    id: 5,
    name: "Handcrafted Leather Loafers",
    price: 1850,
    category: "Shoes",
    image: luxuryShoes,
    isNew: true,
  },
  {
    id: 6,
    name: "Limited Edition Handbag",
    price: 3200,
    category: "Bags",
    image: luxuryHandbag,
  },
];

interface ProductGridProps {
  onAddToCart?: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const categories = ["All", "Bags", "Shoes", "Accessories", "Watches", "Ready-to-Wear"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated pieces that embody sophistication and timeless elegance
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "luxury" : "champagne"}
              onClick={() => setSelectedCategory(category)}
              className="luxury-transition"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-border hover:shadow-xl luxury-transition cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 luxury-transition"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-luxury-gold text-primary font-semibold">
                      NEW
                    </Badge>
                  )}
                  {product.isOnSale && (
                    <Badge className="bg-destructive text-destructive-foreground font-semibold">
                      SALE
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 luxury-transition">
                  <Button
                    variant="champagne"
                    size="icon"
                    onClick={() => toggleLike(product.id)}
                    className="h-10 w-10 rounded-full shadow-lg"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedProducts.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }`}
                    />
                  </Button>
                  <Button
                    variant="champagne"
                    size="icon"
                    className="h-10 w-10 rounded-full shadow-lg"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 luxury-transition">
                  <Button
                    variant="gold"
                    className="w-full"
                    onClick={() => onAddToCart?.(product)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <Badge variant="outline" className="mb-2 text-xs">
                  {product.category}
                </Badge>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;