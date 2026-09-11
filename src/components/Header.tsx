import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface HeaderProps {
  onBookClick: () => void;
  onOpenLegal?: (doc: 'privacy' | 'terms') => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onOpenLegal }) => {
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
    { name: 'About Us', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Our Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
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
      <div className="hidden lg:block border-b border-[#EAE4D9]/60 pb-1.5 mb-2 text-xs text-[#2D2A26]/75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#8B6E4E] font-medium bg-[#F0EBE3] px-3 py-0.5 rounded-full text-[11px] border border-[#EAE4D9]">
              <MapPin className="w-3 h-3 text-[#927148]" />
              Near Ram Mandir & Ayodhya Junction
            </span>
            <span className="text-[#EAE4D9]">|</span>
            <span>Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya 224123</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="inline-flex items-center gap-1.5 hover:text-[#927148] font-semibold text-[#2D2A26] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct Help Desk: {dharamshalaConfig.phoneDisplay}</span>
            </a>
            <span className="text-[#EAE4D9]">|</span>
            <a
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2D2A26]/80 hover:text-[#25D366] font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Chat</span>
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
            <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-xs shrink-0 border border-[#8B6E4E]/30 bg-[#F0EBE3] flex items-center justify-center">
              <img
                src="/images/dharamshala.webp"
                alt="Birla Dharamshala Ayodhya"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl leading-tight font-bold text-[#2D2A26] group-hover:text-[#927148] transition-colors">
                {dharamshalaConfig.businessName}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8B6E4E] font-semibold">
                {dharamshalaConfig.businessNameHindi}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-sm font-medium text-[#2D2A26]/85">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-full hover:text-[#927148] hover:bg-[#F0EBE3] transition-colors"
              >
                {link.name}
              </a>
            ))}
            {onOpenLegal && (
              <>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="px-3 py-1.5 rounded-full hover:text-[#927148] hover:bg-[#F0EBE3] transition-colors cursor-pointer text-sm font-medium text-[#2D2A26]/85"
                >
                  Terms
                </button>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="px-3 py-1.5 rounded-full hover:text-[#927148] hover:bg-[#F0EBE3] transition-colors cursor-pointer text-sm font-medium text-[#2D2A26]/85"
                >
                  Privacy
                </button>
              </>
            )}
          </nav>

          {/* Desktop Action Buttons: Call Now & WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-call-btn"
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EAE4D9] bg-white hover:bg-[#F0EBE3] text-[#2D2A26] font-bold text-xs transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Call: {dharamshalaConfig.phoneDisplay}</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onBookClick}
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-xs transition-colors cursor-pointer shadow-2xs"
            >
              <span>Enquire Room</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="p-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl bg-[#F0EBE3] text-[#2D2A26] hover:bg-[#EAE4D9] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE4D9] bg-[#FDFBF7] px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-[#F0EBE3] rounded-2xl flex items-center gap-2.5 text-xs text-[#8B6E4E] font-medium">
            <MapPin className="w-4 h-4 text-[#927148] shrink-0" />
            <span>Near Ram Mandir, Ayodhya Jct Road, Sai Nagar</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#2D2A26] hover:bg-[#F0EBE3] transition-colors"
              >
                {link.name}
              </a>
            ))}
            {onOpenLegal && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLegal('terms');
                  }}
                  className="text-left px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#2D2A26] hover:bg-[#F0EBE3] transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLegal('privacy');
                  }}
                  className="text-left px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#2D2A26] hover:bg-[#F0EBE3] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </>
            )}
          </nav>

          <div className="pt-4 border-t border-[#EAE4D9] grid grid-cols-2 gap-2">
            <a
              href={`tel:${dharamshalaConfig.phoneTel}`}
              className="py-3 px-3 rounded-2xl border border-[#EAE4D9] bg-white text-[#2D2A26] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-2xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full py-3 px-4 rounded-2xl bg-[#927148] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            Check Availability / Book Room
          </button>
        </div>
      )}
    </header>
  );
};
