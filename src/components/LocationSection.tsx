import React from 'react';
import { MapPin, Navigation, Car, ExternalLink, Clock } from 'lucide-react';
import { HOTEL_INFO, NEARBY_PLACES } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'BCA Hotel Calle 51 8b 27 Barrancabermeja Santander'
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    'Calle 51 # 8b - 27 Barrancabermeja Santander'
  )}`;

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#F0EBE1] text-[#0C0C0C] relative border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
            Ubicación Estratégica
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C0C0C] tracking-tight">
            En el Corazón Comercial de Barrancabermeja
          </h2>

          <p className="mt-3 text-sm text-[#4A453E] font-normal">
            {HOTEL_INFO.address}. Cerca a entidades bancarias, notarías, centros médicos y restaurantes.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-white border border-[#DDD6C8] rounded-xl overflow-hidden shadow-md flex flex-col">
            {/* Top Bar */}
            <div className="p-3.5 bg-[#FAF8F5] border-b border-[#E8E2D6] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#0C0C0C]">
                <MapPin className="w-4 h-4 text-[#8C7D65] shrink-0" />
                <span className="font-semibold truncate">Calle 51 # 8b - 27, Sector Comercial</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0C0C0C] hover:bg-[#262626] text-[#FAF8F5] text-[11px] font-semibold transition-colors shadow-sm"
              >
                <Navigation className="w-3 h-3 text-[#FAF8F5]" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#C7BAA3]" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[400px] w-full bg-[#EAE4D7]">
              <iframe
                title="Ubicación BCA HOTEL Barrancabermeja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5340645068474!2d-73.85698532415174!3d7.06390199293856!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x8e42ecf182c40c83%3A0xebe76bb92955f1f4!2sCl.%2051%20%23%208b-27%2C%20Barrancabermeja%2C%20Santander!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px]"
              />
            </div>

            {/* Bottom Bar */}
            <div className="p-3.5 bg-[#FAF8F5] border-t border-[#E8E2D6] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#5C564D] flex items-center gap-1.5 font-normal">
                <Car className="w-4 h-4 text-[#0C0C0C]" />
                Parqueadero subterráneo gratuito para huéspedes
              </span>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C0C0C] hover:text-[#5C564D] font-bold flex items-center gap-1"
              >
                Navegar con Waze <ExternalLink className="w-3 h-3 text-[#8C7D65]" />
              </a>
            </div>
          </div>

          {/* Points of Interest Column */}
          <div className="lg:col-span-5 bg-white border border-[#DDD6C8] rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E2D6]">
                <h3 className="text-base font-bold text-[#0C0C0C] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#8C7D65]" />
                  Sitios Clave & Distancias
                </h3>
                <span className="text-xs text-[#7A7163] font-medium">Barrancabermeja</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {NEARBY_PLACES.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E6E0D5] flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#0C0C0C]">{place.name}</p>
                      <p className="text-[11px] text-[#5C564D] mt-0.5 font-normal">{place.type}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-[#0C0C0C] bg-[#EFE9DD] px-2 py-0.5 rounded border border-[#E0D8CA] whitespace-nowrap ml-2">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrival Notice */}
            <div className="mt-6 pt-4 border-t border-[#E8E2D6] text-xs text-[#5C564D] font-normal">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0C0C0C] shrink-0 mt-0.5" />
                <p>
                  Recepción abierta las 24 horas del día. Si llegas en taxi o particular, indica "BCA Hotel en la Calle 51, sector comercial".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
