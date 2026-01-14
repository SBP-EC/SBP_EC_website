
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
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
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
