import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0C0C0C] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="gold-text uppercase tracking-widest text-xs font-bold block">
            Get in Touch
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Visit Spice Haven
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Located in the heart of Kensington, London. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-[#161616] p-8 rounded-xl border border-white/10 space-y-6 shadow-xl">
              <h3 className="serif text-2xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-[#C5A059]/10 gold-text shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Location</h4>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-[#C5A059]/10 gold-text shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Phone Reservations</h4>
                    <p className="text-stone-400 text-sm mt-1">
                      {RESTAURANT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-[#C5A059]/10 gold-text shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Email Inquiry</h4>
                    <p className="text-stone-400 text-sm mt-1">
                      {RESTAURANT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-[#C5A059]/10 gold-text shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Opening Hours</h4>
                    <p className="text-stone-400 text-sm mt-1">
                      Mon – Fri: {RESTAURANT_INFO.hours.weekdays}<br />
                      Sat – Sun: {RESTAURANT_INFO.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Interactive Placeholder */}
          <div className="lg:col-span-7 bg-[#161616] rounded-xl overflow-hidden border border-white/10 shadow-xl relative min-h-[400px] flex flex-col items-center justify-center group">
            {/* Background Map Graphic Placeholder */}
            <div className="absolute inset-0 bg-stone-900 opacity-80">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent" />

            {/* Floating Pin Card */}
            <div className="relative z-10 bg-[#0C0C0C]/90 backdrop-blur-xl p-6 rounded-xl border border-[#C5A059]/40 shadow-2xl text-center max-w-sm mx-4">
              <div className="w-12 h-12 rounded-full bg-[#C5A059] text-[#0C0C0C] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="serif text-xl font-bold text-white">Spice Haven London</h4>
              <p className="text-stone-300 text-xs mt-1 leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 btn-primary rounded text-xs shadow-lg transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

