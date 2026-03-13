import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cruises = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 30%', scrub: true },
      });
      tl.fromTo([labelRef.current, headingRef.current], { y: '8vh', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 })
        .fromTo(bodyRef.current, { y: '6vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.15)
        .fromTo(ctaRef.current, { y: '4vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.25)
        .fromTo(imageRef.current, { x: '10vw', scale: 1.04, opacity: 0 }, { x: 0, scale: 1, opacity: 1 }, 0.05);
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cruises" ref={sectionRef} className="relative w-full bg-[#141419] py-[10vh] z-[106]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* MSC Logo Panel */}
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="relative h-[45vh] lg:h-[60vh] overflow-hidden bg-white flex items-center justify-center border border-[rgba(212,175,55,0.15)]">
              <img src="/images/msc_logo.webp" alt="MSC Cruises Partner"
                className="w-[70%] max-w-[380px] object-contain" />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="hairline w-[3vw]" />
              <span className="label-text text-[10px]">Official Cruise Partner</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="hairline w-[6vw]" />
              <span ref={labelRef} className="label-text">Cruise Holidays</span>
            </div>

            <h2 ref={headingRef} className="font-serif text-[clamp(30px,3.8vw,54px)] font-semibold text-[#F4F1EA] leading-[1.0] mb-6">
              Sail the world in style.
            </h2>

            <p ref={bodyRef} className="text-[#B8B2A6] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-10">
              From the turquoise waters of the Mediterranean to the vibrant islands of the Caribbean, we bring you the finest MSC cruise experiences. As your dedicated travel partner, we handle every detail - from cabin selection and shore excursions to flights and transfers - so your voyage begins the moment you decide to go.
            </p>

            {/* Routes */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Mediterranean', 'Caribbean', 'South Africa Coastal', 'Indian Ocean'].map((route) => (
                <div key={route} className="flex items-center gap-3 py-3 border-b border-[rgba(212,175,55,0.15)]">
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                  <span className="text-[#F4F1EA] text-sm">{route}</span>
                </div>
              ))}
            </div>

            <button ref={ctaRef} onClick={() => document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary">
              Inquire About Cruises
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cruises;
