import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const primaryImageRef = useRef<HTMLDivElement>(null);
  const secondaryImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 30%', scrub: true },
      });
      tl.fromTo([labelRef.current, lineRef.current], { x: '-6vw', opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(headingRef.current, { y: '8vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.1)
        .fromTo(bodyRef.current, { y: '6vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
        .fromTo(ctaRef.current, { y: '4vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.3)
        .fromTo(primaryImageRef.current, { x: '12vw', rotate: 2, scale: 0.96, opacity: 0 }, { x: 0, rotate: 0, scale: 1, opacity: 1 }, 0.1)
        .fromTo(secondaryImageRef.current, { x: '18vw', opacity: 0 }, { x: 0, opacity: 0.35 }, 0.2);

      gsap.to(primaryImageRef.current, {
        y: '-2vh', ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full min-h-screen bg-[#0B0B0D] py-[10vh] z-[103]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left - content */}
          <div className="lg:max-w-[44vw] lg:pr-16">
            <div className="flex items-center gap-4 mb-8">
              <span ref={labelRef} className="label-text">About NNALEBOI</span>
              <div ref={lineRef} className="hairline w-[8vw] origin-left" />
            </div>

            <h2 ref={headingRef} className="font-serif text-[clamp(32px,4vw,58px)] font-semibold text-[#F4F1EA] leading-[1.0] mb-8">
              Travel should feel effortless.
            </h2>

            <div ref={bodyRef} className="text-[#B8B2A6] text-[clamp(14px,1.1vw,17px)] leading-relaxed space-y-5 max-w-[40vw] mb-10">
              <p>
                We design journeys that match your rhythm - whether it's a quiet escape, a celebration, or a multi-stop adventure. From flights to final touches, we handle the details so you can be present for the moments that matter.
              </p>
              <p>
                Founded in September 2025 with a passion for making travel accessible, seamless, and memorable. Registered under company number <span className="text-[#D4AF37]">2025/763037/07</span>, our mission is to provide stress-free, personalized holidays that cater to every traveler's unique needs.
              </p>
              <p>
                What sets us apart: <span className="text-[#F4F1EA]">tailored service</span>, <span className="text-[#F4F1EA]">complete transparency</span>, and <span className="text-[#F4F1EA]">exquisite attention to detail</span> - from the moment you reach out to the moment you return home.
              </p>
            </div>

            <a ref={ctaRef} href="#inquiry"
              onClick={(e) => { e.preventDefault(); document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-[#D4AF37] text-sm tracking-wider hover:gap-4 transition-all duration-300">
              Start Planning
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right - images */}
          <div className="relative h-[50vh] lg:h-[65vh] hidden lg:block">
            <div ref={secondaryImageRef} className="absolute right-[10vw] top-[8vh] w-[28vw] h-[38vh] overflow-hidden z-[1]">
              <img src="/images/about_details.webp" alt="NNALEBOI travel detail" className="w-full h-full object-cover" />
            </div>
            <div ref={primaryImageRef} className="absolute right-[4vw] top-0 w-[32vw] h-[48vh] overflow-hidden z-[2] shadow-2xl">
              <img src="/images/about_traveler.webp" alt="Traveler" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
