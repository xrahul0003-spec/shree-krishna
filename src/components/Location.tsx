import React from 'react';
import { MapPin, Navigation, Train, ExternalLink, CheckCircle, Phone, MessageCircle, Plane } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Train className="w-3.5 h-3.5 text-[#927148]" />
            Location &amp; Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Location of Birla Dharamshala, Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Easily accessible Dharamshala near Ram Mandir, Ayodhya Junction
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
                  {dharamshalaConfig.businessName}
                </p>
                <p className="text-xs text-[#8B6E4E] font-medium mt-0.5">
                  {dharamshalaConfig.addressEnglish}
                </p>
              </div>
            </div>

            {/* Official Address */}
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

            {/* Reaching Birla Dharamshala Ayodhya */}
            <div className="pt-4 border-t border-[#EAE4D9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-3 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-[#927148]" />
                How to Reach:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2D2A26]/75">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>From Ayodhya Junction (Ayodhya Dham Station):</strong> Located conveniently along Ayodhya Jct Road, just a few minutes drive by e-rickshaw or auto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>From Shri Ram Janmabhoomi Mandir:</strong> Direct quick connectivity (approx. 1.8 km) via Sai Nagar, making early morning and evening temple visits effortless.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>From Ayodhya Cantt Station:</strong> Direct taxi and auto routes along main arterial roads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>From Maharishi Valmiki International Airport:</strong> Approx. 15-20 minutes by airport cab or pre-paid taxi.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons: Get Directions, Call Now, WhatsApp */}
            <div className="pt-4 border-t border-[#EAE4D9] flex flex-wrap gap-2.5">
              <a
                id="location-get-directions-btn"
                href={dharamshalaConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B6E4E] hover:bg-[#7D5F3B] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#FDFBF7]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                id="location-call-now-btn"
                href={`tel:${dharamshalaConfig.phoneTel}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#EAE4D9] hover:bg-[#F0EBE3] text-[#2D2A26] font-semibold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Call Now ({dharamshalaConfig.phoneDisplay})</span>
              </a>

              <a
                id="location-whatsapp-btn"
                href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="lg:col-span-6 flex flex-col h-full space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-xs h-80 sm:h-96 w-full bg-[#E5E0D5]">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Birla Dharamshala Ayodhya Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(dharamshalaConfig.googleMapEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#EAE4D9] flex items-center justify-between text-xs text-[#2D2A26]/75 shadow-xs">
              <span>Sai Nagar, Ayodhya Jct Road, Ayodhya 224123</span>
              <a
                href={dharamshalaConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#927148] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
