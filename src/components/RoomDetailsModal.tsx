import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, CalendarCheck, MapPin, ShieldCheck, Check } from 'lucide-react';
import { RoomType } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface RoomDetailsModalProps {
  room: RoomType | null;
  isOpen?: boolean;
  onClose: () => void;
  onBookRoom: (room: RoomType) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  isOpen = true,
  onClose,
  onBookRoom,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!isOpen || !room) return null;

  const whatsappUrl = `https://wa.me/${dharamshalaConfig.whatsapp}?text=${encodeURIComponent(
    `Namaste Birla Dharamshala Ayodhya, I would like to enquire about room tariff and availability for ${room.name} near Ram Mandir.`
  )}`;

  const images = [room.featuredImage, ...(room.galleryImages || [])];
  const uniqueImages = Array.from(new Set(images));

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FDFBF7] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#EAE4D9] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#2D2A26] flex items-center justify-center shadow-md transition-colors cursor-pointer border border-[#EAE4D9]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery Showcase */}
        <div className="relative aspect-16/10 w-full bg-[#E5E0D5]">
          <img
            src={uniqueImages[activeImageIndex] || room.featuredImage}
            alt={`${room.name} - Birla Dharamshala Ayodhya`}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-[#2D2A26]/85 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-white/20">
              {room.categoryLabel}
            </span>
          </div>

          {/* Thumbnails */}
          {uniqueImages.length > 1 && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-x-auto p-1.5 bg-[#2D2A26]/60 backdrop-blur-xs rounded-2xl">
              {uniqueImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-10 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26] mb-1.5">
              {room.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#8B6E4E] font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#927148]" />
              <span>Birla Dharamshala, 24/2 10, Ayodhya Jct Road, Sai Nagar, Ayodhya</span>
            </p>
          </div>

          {/* Tariff Notice */}
          <div className="p-4 bg-[#F0EBE3] rounded-2xl border border-[#EAE4D9] text-[#8B6E4E] text-xs sm:text-sm flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0" />
            <span>Contact us for current room tariff and availability. Direct phone: 8788041018.</span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider mb-2">
              About This Accommodation
            </h4>
            <p className="text-[#2D2A26]/80 text-sm sm:text-base leading-relaxed">
              {room.fullDescription || room.shortDescription}
            </p>
          </div>

          {/* Features */}
          {room.features && room.features.length > 0 && (
            <div>
              <h4 className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider mb-2.5">
                Room Amenities &amp; Facilities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#EAE4D9] text-xs text-[#2D2A26]">
                    <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guest Guidelines */}
          <div className="p-4 bg-white rounded-2xl border border-[#EAE4D9] space-y-2">
            <h4 className="text-xs uppercase font-bold text-[#2D2A26] tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              Guest Guidelines &amp; Pilgrimage Sanctity
            </h4>
            <ul className="space-y-1 text-xs text-[#2D2A26]/75">
              <li>• Valid government photo ID (Aadhaar/Voter ID/Passport) is mandatory for all guests at check-in.</li>
              <li>• Strictly sober, pure vegetarian (satvik), non-smoking, and family-friendly atmosphere.</li>
              <li>• Located close to Ram Mandir, Hanuman Garhi, and Ayodhya Junction Railway Station.</li>
              <li>• For room tariff and instant booking confirmation, call our help desk directly at 8788041018.</li>
            </ul>
          </div>

          {/* Action CTAs in Modal */}
          <div className="pt-4 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookRoom(room);
              }}
              className="w-full sm:flex-1 py-3.5 px-5 bg-[#8B6E4E] hover:bg-[#7D5F3B] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#FDFBF7]" />
              <span>Book / Enquire</span>
            </button>

            <div className="flex w-full sm:w-auto gap-2">
              <a
                href={`tel:${dharamshalaConfig.phoneTel}`}
                className="flex-1 sm:flex-initial py-3.5 px-5 border border-[#EAE4D9] bg-white hover:bg-[#F0EBE3] text-[#2D2A26] font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Call 8788041018</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
