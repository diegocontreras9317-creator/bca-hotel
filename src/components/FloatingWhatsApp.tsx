import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const sendQuickMessage = (text: string) => {
    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    sendQuickMessage(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip bubble in clean black & cream */}
      {!isOpen && showTooltip && (
        <div className="relative mb-3 bg-[#161616] text-[#FAF8F5] text-xs p-3.5 rounded-xl border border-[#2E2E2E] shadow-xl max-w-xs flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FAF8F5]" />
            <div>
              <p className="font-medium text-white">¿Planeas tu viaje a Barrancabermeja?</p>
              <p className="text-[11px] text-[#A89F8F] font-light">Escríbenos y consulta disponibilidad</p>
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#888888] hover:text-white p-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Expanded Quick WhatsApp Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden animate-fade-in flex flex-col">
          {/* Header */}
          <div className="bg-[#181818] p-4 flex items-center justify-between border-b border-[#242424]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#262626] border border-[#3A3A3A] flex items-center justify-center text-[#FAF8F5]">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#FAF8F5] border-2 border-[#181818]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Recepción BCA HOTEL</h4>
                <p className="text-[11px] text-[#C7BAA3] flex items-center gap-1 font-light">
                  <Clock className="w-3 h-3" />
                  Atención las 24 horas
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#888888] hover:text-white hover:bg-[#222222] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#0F0F0F] space-y-3 max-h-72 overflow-y-auto">
            {/* Agent greeting */}
            <div className="bg-[#181818] border border-[#242424] p-3 rounded-xl rounded-tl-none text-xs text-[#D9D1C1] space-y-1 font-light">
              <p className="font-medium text-white">¡Hola! Bienvenido a BCA HOTEL.</p>
              <p>
                Estamos en la <strong>Calle 51 # 8b - 27</strong> (Sector Comercial). ¿Cómo podemos colaborarte hoy con tu reserva?
              </p>
              <span className="text-[10px] text-[#666666] block text-right">Ahora</span>
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-medium text-[#8F8269] uppercase tracking-wider block">
                Opciones directas:
              </span>
              <button
                onClick={() =>
                  sendQuickMessage(
                    '¡Hola BCA HOTEL! Quisiera saber disponibilidad y tarifas para reservar en Barrancabermeja.'
                  )
                }
                className="w-full text-left p-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#282828] text-xs text-[#FAF8F5] transition-colors flex items-center justify-between"
              >
                <span>Consultar disponibilidad y tarifas</span>
                <span className="text-[#8F8269] text-xs">→</span>
              </button>

              <button
                onClick={() =>
                  sendQuickMessage(
                    '¡Hola! Me gustaría cotizar la Habitación Junior Suite con Jacuzzi.'
                  )
                }
                className="w-full text-left p-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#282828] text-xs text-[#FAF8F5] transition-colors flex items-center justify-between"
              >
                <span>Cotizar Suite con Jacuzzi</span>
                <span className="text-[#8F8269] text-xs">→</span>
              </button>

              <button
                onClick={() =>
                  sendQuickMessage(
                    '¡Hola! Quisiera información sobre eventos o la Terraza.'
                  )
                }
                className="w-full text-left p-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#282828] text-xs text-[#FAF8F5] transition-colors flex items-center justify-between"
              >
                <span>Terraza & Eventos</span>
                <span className="text-[#8F8269] text-xs">→</span>
              </button>
            </div>
          </div>

          {/* Footer Input */}
          <form onSubmit={handleCustomSend} className="p-3 bg-[#181818] border-t border-[#242424] flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-[#101010] border border-[#2B2B2B] rounded-lg px-3 py-2 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#C7BAA3]"
            />
            <button
              type="submit"
              className="p-2 bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] rounded-lg transition-colors"
              aria-label="Enviar a WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none border border-[#2E2E2E]"
        aria-label="Contactar por WhatsApp a BCA Hotel"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#0C0C0C]" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-[#0C0C0C] text-[#0C0C0C]" />
        )}
      </button>
    </div>
  );
};
