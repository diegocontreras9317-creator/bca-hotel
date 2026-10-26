import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, CalendarCheck } from 'lucide-react';
import { BcaLogo } from './BcaLogo';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';

export type PageId = 'inicio' | 'habitaciones' | 'terraza';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'habitaciones', label: 'Habitaciones' },
    { id: 'terraza', label: 'Terraza' },
  ];

  const handlePageClick = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar: Minimalist black & warm cream */}
      <div className="bg-[#080808] text-xs text-[#D9D1C1] py-1.5 px-4 border-b border-[#1F1F1F] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D9D1C1]">
              <MapPin className="w-3.5 h-3.5 text-[#F5F1E9]" />
              Calle 51 # 8b - 27, Sector Comercial, Barrancabermeja
            </span>
            <span className="flex items-center gap-1.5 text-[#FAF8F5]/80">
              <Clock className="w-3.5 h-3.5 text-[#C7BAA3]" />
              Recepción 24 Horas
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#FAF8F5] hover:text-[#C7BAA3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7BAA3]" />
              {HOTEL_INFO.phoneDisplay}
            </a>
            <span className="text-[#333333]">|</span>
            <a
              href={HOTEL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9D1C1] hover:text-white transition-colors"
            >
              {HOTEL_INFO.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0E0E0E]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#242424] py-3'
            : 'bg-[#0E0E0E]/90 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handlePageClick('inicio')}
            className="group flex items-center gap-3 transition-transform hover:opacity-90 cursor-pointer text-left"
          >
            <div className="bg-transparent flex items-center justify-center">
              <BcaLogo size="md" variant="cream" logoImage={IMAGES.logo} />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-[#C7BAA3] font-medium uppercase">
                Barrancabermeja
              </span>
              <span className="text-xs text-[#EAE3D2] font-light">
                Confort & Terraza
              </span>
            </div>
          </button>

          {/* Navigation Links for distinct pages */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handlePageClick(link.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all relative rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-[#FAF8F5] bg-white/10 font-semibold'
                      : 'text-[#D9D1C1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#C7BAA3] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#171717] hover:bg-[#222222] text-[#F5F1E9] border border-[#2E2E2E] transition-all hover:border-[#444444] cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#C7BAA3]" />
              Cotizar
            </button>

            {/* Direct WhatsApp in elegant black & warm cream style */}
            <a
              href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                '¡Hola BCA HOTEL! Quisiera consultar disponibilidad y tarifas para una reserva en Barrancabermeja.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] transition-all shadow-md shadow-black/20"
            >
              <MessageCircle className="w-4 h-4 text-[#0C0C0C] fill-[#0C0C0C]" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                '¡Hola BCA HOTEL! Quisiera información y reservar habitación en Barrancabermeja.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#FAF8F5] rounded-lg text-[#0C0C0C]"
              aria-label="Reservar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#171717] border border-[#2E2E2E] text-[#F5F1E9] hover:text-white cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-[#242424] px-4 pt-3 pb-6 animate-fade-in">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handlePageClick(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
                      isActive
                        ? 'bg-[#1C1C1C] text-[#FAF8F5] font-semibold border-l-4 border-[#C7BAA3]'
                        : 'text-[#D9D1C1] hover:bg-[#1A1A1A]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#242424] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C1C] text-[#FAF8F5] text-sm font-medium border border-[#2E2E2E] cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#C7BAA3]" />
                Cotizar Habitación
              </button>

              <a
                href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
                  '¡Hola BCA HOTEL! Quisiera consultar disponibilidad y tarifas para reservar en Barrancabermeja.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] text-sm font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
