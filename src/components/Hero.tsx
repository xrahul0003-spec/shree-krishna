import React from 'react';
import { MapPin, Phone, Compass, ShieldCheck, Sparkles, Train, ArrowDown } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface HeroProps {
  onViewRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewRooms }) => {
  return (
    <section id="hero" className="py-6 sm:py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Bento Grid Hero Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-xs border border-[#EAE4D9] bg-[#2D2A26] min-h-[480px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 lg:p-14">
        {/* Background photo with subtle atmospheric gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop"
            alt="Shree Krishana Dharamshala Varanasi Building"
            className="w-full h-full object-cover object-center opacity-35"
            referrerPolicy="no-referrer"
          />
          {/* Bento watermark typography element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[#FDFBF7] opacity-[0.06] text-7xl sm:text-9xl lg:text-[14rem] font-serif font-bold whitespace-nowrap">
            Varanasi
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Bento Gold Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-stone-950 text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full mb-4 shadow-xs">
            <Train className="w-3.5 h-3.5 text-stone-950" />
            <span>Opposite Varanasi Cantt Railway Station</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.18] mb-4">
            Comfortable Stay in Varanasi,<br className="hidden sm:inline" />
            Right Opposite Cantt Railway Station
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-2xl mb-8">
            Clean, comfortable and family-friendly accommodation for pilgrims, families and travellers visiting Varanasi.
          </p>

          {/* Bento Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              id="hero-view-rooms-btn"
              type="button"
              onClick={onViewRooms}
              className="px-6 py-3 rounded-full bg-[#927148] hover:bg-[#7D5F3B] active:bg-[#684E2F] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View Rooms</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              id="hero-call-btn"
              href={`tel:${dharamshalaConfig.phone}`}
              className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Call 8788041018</span>
            </a>

            <a
              id="hero-directions-btn"
              href="#location"
              className="px-5 py-3 rounded-full bg-transparent hover:bg-white/10 text-stone-200 hover:text-white border border-white/30 font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Value Micro-Pills */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Family & Pilgrim Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>AC & Non-AC Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>1–2 Min Walk from Cantt Station</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

