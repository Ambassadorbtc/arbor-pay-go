import { ArrowRight, Check, Wifi, Zap, Shield, Plug, Monitor, Settings } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const DojoWired = () => {
  const features = [
    {
      icon: Plug,
      title: "Always Powered",
      description: "No charging needed. Plugged in and ready 24/7 for continuous operation.",
    },
    {
      icon: Settings,
      title: "EPOS Integration",
      description: "Seamlessly integrates with over 450 EPOS systems for streamlined operations.",
    },
    {
      icon: Zap,
      title: "High-Speed Processing",
      description: "Lightning-fast transaction processing for high-volume businesses.",
    },
    {
      icon: Monitor,
      title: "Large Display",
      description: "Clear, easy-to-read screen for both staff and customers.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.99% uptime guarantee.",
    },
    {
      icon: Wifi,
      title: "Ethernet Connection",
      description: "Stable wired connection ensures consistent performance.",
    },
  ];

  const specs = [
    { label: "Display", value: "Large touchscreen display" },
    { label: "Connectivity", value: "Ethernet, WiFi" },
    { label: "Power", value: "Wired power supply (always on)" },
    { label: "Printer", value: "Built-in receipt printer" },
    { label: "Payment Methods", value: "Contactless, Chip & PIN, Magstripe" },
    { label: "Mounting", value: "Countertop or kiosk ready" },
    { label: "Integration", value: "450+ EPOS systems" },
    { label: "Durability", value: "Commercial-grade construction" },
  ];

  const useCases = [
    {
      title: "Retail Stores",
      description: "Perfect for fixed checkout counters with high transaction volumes.",
      icon: "🏪",
    },
    {
      title: "Quick Service",
      description: "Ideal for fast food and quick service restaurants with busy counters.",
      icon: "🍔",
    },
    {
      title: "Self-Service Kiosks",
      description: "Integrate into kiosks for automated customer payments.",
      icon: "🖥️",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Dojo Wired - Countertop Card Machine"
        description="Always-on countertop payment terminal. No charging needed, EPOS integration, high-speed processing. Perfect for fixed locations. Zero setup fees."
        keywords="countertop card machine, wired payment terminal, EPOS integration, Dojo Wired, kiosk payments"
        canonical="https://arborpaygo.com/products/dojo-wired"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Dojo Wired", url: "/products/dojo-wired" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Dojo Wired", url: "/products/dojo-wired" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Countertop Solution
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Dojo Wired
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                  Always-On Reliability
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Countertop solution for high-volume businesses. Never worry about charging. Perfect for fixed locations and kiosks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Dojo Wired
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Talk to Sales
                </a>
              </div>

              <p className="text-sm text-gray-500">
                £0 setup fees • £0 upfront • No contracts
              </p>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg"
                alt="Dojo Wired Terminal"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Built for High Volume
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable countertop solution for busy businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="divide-y divide-gray-100">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-6 hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{spec.label}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why Choose Dojo Wired
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "No battery charging required",
              "Stable ethernet connection",
              "EPOS integration included",
              "Commercial-grade durability",
              "24/7 UK-based support",
              "No long-term contracts",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-lg"
              >
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900 font-semibold leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Dojo Wired?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Perfect for fixed locations and high-volume businesses. Setup in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="px-10 py-5 text-lg font-bold text-teal-600 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/products"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-600 transition-all duration-200 flex items-center justify-center"
            >
              Compare All Terminals
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
