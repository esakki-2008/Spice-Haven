import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '19:00',
      guests: '2',
      notes: '',
    });
  };

  return (
    <section id="reservation" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#161616] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0C0C0C] via-[#161616] to-[#C5A059]/10 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/10 border border-[#C5A059]/30 gold-text text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Table Booking
                </div>
                <h2 className="serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Reserve Your Dining Experience
                </h2>
                <p className="text-stone-300 text-sm leading-relaxed font-light">
                  Join us for an unforgettable culinary journey. For parties larger than 8 or private dining inquiries, please contact our concierge directly.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
                <div className="flex items-center gap-3 text-stone-300 text-sm">
                  <Clock className="w-4 h-4 gold-text shrink-0" />
                  <span>Lunch: 12:00 PM – 3:30 PM</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300 text-sm">
                  <Clock className="w-4 h-4 gold-text shrink-0" />
                  <span>Dinner: 6:00 PM – 11:30 PM</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300 text-sm">
                  <Phone className="w-4 h-4 gold-text shrink-0" />
                  <span>Concierge: +44 20 7946 0912</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center gold-text">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="serif text-2xl font-bold text-white">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto">
                      Thank you, <strong className="gold-text">{formData.name}</strong>. We have reserved a table for <strong className="text-white">{formData.guests} guests</strong> on <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.time}</strong>. A confirmation SMS and email have been sent.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 btn-primary rounded text-sm cursor-pointer"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="serif text-xl font-bold text-white mb-6">
                    Book a Table Online
                  </h3>

                  {errorMsg && (
                    <div className="p-3 bg-rose-500/20 border border-rose-500/50 rounded text-rose-300 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 gold-text" /> Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Victoria Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 gold-text" /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7700 900077"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 gold-text" /> Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 gold-text" /> Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:30">1:30 PM (Lunch)</option>
                        <option value="18:30">6:30 PM (Dinner)</option>
                        <option value="19:30">7:30 PM (Dinner)</option>
                        <option value="20:30">8:30 PM (Dinner)</option>
                        <option value="21:30">9:30 PM (Late Dinner)</option>
                      </select>
                    </div>

                    {/* Guests */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 gold-text" /> Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People (Standard)</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People (Family)</option>
                        <option value="6">6 People</option>
                        <option value="8">8+ Party</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 gold-text" /> Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Anniversary, dietary requirements, preferred seating..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#0C0C0C] border border-white/10 rounded px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 btn-primary rounded text-base cursor-pointer"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

