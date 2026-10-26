import React from 'react';
import {
  Waves,
  Coffee,
  Users,
  Eye,
  MessageCircle,
  CalendarCheck,
  ArrowLeft,
  ChevronRight,
  Sun,
  Shield,
  Wifi,
  Sparkles,
  Info,
  Clock,
  Play,
} from 'lucide-react';
import { HOTEL_INFO, IMAGES } from '../data/hotelData';

interface TerracePageProps {
  onOpenBookingModal: () => void;
  onNavigate: (page: 'inicio' | 'habitaciones' | 'terraza') => void;
}

export const TerracePage: React.FC<TerracePageProps> = ({ onOpenBookingModal, onNavigate }) => {
  const handleEventWhatsApp = () => {
    const message = `¡Hola BCA HOTEL! 🏨 Quisiera solicitar información y cotización para un evento en la *Terraza* (60-80 personas) en Barrancabermeja.`;
    window.open(`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#F7F4EE] text-[#0C0C0C] min-h-screen">
      {/* Top Banner Header */}
      <div className="bg-[#0E0E0E] text-[#FAF8F5] pt-10 pb-16 sm:pb-20 border-b border-[#242424] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.piscina3}
            alt="Terraza y Piscina BCA Hotel"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#8F8269] mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <ChevronRight className="w-3 h-3 text-[#555555]" />
            <span className="text-[#C7BAA3] font-medium">Terraza</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1F1F1F] text-[#C7BAA3] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#333333]">
              Terraza • Al Aire Libre
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Terraza & Piscina con Cascada
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#D9D1C1] leading-relaxed font-light">
              Espacio exclusivo para relajarse en Barrancabermeja con piscina y cascada en piedra natural, servicio matutino de desayuno para huéspedes y vistas hacia el río Magdalena, la refinería y el Cristo Petrolero.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Notice Card: Transparent information about breakfast service */}
        <div className="mb-12 bg-[#FAF8F5] border border-[#E0D8CA] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EFE9DD] flex items-center justify-center shrink-0 text-[#8C7D65]">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#4A453E] leading-relaxed">
            <strong className="text-[#0C0C0C] font-semibold">Información del servicio en terraza: </strong>
            Por ahora, nuestra terraza está habilitada exclusivamente para el <span className="font-semibold text-[#0C0C0C]">servicio matutino de desayuno</span> de nuestros huéspedes y eventos privados reservados. Aún no contamos con servicio de restaurante para almuerzo ni cena.
          </div>
        </div>

        {/* Video Showcase Section: Text on Left, Compact Video on Right */}
        <div className="mb-16 sm:mb-20 bg-[#FAF8F5] rounded-2xl border border-[#E0D8CA] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DD] text-[#8C7D65] text-xs font-semibold tracking-wider uppercase">
                <Play className="w-3 h-3 fill-current" />
                Recorrido en Video
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C] tracking-tight leading-snug">
                Vive la Experiencia de la Terraza & Piscina
              </h2>
              <p className="text-xs sm:text-sm text-[#5C564D] leading-relaxed">
                Explora en movimiento la tranquilidad de nuestra piscina con cascada en piedra natural, el área de solárium y las amplias vistas panorámicas hacia el río Magdalena en Barrancabermeja.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#6B6254]">
                <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Piscina & Cascada</span>
                <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Vista al Río Magdalena</span>
                <span className="px-2.5 py-1 bg-[#EFE9DD] rounded-md">Desayuno servido</span>
              </div>
            </div>

            {/* Right Column: Compact Video */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-[#D5CDC0] bg-black">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/TuqWQp0Mx74?autoplay=0&mute=0&controls=1"
                  title="Terraza y Piscina BCA Hotel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* 1. Piscina y Cascada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E0D8CA] shadow-sm relative group">
            <img
              src={IMAGES.terracePool}
              alt="Piscina y cascada en Terraza BCA Hotel"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/85 text-[#FAF8F5] text-xs font-semibold backdrop-blur-md">
                <Waves className="w-3.5 h-3.5 text-[#C7BAA3]" />
                Piscina & Cascada
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block">
              Relajación & Frescura
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
              Piscina con Cascada en Piedra Natural
            </h2>
            <p className="text-sm text-[#4A453E] leading-relaxed">
              Diseñada para ofrecer un oasis de descanso frente a las altas temperaturas de la ciudad. El sonido relajante del muro de cascada y la brisa de la terraza crean un ambiente propicio para desconectar tras tu jornada.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#333333]">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7D65] mt-2 shrink-0" />
                <span>Muro con caída de agua tipo cascada en piedra natural.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7D65] mt-2 shrink-0" />
                <span>Zona con asoleadoras para tomar el sol y descansar.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7D65] mt-2 shrink-0" />
                <span>Servicio de toallas para huéspedes sin costo adicional.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7D65] mt-2 shrink-0" />
                <span>Horario de funcionamiento: 9:00 AM a 9:00 PM.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Vistas Panorámicas Exactas */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E0D8CA] p-6 sm:p-10 mb-16 sm:mb-20 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block mb-1">
              Perspectiva Urbana & Fluvial
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
              Vistas desde la Terraza
            </h2>
            <p className="text-sm text-[#4A453E] mt-2">
              Ubicados estratégicamente en el sector comercial, nuestra terraza permite apreciar dos perspectivas auténticas de Barrancabermeja:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Piscina */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DBD0] space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFE9DD] text-[#0C0C0C] text-xs font-semibold">
                <Eye className="w-3.5 h-3.5 text-[#8C7D65]" />
                Desde la Zona de Piscina
              </div>
              <h3 className="text-lg font-serif text-[#0C0C0C]">
                Vista a la Refinería, Cristo Petrolero y Río Magdalena
              </h3>
              <p className="text-xs sm:text-sm text-[#5C564D] leading-relaxed">
                Mientras disfrutas del agua y la cascada, puedes divisar el emblemático monumento de El Cristo Petrolero, la silueta industrial de la refinería y las aguas del río Magdalena.
              </p>
            </div>

            {/* Box 2: Terraza */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DBD0] space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFE9DD] text-[#0C0C0C] text-xs font-semibold">
                <Eye className="w-3.5 h-3.5 text-[#8C7D65]" />
                Desde la Terraza
              </div>
              <h3 className="text-lg font-serif text-[#0C0C0C]">
                Vista hacia el Río Magdalena
              </h3>
              <p className="text-xs sm:text-sm text-[#5C564D] leading-relaxed">
                La terraza al aire libre cuenta con una vista despejada orientada hacia la cuenca del gran río Magdalena, ofreciendo un paisaje fluvial sereno y aire fresco al amanecer y atardecer.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Desayuno en Terraza */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block">
              Comienza el Día
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
              Servicio de Desayuno en la Terraza
            </h2>
            <p className="text-sm text-[#4A453E] leading-relaxed">
              Inicia cada jornada disfrutando de un desayuno recién preparado al aire libre, con la suave brisa del río Magdalena en la terraza.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#333333]">
              <div className="flex items-start gap-2">
                <Coffee className="w-4 h-4 text-[#8C7D65] mt-0.5 shrink-0" />
                <span>Desayuno incluido para todos los huéspedes alojados.</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8C7D65] mt-0.5 shrink-0" />
                <span>Horario: Lunes a Domingo de 6:30 AM a 9:30 AM.</span>
              </div>
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[#8C7D65] mt-0.5 shrink-0" />
                <span>Servicio exclusivo para desayunos (no almuerzo ni cena).</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E0D8CA] shadow-sm relative group order-1 lg:order-2">
            <img
              src={IMAGES.terraceBreakfast}
              alt="Desayuno Terraza BCA Hotel"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C0C]/85 text-[#FAF8F5] text-xs font-semibold backdrop-blur-md">
                <Coffee className="w-3.5 h-3.5 text-[#C7BAA3]" />
                Desayuno Matutino Incluido
              </span>
            </div>
          </div>
        </div>

        {/* 4. Eventos en Terraza */}
        <div className="bg-[#EFE9DD] rounded-2xl border border-[#DFD6C6] p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#8C7D65] uppercase block">
                Celebraciones & Corporativo
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0C0C0C]">
                Eventos en la Terraza (60 a 80 Personas)
              </h2>
              <p className="text-sm text-[#4A453E] leading-relaxed">
                ¿Planeas un cóctel empresarial, una reunión corporativa o un agasajo familiar? La Terraza ofrece un espacio abierto con vista al río Magdalena, excelente ventilación y logística adaptable.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#5C564D]">
                <span className="px-3 py-1 bg-white/80 rounded-md border border-[#DFD6C6]">Capacidad: 60 - 80 pax</span>
                <span className="px-3 py-1 bg-white/80 rounded-md border border-[#DFD6C6]">Mobiliario y montaje</span>
                <span className="px-3 py-1 bg-white/80 rounded-md border border-[#DFD6C6]">Servicio de WiFi en terraza</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleEventWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0C0C0C] hover:bg-[#222222] text-[#FAF8F5] font-semibold text-xs transition-all cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#C7BAA3]" />
                <span>Cotizar Evento en Terraza</span>
              </button>

              <button
                onClick={() => onNavigate('habitaciones')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#0C0C0C] font-semibold text-xs border border-[#D5CDBC] transition-all cursor-pointer"
              >
                <span>Ver Habitaciones del Hotel</span>
              </button>
            </div>
          </div>
        </div>

        {/* 5. Servicios y Comodidades del Piso 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#4A453E]">
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E0D8CA]">
            <Wifi className="w-5 h-5 text-[#8C7D65] mb-2" />
            <h4 className="font-semibold text-[#0C0C0C] mb-1">Servicio de WiFi</h4>
            <p>Conexión inalámbrica disponible en la terraza y en todas las zonas del hotel.</p>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E0D8CA]">
            <Sun className="w-5 h-5 text-[#8C7D65] mb-2" />
            <h4 className="font-semibold text-[#0C0C0C] mb-1">Asoleadoras y Descanso</h4>
            <p>Sillas reclinables confortables junto a la piscina para tomar el sol y relajarse.</p>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E0D8CA]">
            <Shield className="w-5 h-5 text-[#8C7D65] mb-2" />
            <h4 className="font-semibold text-[#0C0C0C] mb-1">Exclusividad para Huéspedes</h4>
            <p>Uso controlado y seguro para garantizar la tranquilidad y privacidad de tu estadía.</p>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E0D8CA]">
            <Sparkles className="w-5 h-5 text-[#8C7D65] mb-2" />
            <h4 className="font-semibold text-[#0C0C0C] mb-1">Baños y Duchas</h4>
            <p>Instalaciones sanitarias completas ubicadas en la misma terraza para tu confort.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
