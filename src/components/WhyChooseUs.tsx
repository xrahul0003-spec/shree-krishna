import React from 'react';
import { MapPin, Users, Wind, Sparkles, MessageSquare, WalletCards } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: MapPin,
      title: "Convenient Location",
      desc: "Located opposite Varanasi Cantt Railway Station.",
      detail: "Save on auto-rickshaw hassles and long transit times upon arrival."
    },
    {
      icon: Users,
      title: "Family Friendly",
      desc: "Comfortable accommodation for families and pilgrims.",
      detail: "Sober, safe, and respectful environment tailored for parents, elders and children."
    },
    {
      icon: Wind,
      title: "AC & Non-AC Options",
      desc: "Choose a room according to your comfort and budget.",
      detail: "Air-conditioned rooms for summer heat and naturally airy budget Non-AC rooms."
    },
    {
      icon: Sparkles,
      title: "Comfortable Stay",
      desc: "Clean and simple accommodation designed for a peaceful stay.",
      detail: "Fresh bed sheets, clean attached bathrooms, and regular housekeeping."
    },
    {
      icon: MessageSquare,
      title: "Easy Enquiry",
      desc: "Contact us directly by phone or WhatsApp.",
      detail: "No complex portals or hidden intermediaries. Speak directly with the Dharamshala."
    },
    {
      icon: WalletCards,
      title: "Budget-Friendly",
      desc: "Comfortable accommodation with transparent room pricing.",
      detail: "Honest daily rates with zero surprise charges upon your check-in."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Reliable Hospitality
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Why Stay With {dharamshalaConfig.businessName}?
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            We focus on genuine hospitality, cleanliness, and maximum convenience for travellers visiting Kashi.
          </p>
        </div>

        {/* Bento 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl border border-[#EAE4D9] bg-white hover:border-[#927148] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F0EBE3] text-[#927148] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D2A26] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#8B6E4E] font-semibold text-xs sm:text-sm mb-2">
                    "{item.desc}"
                  </p>
                  <p className="text-[#2D2A26]/70 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
