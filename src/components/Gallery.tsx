import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';
import { dharamshalaConfig } from '../data/dharamshalaData';

type CategoryType = 'All' | 'Rooms' | 'Temples' | 'Location' | 'Property';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryType[] = [
    'All',
    'Rooms',
    'Temples',
    'Location',
    'Property',
  ];

  const filteredImages = dharamshalaConfig.galleryImages.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

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
            Visual Tour of Ayodhya Dham
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-4">
            Photo Gallery of Birla Dharamshala, Ayodhya
          </h2>
          <p className="text-[#2D2A26]/75 text-sm sm:text-base leading-relaxed">
            Explore rooms, facilities and surroundings near Ram Mandir, Ayodhya
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-[#E5E0D5] cursor-pointer shadow-xs border border-[#EAE4D9] hover:border-[#927148] transition-all"
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/90 via-[#2D2A26]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Badge */}
              {image.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#2D2A26] backdrop-blur-xs">
                    {image.badge}
                  </span>
                </div>
              )}

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-[#2D2A26]" />
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <h3 className="font-serif font-bold text-sm sm:text-base leading-snug mb-1">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-[11px] text-[#FDFBF7]/80 line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].imageUrl}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center text-white mt-4 max-w-xl">
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">
                {filteredImages[lightboxIndex].title}
              </h3>
              {filteredImages[lightboxIndex].description && (
                <p className="text-xs sm:text-sm text-stone-300">
                  {filteredImages[lightboxIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
