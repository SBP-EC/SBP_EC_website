
import { NavItem, NewsItem, EventItem, Partner } from './types';

export const COLORS = {
  primary: '#8B0000', // Dark Red
  secondary: '#FAFAF5', // Creme
  text: '#1A1A1A',
  white: '#FFFFFF'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'News', href: '#news' },
  { label: 'Events', href: '#events' },
  { label: 'Partners', href: '#partners' },
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Erik Hultenius',
    role: 'Co-founder, President',
    image: 'imgs/headshots/erik_hultenius.jpg'
  },
  {
    name: 'Anna Chechenina',
    role: 'Co-founder, External Affairs',
    image: 'imgs/headshots/anna_chechenina.jpg'
  },
  {
    name: 'Alisha Kirkland',
    role: 'Co-founder, Internal Affairs',
    image: 'imgs/headshots/alisha_kirkland.jpg'
  },
  {
    name: 'Chris Larson',
    role: 'Faculty Advisor',
    image: 'imgs/headshots/chris_larson.jpg'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'SBP-EC Welcomes New Board Members for 2025-2026',
    date: 'Oct 15, 2025',
    excerpt: 'We are thrilled to introduce the visionary researchers leading our club into the new academic year.',
    category: 'Announcement'
  },
  {
    id: '2',
    title: 'Collaborative Workshop with Nucleate Announced',
    date: 'Oct 10, 2025',
    excerpt: 'Join us for an intensive session on translating lab discoveries into viable biotech startups.',
    category: 'Industry'
  },
  {
    id: '3',
    title: 'Member Startup Secures Seed Funding',
    date: 'Sep 28, 2025',
    excerpt: 'A huge congratulations to the team at BioPath for their $2M seed round achievement.',
    category: 'Success Story'
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'e1',
    title: 'The Art of the Biotech Pitch',
    date: 'Nov 12, 2025',
    time: '4:00 PM - 6:00 PM',
    location: 'Building 1, Auditorium A',
    description: 'Learn how to present your scientific data to venture capitalists.'
  },
  {
    id: 'e2',
    title: 'Monthly Networking Mixer',
    date: 'Dec 05, 2025',
    time: '5:30 PM - 7:30 PM',
    location: 'SBP Outdoor Terrace',
    description: 'Connect with fellow scientists and local industry professionals.'
  },
  {
    id: 'e3',
    title: 'Intellectual Property for Postdocs',
    date: 'Jan 18, 2025',
    time: '12:00 PM - 1:30 PM',
    location: 'Virtual Zoom Session',
    description: 'A deep dive into patents, licensing, and protecting your discoveries.'
  }
];

export const PARTNERS: Partner[] = [
  {
    name: 'Nucleate',
    logo: 'imgs/nucleate.png',
    url: 'https://nucleate.org'
  },
  {
    name: 'Sanford Burnham Prebys',
    logo: 'imgs/sbp.jpg',
    url: 'https://sbpdiscovery.org'
  },
  {
    name: 'SBP-SN',
    logo: 'imgs/sbpsn.jpg',
    url: 'https://www.linkedin.com/in/sanfordburnhamprebyssn/'
  }
];
