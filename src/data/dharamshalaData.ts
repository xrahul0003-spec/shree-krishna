import { DharamshalaConfig } from '../types';

/**
 * CENTRAL CONFIGURATION & EDITABLE DATA
 * =====================================
 * All business details, room rates, deposit details, room specifications,
 * property facilities, nearby places, and gallery assets are maintained here
 * for instant and transparent updates.
 */

export const AC_ROOM_PRICE = "₹1800 2-3 guests / Night";
export const NON_AC_ROOM_PRICE = "₹1000 2-3 guest / Night";
export const FAMILY_ROOM_PRICE = "₹2550 4-6 guests / Night";

export const AC_ROOM_DEPOSIT = "";
export const NON_AC_ROOM_DEPOSIT = "";
export const FAMILY_ROOM_DEPOSIT = "";

export const FAMILY_ROOM_OCCUPANCY = "Suitable for 4–6 guests";

export const dharamshalaConfig: DharamshalaConfig = {
  businessName: "Shree Krishana Dharamshala Trust",
  tagline: "Comfortable Dharamshala Stay Near Varanasi Cantt Railway Station",
  businessType: "Dharamshala in Varanasi, Uttar Pradesh",
  
  addressHindi: "कैंट रेलवे स्टेशन के सामने, इंग्लिशिया लाइन, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India",
  addressEnglish: "Opposite Cantt Railway Station, Englishia Line, Vijay Nagar Colony, Varanasi Cantonment, Varanasi, Uttar Pradesh 221002, India",
  landmark: "Directly opposite Varanasi Cantt Railway Station (Junction)",
  
  phone: "8788041018",
  phoneDisplay: "+91 8788041018",
  whatsapp: "918788041018",
  email: "akashomkar0001@gmail.com",
  
  // Editable map URL and embed query
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Varanasi+Cantt+Railway+Station+Englishia+Line+Vijay+Nagar+Colony+Varanasi",
  googleMapEmbedQuery: "Varanasi Cantt Railway Station, Englishia Line, Varanasi",
  
  checkInTime: "12:00 PM (Flexible upon availability)",
  checkOutTime: "11:00 AM",
  
  noticeNotes: [
    "Valid government photo ID (Aadhaar / Voter ID / Passport) required for all adult guests during check-in.",
    "Strictly pure vegetarian and peaceful family environment.",
    "This website provides direct enquiry. Room availability is confirmed by telephone or WhatsApp."
  ],

  roomPrices: {
    AC_ROOM_PRICE,
    NON_AC_ROOM_PRICE,
    FAMILY_ROOM_PRICE,
    AC_ROOM_DEPOSIT,
    NON_AC_ROOM_DEPOSIT,
    FAMILY_ROOM_DEPOSIT,
  },

  familyRoomOccupancy: FAMILY_ROOM_OCCUPANCY,

  roomTypes: [
    {
      id: "ac-room",
      name: "Air-Conditioned Room (AC Room)",
      category: "ac",
      price: AC_ROOM_PRICE,
      deposit: AC_ROOM_DEPOSIT,
      occupancy: "2–3 Guests",
      bedConfig: "1 Double Bed (Extra mattress available upon request)",
      isAc: true,
      bathroomInfo: "Attached Clean Bathroom with Running Water & Geyser",
      shortDescription: "Cool and comfortable stay equipped with air conditioning, fresh clean linens, and a tranquil atmosphere for pilgrims.",
      fullDescription: "Our AC rooms offer a cool, peaceful sanctuary after a long day of darshan at Kashi Vishwanath or exploring the ghats. Designed specifically for budget-conscious families and travellers seeking genuine cleanliness, ventilation, and comfort.",
      featuredImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
      ],
      facilities: [
        "Air Conditioning",
        "Ceiling Fan",
        "Clean & Hygienic Bedding",
        "Attached Clean Bathroom",
        "Filtered Drinking Water",
        "Basic Room Furniture & Table",
        "Family-Friendly Atmosphere",
        "Power Backup Support"
      ],
      rules: [
        "Standard check-in: 12:00 PM | Check-out: 11:00 AM",
        "Government ID mandatory for all guests at check-in",
        "Strictly non-smoking and pure vegetarian premises",
        "Quiet hours from 10:30 PM to 6:00 AM for peaceful rest"
      ]
    },
    {
      id: "non-ac-room",
      name: "Non-AC Standard Room",
      category: "non-ac",
      price: NON_AC_ROOM_PRICE,
      deposit: NON_AC_ROOM_DEPOSIT,
      occupancy: "2–3 Guests",
      bedConfig: "1 Double Bed / Twin Beds",
      isAc: false,
      bathroomInfo: "Attached Clean Bathroom with Regular Water Supply",
      shortDescription: "Affordable, naturally airy and meticulously cleaned room tailored for budget pilgrims and railway travellers.",
      fullDescription: "Ideal for pilgrims and transit travellers arriving at Varanasi Cantt Railway Station looking for a neat, secure, and modest stay without unnecessary luxury surcharges. Well-ventilated with ceiling fans and fresh cotton bedding.",
      featuredImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
      ],
      facilities: [
        "High-Speed Ceiling Fan",
        "Comfortable Bed & Clean Linens",
        "Attached Clean Bathroom",
        "Filtered Drinking Water",
        "Basic Furniture & Wardrobe",
        "Naturally Ventilated Windows",
        "Family-Friendly Environment",
        "Opposite Cantt Railway Station"
      ],
      rules: [
        "Standard check-in: 12:00 PM | Check-out: 11:00 AM",
        "Government ID mandatory for all occupants",
        "Strictly non-smoking and vegetarian premises",
        "Early morning checkout assistance available"
      ]
    },
    {
      id: "family-room",
      name: "Spacious Family Room",
      category: "family",
      price: FAMILY_ROOM_PRICE,
      deposit: FAMILY_ROOM_DEPOSIT,
      occupancy: FAMILY_ROOM_OCCUPANCY,
      bedConfig: "Multiple Beds (Double Bed + Single Beds / Bunk arrangements)",
      isAc: true,
      bathroomInfo: "Attached Spacious Clean Bathroom with Geyser",
      shortDescription: "Generous room size accommodating family groups and pilgrimage parties comfortably under one roof.",
      fullDescription: "Travelling to Kashi with elders, children, or a family group? Our Family Rooms offer ample square footage, multiple comfortable beds, and dedicated space for luggage so everyone stays together comfortably opposite the station.",
      featuredImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
      ],
      facilities: [
        "Air Conditioning & Multiple Ceiling Fans",
        "Multiple Beds for Family Groups",
        "Spacious Layout with Luggage Area",
        "Attached Clean Bathroom with Hot Water",
        "Filtered RO Drinking Water",
        "Clean Bedding & Fresh Pillows",
        "Power Backup Support",
        "Ground & Accessible Floor Options"
      ],
      rules: [
        "Standard check-in: 12:00 PM | Check-out: 11:00 AM",
        "Valid government IDs for all adult family members",
        "Respectful and peaceful atmosphere for all staying families",
        "Prior intimation advised for late night arrivals from train"
      ]
    }
  ],

  propertyFacilities: [
    {
      id: "f-ac",
      name: "AC & Non-AC Rooms",
      description: "Options tailored to your preference, season, and budget.",
      iconName: "Wind",
      enabled: true
    },
    {
      id: "f-family",
      name: "Family Rooms",
      description: "Spacious multi-bed rooms designed specifically for families.",
      iconName: "Users",
      enabled: true
    },
    {
      id: "f-cleanliness",
      name: "Clean & Tidy Rooms",
      description: "Fresh washed bed linens, tidy floors, and regular housekeeping.",
      iconName: "Sparkles",
      enabled: true
    },
    {
      id: "f-bathrooms",
      name: "Clean Bathrooms",
      description: "Attached, well-maintained sanitary bathrooms with regular water.",
      iconName: "Bath",
      enabled: true
    },
    {
      id: "f-hotwater",
      name: "Hot Water Facility",
      description: "Geyser hot water provision for refreshing baths after travel.",
      iconName: "Flame",
      enabled: true
    },
    {
      id: "f-drinkingwater",
      name: "Filtered Drinking Water",
      description: "Clean, hygienic RO drinking water available for all guests.",
      iconName: "Droplets",
      enabled: true
    },
    {
      id: "f-reception",
      name: "Reception / Help Desk",
      description: "Dedicated front desk to welcome travellers and assist with queries.",
      iconName: "ConciergeBell",
      enabled: true
    },
    {
      id: "f-cctv",
      name: "CCTV Security",
      description: "Round-the-clock corridor and entrance monitoring for peace of mind.",
      iconName: "ShieldCheck",
      enabled: true
    },
    {
      id: "f-power",
      name: "Power Backup",
      description: "Inverter / generator backup for essential lights and fans.",
      iconName: "Zap",
      enabled: true
    },
    {
      id: "f-familyfriendly",
      name: "Family Friendly Environment",
      description: "Safe, respectful, and sober atmosphere ideal for pilgrims.",
      iconName: "HeartHandshake",
      enabled: true
    },
    {
      id: "f-assistance",
      name: "24/7 Assistance",
      description: "Staff on duty to assist guests arriving by late trains.",
      iconName: "Clock",
      enabled: true
    },
    {
      id: "f-luggage",
      name: "Luggage Assistance",
      description: "Convenient luggage holding and assistance for travellers.",
      iconName: "Briefcase",
      enabled: true
    }
  ],

  galleryImages: [
    {
      id: "user-photo-facade",
      title: "Main Entrance & Dharamshala Facade",
      titleHindi: "मुख्य प्रवेश द्वार एवं धर्मशाला भवन (इंग्लिशिया लाइन)",
      category: "Property",
      imageUrl: "/images/copy.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      description: "Historic main entrance archway and official bilingual trust signage of Shree Krishna Dharamshala Trust opposite Varanasi Cantt Railway Station.",
      badge: "Main Entrance"
    },
    {
      id: "user-photo-plaque",
      title: "Trust Foundation Plaque (Est. 12 June 1933)",
      titleHindi: "श्री कृष्ण धर्मशाला ट्रस्ट स्थापना शिलापट्ट (12 जून 1933)",
      category: "Property",
      imageUrl: "/gallery/unnamed (3).jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      description: "Historic inscription plaque documenting the foundation of the trust on 12 June 1933 for pilgrim service, with 24/7 CCTV surveillance notice.",
      badge: "Est. 1933"
    },
    {
      id: "user-photo-temple-day",
      title: "In-House Temple & Courtyard Pavilion",
      titleHindi: "प्रांगण स्थित श्री कृष्ण मंदिर मंडप",
      category: "Property",
      imageUrl: "/gallery/unnamed (4).jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200&auto=format&fit=crop",
      description: "Red sandstone temple pavilion situated inside the tranquil trust courtyard with sacred yellow flag and peaceful atmosphere.",
      badge: "Trust Mandir"
    },
    {
      id: "user-photo-radha-krishna",
      title: "Shri Radha Krishna Deities Darshan",
      titleHindi: "श्री राधा कृष्ण युगल सरकार दिव्य दर्शन",
      category: "Common Areas",
      imageUrl: "/gallery/unnamed.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1200&auto=format&fit=crop",
      description: "Sacred sanctum darshan of Shri Radha Krishna vigraha adorned in traditional silk attire, peacock feather mukut, and fresh flower garlands.",
      badge: "Divine Darshan"
    },
    {
      id: "user-photo-sanctum-prayer",
      title: "Temple Sanctum & Devotees in Prayer",
      titleHindi: "मंदिर गर्भगृह एवं श्रद्धालु सत्संग दर्शन",
      category: "Common Areas",
      imageUrl: "/gallery/unnamed (1).webp",
      fallbackUrl: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop",
      description: "Serene sanctum interior where visiting pilgrims and families gather for daily prayers, morning chanting, and quiet contemplation.",
      badge: "Prayer Hall"
    },
    {
      id: "user-photo-evening-aarti",
      title: "Evening Mandir with Festive Illumination",
      titleHindi: "संध्या आरती एवं उत्सव आलोकित मंदिर प्रांगण",
      category: "Property",
      imageUrl: "/images/aarti.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
      description: "Courtyard temple bathed in festive green and golden lighting under lush trees during evening bhajan and aarti hours.",
      badge: "Evening Aarti"
    },
    {
      id: "user-photo-night-lights",
      title: "Grand Night Illumination & Fairy Lights",
      titleHindi: "भव्य रात्रि दर्शन एवं दीप-प्रकाश सज्जा",
      category: "Property",
      imageUrl: "/gallery/unnamed.webp",
      fallbackUrl: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      description: "Spectacular night view of the illuminated temple pavilion and courtyard adorned with cascades of golden fairy string lights.",
      badge: "Night View"
    },
    {
      id: "user-photo-room-interior",
      title: "Clean Guest Bedroom with Twin Beds",
      titleHindi: "स्वच्छ एवं आरामदायक कमरा (ट्विन बेड्स)",
      category: "Rooms",
      imageUrl: "/gallery/unnamed (2).webp",
      fallbackUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      description: "Real guest bedroom inside Shree Krishna Dharamshala with tidy beds, clean white linens, warm blankets, and peaceful ambiance for pilgrims.",
      badge: "Guest Room"
    },
    {
      id: "user-photo-ghat-dusk",
      title: "Varanasi Ganga Ghats at Dusk",
      titleHindi: "संध्या वेला में पावन गंगा घाट दर्शन",
      category: "Location",
      imageUrl: "/images/images.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
      description: "Pilgrims gathered on the sacred ghat steps of Varanasi during sunset hours, illuminated by tall decorative heritage lamps.",
      badge: "Ganga Ghats"
    },
    {
      id: "user-photo-kashi-ghats",
      title: "Historic Kashi Riverfront Ghats & Temples",
      titleHindi: "काशी के प्राचीन घाट, मंदिर एवं नौकाएँ",
      category: "Location",
      imageUrl: "/gallery/unnamed (3).webp",
      fallbackUrl: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop",
      description: "Majestic panoramic view of Kashi's ancient stone ghats, temple spires, and wooden pilgrimage boats gently moored along the holy river.",
      badge: "Kashi Darshan"
    }
  ],

  nearbyPlaces: [
    {
      id: "np-railway",
      name: "Varanasi Cantt Railway Station (Varanasi Jn)",
      distance: "Directly opposite the property (approx. 50–100 meters walk)",
      approxTravelTime: "1–2 minutes walking",
      note: "Step out of the station and cross to Englishia Line. Maximum travel convenience."
    },
    {
      id: "np-kashi",
      name: "Shri Kashi Vishwanath Temple & Corridor",
      distance: "[Editable: Approx. 4.5 km - verify before travel]",
      approxTravelTime: "[Editable: ~20-25 mins via auto/taxi]",
      note: "Easily accessible by local e-rickshaw or taxi directly from Cantt Station area."
    },
    {
      id: "np-ghats",
      name: "Dashashwamedh Ghat (Ganga Aarti)",
      distance: "[Editable: Approx. 5 km - verify before travel]",
      approxTravelTime: "[Editable: ~25 mins via auto/e-rickshaw]",
      note: "Famous for evening Ganga Aarti ceremonies and morning boat rides."
    },
    {
      id: "np-sankat",
      name: "Sankat Mochan Hanuman Temple",
      distance: "[Editable: Approx. 6.5 km - verify before travel]",
      approxTravelTime: "[Editable: ~25-30 mins by road]",
      note: "Revered spiritual destination for devotees in South Varanasi."
    },
    {
      id: "np-sarnath",
      name: "Sarnath Buddhist Heritage Site",
      distance: "[Editable: Approx. 11 km - verify before travel]",
      approxTravelTime: "[Editable: ~35-40 mins by vehicle]",
      note: "Historic Dhamek Stupa and Deer Park pilgrimage site."
    },
    {
      id: "np-airport",
      name: "Lal Bahadur Shastri International Airport (Babatpur)",
      distance: "[Editable: Approx. 22 km - verify before travel]",
      approxTravelTime: "[Editable: ~45 mins via NH31]",
      note: "Direct cab and bus connectivity available from the Cantt Station terminal."
    }
  ]
};
