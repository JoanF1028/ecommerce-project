import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';
import { productAPI } from '@/lib/api';
import { Product } from '@/types';
import { Navbar } from '@/components/Navbar';
import { ProductGrid } from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const products = await productAPI.getProducts();
        // Get top 8 rated products as featured
        const featured = products
          .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
          .slice(0, 8);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleSearchChange = (search: string) => {
    navigate(`/products?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar onSearchChange={handleSearchChange} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Modern
                </span>{' '}
                Shopping
                <br />
                Experience
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover amazing products from around the world. 
                Quality, style, and value all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/products')}
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 h-auto"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/products')}
              >
                Browse Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of categories to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Electronics", emoji: "📱", color: "from-blue-500 to-purple-600" },
              { name: "Fashion", emoji: "👗", color: "from-pink-500 to-rose-600" },
              { name: "Jewelry", emoji: "💎", color: "from-yellow-500 to-orange-600" },
              { name: "Men's Clothing", emoji: "👔", color: "from-gray-600 to-gray-800" }
            ].map((category) => (
              <Card 
                key={category.name}
                className="group cursor-pointer hover-lift overflow-hidden border-0"
                onClick={() => navigate(`/products?category=${encodeURIComponent(category.name.toLowerCase())}`)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.emoji}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <TrendingUp className="w-8 h-8 inline mr-3 text-primary" />
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Top-rated products loved by our customers
              </p>
            </div>
            
            <Button variant="outline" asChild>
              <Link to="/products">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <ProductGrid products={featuredProducts} loading={loading} />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description: "Free shipping on orders over $50"
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                description: "Your payment information is safe and secure"
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                description: "30-day return policy for your peace of mind"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">ModernStore</span>
              </div>
              <p className="text-primary-foreground/80">
                Your go-to destination for quality products and exceptional shopping experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/products" className="hover:text-primary-foreground transition-colors">Products</Link></li>
                <li><Link to="/products?category=electronics" className="hover:text-primary-foreground transition-colors">Electronics</Link></li>
                <li><Link to="/products?category=clothing" className="hover:text-primary-foreground transition-colors">Fashion</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; ModernStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
