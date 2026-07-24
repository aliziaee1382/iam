export type ThemeMode = 'dark' | 'light';

export type PageSection = 'home' | 'about' | 'services' | 'masterpieces' | 'portfolio' | 'contact';

export type ProjectCategory = 'all' | 'web' | 'bot' | 'wordpress' | 'graphic';

export interface CustomContact {
  id: string;
  title: string;
  value: string;
  link?: string;
  iconName?: string;
}

export interface PersonalInfo {
  name: string;
  brand: string;
  tagline: string;
  phone: string;
  telegram: string;
  telegramUrl: string;
  instagram: string;
  instagramUrl: string;
  location: string;
  experienceYears: string;
  completedProjects: string;
  satisfactionRate: string;
  aboutBio: string;
  avatarImage?: string;
  statusText?: string;
  customContacts?: CustomContact[];
}

export interface Masterpiece {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  image: string;
  demoUrl?: string;
  demoBtnText?: string;
  orderBtnText?: string;
  orderBtnUrl?: string;
  technologies: string[];
  keyInnovations: string[];
  clientName?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryName: string;
  description: string;
  fullDetails: string;
  features: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  telegramLink?: string;
  clientName?: string;
  rating?: number;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  tag: string;
  basePriceText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  projectType: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface Skill {
  name: string;
  level: number;
  category: 'web' | 'bot' | 'wordpress' | 'design';
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OrderMessage {
  id: string;
  name: string;
  contactHandle: string;
  serviceNeeded: string;
  message: string;
  createdAt: string;
  read?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          autoplay?: boolean;
          loop?: boolean;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
}

