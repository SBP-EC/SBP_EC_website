
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Leadership } from './components/Leadership';
import { AIAdvisor } from './components/AIAdvisor';
import { NEWS_DATA, EVENTS_DATA, PARTNERS } from './constants';
import { NewsItem } from './types';

const App: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedNews(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedNews]);

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
            EST. 2025
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
            <img src="imgs/sbp_main.webp" alt="SBP Researchers and Innovators" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Leadership Subsection */}
        <Leadership />
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

      {/* SBP Entrepreneurship Resources */}
      <Section
        id="resources"
        title="Entrepreneurship Resources at SBP"
        subtitle="Practical guidance, people, and processes to support your journey from idea to startup."
        bg="creme"
      >
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl border border-[#8B0000]/10 p-6">
            <h3 className="text-lg font-bold text-[#8B0000] mb-2">Who to Talk To</h3>
            <p className="text-sm text-gray-600">
              This space will highlight key contacts at SBP and in the local ecosystem for discussing your idea,
              getting feedback, and navigating next steps.
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              Coming soon: named contacts for IP, tech transfer, and venture support.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[#8B0000]/10 p-6">
            <h3 className="text-lg font-bold text-[#8B0000] mb-2">IP, Licensing & Company Formation</h3>
            <p className="text-sm text-gray-600">
              We will collect templates, checklists, and guides on filing IP, structuring agreements, equity,
              and early company setup tailored to SBP investigators.
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              Manuals and how‑to guides will be added here.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[#8B0000]/10 p-6">
            <h3 className="text-lg font-bold text-[#8B0000] mb-2">Programs & External Resources</h3>
            <p className="text-sm text-gray-600">
              A curated list of incubators, accelerators, funding programs, and regional resources relevant to SBP
              researchers who are exploring commercialization.
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              Links and program descriptions will appear here as we build them out.
            </p>
          </div>
        </div>
      </Section>

      {/* SBP Spin-outs */}
      <Section
        id="spinouts"
        title="SBP Spin-outs"
        subtitle="Highlighting companies that trace their roots back to Sanford Burnham Prebys."
      >
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <p className="text-gray-700">
            This section will showcase known SBP spin-outs and founder stories, helping current researchers see
            what is possible beyond the lab.
          </p>
          <div className="rounded-2xl border border-dashed border-[#8B0000]/30 bg-[#FAFAF5] p-6">
            <p className="text-sm text-gray-600">
              We are compiling a list of SBP-founded or SBP-affiliated startups, including company names,
              focus areas, and founding teams.
            </p>
            <p className="text-xs text-gray-400 mt-3 italic">
              You&apos;ll soon find a gallery of SBP spin-outs here. If you know of one that should be featured,
              please reach out to the SBP-EC board.
            </p>
          </div>
        </div>
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
                <button 
                  onClick={() => news.fullContent ? setSelectedNews(news) : news.url && window.open(news.url, '_blank')}
                  className="text-[#8B0000] text-sm font-bold hover:underline"
                >
                  Read More <span className="sr-only">about {news.title}</span>→
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Calendar & Events */}
      <Section
        id="events"
        title="Event Calendar"
        subtitle="A concise, at-a-glance view of upcoming SBP-EC programming. Add new events by updating the events list in the site content."
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                className="group relative flex bg-[#FAFAF5] rounded-3xl overflow-hidden hover:bg-white border border-[#8B0000]/5 transition-all"
              >
                <div className="w-28 md:w-32 bg-[#8B0000] text-white p-5 flex flex-col justify-center items-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold leading-none mt-1">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-xs mt-2 opacity-80">
                    {event.time}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 group-hover:text-[#8B0000] transition-colors mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 text-xs md:text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                className="w-32 md:w-40 h-auto object-contain" 
              />
            </a>
          ))}
        </div>
      </Section>


      {/* News Modal */}
      {selectedNews && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedNews(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-gray-100 flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#8B0000] uppercase tracking-wider block mb-1">
                  {selectedNews.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedNews.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">{selectedNews.date}</p>
              </div>
              <button 
                onClick={() => setSelectedNews(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedNews.fullContent || selectedNews.excerpt}
              </div>

              {selectedNews.url && (
                <div className="mt-10 p-6 bg-[#FAFAF5] rounded-2xl border border-[#8B0000]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Take Action</h4>
                    <p className="text-sm text-gray-600">Join our community or share your thoughts.</p>
                  </div>
                  <a 
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-3 bg-[#8B0000] text-white font-bold rounded-full hover:bg-[#660000] transition-colors text-center shadow-lg shadow-[#8B0000]/20"
                  >
                    {selectedNews.ctaText || 'Visit Link'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mailing List */}
      <Section
        id="mailing-list"
        title="Stay in the Loop"
        subtitle="Sign up to receive SBP-EC event invitations, opportunities, and entrepreneurship resources."
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-gray-700">
            Join our mailing list to hear about new workshops, visiting speakers, and resources as soon as they are
            announced.
          </p>
          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=IycWC0UA3kewaZ8aeqlVoVPOOpzavk5MpbeSQf96bsVUMTFCNzJJRlFCVjI5N1pDS0hEQTIxQ0RBVi4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#8B0000] text-white font-semibold text-sm md:text-base shadow-lg shadow-[#8B0000]/30 hover:bg-[#660000] transition-colors"
          >
            Sign Up for the SBP-EC Mailing List
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold text-[#8B0000] font-['Playfair_Display']">
              SBP<span className="text-gray-900 font-normal">.EC</span>
            </span>
            <p className="text-sm text-gray-500 mt-2">© 2025 Sanford Burnham Prebys Entrepreneurship Club.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#8B0000]">Twitter</a>
            <a
              href="https://www.linkedin.com/company/sbp-enterpreneurship-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8B0000]"
            >
              LinkedIn
            </a>
            <a href="mailto:sbp-ec-board@sbpdiscovery.org" className="text-gray-400 hover:text-[#8B0000]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
