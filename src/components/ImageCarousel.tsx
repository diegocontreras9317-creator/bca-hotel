import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  src: string;
  alt: string;
  tag?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  heightClass?: string;
  autoPlayInterval?: number;
  badge?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  onImageClick?: (index: number) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  heightClass = 'h-64 sm:h-72',
  autoPlayInterval = 4500,
  badge,
  title,
  subtitle,
  className = '',
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, isPaused, autoPlayInterval]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    }
    touchStartX.current = null;
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className={`relative ${heightClass} overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 bg-[#1C1A17] transition-opacity duration-700 ease-in-out transform-gpu ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onClick={() => onImageClick?.(index)}
              className={`w-full h-full object-cover transition-transform duration-700 cursor-pointer transform-gpu ${
                isActive ? 'scale-100' : 'scale-105'
              }`}
            />
          </div>
        );
      })}

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 z-10 pointer-events-none" />

      {/* Top Left Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          {badge}
        </div>
      )}

      {/* Slide Counter Pill (Top Right) */}
      {slides.length > 1 && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAF8F5] text-[11px] font-medium border border-white/15">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>
      )}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-105 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente imagen"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-105 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom Overlay: Title, Subtitle, and Slide Tag */}
      <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
        {slides[currentIndex]?.tag && (
          <span className="inline-block text-[11px] uppercase tracking-wider font-semibold text-[#EAE3D2] mb-1">
            {slides[currentIndex].tag}
          </span>
        )}
        {title && <h3 className="text-xl sm:text-2xl font-serif font-medium leading-snug">{title}</h3>}
        {subtitle && (
          <p className="text-xs text-[#EAE3D2] mt-0.5 font-light line-clamp-1">
            {subtitle}
          </p>
        )}

        {/* Carousel Indicator Dots */}
        {slides.length > 1 && (
          <div className="flex items-center gap-1.5 mt-2.5 pointer-events-auto">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleDotClick(idx, e)}
                aria-label={`Ir a foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 bg-[#FAF8F5]'
                    : 'w-1.5 bg-white/45 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
