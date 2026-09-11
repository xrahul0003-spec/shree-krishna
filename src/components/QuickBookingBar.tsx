import React, { useState } from 'react';
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface QuickBookingBarProps {
  onCheckAvailability?: (details: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Air-Conditioned Room (AC Room)');
  const [guests, setGuests] = useState('2 Guests');

  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCheckAvailability) {
      onCheckAvailability({ checkIn, checkOut, roomType, guests });
    } else {
      const element = document.querySelector('#booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-8">
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#EAE4D9]">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          
          {/* Check-In Date */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#927148]" />
              Check-In Date
            </label>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-[#2D2A26] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#927148]"
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#927148]" />
              Check-Out Date
            </label>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-[#2D2A26] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#927148]"
            />
          </div>

          {/* Room Category */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#927148]" />
              Room Category
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-[#2D2A26] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#927148]"
            >
              <option value="Air-Conditioned Room (AC Room)">Air-Conditioned Room (AC Room)</option>
              <option value="Affordable Non-AC Room">Affordable Non-AC Room</option>
              <option value="Spacious Family Room">Spacious Family Room</option>
            </select>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#927148]" />
              Pilgrims / Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-[#2D2A26] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#927148]"
            >
              <option value="1 Guest">1 Guest (Devotee)</option>
              <option value="2 Guests">2 Guests (Couple / Friends)</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4+ Family Group">4+ Pilgrims (Family Group)</option>
            </select>
          </div>

          {/* Submit CTA */}
          <div>
            <button
              id="quick-check-availability-btn"
              type="submit"
              className="w-full py-3 px-4 rounded-2xl bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

        <div className="mt-3.5 pt-3 border-t border-[#F0EBE3] flex flex-wrap items-center justify-between gap-3 text-xs text-[#2D2A26]/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Direct booking with Birla Dharamshala, Ayodhya • Call 8788041018 • No booking agency charges</span>
          </div>
          <span className="text-[#8B6E4E] font-medium">
            24/2 10, Ayodhya Jct Road, Sai Nagar
          </span>
        </div>
      </div>
    </div>
  );
};
