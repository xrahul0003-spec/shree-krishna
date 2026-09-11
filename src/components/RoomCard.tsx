import React from 'react';
import { Phone, MessageCircle, Info, CalendarCheck, MapPin, Check } from 'lucide-react';
import { RoomType } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface RoomCardProps {
  room: RoomType;
  onViewDetails: (room: RoomType) => void;
  onBookEnquire: (room: RoomType) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  onViewDetails,
  onBookEnquire,
}) => {
  const whatsappUrl = `https://wa.me/${dharamshalaConfig.whatsapp}?text=${encodeURIComponent(
    `Namaste Birla Dharamshala Ayodhya, I would like to enquire about room tariff and availability for ${room.name} near Ram Mandir.`
  )}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE4D9] hover:border-[#927148] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      {/* Card Visual Header */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F0EBE3]">
        <img
          src={room.featuredImage}
          alt={`${room.name} - Birla Dharamshala Ayodhya`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-[#2D2A26]/90 backdrop-blur-xs text-[#FDFBF7] text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-white/20">
            {room.categoryLabel}
          </span>
        </div>

        {/* Occupancy Badge */}
        {room.occupancy && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="bg-[#D4AF37] text-stone-950 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-xs">
              {room.occupancy}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A26] mb-2">
            {room.name}
          </h3>

          {/* Location note */}
          <p className="text-xs text-[#8B6E4E] font-medium flex items-center gap-1.5 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#927148] shrink-0" />
            <span>Near Ram Mandir &amp; Ayodhya Junction</span>
          </p>
          
          <p className="text-[#2D2A26]/75 text-xs sm:text-sm leading-relaxed mb-4">
            {room.shortDescription}
          </p>

          {/* Key Amenities Micro Pills */}
          {room.features && room.features.length > 0 && (
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {room.features.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[11px] text-[#2D2A26]/75">
                  <Check className="w-3 h-3 text-[#25D366] shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Mandatory Tariff Notice */}
          <div className="mb-5 p-3 rounded-2xl bg-[#F0EBE3] border border-[#EAE4D9] text-[#8B6E4E] text-xs font-semibold text-center">
            {room.tariffNote}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#EAE4D9] space-y-2.5">
          {/* Primary Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails(room)}
              className="py-2.5 px-3 rounded-xl border border-[#EAE4D9] hover:bg-[#F0EBE3] text-[#2D2A26] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5 text-[#927148]" />
              <span>View Details</span>
            </button>

            <button
              type="button"
              onClick={() => onBookEnquire(room)}
              className="py-2.5 px-3 rounded-xl bg-[#8B6E4E] hover:bg-[#7D5F3B] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#FDFBF7]" />
              <span>Book / Enquire</span>
            </button>
          </div>

          {/* Direct Communication Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="py-2 px-3 rounded-xl border border-[#EAE4D9] hover:bg-[#FDFBF7] text-[#2D2A26] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Call Now</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
