import React, { useState } from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 text-stone-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 gold-border flex items-center justify-center font-bold text-xs text-[#C5A059] rounded">
                SH
              </div>
              <span className="serif text-2xl tracking-tight text-white">
                Spice Haven
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Exquisite fine dining celebrating royal heritage, authentic spices, and unforgettable culinary artistry in Kensington, London.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                className="w-10 h-10 rounded bg-[#161616] hover:bg-[#C5A059] hover:text-[#0C0C0C] text-stone-300 flex items-center justify-center border border-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 rounded bg-[#161616] hover:bg-[#C5A059] hover:text-[#0C0C0C] text-stone-300 flex items-center justify-center border border-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded bg-[#161616] hover:bg-[#C5A059] hover:text-[#0C0C0C] text-stone-300 flex items-center justify-center border border-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="serif text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Menu', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="serif text-lg font-bold text-white">Discover</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Starters & Kebabs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Royal Biryanis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Signature Curries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Artisanal Desserts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reservation')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Private Dining
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="serif text-lg font-bold text-white">Exclusive Offers</h4>
            <p className="text-stone-400 text-sm">
              Subscribe to receive seasonal tasting menu invites and culinary updates.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you for subscribing to Spice Haven!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#161616] border border-white/10 rounded px-4 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059] flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 btn-primary rounded transition-all cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Spice Haven Fine Dining Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-stone-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

