import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Car,
  Wind,
  Coins,
  Lock,
  Tv,
  Utensils,
  MapPin,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  ShieldCheck,
  Car,
  Wind,
  Coins,
  Lock,
  Tv,
  Utensils,
  MapPin,
};

export const Facilities: React.FC = () => {
  const activeFacilities = dharamshalaConfig.propertyFacilities.filter((f) => f.enabled);

  return (
    <section id="amenities" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Hospitality &amp; Pilgrimage Amenities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Facilities &amp; Services at Birla Dharamshala in Ayodhya Near Ram Mandir
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Thoughtfully planned facilities tailored for pilgrims, visiting families, and travelers seeking a comfortable and serene stay in holy Ayodhya.
          </p>
        </div>

        {/* Bento Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activeFacilities.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || CheckCircle2;
            return (
              <div
                key={facility.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#EAE4D9] shadow-xs hover:border-[#927148] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0EBE3] group-hover:bg-[#EAE4D9] flex items-center justify-center shrink-0 text-[#927148] transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2A26] text-base mb-1.5">
                    {facility.name}
                  </h3>
                  <p className="text-[#2D2A26]/70 text-xs sm:text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 text-center p-5 bg-white rounded-3xl border border-[#EAE4D9] max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm text-[#2D2A26]/80 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-[#25D366]" />
            <span>Have specific questions regarding our facilities or group bookings? Call us at <strong>{dharamshalaConfig.phoneDisplay}</strong></span>
          </p>
        </div>
      </div>
    </section>
  );
};
