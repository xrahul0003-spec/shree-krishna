import React from 'react';
import { Users, Bed, Bath, Wind, Check, Phone, MessageCircle, Info, CalendarCheck } from 'lucide-react';
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
  const [imgSrc, setImgSrc] = React.useState(room.featuredImage);

  const whatsappUrl = `https://wa.me/${dharamshalaConfig.whatsapp}?text=${encodeURIComponent(
    `Namaste, I am enquiring about room availability for ${room.name} at Shree Krishana Dharamshala Trust Varanasi. Tariff listed is ${room.price}. Please share details.`
  )}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-xs hover:shadow-md transition-all flex flex-col h-full">
      {/* Room Image with Badge */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-100 group m-2.5 rounded-2xl">
        <img
          src={imgSrc}
          alt={room.name}
          onError={() => {
            const fallback = room.galleryImages?.[1] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop';
            if (imgSrc !== fallback) {
              setImgSrc(fallback);
            }
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Bento Pill Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F0EBE3]/95 backdrop-blur-xs text-[#8B6E4E] border border-[#EAE4D9] shadow-2xs">
            <Wind className="w-3 h-3 text-[#927148]" />
            {room.isAc ? 'AC Room' : 'Non-AC Room'}
          </span>
          {room.category === 'family' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-[#D4AF37] text-stone-950 uppercase shadow-2xs">
              <Users className="w-3 h-3" />
              Family Suite
            </span>
          )}
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-[#2D2A26]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-right shadow-sm border border-white/10">
          <p className="text-xs sm:text-sm font-bold text-[#FDFBF7] font-serif leading-none">
            {room.price}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between pt-2">
        <div>
          {/* Room Title & Short Description */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A26] mb-2">
            {room.name}
          </h3>
          <p className="text-[#2D2A26]/70 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
            {room.shortDescription}
          </p>

          {/* Deposit Info - ONLY show if deposit is not empty */}
          {room.deposit && room.deposit.trim() !== '' && (
            <div className="mb-3 px-3 py-1 rounded-full bg-[#F0EBE3] border border-[#EAE4D9] text-[#8B6E4E] text-xs font-semibold">
              Deposit: {room.deposit}
            </div>
          )}

          {/* Key Specs Grid in Bento Container */}
          <div className="grid grid-cols-2 gap-2.5 py-3 border border-[#F0EBE3] text-xs text-[#2D2A26] mb-4 bg-[#FDFBF7] rounded-2xl p-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <span className="text-[#2D2A26]/50 block text-[10px] uppercase font-bold">Capacity</span>
                <span className="font-semibold text-[#2D2A26] text-xs">{room.occupancy}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <span className="text-[#2D2A26]/50 block text-[10px] uppercase font-bold">Beds</span>
                <span className="font-semibold text-[#2D2A26] text-xs truncate block" title={room.bedConfig}>
                  {room.bedConfig}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-[#EAE4D9]/50">
              <Bath className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <span className="text-[#2D2A26]/50 block text-[10px] uppercase font-bold">Bathroom</span>
                <span className="font-semibold text-[#2D2A26] text-xs">{room.bathroomInfo}</span>
              </div>
            </div>
          </div>

          {/* Room Facilities List */}
          <div className="mb-5">
            <p className="text-[10px] font-bold text-[#8B6E4E] uppercase tracking-wider mb-2">
              Key In-Room Amenities
            </p>
            <ul className="grid grid-cols-2 gap-1.5 text-xs text-[#2D2A26]/80">
              {room.facilities.slice(0, 6).map((facility, idx) => (
                <li key={idx} className="flex items-center gap-1.5 truncate">
                  <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span className="truncate">{facility}</span>
                </li>
              ))}
            </ul>
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
              href={`tel:${dharamshalaConfig.phone}`}
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
