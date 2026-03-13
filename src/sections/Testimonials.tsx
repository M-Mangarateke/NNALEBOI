import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'From flights to accommodation, everything was seamless. I didn\'t have to worry about a single detail - they handled it all.',
    author: 'I. Mokobyane',
    trip: 'MSC Cruise · February 2026',
  },
  {
    quote: 'They understood exactly what we wanted for our honeymoon and made it even better than we imagined. Truly exceptional.',
    author: 'L. & S. Nkosi',
    trip: 'Honeymoon Package',
  },
  {
    quote: 'Thank you to NNALEBOI Travel for organising such a wonderful trip. Everything was perfect. And a big thank you to MSC Opera - the hospitality was absolutely outstanding. We could not have asked for more.',
    author: 'Pamela',
    trip: 'MSC Opera · 2026',
  },
];

const Testimonials = () => {
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
        gsap.fromTo(card, { y: '8vh', opacity: 0 }, {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 60%', scrub: window.innerWidth < 1024 ? 1.5 : true },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#0B0B0D] py-[10vh] z-[108]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hairline w-[6vw]" />
            <span ref={labelRef} className="label-text">Client Stories</span>
            <div className="hairline w-[6vw]" />
          </div>
          <h2 ref={headingRef} className="font-serif text-[clamp(30px,4vw,56px)] font-semibold text-[#F4F1EA] leading-[1.0]">
            What travelers say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[90vw] mx-auto">
          {testimonials.map((t, index) => (
            <div key={t.author}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative p-7 lg:p-8 border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.55)] transition-colors duration-400 flex flex-col">
              <Quote size={22} className="text-[#D4AF37] mb-5 opacity-60" />
              <p className="text-[#F4F1EA] text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-8 flex-1 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-[#D4AF37] text-sm font-medium">{t.author}</p>
                <p className="text-[#B8B2A6] text-xs mt-1">{t.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
