import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface FooterProps {
  onBookClick: () => void;
  onOpenLegal?: (doc: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2A26] text-white/80 pt-16 pb-24 sm:pb-12 border-t border-[#EAE4D9]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: About Birla Dharamshala */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden bg-[#F0EBE3] flex items-center justify-center border border-white/20 shrink-0">
                <img
                  src="/images/dharamshala.webp"
                  alt="Birla Dharamshala Ayodhya"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {dharamshalaConfig.businessName}
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold mt-0.5">
                  {dharamshalaConfig.businessNameHindi} • Ayodhya
                </p>
              </div>
            </div>

            <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
              Birla Dharamshala in Ayodhya offers peaceful, clean, and budget-friendly accommodation for pilgrims, devotees, and visiting families. Situated along Ayodhya Junction Road in Sai Nagar, we provide effortless access to Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and sacred Saryu Ghats.
            </p>

            {/* Disclaimer / Note as mandated */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#D4AF37] leading-relaxed">
              <strong>Notice:</strong> Birla Dharamshala provides affordable and peaceful accommodation for pilgrims and visitors in Ayodhya. For room booking and enquiry, please contact directly through phone or WhatsApp.
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onBookClick}
                className="px-6 py-2.5 rounded-full bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
              >
                Enquire Room / Check Availability
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#nearby-places" className="hover:text-white transition-colors">Nearby Places</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Categories & Facilities */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5">
                Room Categories
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-white/75">
                <li>• Air-Conditioned Room (AC Room)</li>
                <li>• Affordable Non-AC Room</li>
                <li>• Spacious Family Room</li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5">
                Key Facilities
              </h4>
              <ul className="space-y-1 text-xs text-white/70">
                <li>• Free Vehicle Parking</li>
                <li>• 24×7 CCTV Security</li>
                <li>• 24×7 Water Supply &amp; Power</li>
                <li>• Pure Vegetarian (Satvik) Food Nearby</li>
                <li>• Clean Bedding &amp; Hygiene Standards</li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Contact Details
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123</p>
                <p className="text-white/60 text-[11px] mt-1">Near Shri Ram Mandir &amp; Ayodhya Junction</p>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-white">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`tel:${dharamshalaConfig.phoneTel}`} className="hover:text-[#D4AF37] font-bold text-sm">
                  {dharamshalaConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-white">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-medium"
                >
                  WhatsApp: {dharamshalaConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#25D366] font-medium bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                24×7 Pilgrim Help Desk
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="text-center sm:text-left">
            <p className="font-medium text-white/90">
              © 2025 Birla Dharamshala. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal?.('privacy')}
              className="text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/30">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal?.('terms')}
              className="text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-white/30">•</span>
            <span className="text-[#D4AF37] font-medium">Ayodhya, Uttar Pradesh</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
