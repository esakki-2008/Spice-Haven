import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Eye, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="gold-text uppercase tracking-widest text-xs font-bold block">
            Visual Journey
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ambiance & Culinary Gallery
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Immerse yourself in the warm lighting, opulent decor, and breathtaking culinary creations of Spice Haven.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-xl overflow-hidden border border-white/10 cursor-pointer shadow-xl ${
                item.span || 'col-span-1'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-[#0C0C0C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="gold-text text-xs font-semibold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="serif text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <div className="absolute top-4 right-4 p-2.5 rounded bg-[#161616] gold-text border border-white/10">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#161616] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded bg-[#0C0C0C] text-stone-300 hover:text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[70vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
            <div className="p-6 bg-[#161616] border-t border-white/10">
              <span className="gold-text text-xs uppercase tracking-wider font-semibold">
                {selectedImage.category}
              </span>
              <h3 className="serif text-xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

