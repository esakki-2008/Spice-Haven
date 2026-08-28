import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularDishes } from './components/PopularDishes';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderCartModal } from './components/OrderCartModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (dish: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.dish.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#f5f5f4] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Navbar */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero onNavigate={handleNavigate} />

      {/* Popular Dishes */}
      <PopularDishes onAddToCart={handleAddToCart} cartItems={cartItems} />

      {/* Full Menu Section */}
      <MenuSection onAddToCart={handleAddToCart} cartItems={cartItems} />

      {/* About Restaurant */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Reservation Section */}
      <ReservationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Online Ordering / Cart Drawer Modal */}
      <OrderCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
