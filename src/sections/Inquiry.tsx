import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const holidayTypes = ['Beach Holiday', 'Cruise', 'Adventure', 'Luxury Escape', 'Family Holiday', 'Honeymoon', 'Group Trip', 'Safari'];
const budgetRanges = ['R10,000 - R20,000', 'R20,000 - R50,000', 'R50,000 - R100,000', 'R100,000+'];
const departureCities = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Other'];

interface FormData {
  fullName: string; email: string; phone: string; destination: string;
  departureCity: string; travelDates: string; travelers: string;
  holidayType: string; budget: string; message: string;
}

const emptyForm: FormData = {
  fullName: '', email: '', phone: '', destination: '',
  departureCity: '', travelDates: '', travelers: '',
  holidayType: '', budget: '', message: '',
};

const Inquiry = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current, { x: '-8vw', opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 40%', scrub: true },
      });
      gsap.fromTo(imageRef.current, { x: '10vw', opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 30%', scrub: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ── Build the WhatsApp message ──────────────────────────────────────────
    // Business WhatsApp number
    const WHATSAPP_NUMBER = '27680498610';

    const msg = [
      '*New NNALEBOI Travel Inquiry*',
      '',
      `*Name:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Destination:* ${formData.destination}`,
      `*Departure City:* ${formData.departureCity}`,
      `*Travel Dates:* ${formData.travelDates}`,
      `*Travelers:* ${formData.travelers}`,
      `*Holiday Type:* ${formData.holidayType}`,
      `*Budget (ZAR):* ${formData.budget}`,
      formData.message ? `*Message:* ${formData.message}` : '',
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

    // Show success state
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); setFormData(emptyForm); }, 5000);
  };

  return (
    <section id="inquiry" ref={sectionRef} className="relative w-full bg-[#141419] py-[12vh] z-[109]">
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <div ref={formRef}>
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline w-[6vw]" />
              <span className="label-text">Inquiry</span>
            </div>
            <h2 className="font-serif text-[clamp(30px,4vw,56px)] font-semibold text-[#F4F1EA] leading-[1.0] mb-3">
              Let's plan your next trip.
            </h2>
            <p className="text-[#B8B2A6] text-sm mb-10">No commitment required - just the beginning of a great journey.</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center border border-[rgba(212,175,55,0.2)]">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mb-4">
                  <Check size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#F4F1EA] mb-2">Thank you!</h3>
                <p className="text-[#B8B2A6] text-sm">We'll be in touch soon to start planning your journey.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
                      className="field-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="field-label">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="field-input" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="field-input" placeholder="+27 (0)XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="field-label">Preferred Destination</label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} required
                      className="field-input" placeholder="Where do you want to go?" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Departure City</label>
                    <select name="departureCity" value={formData.departureCity} onChange={handleChange} required className="field-input">
                      <option value="">Select city</option>
                      {departureCities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label">Approximate Travel Dates</label>
                    <input type="text" name="travelDates" value={formData.travelDates} onChange={handleChange} required
                      className="field-input" placeholder="e.g., June 2026" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Number of Travelers</label>
                    <input type="text" name="travelers" value={formData.travelers} onChange={handleChange} required
                      className="field-input" placeholder="e.g., 2 adults, 1 child" />
                  </div>
                  <div>
                    <label className="field-label">Type of Holiday</label>
                    <select name="holidayType" value={formData.holidayType} onChange={handleChange} required className="field-input">
                      <option value="">Select type</option>
                      {holidayTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="field-label">Budget Range (ZAR)</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} required className="field-input">
                    <option value="">Select budget</option>
                    {budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label className="field-label">Additional Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                    className="field-input resize-none" placeholder="Any special requests, occasions, or preferences…" />
                </div>

                <p className="text-[#B8B2A6] text-xs leading-relaxed mt-2">
                  After clicking below, you will be redirected to WhatsApp with your inquiry pre-filled. Simply press <span className="text-[#D4AF37]">Send</span> in WhatsApp to submit it to our team.
                </p>

                <button type="submit" className="btn-primary flex items-center gap-3 mt-2">
                  Send Inquiry
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Side image */}
          <div ref={imageRef} className="hidden lg:block relative h-[70vh] overflow-hidden">
            <img src="/images/inquiry_image.webp" alt="Travel planning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141419]/60 via-transparent to-transparent" />
            {/* Overlay stat */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="border border-[rgba(212,175,55,0.3)] bg-[#141419]/70 backdrop-blur-sm px-6 py-5">
                <p className="font-serif text-[#F4F1EA] text-lg mb-1">"Every journey starts with a single inquiry."</p>
                <p className="label-text text-[10px]">NNALEBOI Travel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
