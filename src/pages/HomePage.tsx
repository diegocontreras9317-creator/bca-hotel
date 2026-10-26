import React from 'react';
import { ArrowRight, BedDouble, Waves, Sparkles, MapPin } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { AboutSection } from '../components/AboutSection';
import { FirstFloorSection } from '../components/FirstFloorSection';
import { InstallationsVideoSection } from '../components/InstallationsVideoSection';
import { EventsSection } from '../components/EventsSection';
import { LocationSection } from '../components/LocationSection';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { ImageCarousel, CarouselSlide } from '../components/ImageCarousel';
import { IMAGES, ROOMS } from '../data/hotelData';

interface HomePageProps {
  onOpenBookingModal: (roomId?: string) => void;
  onNavigate: (page: 'inicio' | 'habitaciones' | 'terraza') => void;
}

const ROOM_SLIDES: CarouselSlide[] = ROOMS.map((room) => ({
  src: room.images[0],
  alt: `${room.name} - BCA Hotel`,
  tag: room.highlightTag || room.name,
}));

const TERRACE_SLIDES: CarouselSlide[] = [
  {
    src: IMAGES.piscina1,
    alt: 'Piscina y Cascada con Vista al Río Magdalena - Vista 1',
    tag: 'Piscina & Cascada',
  },
  {
    src: IMAGES.piscina2,
    alt: 'Piscina y Cascada con Vista al Río Magdalena - Vista 2',
    tag: 'Piscina & Cascada',
  },
  {
    src: IMAGES.piscina3,
    alt: 'Piscina y Cascada con Vista al Río Magdalena - Vista 3',
    tag: 'Solárium & Vistas',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal, onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        onOpenBookingModal={() => onOpenBookingModal()}
        onSelectRoom={(roomId) => onOpenBookingModal(roomId)}
        onNavigateToRooms={() => onNavigate('habitaciones')}
        onNavigateToTerrace={() => onNavigate('terraza')}
      />

      {/* Quick Highlights Bar */}
      <Highlights />

      {/* About Hotel & Corporate Identity */}
      <AboutSection />

      {/* Dedicated Preview Cards: Habitaciones & Terraza */}
      <section className="py-16 sm:py-20 bg-[#F7F4EE] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
              Explora Nuestro Hotel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C0C0C] tracking-tight">
              Espacios Exclusivos Pensados para Ti
            </h2>
            <p className="mt-3 text-sm text-[#5C564D]">
              Descubre nuestras páginas dedicadas a las habitaciones y a nuestra terraza con piscina.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Habitaciones con Carrusel Interactivo */}
            <div className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E2DBD0] hover:border-[#C7BAA3] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <ImageCarousel
                  slides={ROOM_SLIDES}
                  title="Habitaciones & Alojamiento"
                  subtitle="Estándar, 2 Camas, Doble Deluxe y Suite con Jacuzzi"
                  badge={
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/80 text-[#FAF8F5] text-xs font-medium backdrop-blur-md border border-white/10">
                      <BedDouble className="w-3.5 h-3.5 text-[#C7BAA3]" />
                      4 Tipos de Habitación
                    </span>
                  }
                />

                <div className="p-6">
                  <p className="text-sm text-[#4A453E] leading-relaxed">
                    Diseñadas para brindar un descanso reparador con climatización óptima para el clima de Barrancabermeja, lencería de alta calidad, Smart TV, escritorio y WiFi en todas las áreas.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6B6254]">
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Desayuno en terraza incluido</span>
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Parqueadero subterráneo</span>
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Recepción 24 horas</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('habitaciones')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0C0C0C] hover:bg-[#222222] text-[#FAF8F5] text-sm font-semibold transition-all cursor-pointer group"
                >
                  <span>Ver Página de Habitaciones</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Card 2: Terraza con Carrusel Interactivo */}
            <div className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E2DBD0] hover:border-[#C7BAA3] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <ImageCarousel
                  slides={TERRACE_SLIDES}
                  title="Terraza & Piscina"
                  subtitle="Piscina y cascada, desayuno y vista al Río Magdalena"
                  badge={
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/80 text-[#FAF8F5] text-xs font-medium backdrop-blur-md border border-white/10">
                      <Waves className="w-3.5 h-3.5 text-[#C7BAA3]" />
                      Terraza • Piscina & Cascada
                    </span>
                  }
                />

                <div className="p-6">
                  <p className="text-sm text-[#4A453E] leading-relaxed">
                    Disfruta de la piscina con cascada en piedra natural con vista hacia la refinería, Cristo Petrolero y el río Magdalena. Servicio diario de desayuno para huéspedes en la terraza.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6B6254]">
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Piscina con cascada</span>
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Vista hacia el río Magdalena</span>
                    <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Eventos (60-80 pax)</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('terraza')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0C0C0C] hover:bg-[#222222] text-[#FAF8F5] text-sm font-semibold transition-all cursor-pointer group"
                >
                  <span>Ver Página de Terraza</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Floor Spaces */}
      <FirstFloorSection />

      {/* Installations Video */}
      <InstallationsVideoSection />

      {/* Event Lounges & Venues */}
      <EventsSection />

      {/* Real Guest Reviews */}
      <Testimonials />

      {/* Location & Embedded Interactive Map */}
      <LocationSection />

      {/* FAQ Accordion */}
      <FaqSection />
    </div>
  );
};
