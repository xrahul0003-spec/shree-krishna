import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

type CategoryType = 'All' | 'Property' | 'Rooms' | 'Common Areas' | 'Location';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories: CategoryType[] = [
    'All',
    'Property',
    'Rooms',
    'Common Areas',
    'Location',
  ];

  const filteredImages = dharamshalaConfig.galleryImages.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getImageSrc = (item: GalleryItem) => {
    if (failedImages[item.id] && item.fallbackUrl) {
      return item.fallbackUrl;
    }
    return item.imageUrl;
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBE3] text-[#8B6E4E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#927148]" />
            Visual Tour & Darshan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Photo Gallery
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Authentic photographs of Shree Krishna Dharamshala Trust premises, our 1933 heritage, in-house Radha Krishna Mandir, clean guest rooms, and holy Varanasi Ghats.
          </p>

          {/* Bento Category Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#927148] text-white shadow-xs'
                    : 'bg-white text-[#2D2A26] border border-[#EAE4D9] hover:bg-[#F0EBE3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((image, idx) => {
            const currentSrc = getImageSrc(image);
            return (
              <div
                key={image.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden bg-[#E5E0D5] cursor-pointer shadow-xs border border-[#EAE4D9] hover:border-[#927148] transition-all"
              >
                <img
                  src={currentSrc}
                  alt={image.title}
                  onError={() => handleImageError(image.id)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2D2A26]/80 text-[#FDFBF7] backdrop-blur-md border border-white/20">
                    {image.badge || image.category}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/95 via-[#2D2A26]/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-semibold text-[#D4AF37] tracking-wide mb-0.5">
                    {image.titleHindi}
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                    {image.title}
                  </p>
                  {image.description && (
                    <p className="text-xs text-white/80 line-clamp-2 mt-1 leading-relaxed">
                      {image.description}
                    </p>
                  )}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#FDFBF7] font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Click to view full photograph
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-[#2D2A26]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Content */}
            <div
              className="max-w-4xl max-h-[88vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageSrc(filteredImages[lightboxIndex])}
                alt={filteredImages[lightboxIndex].title}
                onError={() => handleImageError(filteredImages[lightboxIndex].id)}
                className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center text-white px-4">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-stone-950">
                    {filteredImages[lightboxIndex].badge || filteredImages[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-[#D4AF37] font-medium">
                    {filteredImages[lightboxIndex].titleHindi}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {filteredImages[lightboxIndex].title}
                </h3>
                {filteredImages[lightboxIndex].description && (
                  <p className="text-xs sm:text-sm text-stone-200 max-w-2xl mx-auto mt-1 leading-relaxed">
                    {filteredImages[lightboxIndex].description}
                  </p>
                )}
                <p className="text-xs text-stone-400 mt-2">
                  Photo {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
