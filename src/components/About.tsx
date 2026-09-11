import React from 'react';
import { CheckCircle2, Sparkles, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xs border border-[#EAE4D9] bg-white">
              <img
                src="/images/RAM MANDIR.webp"
                alt="Birla Dharamshala near Ram Mandir Ayodhya"
                className="w-full h-80 sm:h-[430px] object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2D2A26]/95 via-[#2D2A26]/55 to-transparent p-6 text-white">
                <span className="bg-[#D4AF37] text-stone-950 text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-2">
                  Spiritual Hospitality in Ayodhya
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  Birla Dharamshala, Ayodhya
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Near Shri Ram Janmabhoomi Mandir &amp; Ayodhya Junction
                </p>
              </div>
            </div>

            {/* Floating Location Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-3 bg-white p-4 rounded-2xl shadow-md border border-[#EAE4D9] items-center gap-3.5 max-w-xs">
              <div className="w-11 h-11 rounded-2xl bg-[#F0EBE3] flex items-center justify-center shrink-0 text-[#927148]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider">Prime Location</p>
                <p className="text-xs sm:text-sm font-bold text-[#2D2A26]">Ayodhya Jct Road, Sai Nagar</p>
              </div>
            </div>
          </div>

          {/* Text Content Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE4D9] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
              About Birla Dharamshala, Ayodhya
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26] leading-tight mb-4">
              A Peaceful &amp; Trustworthy Stay Near Ram Mandir
            </h2>

            <div className="space-y-3.5 text-[#2D2A26]/85 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                Welcome to <strong>Birla Dharamshala</strong>, your dependable sanctuary located at <strong>24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123</strong>. Situated in the spiritual heart of Ayodhya, our dharamshala offers a clean, serene, and budget-friendly stay for pilgrims, devotee families, and travelers seeking divine darshan at Shri Ram Janmabhoomi Mandir.
              </p>
              <p>
                Whether you are traveling for a sacred pilgrimage, a family holiday, or a peaceful spiritual retreat, we provide well-appointed <strong>Air-Conditioned (AC) Rooms</strong>, <strong>Affordable Non-AC Rooms</strong>, and <strong>Spacious Family Accommodations</strong>. Every room is maintained with immaculate hygiene, sanitized linens, attached clean washrooms, and 24×7 water supply.
              </p>
              <p>
                With 24×7 CCTV security, dedicated on-site staff, free vehicle parking, and direct accessibility from Ayodhya Railway Station and major temples including Hanuman Garhi, Kanak Bhawan, and Saryu River Ghats, Birla Dharamshala ensures your visit to Lord Rama's holy city is truly memorable, comfortable, and spiritually fulfilling.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-[#EAE4D9]">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Convenient Ayodhya Jct Road location near Ram Mandir
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Clean, peaceful, and family-friendly dharamshala
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Comfortable AC, Non-AC &amp; Family Rooms
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Direct booking on 8788041018 &amp; WhatsApp
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
