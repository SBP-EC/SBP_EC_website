
import React from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { AIAdvisor } from './components/AIAdvisor';
import { NEWS_DATA, EVENTS_DATA, PARTNERS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-[#8B0000]/5">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#8B0000] blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-[#8B0000] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#8B0000] uppercase bg-[#8B0000]/5 rounded-full">
            EST. 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Bridging the Gap Between <br />
            <span className="text-[#8B0000]">Science</span> & <span className="italic font-serif">Market</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Empowering Sanford Burnham Prebys researchers to transform breakthrough biomedical discoveries into world-changing companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="px-8 py-4 bg-[#8B0000] text-white font-bold rounded-full hover:bg-[#660000] transition-all shadow-xl shadow-[#8B0000]/20">
              Join Our Next Event
            </a>
            <a href="#who-we-are" className="px-8 py-4 bg-white text-[#8B0000] border border-[#8B0000]/20 font-bold rounded-full hover:bg-gray-50 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <Section id="who-we-are" title="Who We Are" subtitle="We are a community of scientists, innovators, and future founders." bg="creme">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The <strong>Sanford Burnham Prebys Entrepreneurship Club (SBP-EC)</strong> is a student and postdoc-led organization dedicated to fostering an entrepreneurial mindset within our research community.
            </p>
            <p>
              Located in the heart of San Diego's biotech hub, we believe that the brilliant science happening at SBP has the potential to solve the world's most pressing medical challenges.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 border-l-4 border-[#8B0000] bg-white">
                <h4 className="font-bold text-[#8B0000]">Mission</h4>
                <p className="text-sm">Educating scientists on the fundamentals of business and commercialization.</p>
              </div>
              <div className="p-4 border-l-4 border-[#8B0000] bg-white">
                <h4 className="font-bold text-[#8B0000]">Vision</h4>
                <p className="text-sm">Building a thriving ecosystem where research labs are catalysts for startups.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/sbp-ec/800/600" alt="SBP Researchers" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section id="what-we-do" title="What We Do">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Workshops', desc: 'Hands-on sessions covering IP, regulatory pathways, and business model canvas.', icon: '💡' },
            { title: 'Networking', desc: 'Connecting our members with local VCs, mentors, and biotech executives.', icon: '🤝' },
            { title: 'Mentorship', desc: 'Pairing prospective founders with experienced serial entrepreneurs.', icon: '🏔️' }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#FAFAF5] border border-transparent hover:border-[#8B0000]/10 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Gemini Integration */}
        <AIAdvisor />
      </Section>

      {/* News & Announcements */}
      <Section id="news" title="News & Announcements" bg="creme">
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_DATA.map((news) => (
            <article key={news.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-[#8B0000] uppercase tracking-wider mb-2">{news.category}</div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{news.excerpt}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="text-xs text-gray-400">{news.date}</span>
                <button className="text-[#8B0000] text-sm font-bold hover:underline">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Calendar & Events */}
      <Section id="events" title="Upcoming Events">
        <div className="max-w-4xl mx-auto space-y-6">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} className="group relative flex flex-col md:flex-row bg-[#FAFAF5] rounded-3xl overflow-hidden hover:bg-white border border-[#8B0000]/5 transition-all">
              <div className="md:w-48 bg-[#8B0000] text-white p-8 flex flex-col justify-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">{event.date.split(' ')[0]}</span>
                <span className="text-4xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors">{event.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold rounded-full">{event.time}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" title="Partners & Affiliates" bg="creme">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
          {PARTNERS.map((partner) => (
            <a 
              key={partner.name} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain" 
              />
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold text-[#8B0000] font-['Playfair_Display']">
              SBP<span className="text-gray-900 font-normal">.EC</span>
            </span>
            <p className="text-sm text-gray-500 mt-2">© 2024 Sanford Burnham Prebys Entrepreneurship Club.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#8B0000]">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-[#8B0000]">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#8B0000]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
