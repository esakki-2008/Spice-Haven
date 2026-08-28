import React from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Plus, Check, Leaf } from 'lucide-react';

interface PopularDishesProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: { dish: MenuItem; quantity: number }[];
}

export const PopularDishes: React.FC<PopularDishesProps> = ({ onAddToCart, cartItems }) => {
  const popularDishes = MENU_ITEMS.filter((item) => item.isPopular).slice(0, 6);

  const getItemQuantity = (id: string) => {
    const found = cartItems.find((c) => c.dish.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section className="py-20 bg-[#0C0C0C] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="gold-text uppercase tracking-widest text-xs font-bold block">
            Culinary Masterpieces
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Most Popular Dishes
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Discover our guests' absolute favorites, prepared with heirloom spices and modern culinary passion.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => {
            const qty = getItemQuantity(dish.id);
            return (
              <div
                key={dish.id}
                className="group bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-[#C5A059] transition-all duration-300 flex flex-col shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                  
                  {/* Veg / Non-Veg Indicator Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-stone-200">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                    {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded bg-[#C5A059] text-[#0C0C0C] font-bold text-sm shadow-md">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-stone-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs gold-text font-medium flex items-center gap-1">
                      {dish.isVeg && <Leaf className="w-3.5 h-3.5" />}
                      <span>{dish.category.toUpperCase()}</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer ${
                        qty > 0
                          ? 'bg-[#C5A059]/20 gold-text border border-[#C5A059]/40 hover:bg-[#C5A059]/30'
                          : 'btn-primary rounded'
                      }`}
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added ({qty})
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add to Order
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

