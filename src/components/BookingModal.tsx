import React, { useState } from 'react';
import { X, Calendar, Users, BedDouble, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomId, setRoomId] = useState(preselectedRoomId || 'estandar');
  const [adults, setAdults] = useState('2');
  const [needsParking, setNeedsParking] = useState(false);
  const [isCorporate, setIsCorporate] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [comments, setComments] = useState('');

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedRoom = ROOMS.find((r) => r.id === roomId);
    const roomTitle = selectedRoom ? selectedRoom.name : 'Habitación Estándar';

    const message = `¡Hola BCA HOTEL! 🏨 Quisiera solicitar reservación con los siguientes datos:
${guestName ? `• Nombre: ${guestName}` : ''}
• Tipo de habitación: ${roomTitle}
• Fecha Check-in: ${checkIn}
• Fecha Check-out: ${checkOut}
• Huéspedes: ${adults} adulto(s)
• Requiere Parqueadero Subterráneo: ${needsParking ? 'SÍ (1 cupo)' : 'No'}
• Tarifa Corporativa / Empresa: ${isCorporate ? 'SÍ' : 'No'}
${comments ? `• Observaciones: ${comments}` : ''}

Por favor confírmenme disponibilidad y tarifa final. ¡Muchas gracias!`;

    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#DDD6C8] text-[#0C0C0C] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F0EBE1] p-5 border-b border-[#E3DDD1] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#8C7D65] uppercase block">
              Consulta Directa
            </span>
            <h3 className="text-lg font-serif font-bold text-[#0C0C0C]">
              Reservar en BCA HOTEL
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#E5DFD3] hover:bg-[#D5CDC0] text-[#0C0C0C] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleBookingSubmit} className="p-6 overflow-y-auto space-y-4">
          {/* Guest Name */}
          <div>
            <label className="block text-xs font-semibold text-[#3D372E] mb-1.5">
              Tu Nombre (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej. Andrés Ramírez"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3.5 py-2.5 text-xs text-[#0C0C0C] placeholder-[#8F8269] focus:outline-none focus:border-[#0C0C0C]"
            />
          </div>

          {/* Dates row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#3D372E] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8C7D65]" />
                Llegada (Check-in)
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#3D372E] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8C7D65]" />
                Salida (Check-out)
              </label>
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                required
              />
            </div>
          </div>

          {/* Room selection */}
          <div>
            <label className="block text-xs font-semibold text-[#3D372E] mb-1.5 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#8C7D65]" />
              Selecciona tu Habitación
            </label>
            <div className="space-y-2">
              {ROOMS.map((room) => (
                <label
                  key={room.id}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    roomId === room.id
                      ? 'bg-white border-[#0C0C0C] text-[#0C0C0C] shadow-sm ring-1 ring-[#0C0C0C]'
                      : 'bg-white border-[#E5DFD3] text-[#5C564D] hover:border-[#C5BDAF]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="selectedRoom"
                      value={room.id}
                      checked={roomId === room.id}
                      onChange={() => setRoomId(room.id)}
                      className="accent-[#0C0C0C]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#0C0C0C]">{room.name}</p>
                      <p className="text-[11px] text-[#7A7163] font-normal">{room.bedType} • {room.capacity}</p>
                    </div>
                  </div>
                  {room.highlightTag && (
                    <span className="text-[10px] font-bold text-[#0C0C0C] bg-[#EFE9DD] px-2 py-0.5 rounded border border-[#E0D8CA]">
                      {room.highlightTag}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Guests count */}
          <div>
            <label className="block text-xs font-semibold text-[#3D372E] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#8C7D65]" />
              Número de Huéspedes
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
            >
              <option value="1">1 Huésped</option>
              <option value="2">2 Huéspedes</option>
              <option value="3">3 Huéspedes</option>
              <option value="4+">4 o más Huéspedes</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="pt-2 space-y-2 text-xs text-[#262626] font-medium">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={needsParking}
                onChange={(e) => setNeedsParking(e.target.checked)}
                className="rounded accent-[#0C0C0C]"
              />
              <span>Requiero Parqueadero Subterráneo Gratuito (1 cupo)</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isCorporate}
                onChange={(e) => setIsCorporate(e.target.checked)}
                className="rounded accent-[#0C0C0C]"
              />
              <span>Viaje corporativo / Facturación electrónica</span>
            </label>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-xs font-semibold text-[#3D372E] mb-1.5">
              Observaciones (Opcional)
            </label>
            <textarea
              rows={2}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Ej. Hora estimada de llegada..."
              className="w-full bg-white border border-[#DCD5C7] rounded-lg px-3.5 py-2 text-xs text-[#0C0C0C] placeholder-[#8F8269] focus:outline-none focus:border-[#0C0C0C] resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-[#E5DFD3] space-y-2.5">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-bold text-xs transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enviar Consulta vía WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#7A7163] pt-1 font-medium">
              <span>Sin intermediarios ni cobros ocultos</span>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="hover:text-[#0C0C0C] font-semibold flex items-center gap-1 text-[#0C0C0C]"
              >
                <Phone className="w-3 h-3" />
                Llamar: {HOTEL_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
