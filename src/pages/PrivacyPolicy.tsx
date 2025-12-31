import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to LeadBNDL ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website leadbndl.online or use our services.
            </p>
            <p className="text-muted-foreground mb-4">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.1 Information You Provide to Us</h3>
            <p className="text-muted-foreground mb-4">We may collect information that you voluntarily provide to us, including:</p>
            <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Business information (company name, industry, business size)</li>
              <li>Information submitted through contact forms, consultation requests, or service inquiries</li>
              <li>Payment and billing information (processed through secure third-party payment processors)</li>
              <li>Communications with us, including customer support inquiries and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information (operating system, device type)</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies (see Section 6 for details)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.3 Lead Information</h3>
            <p className="text-muted-foreground mb-4">
              As part of our lead generation and management services, we may collect and process information about leads and prospects on behalf of our clients. This information may include contact details, business information, and interactions with marketing campaigns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect for the following purposes:</p>
            <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To process your requests, transactions, and deliver services</li>
              <li>To manage and improve our AI-powered automation and lead management solutions</li>
              <li>To create and manage Meta and Google advertising campaigns</li>
              <li>To communicate with you about our services, updates, and promotional offers</li>
              <li>To respond to your inquiries, comments, and support requests</li>
              <li>To analyze website usage and trends to improve user experience</li>
              <li>To prevent fraud, enhance security, and ensure compliance with legal obligations</li>
              <li>To comply with legal requirements and protect our rights and interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.1 Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We may share information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, hosting, analytics, and advertising platforms (including Meta and Google).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.2 Advertising Platforms</h3>
            <p className="text-muted-foreground mb-4">
              We use Meta (Facebook, Instagram) and Google advertising platforms to deliver targeted advertisements. These platforms may collect information about your interactions with our ads and website to provide analytics and improve ad targeting.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.3 Business Transfers</h3>
            <p className="text-muted-foreground mb-4">
              If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4.4 Legal Requirements</h3>
            <p className="text-muted-foreground mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">6. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to collect and store information about your preferences and activities on our website. You can control cookie preferences through your browser settings or our cookie consent banner.
            </p>
            <p className="text-muted-foreground mb-4">
              Types of cookies we use:
            </p>
            <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li><strong>Necessary Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements and track campaign effectiveness</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">7. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise these rights, please contact us at <a href="mailto:info@leadbndl.online" className="text-primary hover:underline">info@leadbndl.online</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">8. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">9. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">10. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate measures to ensure your information receives adequate protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">12. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-muted-foreground mb-4">
              <p><strong>LeadBNDL</strong></p>
              <p>Email: <a href="mailto:info@leadbndl.online" className="text-primary hover:underline">info@leadbndl.online</a></p>
              <p>Website: <a href="https://leadbndl.online" className="text-primary hover:underline">leadbndl.online</a></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;

