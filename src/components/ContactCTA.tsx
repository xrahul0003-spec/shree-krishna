import React from 'react';
import { Phone, MessageCircle, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#2D2A26] text-white relative overflow-hidden border-t border-[#EAE4D9]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#927148]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          Direct Help Desk & Assistance
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#FDFBF7]">
          Need Help With Your Stay?
        </h2>

        <p className="text-[#FDFBF7]/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Arriving by late night train or have special family requirements? Connect directly with our front desk in Varanasi. We are happy to assist you.
        </p>

        {/* Big Phone Number Display */}
        <div className="mb-8">
          <a
            href={`tel:${dharamshalaConfig.phone}`}
            className="inline-flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#D4AF37] hover:text-[#E5C158] transition-colors"
          >
            <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366]" />
            <span>{dharamshalaConfig.phoneDisplay}</span>
          </a>
          <p className="text-xs text-[#FDFBF7]/60 mt-2">
            Direct Line • Opposite Varanasi Cantt Railway Station
          </p>
        </div>

        {/* Bento Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            id="contact-call-now-btn"
            href={`tel:${dharamshalaConfig.phone}`}
            className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <a
            id="contact-whatsapp-btn"
            href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FDFBF7] font-bold text-sm sm:text-base transition-colors flex items-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            id="contact-directions-btn"
            href="#location"
            className="px-7 py-3.5 rounded-full bg-[#8B6E4E] hover:bg-[#7D5F3B] text-white font-bold text-sm sm:text-base transition-colors flex items-center gap-2 shadow-xs"
          >
            <Navigation className="w-4 h-4 text-[#FDFBF7]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FDFBF7]/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            Official Dharamshala Trust
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            Pure Family Environment
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            No Commission Agents
          </span>
        </div>

      </div>
    </section>
  );
};
