import { ReactNode, ComponentType } from 'react';

export interface Experience {
  id: string;
  start: string;
  end: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
  stats?: {
    downloads?: string;
    stars?: string;
  }
}

type IconProps = { className?: string; size?: number | string };

export interface SocialLink {
  name: string;
  url: string;
  icon: ComponentType<IconProps>;
}

export interface Skill {
  name: string;
  icon: ComponentType<IconProps>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}