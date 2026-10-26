import { Room, AmenityHighlight, Review } from '../types/hotel';

// =========================================================================
// IMÁGENES DEDICADAS E INDEPENDIENTES (100% DESACOPLADAS)
// Cada sección y cada tipo de habitación tiene su propia imagen exclusiva.
// Modificar o sustituir una foto NO afectará a ninguna otra sección.
// =========================================================================

// 1. Portada Principal (Hero)
import heroImg from '../assets/images/regenerated_image_1791937577022.png';

// 2. Sobre Nosotros / Lobby
import aboutLobbyImg from '../assets/images/hotel_lobby_nosotros_1791938372810.jpg';

// 3. Terraza - Piscina & Cascada
import terracePoolImg from '../assets/images/piscina_cascada_1791928015504.jpg';

// 4. Terraza - Desayuno Matutino
import terraceBreakfastImg from '../assets/images/terrace_restaurant_1791910703484.jpg';

// 5. Terraza - Mirador / Vistas Panorámicas
import terraceViewImg from '../assets/images/rooftop_pool_1791910655437.jpg';

// 6. Salón & Eventos
import eventsImg from '../assets/images/bca_hotel_facade_1791910637254.jpg';

// 7. Habitaciones - Fotos exclusivas por cada habitación
import roomStandard1Img from '../assets/images/habitacion_estandar_cama_1791939588564.jpg';
import roomStandard2Img from '../assets/images/habitacion_estandar_detalle_1791939588651.jpg';
import roomTwinImg from '../assets/images/twin_room_1791910723747.jpg';
import roomDeluxeImg from '../assets/images/deluxe_room_1791910670798.jpg';
import roomSuiteImg from '../assets/images/suite_jacuzzi_1791910687025.jpg';
import juniorSuite1Img from '../assets/images/junior_suite_1.jpeg';
import juniorSuite2Img from '../assets/images/junior_suite_2.jpeg';
import juniorSuite3Img from '../assets/images/junior_suite_3.jpeg';
import twinRoom1Img from '../assets/images/habitacion_2_camas_1.jpg';
import twinRoom2Img from '../assets/images/habitacion_2_camas_2.jpg';
import twinRoom3Img from '../assets/images/habitacion_2_camas_3.jpg';
import twinRoom4Img from '../assets/images/habitacion_2_camas_4.jpg';
import estandar2Img from '../assets/images/habitacion_estandar_2.jpg';
import estandar3Img from '../assets/images/habitacion_estandar_3.jpg';
import deluxe1Img from '../assets/images/habitacion_deluxe_1.jpg';
import deluxe2Img from '../assets/images/habitacion_deluxe_2.jpg';
import deluxe3Img from '../assets/images/habitacion_deluxe_3.jpg';
import piscina1Img from '../assets/images/piscina_1.jpg';
import piscina2Img from '../assets/images/piscina_2.jpg';
import piscina3Img from '../assets/images/piscina_3.jpg';
import salonPiso1Img from '../assets/images/salon_piso_1.jpeg';
import salonPiso2Img from '../assets/images/salon_piso_2.jpeg';
import salonTerraza1Img from '../assets/images/salon_terraza_1.jpeg';
import salonTerraza2Img from '../assets/images/salon_terraza_2.jpeg';
import recepcionImg from '../assets/images/recepcion.jpeg';
import lobbyImg from '../assets/images/lobby.jpeg';
import cafeteriaImg from '../assets/images/cafeteria.jpeg';
import cafeteria2Img from '../assets/images/cafeteria_2.jpeg';
import logoImg from '../assets/images/logo_bca_hotel.png';

