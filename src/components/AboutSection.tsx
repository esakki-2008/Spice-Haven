import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Award, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0C0C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Chef cooking"
                  className="rounded-xl shadow-xl object-cover h-64 w-full border border-white/10"
                />
                <div className="bg-[#C5A059] p-6 rounded-xl text-[#0C0C0C] shadow-xl flex flex-col justify-center">
                  <span className="serif text-4xl font-bold">16+</span>
                  <span className="text-xs uppercase font-bold tracking-widest mt-1">
                    Years of Culinary Excellence
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#161616] p-6 rounded-xl border border-white/10 shadow-xl">
                  <Flame className="w-8 h-8 gold-text mb-3" />
                  <h4 className="serif font-bold text-white text-base">Charcoal Tandoors</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    Authentic clay ovens fired with premium mesquite charcoal for unmatched smoky flavor.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant Ambiance"
                  className="rounded-xl shadow-xl object-cover h-56 w-full border border-white/10"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/10 border border-[#C5A059]/30 gold-text text-xs font-semibold uppercase tracking-wider">
              Our Heritage & Story
            </div>

            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Where Tradition Meets Contemporary Elegance
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Founded in 2010, <strong className="text-white font-semibold">{RESTAURANT_INFO.name}</strong> was born out of a profound love for authentic royal spice heritage. We believe that fine dining is not merely about food, but about creating an immersive sensory journey through aroma, texture, and warmth.
            </p>

            {/* Chef Spotlight Box */}
            <div className="bg-[#161616] p-6 rounded-xl border border-white/10 flex items-center gap-5 mt-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80"
                alt="Executive Chef"
                className="w-20 h-20 rounded object-cover border border-white/10 shrink-0"
              />
              <div>
                <span className="text-xs gold-text font-bold uppercase tracking-widest block">
                  Executive Chef
                </span>
                <h3 className="serif text-xl font-bold text-white">
                  {RESTAURANT_INFO.executiveChef}
                </h3>
                <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                  {RESTAURANT_INFO.chefBio}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A059]/10 gold-text shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-200 text-sm">Michelin Recommended</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Recognized for culinary excellence.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A059]/10 gold-text shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-200 text-sm">Farm-to-Table Spices</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Hand-ground organic spices daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

