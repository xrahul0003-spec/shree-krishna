import { DharamshalaConfig } from '../types';

export const TARIFF_NOTE = "Contact us for current room tariff and availability.";

export const dharamshalaConfig: DharamshalaConfig = {
  businessName: "Birla Dharamshala",
  businessNameHindi: "बिड़ला धर्मशाला अयोध्या",
  tagline: "Comfortable, Clean & Budget-Friendly Stay Near Ram Mandir, Ayodhya",
  businessType: "Dharamshala / Accommodation in Ayodhya",
  
  addressHindi: "24/2 10, अयोध्या जंक्शन रोड, न्यू कॉलोनी, साईं नगर, अयोध्या, उत्तर प्रदेश 224123",
  addressEnglish: "24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123",
  landmark: "Near Ayodhya Junction & Ram Mandir / Sai Nagar",
  
  phone: "8788041018",
  phoneTel: "+918788041018",
  phoneDisplay: "8788041018",
  whatsapp: "918788041018",
  website: "https://birladharamshalaayodhya.com/",
  
  mapUrl: "https://www.google.com/maps/search/?api=1&query=24%2F2+10+Ayodhya+Jct+Road+New+Colony+Sai+Nagar+Ayodhya+Uttar+Pradesh+224123",
  googleMapEmbedQuery: "24/2 10, Ayodhya Jct Road, New Colony, Sai Nagar, Ayodhya, Uttar Pradesh 224123",
  
  noticeNotes: [
    "Valid government photo ID is required for all guests during check-in.",
    "Strictly pure vegetarian (satvik), alcohol-free, and serene spiritual environment.",
    "For room availability, current tariffs, and group bookings, please contact us directly via Call (8788041018) or WhatsApp."
  ],

  roomTypes: [
    {
      id: "ac-room",
      name: "Air-Conditioned Room (AC Room)",
      category: "ac",
      categoryLabel: "AC Rooms",
      tariffNote: TARIFF_NOTE,
      isAc: true,
      shortDescription: "Clean, air-conditioned accommodation providing a peaceful retreat after visiting Shri Ram Janmabhoomi Mandir.",
      fullDescription: "Experience optimal comfort in our Air-Conditioned rooms. Thoughtfully furnished with pristine bedding, energy-efficient cooling, attached private bathroom with 24×7 water, LED TV, and daily housekeeping. Designed specifically for pilgrims, devotees, and travelers seeking rest after temple darshan.",
      featuredImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
      ],
      features: ["Air Conditioning", "Clean Bedding & Linens", "Attached Clean Bathroom", "24×7 Water Supply", "LED TV", "High Security"],
      bedType: "Double Bed / Twin Beds",
      occupancy: "2-3 Guests"
    },
    {
      id: "non-ac-room",
      name: "Affordable Non-AC Room",
      category: "non-ac",
      categoryLabel: "Non-AC Rooms",
      tariffNote: TARIFF_NOTE,
      isAc: false,
      shortDescription: "Economical, airy, and hygienically maintained Non-AC room ideal for budget-conscious pilgrims and solo devotees.",
      fullDescription: "Our Affordable Non-AC rooms offer a neat, comfortable, and budget-friendly stay in the holy city of Ayodhya. Equipped with high-speed ceiling fans, fresh sanitized linens, attached washroom with running water, and ample natural ventilation to keep you refreshed throughout your pilgrimage.",
      featuredImage: "/images/NON AC.webp",
      galleryImages: [
        "/images/NON AC.webp",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
      ],
      features: ["High-speed Ceiling Fan", "Hygienic Clean Linens", "Attached Bathroom", "24×7 Running Water", "Spacious Ventilation", "Power Backup"],
      bedType: "Twin / Double Beds",
      occupancy: "2 Guests"
    },
    {
      id: "family-room",
      name: "Spacious Family Room",
      category: "family",
      categoryLabel: "Family Rooms",
      tariffNote: TARIFF_NOTE,
      isAc: true,
      shortDescription: "Generously sized multi-bed accommodation tailored for family groups, elderly pilgrims, and devotee families.",
      fullDescription: "Specially designed for visiting families and pilgrimage groups staying together in Ayodhya. Offers multiple comfortable beds, ample luggage space, climate control, clean attached bathroom, LED TV, and complete safety in a warm, spiritual atmosphere close to Ram Mandir.",
      featuredImage: "/images/family-room.webp",
      galleryImages: [
        "/images/family-room.webp",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
      ],
      features: ["Multiple Beds", "AC & Ceiling Fans", "Spacious Luggage Area", "Large Clean Bathroom", "LED TV", "Family Friendly & Secure"],
      bedType: "Triple / Quad Family Beds",
      occupancy: "4-6 Family Members"
    }
  ],

  propertyFacilities: [
    {
      id: "f-near-ram-mandir",
      name: "Comfortable Rooms Near Ram Mandir",
      description: "Conveniently located within easy reach of Shri Ram Janmabhoomi Mandir, allowing peaceful morning darshan and evening aarti visits.",
      iconName: "Sparkles",
      enabled: true
    },
    {
      id: "f-clean-hygienic",
      name: "Clean & Hygienic Dharamshala",
      description: "Rigorous daily sanitization, freshly laundered bedsheets, spotless washrooms, and meticulously maintained corridors for total peace of mind.",
      iconName: "ShieldCheck",
      enabled: true
    },
    {
      id: "f-free-parking",
      name: "Free Parking",
      description: "Spacious and secure vehicular parking area on premises for pilgrims arriving by private cars, vans, or chartered devotee buses.",
      iconName: "Car",
      enabled: true
    },
    {
      id: "f-ac-rooms",
      name: "Air-Conditioned Rooms",
      description: "Well-insulated AC rooms equipped with modern cooling to provide absolute comfort after spiritual walks and temple queues.",
      iconName: "Wind",
      enabled: true
    },
    {
      id: "f-non-ac-rooms",
      name: "Affordable Non-AC Rooms",
      description: "Well-ventilated, budget-friendly accommodation ensuring every devotee can stay affordably without compromising on cleanliness.",
      iconName: "Coins",
      enabled: true
    },
    {
      id: "f-cctv-security",
      name: "24×7 CCTV Security",
      description: "Round-the-clock surveillance across entrances, hallways, and common areas to ensure complete safety for families and solo travelers.",
      iconName: "Lock",
      enabled: true
    },
    {
      id: "f-led-tv",
      name: "LED TV in All Rooms",
      description: "In-room entertainment and devotional broadcasts to keep you connected and relaxed during your spiritual stay.",
      iconName: "Tv",
      enabled: true
    },
    {
      id: "f-satvik-food",
      name: "Pure Vegetarian Satvik Food",
      description: "Easy availability of wholesome, pure vegetarian satvik meals prepared with utmost sanctity following holy Ayodhya traditions.",
      iconName: "Utensils",
      enabled: true
    },
    {
      id: "f-prime-location",
      name: "Prime Location",
      description: "Situated on Ayodhya Junction Road in Sai Nagar, providing seamless connectivity to railway stations, airport, and main shrines.",
      iconName: "MapPin",
      enabled: true
    }
  ],

  whyChoosePoints: [
    {
      id: "wc-1",
      number: "01",
      title: "Prime Location in Ayodhya",
      desc: "Centrally positioned on Ayodhya Jct Road, Sai Nagar.",
      detail: "Unbeatable accessibility near Ayodhya Junction Railway Station with quick access to Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and Saryu Ghat.",
      iconName: "MapPin"
    },
    {
      id: "wc-2",
      number: "02",
      title: "Clean & Hygienic Accommodation",
      desc: "Spotless rooms with sanitized bedding and clean bathrooms.",
      detail: "We place the highest priority on hygiene, ensuring clean linens, disinfected premises, and fresh environments for all arriving guests.",
      iconName: "Sparkles"
    },
    {
      id: "wc-3",
      number: "03",
      title: "Affordable & Budget-Friendly Stay",
      desc: "Fair, transparent, and pocket-friendly tariff options.",
      detail: "True dharamshala ethos offering budget-conscious AC and Non-AC room choices with zero hidden commissions or middlemen markups.",
      iconName: "Coins"
    },
    {
      id: "wc-4",
      number: "04",
      title: "Peaceful & Spiritual Environment",
      desc: "Sober, devotional atmosphere ideal for pilgrims.",
      detail: "Quiet premises shielded from heavy traffic noise, honoring the spiritual sanctity of Ayodhya Dham with pure satvik culture.",
      iconName: "Heart"
    },
    {
      id: "wc-5",
      number: "05",
      title: "Perfect for Families & Pilgrims",
      desc: "Accommodates large families, elders, and devotee groups.",
      detail: "Spacious rooms and dedicated multi-bed configurations designed for elderly parents, children, and collective pilgrimage groups.",
      iconName: "Users"
    },
    {
      id: "wc-6",
      number: "06",
      title: "Comfortable Rooms with Basic Amenities",
      desc: "24×7 water, power backup, LED TV & clean washrooms.",
      detail: "All essential comforts including running water, climate control, comfortable mattresses, and continuous staff assistance.",
      iconName: "BedDouble"
    },
    {
      id: "wc-7",
      number: "07",
      title: "Safe & Secure Premises",
      desc: "24×7 CCTV surveillance and vigilant on-site staff.",
      detail: "Monitored premises with strict guest verification so female travelers, families, and solo devotees can rest with complete safety.",
      iconName: "ShieldCheck"
    },
    {
      id: "wc-8",
      number: "08",
      title: "Easy Enquiry & Direct Contact",
      desc: "Direct phone line at 8788041018 and instant WhatsApp assistance.",
      detail: "Speak directly with our local Ayodhya help desk at 8788041018 without booking portals, extra service fees, or delays.",
      iconName: "PhoneCall"
    },
    {
      id: "wc-9",
      number: "09",
      title: "Trusted Hospitality",
      desc: "Courteous staff dedicated to making your pilgrimage memorable.",
      detail: "Warm, respectful, and attentive service helping you with temple timings, darshan routes, local transport, and comfortable rest.",
      iconName: "Award"
    }
  ],

  guestReviews: [
    {
      id: "rev-1",
      name: "Amit Sharma",
      role: "Business Traveller",
      rating: 5,
      date: "Recent Stay",
      comment: "Birla Dharamshala in Ayodhya is located in a prime spot on Ayodhya Junction Road. The rooms were exceptionally clean, the AC worked flawlessly, and having secure parking made my business trip hassle-free. Direct booking on 8788041018 was prompt and smooth."
    },
    {
      id: "rev-2",
      name: "Priya Singh",
      role: "Pilgrim Tourist",
      rating: 5,
      date: "Recent Stay",
      comment: "Visiting Ram Mandir was a lifelong dream for our family. Staying at Birla Dharamshala made the pilgrimage peaceful and convenient. It is very close to Ram Mandir and Hanuman Garhi. The environment is safe, pure vegetarian, and deeply spiritual."
    },
    {
      id: "rev-3",
      name: "Rahul Verma",
      role: "Family Trip",
      rating: 5,
      date: "Recent Stay",
      comment: "We booked the spacious family room for our parents and kids. Clean beds, continuous water supply, and polite staff who guided us on morning darshan timings. Extremely budget-friendly and trustworthy dharamshala in Ayodhya."
    },
    {
      id: "rev-4",
      name: "Sneha Kapoor",
      role: "Solo Traveller",
      rating: 5,
      date: "Recent Stay",
      comment: "As a solo female traveler visiting Ayodhya's historic temples, safety was my highest priority. Birla Dharamshala provided 24×7 CCTV security, clean rooms, and immediate assistance. Convenient access to both Ayodhya railway station and Saryu Ghat."
    }
  ],

  galleryImages: [
    {
      id: "gal-mandir",
      title: "Shri Ram Janmabhoomi Mandir",
      titleHindi: "श्री राम जन्मभूमि मंदिर",
      category: "Temples",
      imageUrl: "/images/RAM MANDIR.webp",
      description: "Magnificent Shri Ram Janmabhoomi Mandir located close to Birla Dharamshala.",
      badge: "Ram Mandir"
    },
    {
      id: "gal-ac-room",
      title: "Air-Conditioned Guest Room",
      titleHindi: "वातानुकूलित कक्ष",
      category: "Rooms",
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
      description: "Spotless AC accommodation with comfortable bedding and modern amenities.",
      badge: "AC Room"
    },
    {
      id: "gal-non-ac-room",
      title: "Affordable Non-AC Room",
      titleHindi: "नॉन-एसी आरामदायक कमरा",
      category: "Rooms",
      imageUrl: "/images/NON AC.webp",
      description: "Clean and airy budget room suited for devotees and pilgrims.",
      badge: "Non-AC"
    },
    {
      id: "gal-family-room",
      title: "Spacious Family Accommodation",
      titleHindi: "पारिवारिक कक्ष",
      category: "Rooms",
      imageUrl: "/images/family-room.webp",
      description: "Multi-bed family room providing restful stay for family pilgrimage groups.",
      badge: "Family Room"
    },
    {
      id: "gal-hanuman-garhi",
      title: "Hanuman Garhi Temple",
      titleHindi: "हनुमान गढ़ी अयोध्या",
      category: "Temples",
      imageUrl: "/images/HANUMAN.jpg",
      description: "Historic fortress temple of Lord Hanuman in the heart of Ayodhya.",
      badge: "Hanuman Garhi"
    },
    {
      id: "gal-saryu-ghat",
      title: "Holy Saryu River Ghat",
      titleHindi: "सरयू नदी घाट",
      category: "Location",
      imageUrl: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1200&auto=format&fit=crop",
      description: "Peaceful holy ghats along sacred Saryu river known for evening Aarti and holy dips.",
      badge: "Saryu Ghat"
    },
    {
      id: "gal-kanak-bhawan",
      title: "Kanak Bhawan",
      titleHindi: "कनक भवन",
      category: "Temples",
      imageUrl: "/images/kanak-bhawan.webp",
      description: "Golden palace temple dedicated to Lord Ram and Mata Sita in Ramkot.",
      badge: "Kanak Bhawan"
    },
    {
      id: "gal-property",
      title: "Birla Dharamshala Premises",
      titleHindi: "परिसर एवं वातावरण",
      category: "Property",
      imageUrl: "/images/dharamshala.webp",
      description: "Serene, secure, and clean premises of Birla Dharamshala on Ayodhya Jct Road.",
      badge: "Property"
    }
  ],

  nearbyPlaces: [
    {
      id: "np-ram-mandir",
      name: "Ram Mandir Ayodhya",
      label: "Ram Janmabhoomi",
      distance: "Approx. 1.8 km",
      description: "The grand and sacred Shri Ram Janmabhoomi Mandir, the spiritual focal point of Ayodhya where millions of devotees seek divine blessings.",
      imageUrl: "/images/RAM MANDIR.webp"
    },
    {
      id: "np-hanuman-garhi",
      name: "Hanuman Garhi",
      label: "Ayodhya",
      distance: "Approx. 1.5 km",
      description: "10th-century temple fortress dedicated to Lord Hanuman. Pilgrims customarily visit Hanuman Garhi before visiting Ram Mandir.",
      imageUrl: "/images/HANUMAN.jpg"
    },
    {
      id: "np-kanak-bhawan",
      name: "Kanak Bhawan",
      label: "Ramkot",
      distance: "Approx. 2.0 km",
      description: "Ornate palace temple known as 'House of Gold', traditionally gifted to Mata Sita by Queen Kaikeyi, featuring divine deities of Ram and Sita.",
      imageUrl: "/images/kanak-bhawan.webp"
    },
    {
      id: "np-saryu-ghat",
      name: "Saryu River Ghat",
      label: "Ayodhya",
      distance: "Approx. 2.5 km",
      description: "Sacred bathing ghats along the holy Saryu River, famous for evening Maha Aarti, devotional boat rides, and spiritually purifying baths.",
      imageUrl: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "np-dashrath-mahal",
      name: "Dashrath Mahal",
      label: "Ayodhya",
      distance: "Approx. 1.9 km",
      description: "Revered royal palace shrine commemorating King Dasharatha's residence where Lord Rama spent his divine childhood.",
      imageUrl: "/images/Ayodhya_Dashrath_Mahal,_Ayodhya_Inside_View.jpg"
    },
    {
      id: "np-guptar-ghat",
      name: "Guptar Ghat",
      label: "Faizabad Road",
      distance: "Approx. 6.5 km",
      description: "Peaceful sacred bank on the Saryu River associated with Lord Rama's Jal Samadhi, known for serene sunsets and tranquil river steps.",
      imageUrl: "/images/guptar-ghat.jpg"
    }
  ]
};
