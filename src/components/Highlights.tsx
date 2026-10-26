import React from 'react';
import { MapPin, Waves, Utensils, Car, Users, Wifi, ShieldCheck, Sparkles } from 'lucide-react';
import { HIGHLIGHTS } from '../data/hotelData';

export const Highlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#0C0C0C]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#0C0C0C]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#0C0C0C]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#0C0C0C]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#0C0C0C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0C0C0C]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container in Warm Cream with Black Typography */}
      <div className="bg-[#FAF8F5] border border-[#E3DDD1] rounded-2xl shadow-xl p-6 sm:p-8 text-[#0C0C0C]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#E8E2D6]">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8C7D65] uppercase block mb-1">
              Servicios & Comodidades
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
              La Experiencia <span className="font-sans font-bold">BCA HOTEL</span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-[#5C564D] max-w-md font-normal">
            Todo lo necesario para una estancia relajante, cómoda y sin contratiempos en Barrancabermeja.
          </p>
        </div>

        {/* 5 Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white hover:bg-[#FDFBF7] border border-[#E6E0D5] hover:border-[#D5CDC0] rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-lg bg-[#F3EDE2] border border-[#E5DFD3] flex items-center justify-center mb-4 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <span className="absolute top-4 right-4 text-xs font-mono font-semibold text-[#8C7D65]">
                  0{index + 1}
                </span>

                <h3 className="text-sm font-bold text-[#0C0C0C] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C564D] mb-2 font-medium">
                  {item.description}
                </p>
              </div>

              <p className="text-[11px] text-[#7A7163] leading-relaxed border-t border-[#EFEAE1] pt-2.5 mt-2 font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Amenities Ticker */}
        <div className="mt-8 pt-6 border-t border-[#E8E2D6] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#262626]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EFE9DD] flex items-center justify-center text-[#0C0C0C]">
              <Wifi className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#0C0C0C]">Servicio de WiFi</p>
              <p className="text-[11px] text-[#5C564D]">En todas las zonas del hotel</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EFE9DD] flex items-center justify-center text-[#0C0C0C]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#0C0C0C]">Recepción 24 Horas</p>
              <p className="text-[11px] text-[#5C564D]">Atención continua</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EFE9DD] flex items-center justify-center text-[#0C0C0C]">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#0C0C0C]">Desayuno en Terraza</p>
              <p className="text-[11px] text-[#5C564D]">Piso 8 con vista al río Magdalena</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EFE9DD] flex items-center justify-center text-[#0C0C0C]">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#0C0C0C]">Parqueadero Subterráneo</p>
              <p className="text-[11px] text-[#5C564D]">14 cupos cubiertos y gratis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
