import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

interface FooterProps { onPrivacy: () => void; onTerms: () => void; }

const Footer = ({ onPrivacy, onTerms }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(footer, { y: '4vh', opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: { trigger: footer, start: 'top 90%', end: 'top 70%', scrub: window.innerWidth < 1024 ? 1.5 : true },
      });
    }, footer);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Cruises', href: '#cruises' },
    { label: 'Inquire Now', href: '#inquiry' },
  ];

  return (
    <footer ref={footerRef} className="relative w-full bg-[#141419] pt-[6vh] pb-[8vh] z-[110]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/Brand/NNALEBOILogo.webp" alt="NNALEBOI Travel" className="h-12 w-auto object-contain mb-4" />
            <p className="text-[#B8B2A6] text-sm leading-relaxed max-w-[80%] mb-4">
              Connecting Your World. Luxury travel experiences crafted with care, precision, and total dedication.
            </p>
            <p className="text-[#B8B2A6] text-xs">Reg. No: 2025/763037/07</p>
            <p className="text-[#B8B2A6] text-xs mt-1">Established September 2025 · South Africa</p>
          </div>

          {/* Contact (Removed) */}
          <div></div>

          {/* Navigation */}
          <div>
            <h4 className="label-text mb-6">Quick Links</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="block text-[#F4F1EA] text-sm hover:text-[#D4AF37] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#B8B2A6] text-xs">© 2026 NNALEBOI Travel. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button onClick={onPrivacy} className="text-[#B8B2A6] text-xs hover:text-[#D4AF37] transition-colors bg-transparent border-0 cursor-pointer">Privacy Policy</button>
            <button onClick={onTerms} className="text-[#B8B2A6] text-xs hover:text-[#D4AF37] transition-colors bg-transparent border-0 cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
