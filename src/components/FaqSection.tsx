import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, HOTEL_INFO } from '../data/hotelData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="reservaciones" className="py-20 sm:py-28 bg-[#F7F4EE] text-[#0C0C0C] relative border-t border-[#E5DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
            Preguntas Frecuentes
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#0C0C0C] tracking-tight">
            Información Útil para tu Estadía
          </h2>
          <p className="mt-3 text-sm text-[#5C564D] font-normal">
            Todo lo referente a horarios de check-in, desayuno, parqueadero y reservas en Barrancabermeja.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E3DDD1] rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-[#0C0C0C] hover:text-[#5C564D] transition-colors"
                >
                  <span className="text-sm font-bold">{faq.q}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#DDD6C8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0C0C0C]' : 'text-[#8C7D65]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-[#4A453E] leading-relaxed border-t border-[#EFEAE1] mt-1 font-normal">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white border border-[#E3DDD1] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0C0C0C]">¿Tienes alguna pregunta adicional?</h4>
            <p className="text-xs text-[#5C564D] mt-0.5 font-normal">
              Nuestro equipo de recepción está a tu disposición en cualquier momento.
            </p>
          </div>
          <a
            href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
              '¡Hola BCA HOTEL! Tengo una consulta antes de reservar en Barrancabermeja.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] font-semibold text-xs whitespace-nowrap transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Hablar con Recepción</span>
          </a>
        </div>
      </div>
    </section>
  );
};
