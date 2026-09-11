import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Phone, MapPin, Mail } from 'lucide-react';
import { dharamshalaConfig } from '../data/dharamshalaData';

export type LegalDocType = 'privacy' | 'terms';

interface LegalModalProps {
  initialDoc: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ initialDoc, onClose }) => {
  const [activeDoc, setActiveDoc] = React.useState<LegalDocType>(initialDoc);

  useEffect(() => {
    setActiveDoc(initialDoc);
  }, [initialDoc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#EAE4D9]">
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-4 bg-[#2D2A26] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#927148] flex items-center justify-center text-white">
              {activeDoc === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                {activeDoc === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs text-[#D4AF37]">Birla Dharamshala, Ayodhya</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle buttons */}
            <div className="hidden sm:flex bg-white/10 p-1 rounded-xl text-xs font-medium mr-2">
              <button
                type="button"
                onClick={() => setActiveDoc('privacy')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeDoc === 'privacy' ? 'bg-[#927148] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveDoc('terms')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeDoc === 'terms' ? 'bg-[#927148] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                Terms &amp; Conditions
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Switcher */}
        <div className="flex sm:hidden border-b border-[#EAE4D9] bg-[#FDFBF7] p-2 gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveDoc('privacy')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl text-center transition-all ${
              activeDoc === 'privacy' ? 'bg-[#927148] text-white' : 'bg-white text-stone-700 border border-[#EAE4D9]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveDoc('terms')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl text-center transition-all ${
              activeDoc === 'terms' ? 'bg-[#927148] text-white' : 'bg-white text-stone-700 border border-[#EAE4D9]'
            }`}
          >
            Terms &amp; Conditions
          </button>
        </div>

        {/* Document Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 text-stone-700 text-sm leading-relaxed space-y-6">
          {activeDoc === 'privacy' ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#927148] block mb-1">
                  Legal Documentation
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Privacy Policy
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  <strong>Effective Date:</strong> 2025 – 2026
                </p>
                <p className="text-xs text-stone-500">
                  <strong>Entity:</strong> Birla Dharamshala (24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123)
                </p>
              </div>

              <hr className="border-[#EAE4D9]" />

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">1. Introduction</h2>
                <p>
                  Birla Dharamshala (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates a peaceful pilgrim accommodation facility located at 24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123.
                </p>
                <p>
                  We are committed to respecting your privacy and protecting any personal information you share with us while inquiring about or staying at our dharamshala in Ayodhya. This Privacy Policy details how we collect, use, and protect guest information.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">2. Information Collected</h2>
                <p>
                  When you inquire or check in at Birla Dharamshala, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Personal details: Name, phone number, email address, home city, state, and pincode.</li>
                  <li>Identification details: Government-issued photo identification (Aadhaar Card, Voter ID, Passport, or Driving Licence) required for local police guest registry regulations.</li>
                  <li>Stay details: Check-in date, check-out date, number of pilgrims/guests, room category preference.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">3. Purpose of Processing</h2>
                <p>
                  We use your details solely to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Confirm room availability and communicate booking details.</li>
                  <li>Maintain legal guest register and comply with statutory law enforcement directives.</li>
                  <li>Provide customer support and directions to our location in Ayodhya.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">4. Contact Help Desk</h2>
                <p>
                  For any privacy inquiries, reach our team at:
                  <br />
                  <strong>Birla Dharamshala</strong>
                  <br />
                  24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123
                  <br />
                  Direct Phone: <strong>8788041018</strong>
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#927148] block mb-1">
                  Guest Agreement &amp; Rules
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Terms &amp; Conditions
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  <strong>Effective Date:</strong> 2025 – 2026
                </p>
                <p className="text-xs text-stone-500">
                  <strong>Entity:</strong> Birla Dharamshala, Ayodhya
                </p>
              </div>

              <hr className="border-[#EAE4D9]" />

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">1. General Principles &amp; Sanctity</h2>
                <p>
                  Birla Dharamshala is a sacred, family-oriented hospitality establishment dedicated to serving pilgrims visiting Shri Ram Mandir and holy temples of Ayodhya. All visiting guests are requested to respect the spiritual sanctity and peaceful atmosphere of the premises.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">2. Mandatory Identification</h2>
                <p>
                  In compliance with Government of India and local administration mandates:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Every adult guest must present an original valid Government photo ID (Aadhaar, Voter ID, Passport, or Driving Licence) at the time of check-in.</li>
                  <li>Check-in cannot be processed without verifiable government identification.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">3. Check-In &amp; Check-Out Timing</h2>
                <p>
                  Standard check-in and check-out times are coordinated by our front desk. Early check-in or late check-out is subject to room availability and prior arrangement via our help desk at 8788041018.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">4. Code of Conduct</h2>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Consumption of alcohol, narcotics, smoking, and non-vegetarian food is strictly prohibited across the entire premises.</li>
                  <li>Guests must maintain quiet and courteous behavior to ensure a peaceful atmosphere for fellow devotees and families.</li>
                  <li>Guests are responsible for their personal valuables; management provides secure premises with 24×7 CCTV monitoring.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">5. Room Tariff &amp; Direct Booking Policy</h2>
                <p>
                  Birla Dharamshala provides affordable and peaceful accommodation for pilgrims and visitors in Ayodhya. For current room tariff, availability, and reservations, please contact directly through phone (8788041018) or WhatsApp.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FDFBF7] border-t border-[#EAE4D9] flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Birla Dharamshala, Ayodhya Jct Road, Sai Nagar • Help Desk: 8788041018</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#2D2A26] hover:bg-stone-800 text-white font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
