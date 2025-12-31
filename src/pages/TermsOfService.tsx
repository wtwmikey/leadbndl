import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      {/* Blurred background overlay */}
      <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40" />

      {/* Modal overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[50vh] bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background hover:border-primary/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 p-8 prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using LeadBNDL's website (leadbndl.online) and services, you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
              <p className="text-muted-foreground mb-4">
                These Terms constitute a legally binding agreement between you ("Client," "User," or "you") and LeadBNDL ("we," "us," or "our"). We reserve the right to modify these Terms at any time, and your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground mb-4">
                LeadBNDL provides the following services:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
                <li>AI-powered automation and lead management solutions</li>
                <li>Strategic Meta (Facebook, Instagram) and Google advertising campaign management</li>
                <li>Lead generation and conversion optimization services</li>
                <li>Consulting and advisory services related to digital marketing and lead generation</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. User Obligations and Conduct</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">3.1 Eligibility</h3>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">3.2 Account Information</h3>
              <p className="text-muted-foreground mb-4">
                You agree to provide accurate, current, and complete information when using our services or creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">3.3 Prohibited Activities</h3>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Engage in any fraudulent, abusive, or harmful activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Service Agreements and Contracts</h2>
              <p className="text-muted-foreground mb-4">
                Specific services provided by LeadBNDL may be subject to separate written agreements or contracts that outline the scope of work, deliverables, timelines, pricing, and other terms. In the event of a conflict between these Terms and a specific service agreement, the service agreement shall govern with respect to those services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">5.1 Fees and Billing</h3>
              <p className="text-muted-foreground mb-4">
                Service fees, payment schedules, and billing terms will be specified in your service agreement or as otherwise agreed upon. All fees are non-refundable unless otherwise stated in your specific agreement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">5.2 Payment Processing</h3>
              <p className="text-muted-foreground mb-4">
                Payments may be processed through third-party payment processors. You agree to provide current, complete, and accurate payment information. You are responsible for any fees or charges incurred in connection with your payment method.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">5.3 Late Payments</h3>
              <p className="text-muted-foreground mb-4">
                If payment is not received by the due date, we reserve the right to suspend or terminate services. Late payments may be subject to interest charges and collection fees as permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">6.1 Our Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                All content, materials, trademarks, logos, and intellectual property on our website and services are owned by LeadBNDL or our licensors. You may not use, reproduce, distribute, or create derivative works from our intellectual property without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">6.2 Client Content</h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of any content, materials, or data you provide to us ("Client Content"). By providing Client Content, you grant us a license to use, modify, and display such content solely for the purpose of providing our services to you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">6.3 Work Product</h3>
              <p className="text-muted-foreground mb-4">
                Ownership of work product, deliverables, and materials created specifically for you will be specified in your service agreement. Unless otherwise agreed, you will own the final deliverables, and we retain the right to use anonymized data and general methodologies for other clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">7. Advertising Platforms and Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Our services may involve the use of third-party advertising platforms (including Meta and Google), tools, and services. You agree to comply with the terms of service and policies of these third-party platforms. We are not responsible for the actions, policies, or practices of third-party service providers.
              </p>
              <p className="text-muted-foreground mb-4">
                You understand that advertising platforms may reject, suspend, or modify campaigns based on their policies, and we are not liable for such actions by third-party platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">8. Performance and Results</h2>
              <p className="text-muted-foreground mb-4">
                While we strive to deliver effective marketing and lead generation services, we cannot guarantee specific results, conversion rates, return on investment, or business outcomes. Marketing results depend on various factors beyond our control, including market conditions, competition, product quality, and client execution.
              </p>
              <p className="text-muted-foreground mb-4">
                We will use commercially reasonable efforts to perform our services in accordance with industry standards and best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">9. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This obligation survives termination of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEADBNDL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO OUR SERVICES.
              </p>
              <p className="text-muted-foreground mb-4">
                Our total liability for any claims arising from our services shall not exceed the total fees paid by you to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">11. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless LeadBNDL and its officers, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Any content, materials, or information you provide to us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">12. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services in accordance with the terms of your service agreement or with reasonable notice. We reserve the right to suspend or terminate your access to our services immediately if you violate these Terms or engage in fraudulent or harmful activities.
              </p>
              <p className="text-muted-foreground mb-4">
                Upon termination, you remain responsible for all fees and charges incurred prior to termination. Sections that by their nature should survive termination will survive, including but not limited to intellectual property rights, confidentiality, limitation of liability, and indemnification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">13. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">14. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from or related to these Terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules, unless otherwise required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">15. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LeadBNDL operates, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">16. Severability</h2>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">17. Entire Agreement</h2>
              <p className="text-muted-foreground mb-4">
                These Terms, together with any service agreements or contracts, constitute the entire agreement between you and LeadBNDL regarding our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">18. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-muted-foreground mb-4">
                <p><strong>LeadBNDL</strong></p>
                <p>Email: <a href="mailto:info@leadbndl.online" className="text-primary hover:underline">info@leadbndl.online</a></p>
                <p>Website: <a href="https://leadbndl.online" className="text-primary hover:underline">leadbndl.online</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfService;
