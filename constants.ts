
import { NavItem, NewsItem, EventItem, Partner, BoardMember } from './types';

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
    id: 'n-nucleate-101',
    title: 'Nucleate SD: Venture Creation 101 & Biotech Panel Series',
    date: 'Jan 28, 2026',
    excerpt: 'Nucleate SD is hosting a Venture Creation 101 panel followed by a networking session on January 28th. Learn about ideation, fundraising, and the current biotech market.',
    category: 'Announcement',
    url: 'https://luma.com/z586dik0',
    ctaText: 'Register via Luma',
    fullContent: `Nucleate SD is hosting a Venture Creation 101 panel followed by a networking session on January 28th at 6pm, at the Kavli Auditorium in Tata Hall. 

Our panelists will share their experiences on the venture creation process, covering ideation, regulatory frameworks, fundraising and the current biotech market.

As part of a broader mission to make biotech education more accessible to our SD community, Nucleate is hosting several panels this year. Below are the upcoming sessions and sign-up links:

• Venture Creation 101 (Jan 28): https://luma.com/z586dik0
• AI x Biotech: https://luma.com/w8r5u56e
• Licensing and Tech Transfer: https://luma.com/om67qa2h
• Market Identification: https://luma.com/pp1jweyd
• Fundraising and VC 101: https://luma.com/u1yefy8x
• Story Telling and Pitching: https://luma.com/ihm60xe9

Note: Dates for panels 3-6 are tentative and will be updated once finalized.`
  },
  {
    id: 'n-interest-form',
    title: 'Shape the Future of SBP-EC: Join Our Community',
    date: 'Jan 15, 2026',
    excerpt: 'We are seeking to gauge interest among SBP postdocs and students. Share your thoughts and stay updated on our growth.',
    category: 'Announcement',
    url: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=IycWC0UA3kewaZ8aeqlVoVPOOpzavk5MpbeSQf96bsVUMTFCNzJJRlFCVjI5N1pDS0hEQTIxQ0RBVi4u&route=shorturl',
    ctaText: 'Fill Interest Form',
    fullContent: `At this early stage, we are seeking to gauge interest among SBP postdocs and graduate students. Your input will directly shape the scope, programming, and focus areas of the club as it grows and develops.

If anything above is of interest to you, or if there are specific topics you would like to see covered, please fill out our interest form to be included in future communications and share your thoughts with us.`
  },
  {
    id: 'n-logo-contest',
    title: 'Call for Designers: SBP-EC Logo Contest',
    date: 'Jan 15, 2026',
    excerpt: 'We are looking for a visual identity! Help us design the official SBP-EC logo and leave your mark on the club.',
    category: 'Announcement',
    url: 'https://forms.cloud.microsoft/r/rfJnUvGFEW',
    ctaText: 'Submit Your Design',
    fullContent: `We are officially opening the floor for logo suggestions! As a newly formed club, we want our visual identity to reflect the intersection of breakthrough science and entrepreneurial spirit at Sanford Burnham Prebys.

Whether you are a graphic design pro or have a great napkin sketch, we want to see your ideas. The winning design will become the official face of SBP-EC.

Submit your designs or conceptual sketches via the submission link below. We can't wait to see your creativity!`
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'e1',
    title: 'SBP-EC Inaugural Meeting',
    date: 'Feb 25, 2026',
    time: '12:00 AM - 1:00 PM',
    location: 'Fishman Auditorium, SBP',
    description: 'Join us for the inaugural meeting of the SBP Entrepreneurial Club (SBP-EC)! Meet fellow members, learn about our mission, and explore upcoming events and initiatives.',
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
