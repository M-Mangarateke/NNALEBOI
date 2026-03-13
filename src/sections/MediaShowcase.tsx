import { useRef, useLayoutEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── Real gallery images from /public/Gallery/images/ ──────────────────────────
const carouselImages = [
  { src: '/Gallery/images/NNALEBOI-Gallery-09.webp', label: 'Gallery', caption: 'Handpicked Stays' },
  { src: '/Gallery/images/NNALEBOI-Gallery-10.webp', label: 'Gallery', caption: 'Tailored For You' },
  { src: '/Gallery/images/NNALEBOI-Gallery-05.webp', label: 'Gallery', caption: 'Unforgettable Moments' },
  { src: '/Gallery/images/NNALEBOI-Gallery-03.webp', label: 'Gallery', caption: 'Seamless Journeys' },
  { src: '/Gallery/images/NNALEBOI-Gallery-01.webp', label: 'Gallery', caption: 'The NNALEBOI Experience' },
  { src: '/Gallery/images/NNALEBOI-Gallery-02.webp', label: 'Gallery', caption: 'Curated Luxury' },
  { src: '/Gallery/images/NNALEBOI-Gallery-04.webp', label: 'Gallery', caption: 'Premium Travel' },
  { src: '/Gallery/images/NNALEBOI-Gallery-06.webp', label: 'Gallery', caption: 'Beyond Expectations' },
  { src: '/Gallery/images/NNALEBOI-Gallery-07.webp', label: 'Gallery', caption: 'Your World, Connected' },
  { src: '/Gallery/images/NNALEBOI-Gallery-08.webp', label: 'Gallery', caption: 'Bespoke Itineraries' },
  { src: '/Gallery/images/NNALEBOI-Gallery-11.webp', label: 'Gallery', caption: 'Moments That Matter' },
  { src: '/Gallery/images/NNALEBOI-Gallery-12.webp', label: 'Gallery', caption: 'South African Pride' },
  { src: '/Gallery/images/NNALEBOI-Gallery-13.webp', label: 'Gallery', caption: 'Luxury Redefined' },
  { src: '/Gallery/images/NNALEBOI-Gallery-14.webp', label: 'Gallery', caption: 'Every Detail Matters' },
  { src: '/Gallery/images/NNALEBOI-Gallery-15.webp', label: 'Gallery', caption: 'Start Your Journey' },
  { src: '/Gallery/images/NNALEBOI-Gallery-16.webp', label: 'Gallery', caption: 'Adventure Awaits' },
  { src: '/Gallery/images/NNALEBOI-Gallery-17.webp', label: 'Gallery', caption: 'Sun & Splash' },
  { src: '/Gallery/images/NNALEBOI-Gallery-18.webp', label: 'Gallery', caption: 'Family Getaways' },
  { src: '/Gallery/images/NNALEBOI-Gallery-19.webp', label: 'Gallery', caption: 'Living The Dream' },
];

// ── Real client videos from /public/Gallery/videos/ ──────────────────────────
const videos = [
  '/Gallery/videos/NNALEBOI-Video-05.mp4',
  '/Gallery/videos/NNALEBOI-Video-04.mp4',
  '/Gallery/videos/NNALEBOI-Video-07.mp4',
  '/Gallery/videos/NNALEBOI-Video-03.mp4',
];

const MediaShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSlides = carouselImages.length;

  // GSAP scroll reveal
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      section.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        gsap.fromTo(el, { y: '6vh', opacity: 0 }, {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 60%', scrub: true },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  const goTo = useCallback((index: number) => {
    const clamped = (index + totalSlides) % totalSlides;
    setCurrentSlide(clamped);
    if (carouselRef.current) {
      // Calculate how wide one card is (including the gap)
      const firstCard = carouselRef.current.firstElementChild as HTMLElement | null;
      const gap = 16; // matches gap-4 (1rem = 16px)
      const cardWidth = firstCard ? firstCard.offsetWidth + gap : 0;
      gsap.to(carouselRef.current, {
        x: -(clamped * cardWidth),
        duration: 0.7,
        ease: 'power3.inOut',
      });
    }
  }, [totalSlides]);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const switchVideo = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    // Give React time to re-render the video element with the new src, then reset
    setTimeout(() => {
      videoRef.current?.load();
    }, 50);
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-[#0B0B0D] py-[10vh] z-[107] overflow-hidden">
      <div className="w-full px-6 lg:px-[6vw]">

        {/* Label */}
        <div className="flex items-center gap-4 mb-6 reveal-on-scroll">
          <div className="hairline w-[6vw]" />
          <span className="label-text">Gallery & Media</span>
        </div>

        {/* ──────────── IMAGE CAROUSEL ──────────── */}
        <div className="mb-24">
          <h2 className="font-serif text-[clamp(28px,3.5vw,52px)] font-semibold text-[#F4F1EA] leading-[1.0] mb-10 reveal-on-scroll">
            Moments worth chasing.
          </h2>

          {/* Outer viewport - clips overflow */}
          <div className="relative overflow-hidden reveal-on-scroll">

            {/* Scrolling track */}
            <div ref={carouselRef} className="flex gap-4" style={{ willChange: 'transform' }}>
              {carouselImages.map((img, i) => (
                <div key={i}
                  className="relative flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  {/* Portrait 9:16 slot */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading={i < 4 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/70 via-transparent to-transparent" />

                  </div>
                </div>
              ))}
            </div>

            {/* Left arrow */}
            <button onClick={() => goTo(currentSlide - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-[rgba(212,175,55,0.4)] bg-[#0B0B0D]/70 backdrop-blur-sm flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 z-10">
              <ChevronLeft size={18} className="text-[#D4AF37]" />
            </button>
            {/* Right arrow */}
            <button onClick={() => goTo(currentSlide + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-[rgba(212,175,55,0.4)] bg-[#0B0B0D]/70 backdrop-blur-sm flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 z-10">
              <ChevronRight size={18} className="text-[#D4AF37]" />
            </button>

            {/* Slide counter */}
            <div className="absolute top-3 right-14 bg-[#0B0B0D]/60 backdrop-blur-sm px-3 py-1 border border-[rgba(212,175,55,0.25)]">
              <span className="label-text text-[10px]">{String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {carouselImages.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`h-[2px] transition-all duration-500 ${i === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2.5 bg-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.6)]'}`}
              />
            ))}
          </div>
        </div>

        {/* ──────────── HOTEL TV VIDEO PLAYER ──────────── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center reveal-on-scroll">
          {/* TV frame */}
          <div>
            <div className="tv-frame w-full max-w-[640px] mx-auto">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#000]">
                {/* Real video element */}
                <video
                  ref={videoRef}
                  key={currentVideo}
                  src={videos[currentVideo]}
                  className="w-full h-full object-cover"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 2px)' }} />

                {/* Play/Pause button overlay */}
                <button onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group">
                  <div className={`w-16 h-16 border border-[#D4AF37] flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100 bg-[#0B0B0D]/40' : 'opacity-100 bg-[#0B0B0D]/50 group-hover:bg-[#D4AF37]/20'}`}>
                    {isPlaying
                      ? <Pause size={22} className="text-[#D4AF37]" />
                      : <Play size={22} className="text-[#D4AF37] ml-1" />
                    }
                  </div>
                </button>
              </div>

              {/* TV stand */}
              <div className="flex justify-center mt-1.5">
                <div className="w-[10%] h-[10px] bg-[#1a1a1f]" />
              </div>
              <div className="flex justify-center">
                <div className="w-[24%] h-[4px] bg-[#0d0d10] rounded-sm" />
              </div>
            </div>

            {/* Video selector pills */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center max-w-[640px] mx-auto">
              {videos.map((_, i) => (
                <button key={i} onClick={() => switchVideo(i)}
                  className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all duration-300 ${i === currentVideo ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10' : 'border-[rgba(212,175,55,0.25)] text-[#B8B2A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'}`}>
                  Video {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="hairline w-[6vw]" />
              <span className="label-text">Immerse Yourself</span>
            </div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,50px)] font-semibold text-[#F4F1EA] leading-[1.0] mb-6">
              Experience the<br />NNALEBOI standard.
            </h2>
            <p className="text-[#B8B2A6] text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-8">
              Every journey we craft carries the NNALEBOI promise: effortless logistics, extraordinary moments, and a level of personal service that transforms travel from a task into a memory you'll carry forever.
            </p>
            <button onClick={() => document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary">
              Start Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
