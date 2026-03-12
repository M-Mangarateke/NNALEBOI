import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Cruises', href: '#cruises' },
    { label: 'Inquire', href: '#inquiry' },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${
        isScrolled ? 'bg-[#0B0B0D]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-[#D4AF37] font-serif text-xl tracking-widest">
            NNALEBOI
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-[#F4F1EA] text-xs tracking-widest uppercase hover:text-[#D4AF37] transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F4F1EA] hover:text-[#D4AF37] transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[9997] bg-[#0B0B0D]/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-[#F4F1EA] text-3xl font-serif tracking-wider hover:text-[#D4AF37] transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
