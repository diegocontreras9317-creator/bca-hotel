import React from 'react';
import { Play } from 'lucide-react';

export const InstallationsVideoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F0EBE1] text-[#0C0C0C] border-b border-[#E5DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DD] text-[#8C7D65] text-xs font-semibold tracking-wider uppercase">
              <Play className="w-3 h-3 fill-current" />
              Video Recorrido
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C] tracking-tight">
              Nuestras Instalaciones
            </h2>
            <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed">
              Te invitamos a conocer cada rincón de BCA Hotel en Barrancabermeja. Descubre nuestra comodidad, áreas comunes y el confort preparado para tu estadía.
            </p>
          </div>

          <div className="w-full md:w-80 lg:w-96 aspect-video rounded-xl overflow-hidden shadow-md border border-[#D5CDC0] bg-black shrink-0">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/TuqWQp0Mx74?autoplay=0&mute=0&controls=1"
              title="Nuestras Instalaciones - BCA Hotel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
