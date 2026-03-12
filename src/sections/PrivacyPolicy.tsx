import { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props { onClose: () => void; }

const PrivacyPolicy = ({ onClose }: Props) => {
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
        <h1 className="font-serif text-3xl text-[#D4AF37] mb-2">Privacy Policy</h1>
        <p className="text-[#B8B2A6] text-xs mb-8">Last updated: March 2026 &nbsp;|&nbsp; In accordance with POPIA (Act 4 of 2013)</p>

        <div className="prose prose-sm max-w-none text-[#B8B2A6] leading-relaxed space-y-6">

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">1. Introduction</h2>
            <p>NNALEBOI Travel (Pty) Ltd, registration number 2025/763037/07 ("we", "us", or "our"), is committed to protecting your personal information in accordance with the <strong className="text-[#F4F1EA]">Protection of Personal Information Act, 4 of 2013 (POPIA)</strong> and all other applicable South African legislation. This Privacy Policy explains how we collect, use, store, and disclose your personal information when you interact with our website and services.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">2. Information We Collect</h2>
            <p>We may collect the following personal information when you complete an inquiry form or otherwise engage with us:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Full name and contact details (phone number, email address)</li>
              <li>Preferred travel destination and travel dates</li>
              <li>Departure city and number of travellers</li>
              <li>Type of holiday and approximate budget</li>
              <li>Any additional information you voluntarily provide</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">3. Purpose of Collection</h2>
            <p>We collect personal information for the following lawful purposes:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>To respond to your travel inquiry and provide a personalised quotation</li>
              <li>To plan, book, and administer your travel arrangements</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To communicate service updates relevant to your booking</li>
            </ul>
            <p className="mt-2">We will not process your personal information for any purpose that is incompatible with the purposes listed above without your explicit consent.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">4. Legal Basis for Processing</h2>
            <p>We process your personal information on the following lawful bases as contemplated in POPIA:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-[#F4F1EA]">Consent</strong> - You have given us explicit consent by submitting an inquiry form.</li>
              <li><strong className="text-[#F4F1EA]">Contractual necessity</strong> - Processing is necessary to perform a contract with you or at your request before entering into a contract.</li>
              <li><strong className="text-[#F4F1EA]">Legal obligation</strong> - Processing is required to comply with an obligation imposed by law.</li>
              <li><strong className="text-[#F4F1EA]">Legitimate interest</strong> - Processing is necessary to pursue our legitimate interests in providing travel services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">5. Sharing of Personal Information</h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Airlines, hotels, cruise lines, and other service providers necessary to fulfil your booking</li>
              <li>Third-party communication platforms (e.g., WhatsApp Business) used to process and respond to inquiries</li>
              <li>Regulatory authorities where required by law</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or trade your personal information to any third party for their own marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">6. Cross-Border Transfers</h2>
            <p>Where your personal information is transferred to a third party in a foreign country, we ensure that the recipient is subject to a law, binding corporate rules, or a binding agreement that provides an adequate level of protection substantially similar to POPIA's requirements.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">7. Retention of Information</h2>
            <p>We retain your personal information for as long as is necessary to fulfil the purposes for which it was collected, or as required by law. Once the retention period expires, your information will be destroyed or de-identified in a secure manner.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">8. Your Rights Under POPIA</h2>
            <p>As a data subject, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-[#F4F1EA]">Right to access</strong> - Request details of the personal information we hold about you.</li>
              <li><strong className="text-[#F4F1EA]">Right to correction</strong> - Request correction of inaccurate or incomplete personal information.</li>
              <li><strong className="text-[#F4F1EA]">Right to erasure</strong> - Request deletion of your personal information where there is no lawful basis for continued processing.</li>
              <li><strong className="text-[#F4F1EA]">Right to object</strong> - Object to the processing of your personal information on grounds relating to your particular situation.</li>
              <li><strong className="text-[#F4F1EA]">Right to complain</strong> - Lodge a complaint with the <strong className="text-[#F4F1EA]">Information Regulator of South Africa</strong> at <em>inforeg.org.za</em> if you believe your rights have been violated.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">9. Security Measures</h2>
            <p>We implement appropriate technical and organisational security measures to protect your personal information from unauthorised access, use, disclosure, alteration, or destruction, as required by section 19 of POPIA.</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">10. Information Officer</h2>
            <p>Our designated Information Officer can be contacted at:</p>
            <p className="mt-2 text-[#F4F1EA]">NNALEBOI Travel (Pty) Ltd<br />Registration No: 2025/763037/07<br />South Africa (Nationwide)</p>
          </section>

          <section>
            <h2 className="font-serif text-[#F4F1EA] text-lg mb-2">11. Changes to this Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any material changes will be communicated to you and the updated policy will be published on this website. Continued use of our services after the effective date of the revised policy constitutes your acceptance of the changes.</p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(212,175,55,0.15)]">
          <button onClick={onClose} className="btn-primary">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
