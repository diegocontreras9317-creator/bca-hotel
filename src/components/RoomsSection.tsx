import React, { useState } from 'react';
import { BedDouble, Users, Maximize, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types/hotel';

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom }) => {
  const [filter, setFilter] = useState<'all' | 'king' | 'family'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'king') return room.bedType.includes('King');
    if (filter === 'family') return room.id === 'estandar-2-camas';
    return true;
  });

  const handleQuickWhatsAppReserve = (room: Room, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `¡Hola BCA HOTEL! 🏨 Me gustaría reservar la *${room.name}* (${room.bedType}) en Barrancabermeja.
¿Podrían confirmarme disponibilidad y la tarifa por noche? Muchas gracias.`;
    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="habitaciones" className="py-20 sm:py-28 bg-[#F7F4EE] text-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
            Descanso & Elegancia
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C0C0C] tracking-tight">
            Nuestras Habitaciones
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4A453E] font-normal leading-relaxed">
            Habitaciones diseñadas en tonos neutros y relajantes, con climatización óptima para el clima de Barrancabermeja y camas de confort superior para garantizar un descanso impecable.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-[#EFE9DD] border border-[#E0D8CA] text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Todas (4 Tipos)
            </button>
            <button
              onClick={() => setFilter('king')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'king'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Cama King 2x2
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'family'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              Familiar / 2 Camas
            </button>
          </div>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="group bg-white border border-[#E3DDD1] hover:border-[#C5BDAF] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              {/* Room Image */}
              <div className="relative h-56 sm:h-52 w-full overflow-hidden bg-[#EAE4D7]">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badge Tag */}
                {room.highlightTag && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0C0C0C] text-[#FAF8F5] text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                    {room.highlightTag}
                  </div>
                )}

                {/* Specs Overlay */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    <Users className="w-3 h-3 text-[#FAF8F5]" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    <Maximize className="w-3 h-3 text-[#FAF8F5]" />
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0C0C0C] group-hover:text-[#4A453E] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-[#6B6254] mt-0.5 flex items-center gap-1.5 font-medium">
                    <BedDouble className="w-3.5 h-3.5 text-[#8C7D65]" />
                    {room.bedType}
                  </p>

                  <p className="mt-2.5 text-xs text-[#4A453E] line-clamp-2 leading-relaxed font-normal">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="mt-4 pt-3 border-t border-[#EFEAE1] space-y-1.5">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#262626]">
                        <Check className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                    <div className="text-[11px] text-[#8C7D65] font-semibold pl-5">
                      + Desayuno & Terraza
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-[#EFEAE1] flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#F5F1E9] hover:bg-[#EAE3D2] text-[#0C0C0C] text-xs font-semibold border border-[#DCD5C7] transition-colors"
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={(e) => handleQuickWhatsAppReserve(room, e)}
                    className="p-2 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-white transition-colors shadow-sm"
                    title="Reservar esta habitación por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate bottom banner in warm cream */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl bg-white border border-[#E3DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-[#0C0C0C]">¿Tarifas corporativas o estadías para empresas?</h4>
            <p className="text-xs text-[#5C564D] font-normal mt-0.5">
              Tarifas preferenciales para empresas, contratistas de Ecopetrol y visitas frecuentes a Barrancabermeja.
            </p>
          </div>

          <a
            href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
              '¡Hola BCA HOTEL! Quisiera solicitar cotización para convenio corporativo / empresa en Barrancabermeja.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-semibold text-xs whitespace-nowrap transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar Tarifa Corporativa</span>
          </a>
        </div>
      </div>
    </section>
  );
};
