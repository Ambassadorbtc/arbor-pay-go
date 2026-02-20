import { ArrowRight, Check, TrendingUp, Shield, Zap, Users, Clock, BarChart3 } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const SmallMediumBusiness = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Setup",
      description: "Get your business accepting payments in 24 hours with our streamlined onboarding process.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level encryption and PCI DSS compliance protect every transaction.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Revenue",
      description: "Accept all payment types and never miss a sale with 99.99% uptime.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 UK-based support team ready to help your business succeed.",
    },
    {
      icon: Clock,
      title: "Next-Day Payouts",
      description: "Get your money faster with next-day settlement to your bank account.",
    },
    {
      icon: BarChart3,
      title: "Business Insights",
      description: "Real-time reporting and analytics to understand your business better.",
    },
  ];

  const features = [
    {
      title: "No Long-Term Contracts",
      description: "We believe in earning your business every day. No lock-in periods, cancel anytime with no penalties.",
      icon: "📝",
    },
    {
      title: "Transparent Pricing",
      description: "Just 1.2% per transaction. No setup fees, no monthly fees, no hidden charges. What you see is what you pay.",
      icon: "💰",
    },
    {
      title: "All Payment Methods",
      description: "Accept contactless, chip & PIN, Apple Pay, Google Pay, and Samsung Pay. Give customers choice.",
      icon: "💳",
    },
    {
      title: "Built-in Connectivity",
      description: "4G and WiFi built-in with automatic switching. Never miss a sale due to connectivity issues.",
      icon: "📡",
    },
  ];

  const testimonials = [
    {
      quote: "Switching to Arborpaygo through Dojo was the best decision for our business. The terminals are fast, reliable, and the support is outstanding.",
      author: "Sarah Mitchell",
      role: "Owner, The Corner Shop",
      business: "Retail",
    },
    {
      quote: "We've processed thousands of transactions without a single issue. The next-day payouts have really helped our cash flow.",
      author: "James Chen",
      role: "Manager, Urban Cafe",
      business: "Hospitality",
    },
    {
      quote: "The setup was incredibly easy. We were taking payments the next day. The transparent pricing means no surprises on our statements.",
      author: "Emma Roberts",
      role: "Director, Wellness Studio",
      business: "Services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Payment Solutions for Small & Medium Businesses"
        description="Complete payment solutions for growing UK businesses. Fast setup, transparent pricing, no contracts. Join 110,000+ businesses using Arborpaygo."
        keywords="small business payments, SME card machine, business payment solutions, merchant services UK"
        canonical="https://arborpaygo.com/small-medium-business"
        breadcrumbs={[
          { name: "Industries", url: "/industry/services" },
          { name: "Small & Medium Business", url: "/small-medium-business" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Industries", url: "/industry/services" },
          { name: "Small & Medium Business", url: "/small-medium-business" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Small & Medium Business Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Payment Solutions Built for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Growing Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo partners with Dojo to provide UK small and medium businesses with fast, reliable, and affordable payment solutions. Get started with zero upfront costs - no setup fees, no contracts, no hidden charges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Talk to an Expert
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">24-hour setup</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png"
                alt="Payment Terminals"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">110K+</div>
              <div className="text-sm sm:text-base font-medium text-white/80">UK Businesses Trust Us</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">£0</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Setup Fees</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">99.99%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24hrs</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful payment solutions designed specifically for small and medium businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why Small Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the challenges of running a small business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Choose Your Perfect Terminal
            </h2>
            <p className="text-xl text-gray-600">
              Flexible solutions that grow with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dojo Go",
                description: "Perfect for busy retail and hospitality businesses",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
                features: ["Built-in 4G & WiFi", "All-day battery", "Receipt printer"],
              },
              {
                name: "Dojo Pocket",
                description: "Ideal for mobile businesses and table service",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
                features: ["Ultra-portable", "Digital receipts", "Long battery life"],
              },
              {
                name: "Dojo Wired",
                description: "Best for fixed countertop locations",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
                features: ["Always powered", "EPOS integration", "High-speed processing"],
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-teal-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/products"
                    className="block text-center py-3 text-base font-bold text-teal-700 border-2 border-teal-700 rounded-full hover:bg-teal-700 hover:text-white transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Trusted by UK Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See what business owners say about Arborpaygo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-900 font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-teal-700 font-semibold mt-1">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 110,000+ UK businesses already using Arborpaygo. Setup in 24 hours with no contracts or hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/quote"
              className="px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/contact"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Speak to Our Team
            </a>
          </div>

          <p className="text-sm text-white/70">
            ⭐ Rated 4.8/5 from 15,000+ reviews on Trustpilot
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
