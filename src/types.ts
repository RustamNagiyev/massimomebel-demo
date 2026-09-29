export type Language = 'az' | 'en' | 'ru';

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  nameRu: string;
  description: string;
  subtitle: string;
  image: string;
  itemCount: string;
  aspectClass?: string;
  highlights: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  description: string;
  material: string;
  dimensions: string;
  origin: string;
}

export interface ShowroomEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  district: string;
  project: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
}
