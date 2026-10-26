import React from 'react';
import { Play } from 'lucide-react';

export const InstallationsVideoSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F0EBE1] text-[#0C0C0C] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl p-7 sm:p-10 lg:p-12 shadow-md grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="md:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] text-[#8C7D65] text-xs font-semibold tracking-wider uppercase">
              <Play className="w-3.5 h-3.5 fill-current" />
              Video Recorrido
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif text-[#0C0C0C] tracking-tight leading-tight">
              Nuestras Instalaciones
            </h2>
            <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed">
              Te invitamos a conocer cada rincón de BCA Hotel en Barrancabermeja. Descubre nuestra comodidad, áreas comunes y el confort preparado para tu estadía.
            </p>
          </div>

          <div className="md:col-span-7 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#D5CDC0] bg-black">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/GPKi90TiKxc?autoplay=0&mute=0&controls=1"
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
