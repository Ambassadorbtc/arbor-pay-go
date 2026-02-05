import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service - Merchant Agreement"
        description="Arborpaygo terms of service. Read our merchant agreement, service terms, and conditions for using our payment terminals and services."
        keywords="terms of service, merchant agreement, service terms, payment terms, legal terms"
        canonical="https://arborpaygo.com/terms-of-service"
        breadcrumbs={[
          { name: "Terms of Service", url: "/terms-of-service" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Terms of Service", url: "/terms-of-service" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: June 1, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Arbor Pay Go ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at{" "}
                <a href="https://www.arborpaygo.com" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  www.arborpaygo.com
                </a>
                {" "}(together or individually "Service") operated by Arbor Pay Go.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here:{" "}
                <a href="/privacy-policy" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  Privacy Policy
                </a>.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By creating an account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us at{" "}
                <a href="mailto:contact@arborpaygo.com" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  contact@arborpaygo.com
                </a>.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">3. Service Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service allows you to access our business consultancy services, including payment solutions, business funding, and restaurant booking apps. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of Arbor Pay Go and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Arbor Pay Go.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">5. Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Arbor Pay Go, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-stone-50 rounded-2xl p-8 space-y-4">
                <div>
                  <strong className="text-gray-900">Email:</strong>{" "}
                  <a href="mailto:legal@arborpaygo.com" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                    legal@arborpaygo.com
                  </a>
                </div>
                <div>
                  <strong className="text-gray-900">Postal address:</strong>{" "}
                  <span className="text-gray-700">167-169 Great Portland Street, 5th Floor, London, W1W 5PF</span>
                </div>
                <div>
                  <strong className="text-gray-900">Telephone number:</strong>{" "}
                  <a href="tel:+441234567890" className="text-teal-700 hover:text-teal-800 font-semibold">
                    +44 (0) 123 456 7890
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help clarify any questions you may have
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
