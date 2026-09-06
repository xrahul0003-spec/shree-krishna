import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Rooms & Tariff', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4D9] py-2.5'
          : 'bg-[#FDFBF7] border-b border-[#EAE4D9] py-3.5'
      }`}
    >
      {/* Top micro bar for quick trust notice */}
      <div className="hidden lg:block border-b border-[#EAE4D9]/60 pb-1.5 mb-2 text-xs text-[#2D2A26]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#8B6E4E] font-medium bg-[#F0EBE3] px-3 py-0.5 rounded-full text-[11px] border border-[#EAE4D9]">
              <MapPin className="w-3 h-3 text-[#927148]" />
              Opposite Varanasi Cantt Railway Station
            </span>
            <span className="text-[#EAE4D9]">|</span>
            <span>Englishia Line, Varanasi Cantt, UP 221002</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${dharamshalaConfig.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[#927148] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#25D366]" />
              Direct Help Desk: {dharamshalaConfig.phone}
            </a>
            <a
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2D2A26]/80 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Business Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#927148] rounded-2xl p-1 -ml-1"
          >
            <div className="w-11 h-11 bg-[#927148] rounded-2xl flex items-center justify-center text-[#FDFBF7] font-serif font-bold text-lg shadow-xs shrink-0 border border-[#8B6E4E]/30">
              SK
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl leading-tight font-bold text-[#2D2A26] group-hover:text-[#927148] transition-colors">
                {dharamshalaConfig.businessName}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8B6E4E] font-semibold">
                श्री कृष्ण धर्मशाला ट्रस्ट • Est. 1933
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-[#2D2A26]/85">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full hover:text-[#927148] hover:bg-[#F0EBE3] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${dharamshalaConfig.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#2D2A26] bg-white border border-[#EAE4D9] rounded-full hover:border-[#927148] transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>8788041018</span>
            </a>

            <button
              id="header-book-cta"
              onClick={onBookClick}
              type="button"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#927148] hover:bg-[#7D5F3B] active:bg-[#684E2F] rounded-full transition-all shadow-sm tracking-wide cursor-pointer"
            >
              Book a Room
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${dharamshalaConfig.phone}`}
              className="p-2 text-[#2D2A26] hover:text-[#927148] hover:bg-[#F0EBE3] rounded-full sm:hidden"
              aria-label="Call Dharamshala"
            >
              <Phone className="w-5 h-5 text-[#25D366]" />
            </a>
            
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D2A26] hover:bg-[#F0EBE3] rounded-full focus:outline-none focus:ring-2 focus:ring-[#927148]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#EAE4D9] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-base font-medium text-[#2D2A26] hover:text-[#927148] hover:bg-[#F0EBE3] rounded-xl"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#EAE4D9] flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 px-4 bg-[#927148] hover:bg-[#7D5F3B] text-white font-semibold text-sm rounded-full text-center shadow-sm"
              >
                Book a Room / Enquiry
              </button>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${dharamshalaConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-2 px-3 border border-[#EAE4D9] rounded-full text-[#2D2A26] font-medium text-xs bg-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 border border-emerald-300 bg-emerald-50 rounded-full text-emerald-800 font-medium text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
