import React from 'react';
import { Phone, MessageCircle, Navigation, CalendarCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookClick }) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#EAE4D9] shadow-lg px-3 py-2 safe-area-pb"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* CALL */}
        <a
          id="mobile-call-btn"
          href={`tel:${dharamshalaConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl text-[#2D2A26] hover:bg-[#F0EBE3] active:bg-[#EAE4D9] transition-colors min-h-[46px]"
          aria-label="Call Dharamshala"
        >
          <Phone className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          id="mobile-whatsapp-btn"
          href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl text-[#2D2A26] hover:bg-[#25D366]/10 active:bg-[#25D366]/20 transition-colors min-h-[46px]"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WHATSAPP</span>
        </a>

        {/* DIRECTIONS */}
        <a
          id="mobile-directions-btn"
          href="#location"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl text-[#2D2A26] hover:bg-[#F0EBE3] active:bg-[#EAE4D9] transition-colors min-h-[46px]"
          aria-label="Get Directions"
        >
          <Navigation className="w-4 h-4 text-[#8B6E4E] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">MAP</span>
        </a>

        {/* BOOK NOW */}
        <button
          id="mobile-book-now-btn"
          type="button"
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#8B6E4E] active:bg-[#7D5F3B] text-white shadow-xs transition-colors min-h-[46px] cursor-pointer"
          aria-label="Book a Room"
        >
          <CalendarCheck className="w-4 h-4 text-[#FDFBF7] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">BOOK</span>
        </button>
      </div>
    </div>
  );
};