export const HOTEL_INFO = {
  name: 'BCA HOTEL',
  tagline: 'Tu Confort y Comodidad en el Corazón Comercial de Barrancabermeja',
  subtitle: 'Alojamiento moderno con terraza, piscina y cascada, desayuno incluido y vista hacia el río Magdalena.',
  address: 'Calle 51 # 8b - 27, Sector Comercial, Barrancabermeja - Santander, Colombia',
  phone: '+57 3133777852',
  phoneDisplay: '+57 313 377 7852',
  whatsappUrl: 'https://wa.me/573133777852',
  instagramUrl: 'https://www.instagram.com/bcahotel.bca/',
  instagramHandle: '@bcahotel.bca',
  email: 'reservas@bcahotel.com',
  emailReservas: 'reservas@bcahotel.com',
  emailGerencia: 'gerencia@bcahotel.com',
  checkIn: '3:00 PM',
  checkOut: '1:00 PM',
  reception: '24 Horas / 7 Días',
  parkingSpaces: 14,
  eventCapacity: '60 - 80 personas',
};

export const IMAGES = {
  // Secciones
  logo: logoImg,
  hero: heroImg,
  facade: heroImg, // Alias retrocompatible
  roomsHeader: twinRoom1Img,
  about: aboutLobbyImg,
  terracePool: terracePoolImg,
  pool: terracePoolImg, // Alias retrocompatible
  terraceBreakfast: terraceBreakfastImg,
  terrace: terraceBreakfastImg, // Alias retrocompatible
  terraceView: terraceViewImg,
  piscina1: piscina1Img,
  piscina2: piscina2Img,
  piscina3: piscina3Img,
  salonPiso1: salonPiso1Img,
  salonPiso2: salonPiso2Img,
  salonTerraza1: salonTerraza1Img,
  salonTerraza2: salonTerraza2Img,
  recepcion: recepcionImg,
  lobby: lobbyImg,
  cafeteria: cafeteriaImg,
  cafeteria2: cafeteria2Img,
  events: eventsImg,

  // Habitaciones individuales e independientes
  standard: roomStandard1Img,
  standardDetail: roomStandard2Img,
  twin: roomTwinImg,
  deluxe: roomDeluxeImg,
  suite: roomSuiteImg,
};

export const HIGHLIGHTS: AmenityHighlight[] = [
  {
    id: 'location',
    title: 'Ubicación Estratégica',
    description: 'En el Sector Comercial de Barrancabermeja',
    detail: 'A pasos de entidades bancarias, restaurantes, comercio y centros empresariales.',
    iconName: 'MapPin',
  },
  {
    id: 'terrace-pool',
    title: 'Piscina y Cascada en Terraza',
    description: 'Cascada en piedra natural y vista privilegiada',
    detail: 'Disfruta de la piscina y cascada con vista hacia la refinería, el Cristo Petrolero y el río Magdalena.',
    iconName: 'Waves',
  },
  {
    id: 'breakfast',
    title: 'Desayuno Incluido en Terraza',
    description: 'Servicio de desayuno en Terraza',
    detail: 'Delicioso desayuno servido en la terraza del hotel con vista hacia el río Magdalena.',
    iconName: 'Utensils',
  },
  {
    id: 'parking',
    title: 'Parqueadero Subterráneo Gratuito',
    description: '14 cupos seguros y vigilados',
    detail: 'Estacionamiento cubierto con seguridad las 24 horas sin costo adicional para huéspedes.',
    iconName: 'Car',
  },
  {
    id: 'events',
    title: 'Eventos & Salones',
    description: 'Primer piso y Terraza (60-80 pax)',
    detail: 'Espacios climatizados y al aire libre para reuniones corporativas y celebraciones especiales.',
    iconName: 'Users',
  },
];

