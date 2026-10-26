import React from 'react';
import { MapPin, Users, Car, Coffee } from 'lucide-react';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-[#F7F4EE] text-[#0C0C0C] relative border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block">
              Nosotros & Filosofía
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C0C0C] tracking-tight leading-tight">
              Hospitalidad Moderna en el Sector Comercial
            </h2>

            <p className="text-sm sm:text-base text-[#38332B] leading-relaxed font-normal">
              En <strong className="text-[#0C0C0C] font-bold">BCA HOTEL</strong> ofrecemos un ambiente pensado para la tranquilidad y el confort de nuestros huéspedes. Situados en la <strong>Calle 51 # 8b - 27</strong>, en pleno Sector Comercial de Barrancabermeja, brindamos cercanía a los centros financieros y de negocios de la ciudad.
            </p>

            <p className="text-xs sm:text-sm text-[#5C564D] leading-relaxed font-normal">
              Nuestras instalaciones combinan arquitectura funcional, habitaciones tranquilas para descansar, desayuno servido en la terraza con vista al río Magdalena, piscina con cascada en piedra natural y servicio de WiFi en todas las áreas.
            </p>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E3DDD1] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EFE9DD] text-[#0C0C0C]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0C0C0C]">Sector Comercial</h4>
                  <p className="text-[11px] text-[#5C564D] mt-0.5 font-normal">
                    A pasos de notarías, bancos, restaurantes y zonas de comercio.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3DDD1] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EFE9DD] text-[#0C0C0C]">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0C0C0C]">Parqueadero Subterráneo</h4>
                  <p className="text-[11px] text-[#5C564D] mt-0.5 font-normal">
                    14 cupos cubiertos y vigilados las 24 horas sin costo adicional.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3DDD1] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EFE9DD] text-[#0C0C0C]">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0C0C0C]">Desayuno Incluido</h4>
                  <p className="text-[11px] text-[#5C564D] mt-0.5 font-normal">
                    Servicio de desayuno en la terraza con vista al río Magdalena.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3DDD1] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EFE9DD] text-[#0C0C0C]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0C0C0C]">Salones Corporativos</h4>
                  <p className="text-[11px] text-[#5C564D] mt-0.5 font-normal">
                    Salón en primer piso y terraza para 60 a 80 personas.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-[#E5DFD3] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-serif font-bold text-[#0C0C0C]">Piso 8</p>
                <p className="text-[11px] text-[#7A7163] mt-0.5 font-medium">Piscina & Cascada</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#0C0C0C]">14</p>
                <p className="text-[11px] text-[#7A7163] mt-0.5 font-medium">Cupos de Parqueadero</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#0C0C0C]">24/7</p>
                <p className="text-[11px] text-[#7A7163] mt-0.5 font-medium">Recepción & Seguridad</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-[#D5CDC0] shadow-md">
              <img
                src={IMAGES.about}
                alt="Lobby y Recepción BCA HOTEL Barrancabermeja"
                loading="lazy"
                decoding="async"
                className="w-full h-[480px] sm:h-[560px] lg:h-[640px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
