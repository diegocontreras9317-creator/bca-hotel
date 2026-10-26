import React, { useState } from 'react';
import { CheckCircle, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';
import { ImageCarousel, CarouselSlide } from './ImageCarousel';

const EVENT_SLIDES: CarouselSlide[] = [
  {
    src: IMAGES.salonPiso1,
    alt: 'Salón de Eventos Piso 1 - Vista 1',
    tag: 'Salón Evento Piso 1',
  },
  {
    src: IMAGES.salonPiso2,
    alt: 'Salón de Eventos Piso 1 - Vista 2',
    tag: 'Salón Evento Piso 1',
  },
  {
    src: IMAGES.salonTerraza1,
    alt: 'Salón de Eventos Terraza - Vista 1',
    tag: 'Salón Evento Terraza',
  },
  {
    src: IMAGES.salonTerraza2,
    alt: 'Salón de Eventos Terraza - Vista 2',
    tag: 'Salón Evento Terraza',
  },
];

export const EventsSection: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % EVENT_SLIDES.length);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + EVENT_SLIDES.length) % EVENT_SLIDES.length);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F0EBE1] text-[#0C0C0C] border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block">
                Salones & Eventos
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C0C0C] tracking-tight">
                Espacios para Eventos en Primer Piso & Terraza
              </h2>

              <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed font-normal">
                Disponemos de espacios para reuniones empresariales, conferencias, talleres y celebraciones privadas con capacidad para <strong>60 a 80 personas</strong>. Haz clic en las fotos del carrusel para verlas en tamaño grande.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#262626] p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D6]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0 mt-0.5" />
                  <span className="font-normal"><strong>Salón Climatizado (Piso 1):</strong> Para reuniones y juntas formales.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#262626] p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D6]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0 mt-0.5" />
                  <span className="font-normal"><strong>Terraza:</strong> Espacio al aire libre con vista panorámica.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#262626] p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D6]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0 mt-0.5" />
                  <span className="font-normal"><strong>Refrigerios & Café:</strong> Opciones para tus invitados.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#262626] p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D6]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0 mt-0.5" />
                  <span className="font-normal"><strong>Parqueadero Subterráneo:</strong> Estacionamiento disponible sin costo.</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                    '¡Hola BCA HOTEL! Quisiera cotizar un evento corporativo / social para 60-80 personas en Barrancabermeja.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-semibold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Cotizar Salón de Eventos por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#D5CDC0] shadow-sm">
                <ImageCarousel
                  slides={EVENT_SLIDES}
                  heightClass="h-64 sm:h-72"
                  autoPlayInterval={4000}
                  onImageClick={(idx) => setLightboxIdx(idx)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all cursor-pointer border border-white/20"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={EVENT_SLIDES[lightboxIdx].src}
              alt={EVENT_SLIDES[lightboxIdx].alt}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />

            {/* Navigation */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all cursor-pointer border border-white/20"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all cursor-pointer border border-white/20"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs tracking-wide border border-white/15">
              {EVENT_SLIDES[lightboxIdx].tag} ({lightboxIdx + 1} / {EVENT_SLIDES.length})
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
