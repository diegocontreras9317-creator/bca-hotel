import React, { useState } from 'react';
import { X, Check, BedDouble, Users, Maximize, MessageCircle, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { Room } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!room) return null;

  const handleWhatsAppBooking = () => {
    const message = `¡Hola BCA HOTEL! 🏨 Me interesa reservar la *${room.name}* en Barrancabermeja.
• Capacidad: ${room.capacity}
• Cama: ${room.bedType}
¿Podrían confirmarme tarifas y fechas disponibles por favor? Muchas gracias.`;

    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#DDD6C8] text-[#0C0C0C] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Top Gallery Carousel */}
          <div className="relative h-[340px] sm:h-[440px] md:h-[520px] w-full bg-[#141414] flex items-center justify-center">
            <img
              src={room.images[currentImageIdx]}
              alt={`${room.name} - Imagen ${currentImageIdx + 1}`}
              className="w-full h-full object-contain transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Carousel Navigation Buttons */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {room.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentImageIdx === idx ? 'w-5 bg-white' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Badge on photo */}
            {room.highlightTag && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#0C0C0C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider shadow-md">
                {room.highlightTag}
              </div>
            )}
          </div>

          {/* Room Details */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#E5DFD3]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
                  {room.name}
                </h3>
                <p className="text-xs text-[#8C7D65] mt-1 font-medium tracking-wide">
                  {room.subtitle}
                </p>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD6C8] text-xs text-[#0C0C0C] font-semibold">
                  <BedDouble className="w-4 h-4 text-[#8C7D65]" />
                  {room.bedType}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD6C8] text-xs text-[#0C0C0C] font-semibold">
                  <Users className="w-4 h-4 text-[#8C7D65]" />
                  {room.capacity}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD6C8] text-xs text-[#0C0C0C] font-semibold">
                  <Maximize className="w-4 h-4 text-[#8C7D65]" />
                  {room.size}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <span className="text-[11px] font-bold text-[#8C7D65] uppercase tracking-wider block mb-2">
                Descripción
              </span>
              <p className="text-xs sm:text-sm text-[#3D372E] leading-relaxed font-normal">
                {room.description}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-white border border-[#E5DFD3] text-xs text-[#5C564D]">
                <strong className="text-[#0C0C0C]">Ideal para:</strong> {room.idealFor}
              </div>
            </div>

            {/* Features Checklist */}
            <div className="mt-6">
              <span className="text-[11px] font-bold text-[#8C7D65] uppercase tracking-wider block mb-3">
                Servicios & Amenidades Incluidas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-[#0C0C0C] p-2.5 rounded-lg bg-white border border-[#E3DDD1] font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Policies Note */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-[#DDD6C8] flex items-start gap-3 text-xs text-[#5C564D] font-normal">
              <Shield className="w-4 h-4 text-[#0C0C0C] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#0C0C0C]">Información de Estadía</p>
                <p className="mt-0.5">
                  Check-in desde las 3:00 PM | Check-out hasta la 1:00 PM. Desayuno incluido servido en la Terraza. Parqueadero subterráneo gratuito según disponibilidad (14 cupos).
                </p>
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="mt-8 pt-6 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs text-[#7A7163] font-normal block">Tarifa directa y sin comisiones</span>
                <span className="text-xs font-bold text-[#0C0C0C]">Recepción 24 Horas disponible</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-[#EAE4D7] hover:bg-[#DDD5C5] text-[#0C0C0C] text-xs font-bold transition-colors"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-bold text-xs transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Reservar Habitación</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
