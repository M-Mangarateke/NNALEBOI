import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: '+=130%', pin: true, scrub: 0.5 },
      });

      scrollTl
        .fromTo(leftCardRef.current, { x: '-60vw', rotate: -3, scale: 0.92, opacity: 0 }, { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' }, 0)
        .fromTo(rightCardRef.current, { x: '60vw', rotate: 3, scale: 0.92, opacity: 0 }, { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' }, 0.06)
        .fromTo(headlineRef.current, { y: '18vh', scale: 0.96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, ease: 'none' }, 0.1)
        .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0.08)
        .fromTo(labelRef.current, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0.12)
        .fromTo(ctaRef.current, { x: '10vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0.16)
        .fromTo(bgRef.current, { scale: 1.08, opacity: 0.6 }, { scale: 1, opacity: 1, ease: 'none' }, 0)
        // Exit
        .to(headlineRef.current, { y: '-14vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(leftCardRef.current, { x: '-40vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(rightCardRef.current, { x: '40vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(ctaRef.current, { x: '10vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to([labelRef.current, lineRef.current], { y: '-6vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(bgRef.current, { scale: 1.05, ease: 'none' }, 0.7);
    }, section);
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden z-[102]">
      <div ref={bgRef} className="absolute inset-0 z-[1]"
        style={{ backgroundImage: 'url(/images/dest_kruger.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#0B0B0D]/55" />
      </div>

      {/* Left card - Cape Town */}
      <div ref={leftCardRef} className="absolute left-[6vw] top-1/2 -translate-y-1/2 w-[26vw] h-[32vh] z-[2] overflow-hidden shadow-2xl hidden lg:block">
        <img src="/images/destinations_feature.webp" alt="Cape Town" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/40 to-transparent" />
        <span className="absolute bottom-4 left-4 label-text text-[10px]">Cape Town</span>
      </div>

      {/* Right card - Durban */}
      <div ref={rightCardRef} className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[26vw] h-[32vh] z-[2] overflow-hidden shadow-2xl hidden lg:block">
        <img src="/images/dest_durban.webp" alt="Durban" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/40 to-transparent" />
        <span className="absolute bottom-4 left-4 label-text text-[10px]">Durban</span>
      </div>

      {/* Centre headline */}
      <div ref={headlineRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86vw] lg:w-[46vw] text-center z-[3] px-4 lg:px-0">
        <h2 className="font-serif text-[clamp(34px,8vw,72px)] font-semibold text-[#F4F1EA] leading-[1.05] tracking-wide">
          The world is waiting.
        </h2>
        <p className="mt-6 text-[clamp(15px,1.2vw,17px)] text-[#B8B2A6] leading-relaxed max-w-[80vw] lg:max-w-[36vw] mx-auto">
          Bespoke itineraries, curated stays, and seamless journeys - crafted around you.
        </p>
      </div>

      {/* Label - top left */}
      <div className="absolute left-[6vw] top-[10vh] z-[3] flex items-center gap-4">
        <span ref={labelRef} className="label-text">Discover</span>
        <div ref={lineRef} className="hairline w-[10vw] origin-left" />
      </div>

      {/* CTA - bottom right */}
      <div className="absolute right-[6vw] bottom-[10vh] z-[3]">
        <button ref={ctaRef} onClick={() => document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary">
          Explore Destinations
        </button>
      </div>
    </section>
  );
};

export default Discover;
