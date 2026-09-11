import React from 'react';
import {
  MapPin,
  Sparkles,
  Coins,
  Heart,
  Users,
  BedDouble,
  ShieldCheck,
  PhoneCall,
  Award,
  CheckCircle2
} from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Sparkles,
  Coins,
  Heart,
  Users,
  BedDouble,
  ShieldCheck,
  PhoneCall,
  Award,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Pilgrims Trust &amp; Peace of Mind
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Why Choose Birla Dharamshala in Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Discover why thousands of devotees, families, and travelers trust Birla Dharamshala for their stay in holy Ayodhya near Ram Mandir.
          </p>
        </div>

        {/* 9-Point Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {dharamshalaConfig.whyChoosePoints.map((item) => {
            const IconComp = iconMap[item.iconName] || CheckCircle2;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl border border-[#EAE4D9] bg-white hover:border-[#927148] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0EBE3] text-[#927148] group-hover:bg-[#EAE4D9] flex items-center justify-center transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#8B6E4E]/80 bg-[#F0EBE3] px-2.5 py-1 rounded-full">
                      Point {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D2A26] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#8B6E4E] font-semibold text-xs sm:text-sm mb-2.5">
                    {item.desc}
                  </p>
                  <p className="text-[#2D2A26]/70 text-xs sm:text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0EBE3] flex items-center gap-1.5 text-xs text-[#25D366] font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-[#8B6E4E] text-[11px] font-semibold uppercase tracking-wider">Birla Dharamshala Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
