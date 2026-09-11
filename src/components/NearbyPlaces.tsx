import React from 'react';
import { Compass, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const NearbyPlaces: React.FC = () => {
  return (
    <section id="nearby-places" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#927148]" />
            Sacred Darshan &amp; Heritage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Nearby Famous Places in Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Major spiritual temples, historic monuments, and holy ghats easily accessible from Birla Dharamshala, Ayodhya.
          </p>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dharamshalaConfig.nearbyPlaces.map((place) => {
            const isRamMandir = place.id === 'np-ram-mandir';
            return (
              <div
                key={place.id}
                className={`rounded-3xl overflow-hidden border transition-all flex flex-col justify-between group ${
                  isRamMandir
                    ? 'bg-white border-[#927148] shadow-md ring-2 ring-[#927148]/20'
                    : 'bg-white border-[#EAE4D9] hover:border-[#927148] shadow-xs hover:shadow-md'
                }`}
              >
                {/* Visual Thumbnail */}
                {place.imageUrl && (
                  <div className="relative aspect-16/9 w-full overflow-hidden bg-[#F0EBE3]">
                    <img
                      src={place.imageUrl}
                      alt={place.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2D2A26]/85 text-white backdrop-blur-xs">
                        {place.label}
                      </span>
                    </div>
                    {place.distance && (
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37] text-stone-950 shadow-xs">
                          {place.distance}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#927148] shrink-0" />
                      <h3 className="font-serif font-bold text-[#2D2A26] text-lg sm:text-xl">
                        {place.name}
                      </h3>
                    </div>

                    <p className="text-[#2D2A26]/75 text-xs sm:text-sm leading-relaxed mt-2">
                      {place.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F0EBE3] flex items-center justify-between text-xs text-[#8B6E4E]">
                    <span className="font-medium">Ayodhya Dham</span>
                    <span className="text-[#927148] font-bold">Sacred Pilgrimage</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proximity Tip */}
        <div className="mt-10 p-5 bg-white rounded-3xl border border-[#EAE4D9] text-xs sm:text-sm text-[#2D2A26]/75 text-center max-w-3xl mx-auto shadow-2xs">
          <p>
            <strong>Birla Dharamshala</strong> is located at 24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar. Local e-rickshaws, autos, and taxis are easily available outside our gates for hassle-free darshan at Ram Mandir, Hanuman Garhi, and evening Aarti at Saryu Ghat.
          </p>
        </div>

      </div>
    </section>
  );
};
