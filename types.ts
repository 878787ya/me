export interface Project {
  id: string;
  title: string;
  category: 'App' | 'Web' | 'Interface';
  description: string;
  tags: string[];
  images: string[];
  features?: string[];
  link?: string;
}

export type ThemeColor = 'orange' | 'purple' | 'blue' | 'dark';

export interface ModelData {
  id: string;
  src: string;
  thumbnail: string;
  color: string;
  // New fields
  title: string;
  description: string;
  software: string[];
}