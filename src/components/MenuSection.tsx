import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search, Plus, Check, Leaf } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: { dish: MenuItem; quantity: number }[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'starters', label: 'Starters' },
    { id: 'main', label: 'Main Course' },
    { id: 'biryani', label: 'Biryani' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks & Cocktails' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet =
      dietFilter === 'all'
        ? true
        : dietFilter === 'veg'
        ? item.isVeg
        : !item.isVeg;

    return matchesCategory && matchesSearch && matchesDiet;
  });

  const getItemQuantity = (id: string) => {
    const found = cartItems.find((c) => c.dish.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="gold-text uppercase tracking-widest text-xs font-bold block">
            Gastronomic Offerings
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Exquisite Menu
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Explore our meticulously curated selections crafted with authentic spices, farm-fresh produce, and culinary mastery.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#161616] p-4 rounded-xl border border-white/10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-[#0C0C0C] font-bold shadow-md'
                    : 'bg-[#0C0C0C] text-stone-300 hover:bg-[#222] hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Dietary Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded px-10 py-2 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Diet Filter Buttons */}
            <div className="flex bg-[#0C0C0C] p-1 rounded border border-white/10">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  dietFilter === 'all' ? 'bg-[#C5A059] text-[#0C0C0C]' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  dietFilter === 'veg' ? 'bg-emerald-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Veg
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  dietFilter === 'non-veg' ? 'bg-rose-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#161616] rounded-xl border border-white/10">
            <p className="text-stone-400 text-lg">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="mt-4 px-6 py-2 btn-primary rounded text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const qty = getItemQuantity(dish.id);
              return (
                <div
                  key={dish.id}
                  className="bg-[#161616] rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-all p-5 flex flex-col justify-between group shadow-lg"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-20 h-20 rounded object-cover shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="serif font-bold text-white text-base truncate group-hover:text-[#C5A059] transition-colors">
                          {dish.name}
                        </h3>
                        <span className="serif font-bold gold-text text-base shrink-0">
                          ${dish.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-stone-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                      <span className="text-[11px] font-medium text-stone-400">
                        {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                        qty > 0
                          ? 'bg-[#C5A059]/20 gold-text border border-[#C5A059]/40'
                          : 'bg-[#222] hover:bg-[#C5A059] hover:text-[#0C0C0C] text-stone-200'
                      }`}
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added ({qty})
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

