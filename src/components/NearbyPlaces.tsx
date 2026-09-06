import React from 'react';
import { Compass, Train, MapPin, ExternalLink, Info } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const NearbyPlaces: React.FC = () => {
  return (
    <section id="nearby-places" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#927148]" />
            Connectivity & Sightseeing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Nearby Places & Travel Times
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Convenient connectivity to major temples, holy ghats, and transport hubs across Varanasi.
          </p>
        </div>

        {/* Bento Nearby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {dharamshalaConfig.nearbyPlaces.map((place) => {
            const isStation = place.id === 'np-railway';
            return (
              <div
                key={place.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between ${
                  isStation
                    ? 'bg-white border-[#927148] shadow-md ring-2 ring-[#927148]/20'
                    : 'bg-white border-[#EAE4D9] hover:border-[#927148] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      {isStation ? (
                        <div className="w-10 h-10 rounded-2xl bg-[#8B6E4E] text-white flex items-center justify-center shrink-0">
                          <Train className="w-5 h-5 text-[#FDFBF7]" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-2xl bg-[#F0EBE3] text-[#927148] flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[#927148]" />
                        </div>
                      )}
                      <h3 className="font-serif font-bold text-[#2D2A26] text-base sm:text-lg">
                        {place.name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm my-4">
                    <div className="flex items-baseline justify-between border-b border-[#F0EBE3] pb-2">
                      <span className="text-[#2D2A26]/60 font-medium">Distance:</span>
                      <span className={`font-semibold ${isStation ? 'text-[#8B6E4E]' : 'text-[#2D2A26]'}`}>
                        {place.distance}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-[#F0EBE3] pb-2">
                      <span className="text-[#2D2A26]/60 font-medium">Travel Time:</span>
                      <span className={`font-semibold ${isStation ? 'text-[#25D366]' : 'text-[#2D2A26]'}`}>
                        {place.approxTravelTime}
                      </span>
                    </div>
                  </div>

                  {place.note && (
                    <p className="text-[#2D2A26]/70 text-xs leading-relaxed mt-2">
                      {place.note}
                    </p>
                  )}
                </div>

                {isStation && (
                  <div className="mt-4 pt-3 border-t border-[#F0EBE3] text-xs text-[#8B6E4E] font-medium flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#927148] shrink-0" />
                    <span>Instant walk upon stepping off the train platform.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note regarding verification */}
        <div className="mt-8 p-5 bg-white rounded-3xl border border-[#EAE4D9] text-xs text-[#2D2A26]/60 text-center max-w-3xl mx-auto shadow-2xs">
          <p>
            * Note: Varanasi Cantt Railway Station is directly opposite our property. Distance and travel times for other destinations are editable approximations based on general city traffic; please verify local traffic conditions before darshan.
          </p>
        </div>

      </div>
    </section>
  );
};
