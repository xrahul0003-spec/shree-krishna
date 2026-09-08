import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Phone, MapPin, Mail } from 'lucide-react';

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
              <p className="text-xs text-[#D4AF37]">Shree Krishana Dharamshala Trust</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle buttons */}
            <div className="hidden sm:flex bg-white/10 p-1 rounded-xl text-xs font-medium mr-2">
              <button
                type="button"
                onClick={() => setActiveDoc('privacy')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeDoc === 'privacy' ? 'bg-[#927148] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveDoc('terms')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeDoc === 'terms' ? 'bg-[#927148] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                Terms & Conditions
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
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
            Terms & Conditions
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
                  <strong>Effective Date / Last Updated:</strong> September 2026
                </p>
                <p className="text-xs text-stone-500">
                  <strong>Entity:</strong> Shree Krishana Dharamshala Trust (Varanasi, Uttar Pradesh, India)
                </p>
              </div>

              <hr className="border-[#EAE4D9]" />

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">1. Introduction</h2>
                <p>
                  Shree Krishana Dharamshala Trust (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates a traditional Dharamshala and guest accommodation facility located directly in front of Varanasi Cantt Railway Station, Englishia Line, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India.
                </p>
                <p>
                  We are committed to handling your personal data responsibly, transparently, and in compliance with applicable laws of India. This Privacy Policy describes the types of information we collect from guests, visitors, and website users, why and how we collect it, how we safeguard it, and the choices available to you.
                </p>
                <p>
                  By accessing our website, inquiring about accommodation, requesting a room reservation, or staying at our premises, you acknowledge the terms of this Privacy Policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">2. Information We Collect</h2>
                <p>
                  We collect and use only the information that is reasonably required to deliver our accommodation services, process your reservations and payments, verify guest identity as required by law, communicate with you, and maintain safety on our premises.
                </p>
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE4D9] space-y-2">
                  <h3 className="font-semibold text-stone-900 text-sm">Depending on the service requested, information collected may include:</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Contact & Personal Details:</strong> Guest&apos;s full name, mobile phone number, WhatsApp contact number, postal address, and email address (where provided).</li>
                    <li><strong>Booking & Stay Details:</strong> Check-in and check-out dates, room type preferences, number of guests, vehicle details (if parking on premises), and special assistance requirements.</li>
                    <li><strong>Guest Verification & Identification Documents:</strong> Government-recognized photo identification details (such as Aadhaar card, Voter ID, Passport, or Driving License) as mandated by local authorities and hospitality regulations for guest registry records.</li>
                    <li><strong>Transaction & Payment Details:</strong> Transaction reference numbers, payment status, amount paid, and mode of payment (e.g., UPI, debit/credit card via gateway, net banking).</li>
                    <li><strong>Technical & Browsing Data:</strong> Basic device information, IP address, and standard log data when interacting with our digital interfaces for security and performance optimization.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">3. Why We Collect Information & How We Use It</h2>
                <p>We use your personal data exclusively for legitimate operational, service, and statutory purposes:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>To review, process, and confirm room reservation requests and inquiries.</li>
                  <li>To verify guest identity during arrival and complete statutory guest register (Form C/local guest register) formalities as required by local administration and law enforcement in Varanasi.</li>
                  <li>To process booking advances, tariffs, or security deposits safely through certified payment gateways.</li>
                  <li>To send booking acknowledgments, check-in instructions, arrival assistance, and customer support messages via phone, SMS, or WhatsApp.</li>
                  <li>To maintain security, prevent unauthorized entry, prevent fraudulent bookings, and protect the safety of all guests, pilgrims, and staff within our premises.</li>
                  <li>To comply with tax, regulatory, accounting, and legal obligations under Indian law.</li>
                </ul>
                <p className="font-medium text-stone-800">
                  We do <strong>not</strong> sell, rent, trade, or monetize your personal information to third parties for advertising or commercial marketing purposes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">4. Online Payment Processing</h2>
                <p>
                  When guests choose to make advance payments or settle accommodation charges online, transactions are processed through authorized, external third-party payment gateways and payment service providers.
                </p>
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE4D9] space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong>Important Security Disclosure:</strong> Shree Krishana Dharamshala Trust does <em>not</em> collect, access, or store your sensitive payment instrument credentials—such as complete credit/debit card numbers, CVV codes, net banking passwords, UPI PINs, or One-Time Passwords (OTPs).
                  </p>
                  <p>
                    All payment credentials are encrypted and processed directly by the respective payment gateway provider in compliance with Reserve Bank of India (RBI) directives and Payment Card Industry Data Security Standards (PCI-DSS). The payment provider handles your transaction data in accordance with its own privacy policy and terms.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">5. Guest Verification & Identification Documents</h2>
                <p>
                  In accordance with statutory hospitality regulations in Uttar Pradesh and local police verification guidelines in Varanasi, all adult guests must present a valid, government-issued photo identity proof at the time of check-in.
                </p>
                <p>
                  Identification details recorded in our guest register are retained securely solely for verification, law-enforcement compliance, and safety purposes. We do not use identification records for any promotional activity.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">6. How Customer Information is Protected & Security Limitations</h2>
                <p>
                  We implement reasonable technical, administrative, and physical security safeguards to protect customer data from unauthorized access, accidental loss, alteration, disclosure, or misuse. Access to guest records is restricted to authorized personnel who require access to perform operational duties.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
                  <strong>Security Limitations:</strong> While we employ reasonable measures to safeguard your personal data, no method of transmission over the internet or method of electronic storage can be guaranteed to be absolutely impervious or 100% secure. Guests transmit electronic communications and data at their own risk, and we encourage guests never to share sensitive passwords or financial PINs with anyone.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">7. Data Sharing & Disclosure</h2>
                <p>We share personal information strictly on a need-to-know basis under the following limited circumstances:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Authorized Service Providers:</strong> Trusted technology partners, payment aggregators, and messaging platforms that assist in payment routing, server hosting, and sending booking confirmations. These partners are bound to maintain data confidentiality.</li>
                  <li><strong>Legal & Regulatory Authorities:</strong> Where disclosure is required by Indian law, court order, or formal directive from local law enforcement or municipal authorities in Varanasi.</li>
                  <li><strong>Protection of Rights & Safety:</strong> Where disclosure is reasonably necessary to enforce our Terms & Conditions, investigate suspected fraud, or protect the rights, property, and safety of our guests, staff, or the public.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">8. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as reasonably necessary to fulfill the purposes outlined in this Privacy Policy—including providing accommodation, resolving disputes, meeting legal, accounting, and tax compliance requirements, and maintaining mandatory guest registers as prescribed under Indian law. Once the retention period expires, records are securely archived, deleted, or anonymized.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">9. Cookies & Website Technologies</h2>
                <p>
                  Our website may use standard session cookies or browser storage to enable essential site features, remember user preferences, maintain session security, and analyze non-personally identifiable site traffic. You can adjust your browser settings to refuse cookies or alert you when cookies are sent; however, certain site features may not function optimally without essential cookies.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">10. Customer Privacy Rights & Requests</h2>
                <p>
                  Under applicable Indian data protection principles, you may contact us to review the personal information we hold about you, request corrections to inaccurate details, or request deletion of data that is no longer required for statutory compliance. To submit a privacy inquiry, please reach out to us using the contact details provided below. We will verify your identity before processing such requests.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">11. Children&apos;s Privacy</h2>
                <p>
                  Our accommodation facilities are family-friendly and welcome guests of all ages. However, reservations and online inquiries must be initiated by adults aged 18 or older. We do not knowingly collect personal information directly from unaccompanied minors.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">12. Changes to this Privacy Policy</h2>
                <p>
                  We may periodically update this Privacy Policy to reflect changes in our operational procedures, payment workflows, or applicable legal requirements. The updated policy will be posted on this page with an updated &quot;Last Updated / Effective Date.&quot; We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4D9]">
                <h2 className="font-serif text-lg font-bold text-stone-900">13. Contact Information</h2>
                <p className="text-xs sm:text-sm">For any questions, concerns, or privacy requests, please contact us at:</p>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <p><strong>Business Name:</strong> Shree Krishana Dharamshala Trust</p>
                  <p><strong>Address:</strong> In front of Cantt Railway Station, Englishia Line, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India</p>
                  <p><strong>Location:</strong> Directly opposite Varanasi Cantt Railway Station</p>
                  <p><strong>Contact Number:</strong> +91 8788041018</p>
                  <p><strong>Email Address:</strong> [OFFICIAL EMAIL ADDRESS]</p>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#927148] block mb-1">
                  Legal Documentation
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Terms &amp; Conditions
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  <strong>Effective Date / Last Updated:</strong> September 2026
                </p>
                <p className="text-xs text-stone-500">
                  <strong>Entity:</strong> Shree Krishana Dharamshala Trust (Varanasi, Uttar Pradesh, India)
                </p>
              </div>

              <hr className="border-[#EAE4D9]" />

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">1. Introduction &amp; Acceptance of Terms</h2>
                <p>
                  Welcome to <strong>Shree Krishana Dharamshala Trust</strong> (&quot;Trust,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms &amp; Conditions govern the reservation, occupancy, and use of accommodation and premises managed by our Trust, located in front of Cantt Railway Station, Englishia Line, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India.
                </p>
                <p>
                  By booking a room, paying an advance or tariff, submitting an inquiry, or staying at our Dharamshala, you (&quot;Guest&quot; or &quot;User&quot;) agree to be bound by these Terms &amp; Conditions in their entirety. If you do not agree with any part of these terms, please do not proceed with your reservation.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">2. Nature of Accommodation Services</h2>
                <p>
                  Shree Krishana Dharamshala Trust is a registered charitable trust accommodation facility dedicated to providing clean, peaceful, and family-friendly lodging primarily for pilgrims, devotees visiting Kashi Vishwanath and sacred shrines of Varanasi, travelers, and their accompanying family members.
                </p>
                <p>
                  Our services are offered in good faith on a trust/dharamshala basis, providing essential amenities such as comfortable bedding, attached/common bathrooms, water supply, and clean premises.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">3. Booking Procedure &amp; Confirmation</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Booking Requests:</strong> Reservation inquiries may be submitted through our website, via telephone (+91 8788041018), via WhatsApp, or in person at our front reception.</li>
                  <li><strong>Booking Confirmation:</strong> A reservation is confirmed only upon receipt of the required booking advance or full tariff (as specified at the time of booking) and formal issuance of a booking confirmation or receipt by the Trust.</li>
                  <li><strong>Allocation of Rooms:</strong> Specific room numbers or floor allocations are subject to operational availability on the date of check-in, though we make every reasonable effort to accommodate the booked category (e.g., AC Room, Non-AC Room, Family Room).</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">4. Check-In, Check-Out &amp; Guest Verification</h2>
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE4D9] space-y-2 text-xs sm:text-sm">
                  <p><strong>Standard Check-In Time:</strong> [CHECK-IN TIME] (e.g., 12:00 PM / As per booking confirmation)</p>
                  <p><strong>Standard Check-Out Time:</strong> [CHECK-OUT TIME] (e.g., 11:00 AM / 24-hour cycle as applicable)</p>
                  <p><strong>Early Check-In / Late Check-Out:</strong> Early check-in or delayed check-out is strictly subject to room availability and may incur nominal additional charges as determined by reception management.</p>
                </div>
                <p className="font-semibold text-stone-900 text-sm mt-3">Mandatory Identification Proof:</p>
                <p>
                  As mandated by the Government of India and local administration authorities in Varanasi:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Every adult guest must produce original, valid government-recognized photo identification (Aadhaar Card, Voter ID, Passport, or Driving License) at check-in. PAN Card is generally not accepted as address proof.</li>
                  <li>Foreign nationals must present a valid passport, visa, and complete statutory Form C registration requirements.</li>
                  <li>The Trust reserves the right to deny check-in without refund if valid identification documents are not furnished.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">5. Online Payment Terms</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Tariffs, booking advances, and service charges are quoted in Indian Rupees (INR).</li>
                  <li>Online payments are routed through secure, authorized third-party payment gateways. Guests agree to bear any transaction charges, convenience fees, or taxes levied by financial institutions or gateways, where applicable.</li>
                  <li>In the event of a transaction failure where funds are deducted from the guest&apos;s account without generating a booking confirmation, the deduction is typically resolved by the guest&apos;s bank or payment gateway within standard banking settlement cycles (typically 3 to 7 working days).</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">6. Cancellation, Refund &amp; No-Show Policy</h2>
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE4D9] space-y-3 text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-stone-900">Cancellation Policy:</h3>
                    <p>[CANCELLATION POLICY] (e.g., Cancellations requested 48 hours or more before scheduled check-in time may be eligible for a partial/full refund less administrative charges. Cancellations within 24–48 hours may be subject to a deduction equal to one night&apos;s tariff.)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Refund Policy:</h3>
                    <p>[REFUND POLICY] (e.g., Eligible refunds will be processed via the original payment method within [NUMBER OF DAYS, e.g., 7 to 10] business days after formal cancellation verification. Cash refunds are not issued for online payments.)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">No-Show Policy:</h3>
                    <p>[NO-SHOW POLICY] (e.g., If a guest fails to arrive by [NO-SHOW CUTOFF TIME] on the scheduled check-in date without prior written or telephonic notification, the reservation will be deemed a No-Show, the room may be released for other pilgrims, and the advance payment will be forfeited.)</p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">7. Dharamshala Code of Conduct &amp; Guest Responsibilities</h2>
                <p>
                  To preserve the spiritual sanctity, peace, and family-oriented ambiance of Shree Krishana Dharamshala Trust, all guests agree to adhere to our property rules:
                </p>
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE4D9] space-y-2 text-xs sm:text-sm">
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Prohibited Substances:</strong> Consumption, possession, or storage of alcohol, non-vegetarian food, illicit narcotics, tobacco, or smoking is strictly prohibited inside the Dharamshala premises and rooms.</li>
                    <li><strong>Noise &amp; Decorum:</strong> Guests must maintain respectful decorum. Creating excessive noise, loud music, or disturbance that infringes upon the peace of fellow pilgrims and families is forbidden, particularly during night hours (10:00 PM to 6:00 AM).</li>
                    <li><strong>Prohibited &amp; Unlawful Activities:</strong> Any illegal, immoral, or anti-social activities, gambling, hazardous materials, firearms, or storage of contraband on the property is strictly forbidden. Any violation will be reported immediately to Varanasi police authorities, and the offending party will be evicted immediately without refund.</li>
                    <li><strong>Cleanliness &amp; Facility Care:</strong> Guests are requested to maintain cleanliness in rooms, corridors, temple courtyards, and common facilities. Please turn off taps, lights, and air conditioning units when leaving the room.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">8. Damage to Property &amp; Personal Belongings</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Damage to Premises:</strong> Guests are liable for any physical damage, breakage, or loss caused to the Dharamshala building, furnishings, electrical appliances, linen, or fixtures due to willful negligence or misconduct. The cost of repair or replacement will be charged to the responsible guest.</li>
                  <li><strong>Lost &amp; Personal Belongings:</strong> Guests are solely responsible for the safekeeping of their cash, jewelry, mobile phones, electronic devices, luggage, and personal valuables. While we maintain CCTV surveillance in common areas and perimeter security, the Trust shall not be held liable for any loss, theft, or damage to personal belongings brought onto the premises.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">9. Availability, Modifications &amp; Force Majeure</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Room Availability:</strong> All bookings are made subject to room availability. In the rare event that an unforeseen technical fault renders a booked room uninhabitable, the Trust will endeavor to provide an alternative room of equivalent category or provide a prompt refund for the unfulfilled accommodation.</li>
                  <li><strong>Force Majeure:</strong> The Trust shall not be held liable for non-performance or delay in fulfilling accommodation obligations caused by events beyond our reasonable control, including but not limited to natural disasters, floods, earthquakes, extreme weather, strikes, government curfews, civil unrest, regional power grid failures, epidemic restrictions, or sudden orders by pilgrimage/administrative authorities.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">10. Fair &amp; Reasonable Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable Indian law, Shree Krishana Dharamshala Trust, its trustees, managers, and staff shall not be liable for any indirect, incidental, punitive, or consequential damages arising out of or in connection with your stay or use of our website.
                </p>
                <p>
                  Our total aggregate liability for any proven claim directly arising from our accommodation services shall be reasonably limited to the actual amount paid by the guest to the Trust for the specific reservation in dispute. Nothing in these terms excludes liability that cannot be excluded under Indian law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">11. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These Terms &amp; Conditions and any disputes or claims arising out of or related to our accommodation services or website shall be governed by and construed in accordance with the laws of the Republic of India.
                </p>
                <p>
                  Any dispute, controversy, or legal proceeding arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Varanasi, Uttar Pradesh, India</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-stone-900">12. Complaints, Support &amp; Contact Details</h2>
                <p>
                  We are dedicated to ensuring a peaceful and comfortable stay for every pilgrim and guest. If you experience any inconvenience or have questions regarding these terms, please contact our front desk immediately or reach us at:
                </p>
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4D9] space-y-1.5 text-xs sm:text-sm">
                  <p><strong>Business Name:</strong> Shree Krishana Dharamshala Trust</p>
                  <p><strong>Address:</strong> In front of Cantt Railway Station, Englishia Line, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India</p>
                  <p><strong>Location:</strong> Directly opposite Varanasi Cantt Railway Station</p>
                  <p><strong>Contact Phone:</strong> +91 8788041018</p>
                  <p><strong>Email Address:</strong> [OFFICIAL EMAIL ADDRESS]</p>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-3.5 bg-[#FAF8F5] border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-stone-500 text-center sm:text-left">
            Shree Krishana Dharamshala Trust • In front of Cantt Railway Station, Varanasi
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveDoc(activeDoc === 'privacy' ? 'terms' : 'privacy')}
              className="text-xs font-semibold text-[#927148] hover:underline"
            >
              Switch to {activeDoc === 'privacy' ? 'Terms & Conditions' : 'Privacy Policy'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#927148] hover:bg-[#7D5F3B] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
