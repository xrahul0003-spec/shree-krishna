import React from 'react';
import { CheckCircle2, Train, Users, Shield, Sparkles } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Bento Visual Showcase: Clean Indian Dharamshala Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xs border border-[#EAE4D9] bg-white">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop"
                alt="Shree Krishana Dharamshala Varanasi Room"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2D2A26]/85 via-[#2D2A26]/40 to-transparent p-6 text-white">
                <span className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase py-1 px-3 rounded-full inline-block mb-2">
                  Pilgrim & Family Stay
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold">
                  Neat, serene & comfortable lodging in Kashi
                </p>
              </div>
            </div>

            {/* Float Bento Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -right-2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-[#EAE4D9] items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#F0EBE3] flex items-center justify-center shrink-0 text-[#927148]">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#8B6E4E] tracking-wider">Location Advantage</p>
                <p className="text-sm font-bold text-[#2D2A26]">Opposite Cantt Railway Station</p>
              </div>
            </div>
          </div>

          {/* Text Content in Bento Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE4D9] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
              About Our Dharamshala
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26] leading-tight mb-5">
              Welcome to {dharamshalaConfig.businessName}
            </h2>

            <div className="space-y-3.5 text-[#2D2A26]/85 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                {dharamshalaConfig.businessName} offers clean, peaceful, and family-friendly Dharamshala accommodation located directly opposite Varanasi Cantt Railway Station.
              </p>
              <p>
                We cater specifically to pilgrims visiting the holy city of Kashi, visiting families, and railway travellers seeking comfortable budget accommodation without unnecessary hassles or distant travel.
              </p>
              <p>
                With both well-ventilated <strong>Non-AC</strong> and cool <strong>Air-Conditioned (AC)</strong> room options, along with spacious <strong>Family Rooms</strong>, guests can choose a comfortable stay according to their budget and requirement.
              </p>
            </div>

            {/* Highlights Bento Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-[#EAE4D9]">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Directly opposite Varanasi Cantt Railway Station
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Family-friendly and peaceful pilgrim atmosphere
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  AC and Non-AC room choices for every budget
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FDFBF7] border border-[#F0EBE3]">
                <CheckCircle2 className="w-4 h-4 text-[#927148] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D2A26] font-medium">
                  Clean bedding, attached bathrooms & filtered water
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