export const ROOMS: Room[] = [
  {
    id: 'estandar',
    name: 'Habitación Estándar',
    subtitle: 'Confort y descanso para ejecutivos o parejas',
    description: 'Habitación moderna y funcional diseñada para garantizar un descanso reparador en Barrancabermeja. Cuenta con excelente climatización, Smart TV y espacio de trabajo.',
    capacity: '1 - 2 Personas',
    bedType: '1 Cama Doble',
    size: '22 m²',
    images: [estandar2Img, estandar3Img],
    features: [
      'Cama doble con lencería de calidad',
      'Baño privado con ducha y amenidades',
      'Aire acondicionado de alta eficiencia',
      'Smart TV pantalla plana',
      'Escritorio para trabajo',
      'Acceso a Terraza y Piscina con cascada',
      'Desayuno diario incluido en terraza',
      'Servicio de WiFi en todas las zonas del hotel',
      'Parqueadero subterráneo gratuito',
    ],
    idealFor: 'Viajes de negocios, parejas y estadías cortas en el centro comercial.',
  },
  {
    id: 'estandar-2-camas',
    name: 'Habitación Estándar 2 Camas',
    subtitle: 'Espacio ideal para familias o compañeros de trabajo',
    description: 'La opción perfecta cuando viajas acompañado. Ofrece dos camas independientes (una doble y una sencilla) con distribución amplia, iluminación natural y confort.',
    capacity: 'Hasta 3 Personas',
    bedType: '1 Cama Doble + 1 Cama Sencilla',
    size: '28 m²',
    highlightTag: 'Familiar & Grupos',
    images: [twinRoom1Img, twinRoom2Img, twinRoom3Img, twinRoom4Img],
    features: [
      '1 Cama doble + 1 Cama sencilla',
      'Baño privado moderno',
      'Escritorio de trabajo',
      'Smart TV con canales de entretenimiento',
      'Aire acondicionado silencioso',
      'Acceso a Terraza y Piscina con cascada',
      'Desayuno diario incluido en terraza',
      'Closet amplio y maletero',
      'Servicio de WiFi en todas las zonas del hotel',
      'Parqueadero subterráneo gratuito',
    ],
    idealFor: 'Familias, compañeros corporativos, contratistas y grupos de amigos.',
  },
  {
    id: 'deluxe',
    name: 'Habitación Deluxe',
    subtitle: 'Amplitud superior con Cama King 2x2',
    description: 'Experimenta un nivel superior de relajación en nuestra Habitación Deluxe. Equipada con una amplia cama King Size de 2x2 metros, acabados de madera cálida, iluminación tenue y ambiente de tranquilidad.',
    capacity: '1 - 2 Personas',
    bedType: '1 Cama King Size (2x2)',
    size: '34 m²',
    highlightTag: 'Más Popular',
    images: [deluxe1Img, deluxe2Img, deluxe3Img],
    features: [
      'Cama King Size 2x2 ortopédica',
      'Baño privado amplio',
      'Escritorio de trabajo con conectividad',
      'Smart TV 50"',
      'Aire acondicionado climatizado',
      'Acceso a Terraza y Piscina con cascada',
      'Desayuno diario incluido en terraza',
      'Servicio de WiFi en todas las zonas del hotel',
      'Parqueadero subterráneo gratuito',
    ],
    idealFor: 'Ejecutivos de alto nivel, estancias prolongadas y descanso prémium.',
  },
  {
    id: 'junior-suite',
    name: 'Habitación Junior Suite',
    subtitle: 'La máxima experiencia con Jacuzzi & Lounge privado',
    description: 'Nuestra suite insignia. Disfruta de una espaciosa sala de estar (área lounge), cama King Size 2x2 y un exclusivo baño privado con tina de hidromasaje Jacuzzi. Ideal para ocasiones especiales o descanso placentero.',
    capacity: '1 - 2 Personas',
    bedType: '1 Cama King Size (2x2)',
    size: '48 m²',
    highlightTag: 'Suite Exclusiva',
    images: [juniorSuite1Img, juniorSuite2Img, juniorSuite3Img],
    features: [
      'Cama King Size 2x2',
      'Tina Jacuzzi de hidromasaje en el baño',
      'Área lounge independiente con sofá',
      'Baño amplio con amenidades',
      'Smart TV 55"',
      'Aire acondicionado independiente',
      'Acceso a Terraza y Piscina con cascada',
      'Desayuno diario incluido en terraza',
      'Servicio de WiFi en todas las zonas del hotel',
      'Parqueadero subterráneo gratuito',
    ],
    idealFor: 'Noches de bodas, aniversarios, celebraciones y descanso especial.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Carlos Eduardo Mendoza',
    city: 'Bucaramanga',
    rating: 5,
    date: 'Hace 2 semanas',
    tripType: 'Viaje de Negocios',
    comment: 'Excelente hotel en el centro comercial de Barranca. La terraza del piso 8 tiene una linda vista hacia el río Magdalena y la piscina con cascada es perfecta para refrescarse. El parqueadero subterráneo da mucha tranquilidad.',
  },
  {
    id: 'rev-2',
    author: 'Marcela Gómez & Familia',
    city: 'Bogotá D.C.',
    rating: 5,
    date: 'El mes pasado',
    tripType: 'Vacaciones Familiares',
    comment: 'Nos hospedamos en la habitación de 2 camas y estuvimos súper cómodos. El aire acondicionado funciona de maravilla, el desayuno en la terraza es delicioso y la atención del personal es muy atenta y cálida. ¡100% recomendado!',
  },
  {
    id: 'rev-3',
    author: 'Ing. Javier Restrepo',
    city: 'Medellín',
    rating: 5,
    date: 'Hace 3 semanas',
    tripType: 'Viaje Corporativo',
    comment: 'Trabajo con contratistas de Ecopetrol y el BCA Hotel se convirtió en mi lugar habitual. Buen servicio de wifi en la habitación, escritorio cómodo para el portátil, silencio total para dormir y cerca a todo el comercio.',
  },
  {
    id: 'rev-4',
    author: 'Andrea Sofía Paternina',
    city: 'Barranquilla',
    rating: 5,
    date: 'Hace 1 mes',
    tripType: 'Pareja / Escapada',
    comment: 'Celebramos nuestro aniversario en la Junior Suite con Jacuzzi y nos encantó. La tina de hidromasaje, la piscina con cascada en el piso 8 y el desayuno con vista al río Magdalena hicieron una estadía perfecta.',
  },
];

