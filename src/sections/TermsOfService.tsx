import { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props { onClose: () => void; }

const TermsOfService = ({ onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center bg-[#0B0B0D]/95 backdrop-blur-md overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-3xl mx-4 my-12 bg-[#141419] border border-[rgba(212,175,55,0.2)] p-10 lg:p-14">
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#B8B2A6] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
          <X size={16} />
        </button>

        <span className="label-text text-[10px] block mb-4">Legal</span>
        <h1 className="font-serif text-3xl text-[#D4AF37] mb-2">Terms of Service</h1>
        <p className="text-[#B8B2A6] text-xs mb-8">Last updated: March 2026 &nbsp;|&nbsp; Governed by South African Law</p>

        <div className="prose prose-sm max-w-none text-[#B8B2A6] leading-relaxed space-y-6">

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">1. Introduction</h2>
            <p>These Terms of Service ("Terms") govern your use of the NNALEBOI Travel website and your engagement with NNALEBOI Travel (Pty) Ltd, registration number 2025/763037/07 ("NNALEBOI", "we", "us"). By submitting an inquiry or otherwise engaging our services, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">2. Services Description</h2>
            <p>NNALEBOI provides travel planning and consultation services, including but not limited to holiday package planning, flight and accommodation bookings, cruise packages through MSC Cruises, honeymoon experiences, and related travel advisory services. All services are subject to availability and confirmation.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">3. Inquiries and No Commitment</h2>
            <p>Submitting an inquiry through our website does not constitute a binding agreement or reservation. Your inquiry will be reviewed by our travel consultants, and a formal quotation will be provided. A booking is only confirmed upon receipt of a signed booking form and the required deposit, as communicated by our consultant.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">4. Consumer Protection</h2>
            <p>These Terms are subject to the <strong className="text-[#F4F1EA]">Consumer Protection Act, 68 of 2008 (CPA)</strong>. Nothing in these Terms limits, excludes, or modifies any rights you have under the CPA. Where any provision of these Terms conflicts with the CPA, the CPA shall prevail.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">5. Pricing and Payment</h2>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>All prices quoted are in South African Rand (ZAR) unless otherwise specified.</li>
              <li>Quoted prices are subject to change due to exchange rate fluctuations, fuel surcharges, and supplier changes until a deposit is received and confirmed.</li>
              <li>A deposit (the amount of which will be communicated per booking) is required to secure your reservation.</li>
              <li>Full payment is required no later than 30 days prior to departure, unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">6. Cancellations and Amendments</h2>
            <p>Cancellations must be made in writing to your assigned consultant. The following charges apply unless otherwise agreed:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>More than 60 days before departure: Loss of deposit</li>
              <li>30 to 59 days before departure: 50% of total booking value</li>
              <li>Less than 30 days before departure: 100% of total booking value</li>
            </ul>
            <p className="mt-2">Amendment fees may apply. Specific supplier cancellation policies may also apply and will be communicated per booking.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">7. Travel Insurance</h2>
            <p>We strongly recommend that all travellers obtain comprehensive travel insurance. NNALEBOI Travel does not provide travel insurance and accepts no liability for losses that could have been covered by a suitable insurance policy, including medical emergencies, trip cancellations, and loss of luggage.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by South African law, NNALEBOI Travel shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Acts or omissions of third-party service providers (airlines, hotels, cruise lines, etc.)</li>
              <li>Force majeure events, including natural disasters, pandemics, political unrest, or government restrictions</li>
              <li>Inaccurate information provided by the traveller</li>
              <li>Failure to obtain required travel documentation (passport, visas, health certificates)</li>
            </ul>
            <p className="mt-2">Our liability, where it cannot be excluded, is limited to the total amount paid to us for the affected service.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">9. Passports, Visas and Travel Documents</h2>
            <p>It is the sole responsibility of each traveller to ensure that all required travel documents are valid and in order. NNALEBOI Travel accepts no responsibility for any traveller who fails to comply with the entry requirements of any country. Passports must generally be valid for at least six months beyond the intended return date.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">10. Complaints and Disputes</h2>
            <p>Any complaints must be submitted in writing to your assigned consultant within 30 days of your return. We will endeavour to resolve complaints within 21 business days. If a dispute cannot be resolved amicably, it shall be subject to the jurisdiction of the South African courts.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the South African courts.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">12. Amendments to These Terms</h2>
            <p>We reserve the right to amend these Terms at any time. Updated Terms will be published on our website. Continued engagement with our services after publication of updated Terms constitutes acceptance of those changes.</p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(212,175,55,0.15)]">
          <button onClick={onClose} className="btn-primary">Close</button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
