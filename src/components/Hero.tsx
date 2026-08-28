import React from 'react';
import { Star, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0C0C0C] pt-12 pb-20">
      {/* Background Decorative Glows & Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-[#0C0C0C]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Fine Dining Spread"
          className="w-full h-full object-cover object-center scale-105 opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 gold-text text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 gold-text animate-spin" style={{ animationDuration: '6s' }} />
              <span>Award-Winning Culinary Experience</span>
              <span className="text-stone-500">•</span>
              <span className="flex items-center gap-1 gold-text">
                <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" /> 4.9
              </span>
            </div>

            {/* Heading */}
            <h1 className="serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Authentic Flavours. <br />
              <span className="gold-text italic font-normal">
                Unforgettable Moments.
              </span>
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into Spice Haven where centuries-old royal spice traditions meet modern culinary artistry. Crafted with organic ingredients, passion, and meticulous attention to detail.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onNavigate('menu')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary rounded shadow-xl cursor-pointer"
              >
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('reservation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#161616] hover:bg-[#222] text-stone-200 font-semibold text-base border border-white/20 hover:border-[#C5A059] transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 gold-text" />
                Reserve a Table
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block serif text-3xl font-bold gold-text">16+</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">Years of Mastery</span>
              </div>
              <div>
                <span className="block serif text-3xl font-bold gold-text">45+</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">Royal Recipes</span>
              </div>
              <div>
                <span className="block serif text-3xl font-bold gold-text">100%</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">Organic Spices</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto w-80 h-96 xl:w-96 xl:h-[450px]">
              {/* Decorative Frame */}
              <div className="absolute inset-0 rounded-xl border border-[#C5A059]/30 transform rotate-3 scale-105 pointer-events-none" />
              
              {/* Primary Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85"
                  alt="Signature Dal Makhani & Platter"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="gold-text text-xs font-semibold uppercase tracking-widest">Chef's Special</span>
                  <h3 className="serif text-xl font-bold text-white">36-Hour Slow-Cooked Dal Makhani</h3>
                  <p className="text-xs text-stone-300 mt-1">Infused with double cream and artisanal butter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

