import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Mail } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Business Identity & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#F0EBE3] flex items-center justify-center border border-white/20 shrink-0">
                <img
                  src="/images/copy.jpg"
                  alt={dharamshalaConfig.businessName}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {dharamshalaConfig.businessName}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                  श्री कृष्ण धर्मशाला ट्रस्ट • Est. 12 June 1933
                </p>
                <p className="text-[11px] text-white/60">
                  {dharamshalaConfig.businessType}
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              A trusted sanctuary established in 1933 providing clean, peaceful, and affordable accommodation for pilgrims, families, and railway travellers right opposite Varanasi Cantt Railway Station.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="px-6 py-2.5 rounded-full bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                Book Your Room / Enquiry
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Rooms & Tariff</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Directions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('privacy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left text-white/70"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('terms')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left text-white/70"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Address & Contact
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{dharamshalaConfig.addressHindi}</p>
                <p className="text-white/60 text-xs mt-1">Directly opposite Varanasi Cantt Railway Station</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 pt-2">
              <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
              <a href={`tel:${dharamshalaConfig.phone}`} className="hover:text-[#D4AF37] font-bold text-base">
                {dharamshalaConfig.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] font-medium"
              >
                WhatsApp: +91 {dharamshalaConfig.phone}
              </a>
            </div>

            {dharamshalaConfig.email && (
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${dharamshalaConfig.email}`}
                  className="hover:text-[#D4AF37] font-medium truncate"
                >
                  {dharamshalaConfig.email}
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="font-semibold text-white/90">
              Copyright © 2026 {dharamshalaConfig.businessName} (श्री कृष्ण धर्मशाला ट्रस्ट). All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="text-white/60">
              Registered Charitable Trust (Regd. 12 June 1933)
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
            <span className="text-[#D4AF37] font-medium">Varanasi, Uttar Pradesh</span>
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
