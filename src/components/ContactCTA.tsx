import React from 'react';
import { Phone, MessageCircle, Navigation, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#2D2A26] text-white relative overflow-hidden border-t border-[#EAE4D9]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#927148]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            Direct Contact &amp; Help Desk
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#FDFBF7]">
            Contact Us
          </h2>

          <p className="text-[#FDFBF7]/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Planning your pilgrimage or family visit to Shri Ram Mandir, Ayodhya? Contact Birla Dharamshala for a peaceful, comfortable, and convenient stay.
          </p>
        </div>

        {/* 3-Column Premium Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          {/* Call Us 24/7 */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 text-center hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#FDFBF7] mb-1">
              Call Us 24/7
            </h3>
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] hover:text-[#E5C158] block mb-1 transition-colors"
            >
              {dharamshalaConfig.phoneDisplay}
            </a>
            <p className="text-xs text-stone-300">
              Direct assistance for room availability &amp; bookings
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 text-center hover:border-[#25D366] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#FDFBF7] mb-1">
              WhatsApp Us
            </h3>
            <a
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#25D366] hover:underline block mb-1"
            >
              Chat on WhatsApp ({dharamshalaConfig.phoneDisplay})
            </a>
            <p className="text-xs text-stone-300">
              Quick response for room enquiry &amp; photos
            </p>
          </div>

          {/* Our Location */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 text-center hover:border-[#927148] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#927148]/30 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#FDFBF7] mb-1">
              Our Location
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#FDFBF7] mb-1 leading-snug">
              24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya 224123
            </p>
            <p className="text-xs text-stone-300">
              Near Ram Mandir &amp; Ayodhya Junction
            </p>
          </div>

        </div>

        {/* Action Buttons: Call Now, WhatsApp, Location */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            id="contact-call-now-btn"
            href={`tel:${dharamshalaConfig.phoneTel}`}
            className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base transition-colors flex items-center gap-2.5 shadow-sm cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now ({dharamshalaConfig.phoneDisplay})</span>
          </a>

          <a
            id="contact-whatsapp-btn"
            href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-[#FDFBF7] font-bold text-sm sm:text-base transition-colors flex items-center gap-2.5 shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            id="contact-directions-btn"
            href="#location"
            className="px-8 py-3.5 rounded-full bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-sm sm:text-base transition-colors flex items-center gap-2.5 shadow-sm"
          >
            <Navigation className="w-5 h-5 text-[#FDFBF7]" />
            <span>Location &amp; Directions</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FDFBF7]/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            Birla Dharamshala, Ayodhya
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            24×7 Help Desk Support: 8788041018
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            Peaceful, Clean &amp; Satvik Atmosphere
          </span>
        </div>

      </div>
    </section>
  );
};
