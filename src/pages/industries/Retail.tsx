import { ArrowRight, Check, ShoppingBag, Zap, Users, TrendingUp, Clock, Shield } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Retail = () => {
  const challenges = [
    {
      icon: Zap,
      title: "Speed Up Checkouts",
      description: "Process payments 58% faster than traditional terminals. Keep queues moving and customers happy during peak hours.",
    },
    {
      icon: Users,
      title: "Serve More Customers",
      description: "Fast payment processing means you can serve more customers in less time, increasing your daily revenue.",
    },
    {
      icon: TrendingUp,
      title: "Boost Sales",
      description: "Accept all payment methods including contactless, Apple Pay, and Google Pay. Never turn away a customer.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level encryption and fraud detection protect your business and customers with every transaction.",
    },
  ];

  const solutions = [
    {
      type: "Small Retail Stores",
      description: "Independent shops and boutiques need reliable, affordable payment solutions that just work.",
      features: [
        "No monthly fees or contracts",
        "Next-day payouts improve cash flow",
        "Built-in 4G backup connectivity",
        "Inventory integration available",
      ],
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
    },
    {
      type: "Multi-Location Retail",
      description: "Chain stores and franchises benefit from centralized reporting and consistent payment experiences.",
      features: [
        "Unified dashboard for all locations",
        "Consistent customer experience",
        "Bulk terminal deployment",
        "Advanced analytics and reporting",
      ],
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
    },
    {
      type: "Mobile & Pop-Up Retail",
      description: "Market stalls, pop-ups, and mobile retailers need portable solutions that work anywhere.",
      features: [
        "Ultra-portable Dojo Pocket",
        "Built-in 4G - no WiFi needed",
        "All-day battery life",
        "Digital receipt delivery",
      ],
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
    },
  ];

  const benefits = [
    "Accept all major cards and digital wallets",
    "Real-time sales reporting and analytics",
    "EPOS and inventory system integration",
    "Multi-location management dashboard",
    "No setup fees or monthly charges",
    "24/7 UK-based customer support",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Payment Solutions for Retail Businesses"
        description="Fast checkout solutions for retail stores. 58% faster payments, EPOS integration, multi-location support. Join 35,000+ retail businesses."
        keywords="retail card machine, shop payment terminal, retail POS system, store card reader, retail payments UK"
        canonical="https://arborpaygo.com/industry/retail"
        breadcrumbs={[
          { name: "Industries", url: "/industry/services" },
          { name: "Retail", url: "/industry/retail" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Industries", url: "/industry/services" },
          { name: "Retail", url: "/industry/retail" }
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                <ShoppingBag className="w-4 h-4" />
                Retail Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Payment Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Retail Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides retail businesses with Dojo's fast, reliable payment terminals. Speed up checkouts, reduce queues, and give customers the payment experience they expect - with zero setup fees.
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
                  <span className="font-semibold">58% faster checkouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">EPOS integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Multi-location</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachine_062-22.png"
                alt="Retail Payment Terminal"
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
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">110,000+</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">58%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Faster Checkouts</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">99.99%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Uptime</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Built for Retail Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of retail businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Solutions for Every Retail Business
            </h2>
            <p className="text-xl text-gray-600">
              From independent shops to multi-location chains
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    {solution.type}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/quote"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-xl hover:scale-105"
                  >
                    Get This Solution
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={solution.image}
                      alt={solution.type}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Everything Your Retail Business Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-gray-900 font-semibold leading-relaxed">
                  {benefit}
                </span>
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
            Ready to Transform Your Retail Payments?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 35,000+ retail businesses using Arborpaygo. Get set up in 24 hours with no contracts or setup fees.
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
            ⭐ Trusted by leading retail businesses across the UK
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
