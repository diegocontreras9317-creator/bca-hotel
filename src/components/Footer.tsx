import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Clock, Check, ArrowUp, Mail } from 'lucide-react';
import { BcaLogo } from './BcaLogo';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';

interface FooterProps {
  onNavigate?: (page: 'inicio' | 'habitaciones' | 'terraza') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: 'inicio' | 'habitaciones' | 'terraza') => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#080808] text-[#D9D1C1] border-t border-[#1C1C1C] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1C1C1C]">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="inline-block bg-transparent">
              <BcaLogo size="md" variant="cream" logoImage={IMAGES.logo} />
            </div>
            <p className="text-xs text-[#8F8269] leading-relaxed font-light">
              Tu confort y comodidad en el corazón comercial de Barrancabermeja, Santander. Alojamiento contemporáneo, piscina con cascada en piso 8, desayuno incluido en terraza con vista al río Magdalena, servicio de WiFi en todas las áreas y parqueadero cubierto gratuito.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={HOTEL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center text-[#D9D1C1] hover:text-white hover:border-[#444444] transition-colors"
                aria-label="Instagram BCA Hotel"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                  '¡Hola BCA HOTEL! Me comunico desde su sitio web.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center text-[#D9D1C1] hover:text-white hover:border-[#444444] transition-colors"
                aria-label="WhatsApp BCA Hotel"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center text-[#D9D1C1] hover:text-white hover:border-[#444444] transition-colors"
                aria-label="Llamar a BCA Hotel"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#8F8269] font-light">
              <li>
                <button
                  onClick={() => handleNav('inicio')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Página de Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('habitaciones')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Página de Habitaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terraza')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Página de Terraza & Piscina con Cascada
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Habitaciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Habitaciones
            </h4>
            <ul className="space-y-2 text-xs text-[#8F8269] font-light">
              <li>
                <button
                  onClick={() => handleNav('habitaciones')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Habitación Estándar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('habitaciones')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Estándar 2 Camas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('habitaciones')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Doble Deluxe King
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('habitaciones')}
                  className="hover:text-[#FAF8F5] transition-colors text-left cursor-pointer"
                >
                  Suite con Jacuzzi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-[#8F8269] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7BAA3] shrink-0 mt-0.5" />
                <span className="text-[#D9D1C1]">{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7BAA3] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C7BAA3] shrink-0 fill-current" />
                <a
                  href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                    '¡Hola BCA HOTEL! Quisiera reservar directamente.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +57 313 3777852
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C7BAA3] shrink-0" />
                <a
                  href={HOTEL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {HOTEL_INFO.instagramHandle}
                </a>
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C7BAA3] shrink-0" />
                  <a href="mailto:reservas@bcahotel.com" className="hover:text-white transition-colors">
                    {HOTEL_INFO.emailReservas}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6">
                  <a href="mailto:gerencia@bcahotel.com" className="hover:text-white transition-colors text-[11px] text-[#A39988]">
                    {HOTEL_INFO.emailGerencia}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[#FAF8F5]">
                <Clock className="w-4 h-4 text-[#C7BAA3] shrink-0" />
                <span>Recepción 24 Horas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] font-light">
          <p>
            © {new Date().getFullYear()} BCA HOTEL. Todos los derechos reservados. Barrancabermeja, Santander.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1E1E1E] text-[#D9D1C1] hover:text-white border border-[#242424] transition-colors"
          >
            <span>Arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
