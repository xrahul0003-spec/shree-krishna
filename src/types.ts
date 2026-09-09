export interface RoomType {
  id: string;
  name: string;
  category: 'ac' | 'non-ac' | 'family';
  price: string;
  deposit?: string;
  occupancy: string;
  bedConfig: string;
  isAc: boolean;
  bathroomInfo: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  facilities: string[];
  rules: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  enabled: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleHindi?: string;
  category: 'Property' | 'Rooms' | 'Family Room' | 'Facilities' | 'Common Areas' | 'Location' | 'Temple & Darshan';
  imageUrl: string;
  fallbackUrl?: string;
  description?: string;
  badge?: string;
}

export interface NearbyPlaceItem {
  id: string;
  name: string;
  distance: string;
  approxTravelTime: string;
  note?: string;
}

export interface DharamshalaConfig {
  businessName: string;
  tagline: string;
  businessType: string;
  addressHindi: string;
  addressEnglish: string;
  landmark: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email?: string;
  mapUrl: string;
  googleMapEmbedQuery: string;
  checkInTime: string;
  checkOutTime: string;
  noticeNotes: string[];
  roomPrices: {
    AC_ROOM_PRICE: string;
    NON_AC_ROOM_PRICE: string;
    FAMILY_ROOM_PRICE: string;
    AC_ROOM_DEPOSIT: string;
    NON_AC_ROOM_DEPOSIT: string;
    FAMILY_ROOM_DEPOSIT: string;
  };
  familyRoomOccupancy: string;
  roomTypes: RoomType[];
  propertyFacilities: FacilityItem[];
  galleryImages: GalleryItem[];
  nearbyPlaces: NearbyPlaceItem[];
}
