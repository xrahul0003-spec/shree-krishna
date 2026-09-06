import React, { useState } from 'react';
import { X, Users, Bed, Bath, Wind, Check, Phone, MessageCircle, CalendarCheck, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';
import { RoomType } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface RoomDetailsModalProps {
  room: RoomType | null;
  onClose: () => void;
  onBookRoom: (room: RoomType) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  if (!room) return null;

  const [activeImage, setActiveImage] = useState(room.featuredImage);

  const whatsappUrl = `https://wa.me/${dharamshalaConfig.whatsapp}?text=${encodeURIComponent(
    `Namaste, I want to enquire about booking ${room.name} (${room.price}) at Shree Krishana Dharamshala Trust, Varanasi. Please confirm availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDFBF7] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EAE4D9]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="room-details-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2D2A26]/80 hover:bg-[#2D2A26] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#927148] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative h-64 sm:h-80 w-full bg-[#2D2A26] overflow-hidden rounded-t-3xl">
          <img
            src={activeImage}
            alt={room.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-transparent to-black/30" />
          
          <div className="absolute bottom-5 left-5 right-5 text-white flex flex-wrap items-end justify-between gap-3">
            <div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                  room.isAc ? 'bg-sky-700/90 text-white' : 'bg-[#2D2A26]/90 text-white/90'
                }`}
              >
                <Wind className="w-3.5 h-3.5" />
                {room.isAc ? 'Air-Conditioned' : 'Non-AC Room'}
              </span>
              <h2 id="room-details-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
                {room.name}
              </h2>
            </div>
            <div className="bg-[#8B6E4E] px-4 py-1.5 rounded-full text-right font-serif font-bold text-lg sm:text-xl text-[#FDFBF7] shadow-xs">
              {room.price}
            </div>
          </div>
        </div>

        {/* Thumbnails if multiple images */}
        {room.galleryImages && room.galleryImages.length > 1 && (
          <div className="flex gap-2.5 p-3 bg-[#F0EBE3] border-b border-[#EAE4D9] overflow-x-auto">
            {room.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`h-14 w-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImage === img ? 'border-[#927148] scale-102 ring-2 ring-[#927148]/20' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider mb-2">
              About This Room
            </h4>
            <p className="text-[#2D2A26]/80 text-sm sm:text-base leading-relaxed">
              {room.fullDescription || room.shortDescription}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-[#EAE4D9] text-xs shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <p className="text-[#2D2A26]/50 font-medium uppercase text-[10px]">Occupancy</p>
                <p className="font-semibold text-[#2D2A26]">{room.occupancy}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <p className="text-[#2D2A26]/50 font-medium uppercase text-[10px]">Beds</p>
                <p className="font-semibold text-[#2D2A26]">{room.bedConfig}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Bath className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <p className="text-[#2D2A26]/50 font-medium uppercase text-[10px]">Bathroom</p>
                <p className="font-semibold text-[#2D2A26]">{room.bathroomInfo}</p>
              </div>
            </div>
          </div>

          {/* Deposit info if available */}
          {room.deposit && room.deposit.trim() !== '' && (
            <div className="p-3.5 bg-[#F0EBE3] rounded-2xl border border-[#EAE4D9] text-[#8B6E4E] text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0" />
              <span>Deposit Policy: {room.deposit}</span>
            </div>
          )}

          {/* Check-In & Check-Out Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white rounded-2xl border border-[#EAE4D9] text-xs text-[#2D2A26] shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <span className="font-bold block text-[#2D2A26]">Check-in Time:</span>
                <span className="text-[#2D2A26]/75">{dharamshalaConfig.checkInTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#927148] shrink-0" />
              <div>
                <span className="font-bold block text-[#2D2A26]">Check-out Time:</span>
                <span className="text-[#2D2A26]/75">{dharamshalaConfig.checkOutTime}</span>
              </div>
            </div>
          </div>

          {/* Room Facilities */}
          <div>
            <h4 className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider mb-3">
              Room Facilities & Features
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#2D2A26]">
              {room.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EAE4D9]">
                  <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span className="truncate">{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* House Rules */}
          <div>
            <h4 className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#927148]" />
              House Rules & Guest Guidelines
            </h4>
            <ul className="space-y-1.5 text-xs text-[#2D2A26]/75">
              {room.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#927148] font-bold">•</span>
                  <span>{rule}</span>
                </li>
              ))}
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
              <span>Book This Room</span>
            </button>

            <div className="flex w-full sm:w-auto gap-2">
              <a
                href={`tel:${dharamshalaConfig.phone}`}
                className="flex-1 sm:flex-initial py-3.5 px-5 border border-[#EAE4D9] bg-white hover:bg-[#F0EBE3] text-[#2D2A26] font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial py-3.5 px-5 border border-[#25D366]/30 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#2D2A26] font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
