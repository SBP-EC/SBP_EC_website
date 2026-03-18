
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Leadership } from './components/Leadership';
import { AIAdvisor } from './components/AIAdvisor';
import { NEWS_DATA, EVENTS_DATA, PARTNERS } from './constants';
import { NewsItem, EventItem } from './types';

const App: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [eventCarouselIndex, setEventCarouselIndex] = useState(0);

  // Close modals on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedNews(null);
        setSelectedEvent(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when a modal is open
  useEffect(() => {
    if (selectedNews || selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedNews, selectedEvent]);

  const eventsCount = EVENTS_DATA.length;
  const canScrollLeft = eventCarouselIndex > 0;
  const canScrollRight = eventCarouselIndex < Math.max(0, eventsCount - 1);
  const carouselTranslate = eventsCount > 0 ? (eventCarouselIndex / eventsCount) * 100 : 0;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-[#5C1620]/5">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#5C1620] blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-[#5C1620] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#5C1620] uppercase bg-[#5C1620]/5 rounded-full">
            EST. 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Bridging the Gap Between <br />
            <span className="text-[#5C1620]">Science</span> & <span className="italic">Business</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Empowering Sanford Burnham Prebys researchers to transform breakthrough biomedical discoveries into world-changing companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="px-8 py-4 bg-[#5C1620] text-white font-bold rounded-full hover:bg-[#4A1018] transition-all shadow-xl shadow-[#5C1620]/20">
              Join Our Next Event
            </a>
            <a href="#who-we-are" className="px-8 py-4 bg-white text-[#5C1620] border border-[#5C1620]/20 font-bold rounded-full hover:bg-gray-50 transition-all">
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
              <div className="p-4 border-l-4 border-[#5C1620] bg-white">
                <h4 className="font-bold text-[#5C1620]">Mission</h4>
                <p className="text-sm">Educating scientists on the fundamentals of business and commercialization.</p>
              </div>
              <div className="p-4 border-l-4 border-[#5C1620] bg-white">
                <h4 className="font-bold text-[#5C1620]">Vision</h4>
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
            <div key={i} className="p-8 rounded-2xl bg-[#FAFAF5] border border-transparent hover:border-[#5C1620]/10 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#5C1620] mb-3">{item.title}</h3>
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
          <div className="bg-white rounded-2xl border border-[#5C1620]/10 p-6">
            <h3 className="text-lg font-bold text-[#5C1620] mb-2">Who to Talk To</h3>
            <p className="text-sm text-gray-600">
              This space will highlight key contacts at SBP and in the local ecosystem for discussing your idea,
              getting feedback, and navigating next steps.
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              Coming soon: named contacts for IP, tech transfer, and venture support.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[#5C1620]/10 p-6">
            <h3 className="text-lg font-bold text-[#5C1620] mb-2">IP, Licensing & Company Formation</h3>
            <p className="text-sm text-gray-600">
              We will collect templates, checklists, and guides on filing IP, structuring agreements, equity,
              and early company setup tailored to SBP investigators.
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              Manuals and how‑to guides will be added here.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[#5C1620]/10 p-6">
            <h3 className="text-lg font-bold text-[#5C1620] mb-2">Programs & External Resources</h3>
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
        <div className="max-w-2xl mx-auto rounded-2xl border border-dashed border-[#5C1620]/30 bg-[#FAFAF5] p-6 mt-2">
          <p className="text-base text-gray-600 italic">
            We are compiling a list of SBP-founded or SBP-affiliated startups, including company names,
            focus areas, and founding teams. If you know of one that should be featured,
            please reach out to the SBP-EC board.
          </p>
        </div>
      </Section>

      {/* News & Announcements */}
      <Section id="news" title="News & Announcements" bg="creme">
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_DATA.map((news) => (
            <article key={news.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-[#5C1620] uppercase tracking-wider mb-2">{news.category}</div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{news.excerpt}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="text-xs text-gray-400">{news.date}</span>
                <button 
                  onClick={() => news.fullContent ? setSelectedNews(news) : news.url && window.open(news.url, '_blank')}
                  className="text-[#5C1620] text-sm font-bold hover:underline"
                >
                  Read More <span className="sr-only">about {news.title}</span>→
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Calendar & Events — Carousel (earliest left, later events on the right) */}
      <Section
        id="events"
        title="Event Calendar"
        subtitle="Review the upcoming SBP-EC programming and join us for our events!"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative flex items-center gap-4">
            <button
              type="button"
              onClick={() => setEventCarouselIndex((i) => Math.max(0, i - 1))}
              disabled={!canScrollLeft}
              aria-label="Previous event"
              className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5C1620] text-white flex items-center justify-center shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4A1018] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 overflow-hidden min-w-0">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  width: `${eventsCount * 100}%`,
                  transform: `translateX(-${carouselTranslate}%)`,
                }}
              >
                {EVENTS_DATA.map((event) => (
                  <div
                    key={event.id}
                    className="flex-shrink-0 px-1"
                    style={{ width: `${100 / eventsCount}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left group relative flex flex-col bg-[#FAFAF5] rounded-3xl overflow-hidden hover:bg-white border border-[#5C1620]/5 hover:border-[#5C1620]/20 transition-all shadow-sm hover:shadow-lg"
                    >
                      {event.flyerImage && (
                        <div className="w-full h-24 sm:h-60 flex-shrink-0 overflow-hidden bg-gray-100">
                          <img
                            src={event.flyerImage}
                            alt=""
                            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex">
                        <div className="w-24 sm:w-28 bg-[#5C1620] text-white p-4 flex flex-col justify-center items-center flex-shrink-0">
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-80">
                            {event.date.split(' ')[0]}
                          </span>
                          <span className="text-2xl sm:text-3xl font-bold leading-none mt-1">
                            {event.date.split(' ')[1]?.replace(',', '') ?? event.date}
                          </span>
                          <span className="text-[10px] sm:text-xs mt-2 opacity-80 hidden sm:block">
                            {event.time}
                          </span>
                        </div>
                        <div className="p-4 sm:p-6 flex-grow flex flex-col min-w-0">
                          <h3 className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-[#5C1620] transition-colors mb-1 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 flex-grow">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mt-2">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="truncate">{event.location}</span>
                          </div>
                          {event.url && (
                            <span className="inline-block mt-2 text-xs font-semibold text-[#5C1620]">
                              RSVP →
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setEventCarouselIndex((i) => Math.min(eventsCount - 1, i + 1))}
              disabled={!canScrollRight}
              aria-label="Next event"
              className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5C1620] text-white flex items-center justify-center shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4A1018] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {EVENTS_DATA.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setEventCarouselIndex(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === eventCarouselIndex ? 'bg-[#5C1620] scale-125' : 'bg-[#5C1620]/30'}`}
              />
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


      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-6 border-b border-gray-100 flex justify-between items-start z-10">
              <div>
                <h2 id="event-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 pr-8">
                  {selectedEvent.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedEvent.date} · {selectedEvent.time}
                </p>
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedEvent.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900 absolute top-6 right-6"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 sm:px-8 pb-8">
              {selectedEvent.flyerImage && (
                <div className="rounded-2xl overflow-hidden border border-gray-100 mb-6">
                  <img
                    src={selectedEvent.flyerImage}
                    alt={`${selectedEvent.title} flyer`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedEvent.description}
              </p>
              {selectedEvent.url && (
                <div className="mt-8">
                  <a
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#5C1620] text-white font-semibold shadow-lg shadow-[#5C1620]/20 hover:bg-[#4A1018] transition-colors"
                  >
                    RSVP for this event
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
                <span className="text-xs font-bold text-[#5C1620] uppercase tracking-wider block mb-1">
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
                <div className="mt-10 p-6 bg-[#FAFAF5] rounded-2xl border border-[#5C1620]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Take Action</h4>
                    <p className="text-sm text-gray-600">Join our community or share your thoughts.</p>
                  </div>
                  <a 
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-3 bg-[#5C1620] text-white font-bold rounded-full hover:bg-[#4A1018] transition-colors text-center shadow-lg shadow-[#5C1620]/20"
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
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#5C1620] text-white font-semibold text-sm md:text-base shadow-lg shadow-[#5C1620]/30 hover:bg-[#4A1018] transition-colors"
          >
            Sign Up for the SBP-EC Mailing List
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold text-[#5C1620]">
              SBP<span className="text-gray-900 font-normal">.EC</span>
            </span>
            <p className="text-sm text-gray-500 mt-2">© 2025 Sanford Burnham Prebys Entrepreneurship Club.</p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/company/sbp-enterpreneurship-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5C1620]"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9.005h3.414v1.561h.046c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.263 2.369 4.263 5.455v6.281zM5.337 7.433c-1.084 0-1.959-.87-1.959-1.938 0-1.077.875-1.947 1.959-1.947 1.09 0 1.965.87 1.965 1.947 0 1.068-.875 1.938-1.965 1.938zM6.915 20.452H3.759V9.005h3.156v11.447z" />
                </svg>
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:sbpec_exec@sbpdiscovery.org"
              className="text-gray-400 hover:text-[#5C1620]"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M4 7l8 6 8-6" />
                  <path d="M4 7h16v12H4z" />
                </svg>
                Email
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
