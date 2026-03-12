import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  { name: 'Cape Town', description: 'Coastlines, wine lands, and mountain grandeur.', image: '/images/destinations_feature.webp' },
  { name: 'Durban', description: 'Warm seas, bold flavours, and laid-back luxury.', image: '/images/dest_durban.webp' },
  { name: 'Kruger & Safari', description: 'Wildlife encounters with world-class guiding.', image: '/images/dest_kruger.webp' },
  { name: 'Mediterranean Cruises', description: 'Coastal cities, culture, and calm open waters.', image: '/images/cruise_mediterranean.webp' },
  { name: 'Caribbean Cruises', description: 'Island-hopping with impeccable MSC service.', image: '/images/cruise_caribbean.webp' },
];

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([labelRef.current, headingRef.current], { y: '6vh', opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1,
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 50%', scrub: true },
      });
      const listItems = listRef.current?.querySelectorAll('.destination-item');
      listItems?.forEach((item) => {
        gsap.fromTo(item, { x: '-8vw', opacity: 0 }, {
          x: 0, opacity: 1,
          scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 60%', scrub: true },
        });
      });
      gsap.fromTo(imageRef.current, { x: '10vw', scale: 1.04, opacity: 0 }, {
        x: 0, scale: 1, opacity: 1,
        scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 30%', scrub: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="destinations" ref={sectionRef} className="relative w-full bg-[#0B0B0D] py-[10vh] z-[105]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="hairline w-[6vw]" />
            <span ref={labelRef} className="label-text">Destinations</span>
          </div>
          <h2 ref={headingRef} className="font-serif text-[clamp(32px,4vw,58px)] font-semibold text-[#F4F1EA] leading-[1.0]">
            Where do you want to go?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* List */}
          <div ref={listRef} className="space-y-2">
            {destinations.map((dest, index) => (
              <div key={dest.name}
                className="destination-item group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}>
                <div className="flex items-start justify-between py-5 border-b border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37] transition-colors duration-300">
                  <div>
                    <h3 className="font-serif text-[clamp(18px,2vw,26px)] font-semibold text-[#F4F1EA] group-hover:text-[#D4AF37] transition-colors duration-300 mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-[#B8B2A6] text-sm max-w-[80%]">{dest.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 mt-2 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Featured image */}
          <div ref={imageRef} className="relative h-[50vh] lg:h-[62vh] overflow-hidden">
            {destinations.map((dest, index) => (
              <div key={dest.name} className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/50 to-transparent" />
              </div>
            ))}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="label-text text-[10px]">Featured</span>
              <h4 className="font-serif text-xl text-[#F4F1EA] mt-1">{destinations[activeIndex].name}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