export const NEARBY_PLACES = [
  { name: 'Sector Comercial de Barrancabermeja', distance: '0 metros (En el corazón)', type: 'Comercio & Bancos' },
  { name: 'Paseo de la Cultura & Parque Infantil', distance: '350 metros (4 min a pie)', type: 'Parque & Recreación' },
  { name: 'Malecón & Paseo del Río Magdalena', distance: '850 metros (3 min en auto)', type: 'Río Magdalena' },
  { name: 'Monumento El Cristo Petrolero', distance: '1.2 km (5 min en auto)', type: 'Icono de la Ciudad' },
  { name: 'Refinería Ecopetrol / Puerta del 25', distance: '1.8 km (7 min en auto)', type: 'Complejo Industrial' },
  { name: 'Aeropuerto Yariguíes (EJA)', distance: '12 km (20 min en auto)', type: 'Terminal Aérea' },
];

export const FAQS = [
  {
    q: '¿Cuál es el horario de Check-in y Check-out?',
    a: 'El Check-in inicia a partir de las 3:00 PM y el Check-out se realiza hasta la 1:00 PM. Nuestra recepción está abierta las 24 horas para atenderte en cualquier horario.',
  },
  {
    q: '¿El desayuno está incluido y dónde se sirve?',
    a: 'Sí, todas nuestras habitaciones incluyen un delicioso desayuno servido en la terraza del piso 8 con vista hacia el río Magdalena. Por ahora la terraza está habilitada exclusivamente para el servicio de desayuno (no se cuenta con servicio de almuerzo ni cena).',
  },
  {
    q: '¿Qué vista tiene la piscina y la terraza?',
    a: 'La piscina con cascada en el piso 8 cuenta con vista hacia la refinería, el Cristo Petrolero y el río Magdalena. La terraza ofrece vista hacia el río Magdalena.',
  },
  {
    q: '¿Tienen servicio de WiFi?',
    a: 'Sí, contamos con servicio de WiFi en todas las zonas del hotel disponible para todos nuestros huéspedes.',
  },
  {
    q: '¿Tienen parqueadero y qué costo tiene?',
    a: 'Contamos con parqueadero subterráneo con 14 cupos vigilados las 24 horas. Es completamente gratuito para los huéspedes del hotel.',
  },
  {
    q: '¿Cómo reservo directamente por WhatsApp?',
    a: 'Puedes hacer clic en el botón de WhatsApp en la página web o comunicarte al +57 3133777852. Nuestro equipo te confirmará disponibilidad inmediata y te guiará en los medios de pago.',
  },
];
