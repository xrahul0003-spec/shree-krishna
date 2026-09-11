export interface RoomType {
  id: string;
  name: string;
  category: 'ac' | 'non-ac' | 'family';
  categoryLabel: string;
  tariffNote: string;
  isAc: boolean;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  features?: string[];
  bedType?: string;
  occupancy?: string;
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
  category: 'Property' | 'Rooms' | 'Location' | 'Temples';
  imageUrl: string;
  fallbackUrl?: string;
  description?: string;
  badge?: string;
}

export interface NearbyPlaceItem {
  id: string;
  name: string;
  label: string;
  distance?: string;
  description: string;
  imageUrl?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  detail: string;
  iconName: string;
}

export interface DharamshalaConfig {
  businessName: string;
  businessNameHindi: string;
  tagline: string;
  businessType: string;
  addressHindi: string;
  addressEnglish: string;
  landmark: string;
  phone: string;
  phoneTel: string;
  phoneDisplay: string;
  whatsapp: string;
  website: string;
  mapUrl: string;
  googleMapEmbedQuery: string;
  noticeNotes: string[];
  roomTypes: RoomType[];
  propertyFacilities: FacilityItem[];
  whyChoosePoints: WhyChooseUsItem[];
  guestReviews: ReviewItem[];
  galleryImages: GalleryItem[];
  nearbyPlaces: NearbyPlaceItem[];
}
