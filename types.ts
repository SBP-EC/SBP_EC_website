
export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: 'Announcement' | 'Industry' | 'Success Story';
  url?: string;
  fullContent?: string;
  ctaText?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  url?: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface BoardMember {
  name: string;
  role: string;
  image: string;
}
