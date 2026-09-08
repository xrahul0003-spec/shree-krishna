/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { Facilities } from './components/Facilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { NearbyPlaces } from './components/NearbyPlaces';
import { BookingForm } from './components/BookingForm';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { RoomType } from './types';

export default function App() {
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<RoomType | null>(null);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<RoomType | null>(null);
  const [legalModalDoc, setLegalModalDoc] = useState<LegalDocType | null>(null);

  const scrollToBooking = (room?: RoomType) => {
    if (room) {
      setSelectedRoomForBooking(room);
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-800">
      {/* Sticky Header */}
      <Header onBookClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onViewRooms={scrollToRooms} />

        {/* About Section */}
        <About />

        {/* Rooms & Tariff Section */}
        <Rooms
          onViewDetails={(room) => setSelectedRoomForModal(room)}
          onBookEnquire={(room) => scrollToBooking(room)}
        />

        {/* Facilities & Amenities */}
        <Facilities />

        {/* Why Stay With Us */}
        <WhyChooseUs />

        {/* Gallery Section */}
        <Gallery />

        {/* Location Section */}
        <Location />

        {/* Nearby Places Section */}
        <NearbyPlaces />

        {/* Booking Enquiry Section */}
        <BookingForm
          selectedRoom={selectedRoomForBooking}
          onClearSelectedRoom={() => setSelectedRoomForBooking(null)}
        />

        {/* Contact Help CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer
        onBookClick={() => scrollToBooking()}
        onOpenLegal={(doc) => setLegalModalDoc(doc)}
      />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileBottomBar onBookClick={() => scrollToBooking()} />

      {/* Legal Policies Modal (Privacy Policy & Terms) */}
      {legalModalDoc && (
        <LegalModal
          initialDoc={legalModalDoc}
          onClose={() => setLegalModalDoc(null)}
        />
      )}

      {/* Room Details Modal */}
      {selectedRoomForModal && (
        <RoomDetailsModal
          room={selectedRoomForModal}
          onClose={() => setSelectedRoomForModal(null)}
          onBookRoom={(room) => {
            setSelectedRoomForModal(null);
            scrollToBooking(room);
          }}
        />
      )}
    </div>
  );
}

