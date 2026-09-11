import React, { useState, useEffect } from 'react';
import { Send, Calendar, Users, Phone, User, MessageCircle, AlertCircle, CheckCircle2, BedDouble, Sparkles } from 'lucide-react';
import { RoomType } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

interface BookingFormProps {
  selectedRoom: RoomType | null;
  onClearSelectedRoom?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedRoom, onClearSelectedRoom }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('2');
  const [roomType, setRoomType] = useState('Air-Conditioned Room (AC Room)');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Synchronize when a room is passed from card or modal
  useEffect(() => {
    if (selectedRoom) {
      setRoomType(selectedRoom.name);
    }
  }, [selectedRoom]);

  // Set minimum date for check-in as today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!checkInDate) {
      setValidationError('Please select a check-in date.');
      return;
    }

    if (!checkOutDate) {
      setValidationError('Please select a check-out date.');
      return;
    }

    if (new Date(checkOutDate) < new Date(checkInDate)) {
      setValidationError('Check-out date cannot be earlier than check-in date.');
      return;
    }

    // Prepare pre-filled message for Birla Dharamshala Ayodhya:
    let message = `Namaste Birla Dharamshala Ayodhya, I would like to enquire about room availability. My check-in date is ${checkInDate}, check-out date is ${checkOutDate}, guests count is ${numberOfGuests}, and preferred room category is ${roomType}. Please share current availability and room tariff.`;
    
    if (fullName.trim()) {
      message += ` (Guest Name: ${fullName.trim()}, Phone: ${mobileNumber.trim()})`;
    }
    if (specialRequirements.trim()) {
      message += ` (Special Note: ${specialRequirements.trim()})`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${dharamshalaConfig.whatsapp}?text=${encodedMessage}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setCheckInDate('');
    setCheckOutDate('');
    setNumberOfGuests('2');
    setSpecialRequirements('');
    if (onClearSelectedRoom) {
      onClearSelectedRoom();
    }
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#927148]" />
            Direct Enquiry &amp; Availability Check
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Plan Your Stay in Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Fill out the form below to send an instant room enquiry to Birla Dharamshala. We will check availability and respond immediately via telephone or WhatsApp.
          </p>
        </div>

        {/* Bento Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE4D9] shadow-xs">
          
          {/* Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-[#F0EBE3] border border-[#EAE4D9] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#927148] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#2D2A26]/80 space-y-1">
              <p className="font-bold text-[#2D2A26]">
                Birla Dharamshala Direct Booking Policy:
              </p>
              <p>
                Birla Dharamshala provides affordable and peaceful accommodation for pilgrims and visitors in Ayodhya. For room booking and enquiry, please contact directly through phone (<strong>8788041018</strong>) or WhatsApp.
              </p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">
                Enquiry Generated!
              </h3>
              <p className="text-[#2D2A26]/70 text-sm max-w-md mx-auto">
                Your WhatsApp chat has opened with the pre-filled enquiry for Birla Dharamshala, Ayodhya (+91 {dharamshalaConfig.phoneDisplay}). If it did not open automatically, click below.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${dharamshalaConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </a>
                <a
                  href={`tel:${dharamshalaConfig.phoneTel}`}
                  className="px-6 py-3 rounded-full bg-[#927148] text-white font-bold text-xs sm:text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Help Desk (8788041018)</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-[#EAE4D9] text-[#2D2A26] font-bold text-xs sm:text-sm hover:bg-[#F0EBE3]"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {validationError && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm">
                  {validationError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Chandra Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-3 pl-11 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                    />
                    <User className="w-4 h-4 text-[#8B6E4E] absolute left-4 top-3.5" />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    10-Digit Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      className="w-full px-4 py-3 pl-11 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                    />
                    <Phone className="w-4 h-4 text-[#8B6E4E] absolute left-4 top-3.5" />
                  </div>
                </div>

                {/* Check-In Date */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                  />
                </div>

                {/* Check-Out Date */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    min={checkInDate || todayStr}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    Pilgrims / Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(e.target.value)}
                      className="w-full px-4 py-3 pl-11 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests (Family)</option>
                      <option value="5+">5+ Guests (Family / Group)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#8B6E4E] absolute left-4 top-3.5" />
                  </div>
                </div>

                {/* Room Preference */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                    Preferred Room Category
                  </label>
                  <div className="relative">
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full px-4 py-3 pl-11 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                    >
                      {dharamshalaConfig.roomTypes.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                    <BedDouble className="w-4 h-4 text-[#8B6E4E] absolute left-4 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] mb-2 block">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Ground floor preferred for elderly devotees, approximate arrival time at Ayodhya station..."
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#EAE4D9] bg-[#FDFBF7] text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#927148] hover:bg-[#7D5F3B] text-white font-bold text-sm sm:text-base transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp to Birla Dharamshala</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-[#2D2A26]/60">
                  Prefer direct phone conversation? Call our help desk now at{' '}
                  <a href={`tel:${dharamshalaConfig.phoneTel}`} className="text-[#927148] font-bold hover:underline">
                    {dharamshalaConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
