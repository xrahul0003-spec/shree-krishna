import React from 'react';
import {
  Wind,
  Users,
  Sparkles,
  Bath,
  Flame,
  Droplets,
  Wifi,
  Car,
  ShieldCheck,
  Zap,
  Clock,
  ConciergeBell,
  HeartHandshake,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Users,
  Sparkles,
  Bath,
  Flame,
  Droplets,
  Wifi,
  Car,
  ShieldCheck,
  Zap,
  Clock,
  ConciergeBell,
  HeartHandshake,
  Briefcase,
};

export const Facilities: React.FC = () => {
  // Only display facilities that are configured as enabled
  const activeFacilities = dharamshalaConfig.propertyFacilities.filter((f) => f.enabled);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Comfort & Convenience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Facilities & Amenities
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Essential comforts provided for pilgrims and travelling families. Cleanliness, peace of mind, and honest hospitality at budget rates.
          </p>
        </div>

        {/* Bento Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {activeFacilities.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || CheckCircle2;
            return (
              <div
                key={facility.id}
                className="bg-white p-5 rounded-3xl border border-[#EAE4D9] shadow-xs hover:border-[#927148] transition-all flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F0EBE3] group-hover:bg-[#EAE4D9] flex items-center justify-center shrink-0 text-[#927148] transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2A26] text-sm sm:text-base mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-[#2D2A26]/70 text-xs leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#2D2A26]/60 max-w-xl mx-auto">
            * All listed facilities are maintained directly by Shree Krishana Dharamshala Trust staff. Filtered water and clean linens are refreshed routinely for all incoming guests.
          </p>
        </div>
      </div>
    </section>
  );
};
