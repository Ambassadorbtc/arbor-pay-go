import { Check, ArrowRight, Phone, Mail } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const QuoteSuccess = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Quote Request Received - Thank You"
        description="Your quote request has been received. Our team will contact you within 2 hours to discuss your payment solution."
        keywords="quote received, application submitted, payment terminal quote"
        canonical="https://arborpaygo.com/quote/success"
        breadcrumbs={[
          { name: "Get Quote", url: "/quote" },
          { name: "Success", url: "/quote/success" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Get Quote", url: "/quote" },
          { name: "Success", url: "/quote/success" }
        ]} />
      </div>
      
      {/* Success Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mb-8 animate-bounce">
            <Check className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Quote Request
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
              Received!
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Thank you for choosing Arborpaygo! We've received your quote request and our team is already reviewing your information.
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-lg font-black text-teal-600">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Review & Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Our team will review your business details and prepare a customized quote tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-lg font-black text-teal-600">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Personal Contact</h3>
                  <p className="text-gray-600 text-sm">
                    A payment specialist will contact you within 2 hours to discuss your quote and answer any questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-lg font-black text-teal-600">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Fast Setup</h3>
                  <p className="text-gray-600 text-sm">
                    Once approved, you could be accepting payments within 24 hours with your new terminal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a
              href="tel:08001234567"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-500 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 mb-1">Call Us Now</div>
                <div className="text-sm text-teal-700 font-semibold">0800 123 4567</div>
              </div>
            </a>

            <a
              href="mailto:sales@arborpaygo.com"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-500 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 mb-1">Email Us</div>
                <div className="text-sm text-teal-700 font-semibold">sales@arborpaygo.com</div>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resources"
              className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">2hrs</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24hrs</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Setup Time</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">£0</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Setup Fees</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              While You Wait...
            </h2>
            <p className="text-xl text-gray-600">
              Learn more about what makes Arborpaygo different
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/products"
              className="group p-8 bg-gradient-to-br from-white to-stone-50 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                Explore Our Terminals
              </h3>
              <p className="text-gray-600 mb-4">
                See our full range of payment terminals and find the perfect fit
              </p>
              <span className="inline-flex items-center gap-2 text-teal-700 font-bold">
                View Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/pricing"
              className="group p-8 bg-gradient-to-br from-white to-stone-50 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 mb-4">
                No hidden fees. Just simple, straightforward pricing
              </p>
              <span className="inline-flex items-center gap-2 text-teal-700 font-bold">
                View Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/resources"
              className="group p-8 bg-gradient-to-br from-white to-stone-50 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                Success Stories
              </h3>
              <p className="text-gray-600 mb-4">
                Read how other businesses are thriving with Arborpaygo
              </p>
              <span className="inline-flex items-center gap-2 text-teal-700 font-bold">
                Read Stories
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
