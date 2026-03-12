import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .fromTo(wordmarkRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.3)
      .fromTo(subheadlineRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.5)
      .fromTo(taglineRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.65)
      .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, 0.7)
      .fromTo(labelRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.85)
      .fromTo(ctaRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.75);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
          onLeaveBack: () => {
            gsap.set([wordmarkRef.current, subheadlineRef.current, taglineRef.current, labelRef.current, lineRef.current, ctaRef.current], { opacity: 1, x: 0, y: 0 });
            gsap.set(bgRef.current, { scale: 1, y: 0 });
          },
        },
      });
      scrollTl
        .fromTo([wordmarkRef.current, subheadlineRef.current, taglineRef.current], { y: 0, opacity: 1 }, { y: '-18vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo([labelRef.current, lineRef.current], { x: 0, opacity: 1 }, { x: '-10vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(ctaRef.current, { x: 0, opacity: 1 }, { x: '10vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(bgRef.current, { scale: 1, y: 0 }, { scale: 1.06, y: '-3vh', ease: 'none' }, 0.7);
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden z-[101]">
      {/* Background - MSC Cruise Ship */}
      <div ref={bgRef} className="absolute inset-0 z-[1]"
        style={{ backgroundImage: 'url(/images/cruise_caribbean.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/60 via-[#0B0B0D]/20 to-[#0B0B0D]/75" />
      </div>

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-center px-6">
        <div ref={wordmarkRef}>
          {/* Real logo */}
          <img src="/Brand/NNALEBOILogo.webp" alt="NNALEBOI Travel" className="h-20 w-auto object-contain mx-auto mb-6 opacity-90" />
          <h1
            className="font-serif text-[clamp(52px,9vw,130px)] font-semibold text-[#D4AF37] tracking-[0.06em] leading-none"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
          >
            NNALEBOI
          </h1>
          <p ref={subheadlineRef}
            className="mt-5 text-[clamp(15px,1.8vw,22px)] text-[#F4F1EA] tracking-[0.28em] font-light"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}
          >
            Connecting Your World.
          </p>
          <p ref={taglineRef}
            className="mt-3 text-[clamp(11px,1.1vw,14px)] text-[#B8B2A6] tracking-[0.22em] uppercase"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}
          >
            Bespoke journeys · Proudly South African
          </p>
        </div>
      </div>

      {/* Bottom‑left label */}
      <div className="absolute left-[6vw] bottom-[10vh] z-[3] flex items-center gap-4">
        <span ref={labelRef} className="label-text">Premium Travel Agency</span>
        <div ref={lineRef} className="hairline w-[18vw] origin-left" />
      </div>

      {/* Bottom‑right CTA */}
      <div className="absolute right-[6vw] bottom-[10vh] z-[3]">
        <button ref={ctaRef} onClick={() => document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary">
          Plan Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
