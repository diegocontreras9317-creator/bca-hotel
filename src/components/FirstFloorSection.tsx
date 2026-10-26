import React, { useState } from 'react';
import { IMAGES } from '../data/hotelData';
import { X, ZoomIn } from 'lucide-react';

interface SpaceItem {
  title: string;
  subtitle: string;
  src: string;
}

const FIRST_FLOOR_SPACES: SpaceItem[] = [
  {
    title: 'Recepción',
    subtitle: 'Atención personalizada 24/7',
    src: IMAGES.recepcion,
  },
  {
    title: 'Lobby',
    subtitle: 'Área de bienvenida y descanso',
    src: IMAGES.lobby,
  },
  {
    title: 'Cafetería',
    subtitle: 'Espacio acogedor y bebidas',
    src: IMAGES.cafeteria,
  },
  {
    title: 'Cafetería & Zona de Estar',
    subtitle: 'Comodidad en el primer piso',
    src: IMAGES.cafeteria2,
  },
];

export const FirstFloorSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F4EE] text-[#0C0C0C] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
            Instalaciones Principales
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C0C0C] tracking-tight">
            Espacios del Primer Piso
          </h2>
          <p className="mt-3 text-sm text-[#5C564D]">
            Recorre nuestra recepción, lobby y cafetería diseñados para tu comodidad al llegar al hotel. Haz clic en cualquier imagen para verla en tamaño grande.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FIRST_FLOOR_SPACES.map((space, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E2DBD0] hover:border-[#C7BAA3] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-[#242424]">
                <img
                  src={space.src}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#EAE3D2] block">
                    Primer Piso
                  </span>
                  <h3 className="text-lg font-serif font-medium leading-snug">
                    {space.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 bg-[#FAF8F5] flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#6B6254] font-light">
                  {space.subtitle}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8C7D65] group-hover:text-[#0C0C0C] transition-colors">
                  Ver foto completa &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all cursor-pointer border border-white/20"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={FIRST_FLOOR_SPACES[selectedIdx].src}
              alt={FIRST_FLOOR_SPACES[selectedIdx].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-serif">{FIRST_FLOOR_SPACES[selectedIdx].title}</h3>
              <p className="text-xs text-[#D9D1C1] mt-1">{FIRST_FLOOR_SPACES[selectedIdx].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
