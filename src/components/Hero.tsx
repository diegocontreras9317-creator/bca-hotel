import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO, IMAGES, ROOMS } from '../data/hotelData';

interface HeroProps {
  onOpenBookingModal: () => void;
  onSelectRoom: (roomId: string) => void;
  onNavigateToRooms?: () => void;
  onNavigateToTerrace?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBookingModal,
  onSelectRoom,
  onNavigateToRooms,
  onNavigateToTerrace,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomType, setRoomType] = useState('cualquiera');
  const [guests, setGuests] = useState('2');

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedRoomName =
      roomType === 'cualquiera'
        ? 'Cualquier tipo de habitación disponible'
        : ROOMS.find((r) => r.id === roomType)?.name || roomType;

    const message = `¡Hola BCA HOTEL! 🏨 Quisiera consultar disponibilidad y tarifas:
• Fecha Check-in: ${checkIn}
• Fecha Check-out: ${checkOut}
• Habitación preferida: ${selectedRoomName}
• Número de huéspedes: ${guests} persona(s)
• Ubicación: Sector Comercial, Barrancabermeja.
¡Quedo atento(a) a su respuesta!`;

    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. HERO BANNER: Ajustado para encajar perfectamente en la primera vista sin tener que bajar para ver la imagen */}
      <section
        id="inicio"
        className="relative h-[calc(100svh-70px)] sm:h-[calc(100vh-104px)] min-h-[500px] max-h-[740px] flex items-center overflow-hidden"
      >
        {/* Background Image with Dark Vignette for strong contrast and full appreciation */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Fachada BCA HOTEL Barrancabermeja"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
          {/* Background image is now fully visible */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex flex-col justify-center">
          {/* Subtle Brand Tag */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818]/90 border border-[#2E2E2E] text-[#EAE3D2] text-xs font-medium backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7BAA3]" />
              <span>Alojamiento Moderno en Barrancabermeja</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818]/80 border border-[#262626] text-[#D9D1C1] text-xs backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#C7BAA3]" />
              <span>Calle 51 # 8b - 27 (Sector Comercial)</span>
            </div>
          </div>

          {/* Main Headings */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal text-white tracking-tight leading-[1.18] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Tu Confort y Comodidad en el{' '}
              <span className="font-sans font-bold text-[#FAF8F5]">
                Corazón Comercial
              </span>{' '}
              de Barrancabermeja
            </h1>

            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#F5F1E9] font-light leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Alojamiento moderno con terraza, piscina y cascada, desayuno incluido y vista hacia el río Magdalena.
              Un ambiente sereno y acogedor pensado para tu descanso o jornada de negocios.
            </p>

            {/* Call to action buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => (onNavigateToRooms ? onNavigateToRooms() : scrollToSection('habitaciones'))}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] font-semibold text-sm transition-all shadow-lg shadow-black/30 group cursor-pointer"
              >
                <span>Ver Habitaciones</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#171717] hover:bg-[#222222] text-[#FAF8F5] font-medium text-sm border border-[#2E2E2E] hover:border-[#444444] transition-all cursor-pointer"
              >
                <span>Reservar Ahora</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE RESERVA RÁPIDA: Directamente debajo de la imagen principal */}
      <section className="bg-[#F7F4EE] border-b border-[#E5DFD3] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FBF9F5] border border-[#E5DFD3] rounded-2xl p-5 sm:p-7 shadow-sm text-[#121212]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8E2D6] text-xs">
              <span className="font-semibold text-[#121212] tracking-wide flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8C7D65]" />
                Consulta Rápida de Disponibilidad
              </span>
              <span className="text-[#6B6254] font-normal hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
                Atención directa sin intermediarios
              </span>
            </div>

            <form onSubmit={handleHeroBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Check-In */}
              <div>
                <label className="block text-xs font-medium text-[#4A453E] mb-1.5">
                  Llegada (Check-in)
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker?.()}
                  className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3 py-2.5 text-xs text-[#121212] focus:outline-none focus:border-[#121212] transition-colors cursor-pointer"
                  required
                />
              </div>

              {/* Check-Out */}
              <div>
                <label className="block text-xs font-medium text-[#4A453E] mb-1.5">
                  Salida (Check-out)
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker?.()}
                  className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3 py-2.5 text-xs text-[#121212] focus:outline-none focus:border-[#121212] transition-colors cursor-pointer"
                  required
                />
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-xs font-medium text-[#4A453E] mb-1.5">
                  Habitación
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3 py-2.5 text-xs text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
                >
                  <option value="cualquiera">Cualquier Habitación</option>
                  <option value="estandar">Habitación Estándar</option>
                  <option value="estandar-2-camas">Estándar 2 Camas</option>
                  <option value="deluxe">Habitación Deluxe (King 2x2)</option>
                  <option value="junior-suite">Junior Suite (Jacuzzi)</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-medium text-[#4A453E] mb-1.5">
                  Huéspedes
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3 py-2.5 text-xs text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
                >
                  <option value="1">1 Huésped</option>
                  <option value="2">2 Huéspedes</option>
                  <option value="3">3 Huéspedes</option>
                  <option value="4+">4 o más Huéspedes</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-semibold text-xs transition-colors shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            </form>

            {/* Quick Perks Line */}
            <div className="mt-4 pt-3 border-t border-[#E8E2D6] flex flex-wrap items-center justify-between gap-y-2 text-[11px] text-[#6B6254]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#121212]" />
                Desayuno incluido en la terraza
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#121212]" />
                Parqueadero subterráneo sin costo (14 cupos)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#121212]" />
                Piscina y cascada en terraza
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#121212]" />
                Servicio de WiFi en todas las zonas
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
