import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, ShoppingBag, Menu as MenuIcon, X, Phone, Clock } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItems, onOpenCart, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar for quick contact */}
      <div className="bg-[#0c0c0c] text-stone-400 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> +44 20 7946 0912
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Mon-Sun: 12:00 PM - 11:30 PM
            </span>
          </div>
          <div className="flex items-center space-x-4 gold-text font-medium">
            <span>✨ Complimentary valet parking for evening diners</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0c]/95 backdrop-blur-md shadow-xl py-4 border-b border-white/10'
            : 'bg-gradient-to-b from-[#0c0c0c]/90 to-[#0c0c0c]/40 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 gold-border flex items-center justify-center font-bold text-xs text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0C0C0C] transition-all rounded">
              SH
            </div>
            <div>
              <span className="serif text-2xl tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                Spice Haven
              </span>
              <span className="block text-[9px] tracking-widest gold-text uppercase font-medium">
                Fine Dining & Bar
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Menu', id: 'menu' },
              { label: 'About', id: 'about' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="nav-link text-white/70 hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-[#161616] hover:bg-[#222] text-stone-200 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 gold-text" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C5A059] text-[#0C0C0C] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Order Now / Reserve Button */}
            <button
              onClick={() => handleLinkClick('reservation')}
              className="hidden sm:inline-flex items-center justify-center btn-primary rounded"
            >
              Order Now
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-[#161616] text-stone-300 hover:text-white border border-white/10 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'About', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-lg font-medium text-stone-300 hover:text-[#C5A059] py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => handleLinkClick('reservation')}
                  className="w-full py-3 btn-primary text-center rounded"
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

