import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy - How We Protect Your Data"
        description="Arborpaygo privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant, secure data handling."
        keywords="privacy policy, data protection, GDPR, personal data, privacy rights"
        canonical="https://arborpaygo.com/privacy-policy"
        breadcrumbs={[
          { name: "Privacy Policy", url: "/privacy-policy" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Privacy Policy", url: "/privacy-policy" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Privacy Policy
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
                At Arbor Pay Go ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This privacy policy applies to all personal data collected through our website, as well as any related services, sales, marketing, or events.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">2. The Data We Collect About You</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Identity Data</strong> includes first name, last name, username or similar identifier, title.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Financial Data</strong> includes bank account and payment card details.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Usage Data</strong> includes information about how you use our website, products, and services.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">3. How We Use Your Personal Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-gray-700 leading-relaxed">
                  Where we need to perform the contract we are about to enter into or have entered into with you.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Where we need to comply with a legal obligation.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">5. Your Legal Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-gray-700 leading-relaxed">Request access to your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Request correction of your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Request erasure of your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Object to processing of your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Request restriction of processing your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Request transfer of your personal data.</li>
                <li className="text-gray-700 leading-relaxed">Right to withdraw consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you wish to exercise any of the rights set out above, please contact us at{" "}
                <a href="mailto:privacy@arborpaygo.com" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  privacy@arborpaygo.com
                </a>
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Most web browsers allow some control of most cookies through the browser settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  www.aboutcookies.org
                </a>
                {" "}or{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                  www.allaboutcookies.org
                </a>
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
              </p>
              <div className="bg-stone-50 rounded-2xl p-8 space-y-4">
                <div>
                  <strong className="text-gray-900">Email address:</strong>{" "}
                  <a href="mailto:privacy@arborpaygo.com" className="text-teal-700 hover:text-teal-800 font-semibold underline">
                    privacy@arborpaygo.com
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
            Questions About Your Privacy?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help answer any questions you may have
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
