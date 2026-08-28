import React from 'react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0C0C0C] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="gold-text uppercase tracking-widest text-xs font-bold block">
            Guest Testimonials
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our Patrons Say
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Read authentic reviews from renowned food critics, chefs, and cherished regular guests.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#161616] p-6 rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              <div className="absolute top-6 right-6 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <p className="text-stone-300 text-sm leading-relaxed font-light italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded object-cover border border-[#C5A059]/40"
                />
                <div>
                  <h4 className="serif font-bold text-white text-sm">
                    {t.name}
                  </h4>
                  <span className="text-xs gold-text font-medium block">
                    {t.role}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-0.5 block">
                    {t.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

