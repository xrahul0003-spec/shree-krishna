import React, { useState, useEffect } from 'react';
import { Send, Calendar, Users, Phone, User, MessageCircle, AlertCircle, CheckCircle2, Bed } from 'lucide-react';
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

    // Prepare specified pre-filled message according to user instructions:
    // "Namaste, I would like to enquire about room availability at Shree Krishana Dharamshala Trust. My check-in date is [DATE], check-out date is [DATE], guests are [NUMBER], and preferred room is [ROOM TYPE]. Please share availability and tariff."
    let message = `Namaste, I would like to enquire about room availability at Shree Krishana Dharamshala Trust. My check-in date is ${checkInDate}, check-out date is ${checkOutDate}, guests are ${numberOfGuests}, and preferred room is ${roomType}. Please share availability and tariff.`;
    
    if (fullName.trim()) {
      message += ` (Guest Name: ${fullName.trim()}, Phone: ${mobileNumber.trim()})`;
    }
    if (specialRequirements.trim()) {
      message += ` (Note: ${specialRequirements.trim()})`;
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
            Direct Enquiry
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Plan Your Stay in Varanasi
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Fill out the form below to send a direct booking enquiry. We will check room availability and respond immediately via WhatsApp or telephone.
          </p>
        </div>

        {/* Bento Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE4D9] shadow-xs">
          
          {/* Transparent Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-[#F0EBE3] border border-[#EAE4D9] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#927148] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#2D2A26]/80 space-y-1">
              <p className="font-bold text-[#2D2A26]">
                Enquiry Process Notice:
              </p>
              <p>
                Submission does not automatically confirm a room reservation. Room availability and tariff will be confirmed directly by our help desk via telephone or WhatsApp.
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
                Your WhatsApp chat has opened with the pre-filled enquiry for Shree Krishana Dharamshala Trust (+91 8788041018). If it did not open automatically, click below.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Re-open WhatsApp Chat
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-full bg-white border border-[#EAE4D9] text-[#2D2A26] hover:bg-[#F0EBE3] font-semibold text-sm cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {validationError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                  {validationError}
                </div>
              )}

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2D2A26]/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2D2A26]/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="mobileNumber"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="checkInDate" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Check-in Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkInDate"
                      min={todayStr}
                      required
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkOutDate" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Check-out Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkOutDate"
                      min={checkInDate || todayStr}
                      required
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    />
                  </div>
                </div>
              </div>

              {/* Guests & Room Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="numberOfGuests" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2D2A26]/40">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      id="numberOfGuests"
                      value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="More than 6">More than 6 Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="roomType" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                    Room Type (AC / Non-AC) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2D2A26]/40">
                      <Bed className="w-4 h-4" />
                    </div>
                    <select
                      id="roomType"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148]"
                    >
                      <option value="Air-Conditioned Room (AC Room)">
                        Air-Conditioned Room (AC Room) — {dharamshalaConfig.roomPrices.AC_ROOM_PRICE}
                      </option>
                      <option value="Non-AC Standard Room">
                        Non-AC Standard Room — {dharamshalaConfig.roomPrices.NON_AC_ROOM_PRICE}
                      </option>
                      <option value="Spacious Family Room">
                        Spacious Family Room — {dharamshalaConfig.roomPrices.FAMILY_ROOM_PRICE}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label htmlFor="specialRequirements" className="block text-[10px] font-bold uppercase tracking-wider text-[#8B6E4E] mb-1.5">
                  Special Requirements (Optional)
                </label>
                <textarea
                  id="specialRequirements"
                  rows={3}
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder="e.g. Ground floor preference for elderly parents, approximate train arrival time..."
                  className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EAE4D9] rounded-2xl text-sm text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#927148] focus:border-[#927148] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="send-booking-enquiry-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#8B6E4E] hover:bg-[#7D5F3B] active:bg-[#6D5333] text-white font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FDFBF7]" />
                  <span>Send Booking Enquiry (via WhatsApp)</span>
                </button>
                <p className="text-center text-xs text-[#2D2A26]/60 mt-2.5">
                  Direct message opens in WhatsApp to +91 8788041018. Instant acknowledgement from trust desk.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
