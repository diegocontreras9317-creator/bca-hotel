import React, { useState } from 'react';
import {
  BedDouble,
  Users,
  Maximize,
  MessageCircle,
  CalendarCheck,
  Check,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Wifi,
  Coffee,
  Car,
  Clock,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, IMAGES } from '../data/hotelData';
import { Room } from '../types/hotel';

interface RoomsPageProps {
  onSelectRoom: (room: Room) => void;
  onOpenBookingModal: (roomId?: string) => void;
  onNavigate: (page: 'inicio' | 'habitaciones' | 'terraza') => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onSelectRoom,
  onOpenBookingModal,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'all' | 'king' | 'family' | 'jacuzzi'>('all');
  const [cardSlideIdx, setCardSlideIdx] = useState<Record<string, number>>({});

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'king') return room.bedType.includes('King') && !room.id.includes('suite');
    if (filter === 'family') return room.id === 'estandar-2-camas';
    if (filter === 'jacuzzi') return room.id === 'suite-jacuzzi';
    return true;
  });

  const handleWhatsAppReserve = (room: Room, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `¡Hola BCA HOTEL! 🏨 Quisiera consultar disponibilidad y reservar la *${room.name}* (${room.bedType}) en Barrancabermeja.
¿Podrían brindarme información de tarifas y fechas? Muchas gracias.`;
    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#F7F4EE] text-[#0C0C0C] min-h-screen">
      {/* Top Breadcrumb & Header Banner */}
      <div className="bg-[#0E0E0E] text-[#FAF8F5] pt-10 pb-16 sm:pb-20 border-b border-[#242424] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.roomsHeader}
            alt="Habitaciones BCA Hotel"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#8F8269] mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <ChevronRight className="w-3 h-3 text-[#555555]" />
            <span className="text-[#C7BAA3] font-medium">Habitaciones</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1F1F1F] text-[#C7BAA3] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#333333]">
              Alojamiento & Confort
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Nuestras Habitaciones
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#D9D1C1] leading-relaxed font-light">
              Espacios climatizados pensados para un descanso reparador en Barrancabermeja. Lencería de calidad superior, servicio de WiFi en todas las áreas del hotel, parqueadero subterráneo gratuito y desayuno matutino incluido en la terraza.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filters and Counters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E2DBD0]">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#0C0C0C]">
              Selecciona tu Tipo de Habitación
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6254] mt-0.5">
              Mostrando {filteredRooms.length} de {ROOMS.length} opciones disponibles
            </p>
          </div>

          <div className="inline-flex flex-wrap items-center p-1 rounded-xl bg-[#EFE9DD] border border-[#E0D8CA] text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Todas (4)
            </button>
            <button
              onClick={() => setFilter('king')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'king'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Cama King
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'family'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              2 Camas / Familiar
            </button>
            <button
              onClick={() => setFilter('jacuzzi')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'jacuzzi'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Con Jacuzzi
            </button>
          </div>
        </div>

        {/* Rooms Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room) => {
            const hasDirectSlider =
              (room.id === 'junior-suite' || room.id === 'estandar-2-camas' || room.id === 'estandar' || room.id === 'deluxe') &&
              room.images.length > 1;
            const currentIdx = hasDirectSlider
              ? (cardSlideIdx[room.id] ?? 0) % room.images.length
              : 0;
            const mainImg = room.images[currentIdx];
            return (
              <div
                key={room.id}
                className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E0D8CA] hover:border-[#C7BAA3] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#242424]">
                    {/* Stacked Images for Instant Zero-Latency Carousel Switching */}
                    {hasDirectSlider ? (
                      room.images.map((imgSrc, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={imgSrc}
                          alt={`${room.name} - Foto ${imgIdx + 1}`}
                          loading="lazy"
                          decoding="async"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out transform-gpu ${
                            currentIdx === imgIdx ? 'opacity-100 z-[1] scale-100' : 'opacity-0 z-0 pointer-events-none scale-102'
                          }`}
                        />
                      ))
                    ) : (
                      <img
                        src={mainImg}
                        alt={room.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25 z-10 pointer-events-none" />

                    {/* Direct Card Slide Controls */}
                    {hasDirectSlider && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardSlideIdx((prev) => ({
                              ...prev,
                              [room.id]:
                                currentIdx === 0 ? room.images.length - 1 : currentIdx - 1,
                            }));
                          }}
                          aria-label="Foto anterior"
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardSlideIdx((prev) => ({
                              ...prev,
                              [room.id]: (currentIdx + 1) % room.images.length,
                            }));
                          }}
                          aria-label="Siguiente foto"
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                          {room.images.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCardSlideIdx((prev) => ({
                                  ...prev,
                                  [room.id]: idx,
                                }));
                              }}
                              aria-label={`Ir a foto ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                currentIdx === idx ? 'w-5 bg-[#FAF8F5]' : 'w-1.5 bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Room Tag */}
                    {room.highlightTag && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/85 text-[#FAF8F5] text-xs font-semibold backdrop-blur-md border border-white/10">
                          <Sparkles className="w-3 h-3 text-[#C7BAA3]" />
                          {room.highlightTag}
                        </span>
                      </div>
                    )}

                    {/* Gallery count badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 text-white text-[11px] backdrop-blur-md">
                        <Eye className="w-3 h-3 text-[#EAE3D2]" />
                        {hasDirectSlider
                          ? `${currentIdx + 1} / ${room.images.length} Fotos`
                          : `${room.images.length} Fotos`}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-4 left-4 right-4 pr-16 z-20 text-white pointer-events-none">
                      <h3 className="text-xl sm:text-2xl font-serif font-medium drop-shadow-sm">
                        {room.name}
                      </h3>
                      <p className="text-xs text-[#EAE3D2] font-light mt-0.5 drop-shadow-sm">
                        {room.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-[#EAE3D2] text-xs text-[#4A453E]">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#8C7D65]" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-[#8C7D65]" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-3.5 h-3.5 text-[#8C7D65]" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-5">
                      {room.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-semibold text-[#8C7D65] uppercase tracking-wider block">
                        Características incluidas:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#333333]">
                        {room.features.slice(0, 6).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#8C7D65] mt-0.5 shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#EFE9DD]/80 border border-[#E5DFD3] text-xs text-[#6B6254]">
                      <strong className="text-[#0C0C0C] font-medium">Ideal para: </strong>
                      {room.idealFor}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E8E2D4] hover:bg-[#DDD5C5] text-[#0C0C0C] text-xs font-semibold transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Galería</span>
                    </button>

                    <button
                      onClick={() => onOpenBookingModal(room.id)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0C0C0C] hover:bg-[#222222] text-[#FAF8F5] text-xs font-semibold transition-all cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-[#C7BAA3]" />
                      <span>Cotizar</span>
                    </button>
                  </div>

                  <button
                    onClick={(e) => handleWhatsAppReserve(room, e)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-black text-[#FAF8F5] text-xs font-medium border border-[#2E2E2E] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C7BAA3]" />
                    <span>Reservar esta habitación por WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Room Comparison Table */}
        <div className="mt-16 sm:mt-20 bg-[#FAF8F5] rounded-2xl border border-[#E0D8CA] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block mb-1">
              Comparativa Detallada
            </span>
            <h3 className="text-2xl font-serif text-[#0C0C0C]">
              ¿Cuál habitación es ideal para ti?
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2DBD0] text-[#8C7D65] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-semibold">Habitación</th>
                  <th className="py-3 px-4 font-semibold">Capacidad</th>
                  <th className="py-3 px-4 font-semibold">Camas</th>
                  <th className="py-3 px-4 font-semibold">Área</th>
                  <th className="py-3 px-4 font-semibold">Desayuno Terraza</th>
                  <th className="py-3 px-4 font-semibold">Amenidad Especial</th>
                  <th className="py-3 px-4 font-semibold text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE3D2] text-[#333333]">
                {ROOMS.map((r) => (
                  <tr key={r.id} className="hover:bg-[#F2ECE0]/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#0C0C0C]">
                      {r.name}
                    </td>
                    <td className="py-4 px-4">{r.capacity}</td>
                    <td className="py-4 px-4">{r.bedType}</td>
                    <td className="py-4 px-4">{r.size}</td>
                    <td className="py-4 px-4 text-emerald-800 font-medium">Incluido</td>
                    <td className="py-4 px-4">
                      {r.id === 'suite-jacuzzi' ? 'Jacuzzi de hidromasaje privado' : r.id === 'deluxe' ? 'Cama King extra confortable' : r.id === 'estandar-2-camas' ? '2 camas para grupo o familia' : 'Óptima para trabajo y descanso'}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onOpenBookingModal(r.id)}
                        className="px-3 py-1.5 rounded-lg bg-[#0C0C0C] hover:bg-[#222222] text-[#FAF8F5] text-xs font-medium cursor-pointer"
                      >
                        Cotizar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Included Services Section */}
        <div className="mt-12 sm:mt-16 bg-[#EFE9DD] rounded-2xl border border-[#DFD6C6] p-6 sm:p-8">
          <h3 className="text-xl font-serif text-[#0C0C0C] mb-4 text-center sm:text-left">
            Servicios Incluidos en tu Estadía en BCA Hotel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#4A453E]">
            <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C6]">
              <Coffee className="w-5 h-5 text-[#8C7D65] mb-2" />
              <h4 className="font-semibold text-[#0C0C0C] mb-1">Desayuno Incluido</h4>
              <p>Servicio diario en la terraza con vista hacia el río Magdalena.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C6]">
              <Wifi className="w-5 h-5 text-[#8C7D65] mb-2" />
              <h4 className="font-semibold text-[#0C0C0C] mb-1">Servicio de WiFi</h4>
              <p>Conexión disponible en todas las zonas del hotel y habitaciones.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C6]">
              <Car className="w-5 h-5 text-[#8C7D65] mb-2" />
              <h4 className="font-semibold text-[#0C0C0C] mb-1">Parqueadero Subterráneo</h4>
              <p>Estacionamiento seguro y gratuito bajo techo para huéspedes.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C6]">
              <Clock className="w-5 h-5 text-[#8C7D65] mb-2" />
              <h4 className="font-semibold text-[#0C0C0C] mb-1">Recepción 24 Horas</h4>
              <p>Check-in desde las 3:00 PM y check-out hasta la 1:00 PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
