import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Contact = () => {
  const departments = [
    {
      name: "Sales",
      description: "Get a quote or discuss your business needs",
      email: "hello@arborpaygo.com",
      phone: "0800 123 4567",
    },
    {
      name: "Support",
      description: "Technical help and account assistance",
      email: "hello@arborpaygo.com",
      phone: "0800 123 4568",
    },
    {
      name: "Partnerships",
      description: "Explore partnership opportunities",
      email: "hello@arborpaygo.com",
      phone: "0800 123 4569",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us - 24/7 Support Available"
        description="Get in touch with Arborpaygo. 24/7 phone & chat support, email support, customer site visits Mon-Sat 9am-10pm. We're here to help."
        keywords="contact Arborpaygo, payment support, customer service, merchant services contact"
        canonical="https://arborpaygo.com/contact"
        breadcrumbs={[
          { name: "Contact", url: "/contact" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Contact", url: "/contact" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Get in Touch
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                We're Here to Help
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions? Our award-winning support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Support Hours Section */}
      <section className="py-12 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8" />
                <h2 className="text-3xl font-black">Support Hours</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-white/80 mb-2">Phone & Chat:</div>
                  <div className="text-2xl font-black">24/7</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-2">Email:</div>
                  <div className="text-2xl font-black">24/7</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-2">Customer Site Visits:</div>
                  <div className="text-2xl font-black">Mon-Sat 9am-10pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Sales Question</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105"
                >
                  Send Message
                </button>
              </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              167-169 Great Portland Street, 5th Floor, London, W1W 5PF
            </p>
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden h-96 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4089396942!2d-0.14189492346!3d51.51872097181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s167-169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arborpaygo Office Location"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
