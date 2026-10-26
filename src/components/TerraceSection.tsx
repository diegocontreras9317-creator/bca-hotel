import React, { useState } from 'react';
import { Waves, Coffee, Users, Eye, MessageCircle } from 'lucide-react';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';

export const TerraceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'piscina' | 'desayuno' | 'eventos'>('piscina');

  const tabsContent = {
    piscina: {
      title: 'Piscina y Cascada',
      subtitle: 'Piscina con cascada en piedra natural (Piso 8)',
      tagBadge: 'Piso 8 • Vista a Refinería, Cristo Petrolero y Río Magdalena',
      description:
        'Ubicada en el Piso 8, nuestra piscina cuenta con una relajante cascada en piedra natural para refrescarse del cálido clima de Barrancabermeja. Desde la piscina podrás apreciar la vista hacia la refinería, el monumento El Cristo Petrolero y el río Magdalena.',
      image: IMAGES.terracePool,
      perks: [
        'Muro con caída de agua tipo cascada en piedra natural',
        'Vista hacia la refinería, el Cristo Petrolero y el río Magdalena',
        'Zona de descanso y asoleadoras',
        'Servicio de toallas para huéspedes',
      ],
    },
    desayuno: {
      title: 'Desayuno en Terraza',
      subtitle: 'Servicio de desayuno con vista hacia el río Magdalena',
      tagBadge: 'Terraza • Vista hacia el río Magdalena',
      description:
        'Cada mañana servimos un delicioso desayuno incluido con vista hacia el río Magdalena y la brisa matutina de la ciudad. Por ahora nuestra terraza está habilitada exclusivamente para el servicio de desayuno (no contamos con servicio de restaurante para almuerzo ni cena).',
      image: IMAGES.terraceBreakfast,
      perks: [
        'Desayuno diario incluido para todos los huéspedes',
        'Vista hacia el río Magdalena',
        'Ambiente fresco y ventilado en las mañanas',
        'Servicio exclusivo para el desayuno',
      ],
    },
    eventos: {
      title: 'Eventos & Reuniones (60 - 80 Personas)',
      subtitle: 'Espacio en terraza al aire libre con vista al río Magdalena',
      tagBadge: 'Terraza • Vista hacia el río Magdalena',
      description:
        'Disponemos de espacio al aire libre en la terraza para reuniones de 60 a 80 personas, actividades corporativas o celebraciones, con vista hacia el río Magdalena.',
      image: IMAGES.events,
      perks: [
        'Capacidad flexible de 60 a 80 personas',
        'Terraza al aire libre con vista hacia el río Magdalena',
        'Agradable brisa y ventilación natural',
        'Asesoría y logística para tu evento',
      ],
    },
  };

  const currentTab = tabsContent[activeTab];

  return (
    <section id="terraza" className="py-20 sm:py-28 bg-[#F0EBE1] text-[#0C0C0C] relative overflow-hidden border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
              Terraza, Piscina & Cascada
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C0C0C] tracking-tight leading-tight">
              Disfruta de nuestra Terraza
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#4A453E] font-normal leading-relaxed">
              Un espacio concebido para refrescarse en la piscina con cascada en piedra natural y disfrutar del servicio de desayuno con vista hacia el río Magdalena.
            </p>
          </div>

          {/* Minimalist Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#E2DDD1] border border-[#D5CEC0]">
            <button
              onClick={() => setActiveTab('piscina')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'piscina'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>Piscina y Cascada</span>
            </button>
            <button
              onClick={() => setActiveTab('desayuno')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'desayuno'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Desayuno en Terraza</span>
            </button>
            <button
              onClick={() => setActiveTab('eventos')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'eventos'
                  ? 'bg-[#0C0C0C] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#5C564D] hover:text-[#0C0C0C]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Eventos</span>
            </button>
          </div>
        </div>

        {/* Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-9 shadow-md">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-72 sm:h-96 lg:h-[420px] w-full bg-[#EAE4D7]">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs font-medium">
                <Eye className="w-3.5 h-3.5 text-[#FAF8F5]" />
                <span>{currentTab.tagBadge}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block mb-1">
                {currentTab.subtitle}
              </span>

              <h3 className="text-2xl font-serif text-[#0C0C0C]">
                {currentTab.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#4A453E] leading-relaxed font-normal">
                {currentTab.description}
              </p>
            </div>

            {/* Perks */}
            <div className="space-y-2 pt-2">
              {currentTab.perks.map((perk, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E6E0D5] text-xs text-[#121212]"
                >
                  <span className="text-[#0C0C0C] font-bold mt-0.5">•</span>
                  <span className="font-medium">{perk}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-2 border-t border-[#EFEAE1]">
              <a
                href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                  `¡Hola BCA HOTEL! Quisiera información sobre la Terraza y disponibilidad de ${currentTab.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
