import React from 'react';
import { Phone, MessageCircle, ArrowDown, Send, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface HeroProps {
  onViewRooms: () => void;
  onEnquireNow?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewRooms, onEnquireNow }) => {
  const handleEnquire = () => {
    if (onEnquireNow) {
      onEnquireNow();
    } else {
      const element = document.querySelector('#booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="py-5 sm:py-7 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Bento Grid Hero Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-xs border border-[#EAE4D9] bg-[#2D2A26] min-h-[520px] sm:min-h-[600px] flex flex-col justify-end p-6 sm:p-10 lg:p-14">
        {/* Background photo with subtle atmospheric gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/RAM MANDIR.webp"
            alt="Birla Dharamshala Ayodhya near Ram Mandir"
            className="w-full h-full object-cover object-center opacity-45"
            referrerPolicy="no-referrer"
          />
          {/* Watermark typography */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[#FDFBF7] opacity-[0.04] text-7xl sm:text-9xl lg:text-[14rem] font-serif font-bold whitespace-nowrap">
            Ayodhya
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/85 to-[#2D2A26]/40" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-stone-950 text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-stone-950" />
            <span>Near Shri Ram Mandir &amp; Ayodhya Junction</span>
          </div>

          {/* Business Tagline / Branding */}
          <p className="text-[#E5C158] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
            {dharamshalaConfig.businessNameHindi} • 24/2 10, Ayodhya Jct Road, Sai Nagar
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] mb-4">
            Welcome to Birla Dharamshala
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FDFBF7]/95 font-medium leading-relaxed max-w-2xl mb-3">
            Comfortable, Clean &amp; Budget-Friendly AC and Non-AC Rooms in the Spiritual Heart of Ayodhya
          </p>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl mb-8">
            Situated conveniently on Ayodhya Junction Road in Sai Nagar, Birla Dharamshala provides peaceful, clean, and affordable accommodation for pilgrims, devotees, family trips, and spiritual retreats. Enjoy effortless accessibility from Ayodhya Railway Station, quick access to Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and local markets, supported by 24×7 water, CCTV security, spotless bedding, and dedicated staff service.
          </p>

          {/* 4 Professional CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* CTA 1: Call Now */}
            <a
              id="hero-call-now-btn"
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({dharamshalaConfig.phoneDisplay})</span>
            </a>

            {/* CTA 2: WhatsApp */}
            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/25 backdrop-blur-md font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>

            {/* CTA 3: View Rooms */}
            <button
              id="hero-view-rooms-btn"
              type="button"
              onClick={onViewRooms}
              className="px-5 py-3.5 rounded-full bg-[#927148] hover:bg-[#7D5F3B] active:bg-[#684E2F] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View Rooms</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* CTA 4: Enquire Now */}
            <button
              id="hero-enquire-now-btn"
              type="button"
              onClick={handleEnquire}
              className="px-5 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Enquire Availability</span>
            </button>
          </div>

          {/* Value Micro-Pills */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Near Ram Janmabhoomi Mandir</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>AC, Non-AC &amp; Family Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>24×7 Security &amp; Water Supply</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Pure Satvik Devotional Ambience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
