import React from 'react';
import { MapPin, Navigation, Train, Clock, ExternalLink, CheckCircle } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Train className="w-3.5 h-3.5 text-[#927148]" />
            Prime Station Proximity
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Conveniently Located in Varanasi
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Situated directly opposite Varanasi Cantt Railway Station. Arrive by train, walk straight across, and check in without long transit or expensive taxi commutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Direction Bento Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-xs space-y-6">
            
            {/* Highlight Banner */}
            <div className="p-4 rounded-2xl bg-[#F0EBE3] border border-[#EAE4D9] flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#8B6E4E] text-white shrink-0">
                <MapPin className="w-5 h-5 text-[#FDFBF7]" />
              </div>
              <div>
                <p className="font-serif font-bold text-[#2D2A26] text-base">
                  Opposite Varanasi Cantt Railway Station
                </p>
                <p className="text-xs text-[#8B6E4E] font-medium mt-0.5">
                  1–2 minutes walking distance from Platform 1 exit.
                </p>
              </div>
            </div>

            {/* Official Address in Hindi and English */}
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                  Address (पता):
                </h4>
                <p className="text-[#2D2A26] font-medium text-sm sm:text-base leading-relaxed bg-[#FDFBF7] p-4 rounded-2xl border border-[#F0EBE3]">
                  {dharamshalaConfig.addressHindi}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                  Postal Address (English):
                </h4>
                <p className="text-[#2D2A26]/80 text-sm leading-relaxed bg-[#FDFBF7] p-4 rounded-2xl border border-[#F0EBE3]">
                  {dharamshalaConfig.addressEnglish}
                </p>
              </div>
            </div>

            {/* Walking Directions */}
            <div className="pt-4 border-t border-[#EAE4D9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-3 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-[#927148]" />
                How to Reach on Foot from Varanasi Cantt Station:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2D2A26]/75">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Exit from Varanasi Cantt Railway Station main concourse (Platform 1 gate).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Look directly across the road towards Englishia Line / Vijay Nagar Colony.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Take the pedestrian crossing to reach Shree Krishana Dharamshala Trust.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#EAE4D9] flex flex-wrap gap-3">
              <a
                id="location-get-directions-btn"
                href={dharamshalaConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B6E4E] hover:bg-[#7D5F3B] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#FDFBF7]" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${dharamshalaConfig.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#EAE4D9] hover:bg-[#F0EBE3] text-[#2D2A26] font-semibold text-xs sm:text-sm transition-colors"
              >
                <span>Call for Route Assistance</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="lg:col-span-6 flex flex-col h-full space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-xs h-80 sm:h-96 w-full bg-[#E5E0D5]">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Shree Krishana Dharamshala Trust Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(dharamshalaConfig.googleMapEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#EAE4D9] flex items-center justify-between text-xs text-[#2D2A26]/75 shadow-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#927148]" />
                <span>Local e-rickshaws, autos & taxis readily available right outside.</span>
              </div>
              <a
                href={dharamshalaConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B6E4E] hover:underline font-bold flex items-center gap-1"
              >
                Open in App
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
