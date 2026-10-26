export interface Room {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  capacity: string;
  bedType: string;
  size: string;
  priceEstimate?: string;
  images: string[];
  features: string[];
  highlightTag?: string;
  idealFor: string;
}

export interface AmenityHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
}
