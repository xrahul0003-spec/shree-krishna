import React, { useState } from 'react';
import { Sparkles, Check, HelpCircle } from 'lucide-react';
import { RoomType } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';
import { RoomCard } from './RoomCard';

interface RoomsProps {
  onViewDetails: (room: RoomType) => void;
  onBookEnquire: (room: RoomType) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onViewDetails, onBookEnquire }) => {
  const [filter, setFilter] = useState<'all' | 'ac' | 'non-ac' | 'family'>('all');

  const filteredRooms = dharamshalaConfig.roomTypes.filter((room) => {
    if (filter === 'all') return true;
    return room.category === filter;
  });

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Accommodations in Varanasi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Rooms & Tariff
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Compare our clean and well-kept room categories. From budget Non-AC stays to cooled AC rooms and spacious Family Suites, choose what suits your pilgrimage party best.
          </p>

          {/* Bento Pill Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#F0EBE3] rounded-full border border-[#EAE4D9] max-w-full overflow-x-auto shadow-2xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#927148] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              All Rooms ({dharamshalaConfig.roomTypes.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('ac')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === 'ac'
                  ? 'bg-[#927148] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              AC Room
            </button>
            <button
              type="button"
              onClick={() => setFilter('non-ac')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === 'non-ac'
                  ? 'bg-[#927148] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              Non-AC Room
            </button>
            <button
              type="button"
              onClick={() => setFilter('family')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === 'family'
                  ? 'bg-[#927148] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              Family Room
            </button>
          </div>
        </div>

        {/* Bento Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onViewDetails={onViewDetails}
              onBookEnquire={onBookEnquire}
            />
          ))}
        </div>

        {/* Bento Comparison Summary Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#927148]" />
                <h4 className="font-bold text-[#2D2A26] text-sm sm:text-base">
                  Transparent Room Tariff & Guest Information
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#2D2A26]/70">
                All prices are stated clearly per night. Standard check-in is {dharamshalaConfig.checkInTime} and check-out is {dharamshalaConfig.checkOutTime}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#2D2A26]/80">
              <span className="flex items-center gap-1.5 font-semibold bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#F0EBE3]">
                <Check className="w-4 h-4 text-[#25D366]" /> Attached Bathrooms
              </span>
              <span className="flex items-center gap-1.5 font-semibold bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#F0EBE3]">
                <Check className="w-4 h-4 text-[#25D366]" /> Clean Linen
              </span>
              <span className="flex items-center gap-1.5 font-semibold bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#F0EBE3]">
                <Check className="w-4 h-4 text-[#25D366]" /> No Hidden Fees
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
