import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Holiday Package Planning', description: 'Fully custom itineraries built around your dates, preferences, and dreams.', image: '/images/service_packages.webp' },
  { title: 'Flights & Accommodation', description: 'Competitive fares and handpicked stays - local and international.', image: '/images/service_flights.webp' },
  { title: 'Honeymoon Experiences', description: 'Romantic escapes crafted with total privacy and personal attention.', image: '/images/service_honeymoon.webp' },
];

const additionalServices = [
  'Cruise Holidays',
  'Group Travel',
  'Travel Advice',
  'Destination Guidance',
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([labelRef.current, headingRef.current], { y: '6vh', opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1,
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 50%', scrub: window.innerWidth < 1024 ? 1.5 : true },
      });
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card, { y: '10vh', scale: 0.98, opacity: 0 }, {
          y: 0, scale: 1, opacity: 1,
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 55%', scrub: window.innerWidth < 1024 ? 1.5 : true },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative w-full bg-[#0B0B0D] py-[10vh] z-[104]">
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hairline w-[6vw]" />
            <span ref={labelRef} className="label-text">What We Do</span>
            <div className="hairline w-[6vw]" />
          </div>
          <h2 ref={headingRef} className="font-serif text-[clamp(32px,4vw,58px)] font-semibold text-[#F4F1EA] leading-[1.0] max-w-[54vw] mx-auto">
            Everything you need, in one place.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-[3vw] max-w-[90vw] mx-auto">
          {services.map((service, index) => (
            <div key={service.title} ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative h-[46vh] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 overflow-hidden">
                <img src={service.image} alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/85 via-[#0B0B0D]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#F4F1EA] mb-2">{service.title}</h3>
                <p className="text-[#B8B2A6] text-sm mb-4 max-w-[90%]">{service.description}</p>
                <a href="#inquiry" onClick={(e) => { e.preventDefault(); document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 text-[#D4AF37] text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Inquire <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[90vw] mx-auto">
          {additionalServices.map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 border border-[rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-colors duration-300 group cursor-default">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
              <span className="text-[#F4F1EA] text-sm tracking-wider group-hover:text-[#D4AF37] transition-colors duration-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
