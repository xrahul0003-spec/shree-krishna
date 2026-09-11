import React from 'react';
import { Star, MessageCircle, Phone, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface GuestExperienceProps {
  onBookClick?: () => void;
}

export const GuestExperience: React.FC<GuestExperienceProps> = ({ onBookClick }) => {
  return (
    <section id="guest-experience" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            Pilgrim Testimonials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Guest Reviews of Birla Dharamshala, Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Real experiences shared by pilgrims, families and travelers staying near Ram Mandir, Ayodhya
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dharamshalaConfig.guestReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE4D9] hover:border-[#927148] shadow-xs transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#EAE4D9] group-hover:text-[#927148]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#2D2A26]/80 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2D2A26]">
                    {review.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#8B6E4E]">
                    {review.role}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F0EBE3] text-[#8B6E4E]">
                  Verified Guest
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Booking Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#EAE4D9] max-w-3xl mx-auto text-center shadow-2xs">
          <p className="font-serif font-bold text-sm sm:text-base text-[#2D2A26] mb-1.5">
            Book Your Peaceful Stay in Ayodhya Today
          </p>
          <p className="text-xs text-[#2D2A26]/70 leading-relaxed max-w-2xl mx-auto mb-4">
            Contact us for current room tariff and availability directly at {dharamshalaConfig.phoneDisplay} or via WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 8788041018</span>
            </a>
            <a
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#EAE4D9] bg-[#FDFBF7] hover:bg-[#F0EBE3] text-[#2D2A26] font-bold text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
