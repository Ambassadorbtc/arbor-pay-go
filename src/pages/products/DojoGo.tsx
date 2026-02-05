import { ArrowRight, Check, Wifi, Zap, Battery, Shield, Printer, CreditCard } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const DojoGo = () => {
  const features = [
    {
      icon: Wifi,
      title: "Built-in 4G & WiFi",
      description: "Dual connectivity with automatic switching ensures you never miss a sale",
    },
    {
      icon: Zap,
      title: "58% Faster Payments",
      description: "Process transactions in seconds, not minutes. Keep queues moving.",
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Up to 500 transactions on a single charge. Perfect for busy days.",
    },
    {
      icon: Printer,
      title: "Built-in Printer",
      description: "Print receipts instantly. No need for separate hardware.",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption and PCI DSS compliance protect every transaction.",
    },
    {
      icon: CreditCard,
      title: "All Payment Types",
      description: "Accept contactless, chip & PIN, Apple Pay, Google Pay, and more.",
    },
  ];

  const specs = [
    { label: "Display", value: "5-inch HD touchscreen" },
    { label: "Connectivity", value: "4G, WiFi, Bluetooth" },
    { label: "Battery Life", value: "Up to 500 transactions" },
    { label: "Printer", value: "Built-in thermal printer" },
    { label: "Payment Methods", value: "Contactless, Chip & PIN, Magstripe" },
    { label: "Dimensions", value: "180mm x 82mm x 68mm" },
    { label: "Weight", value: "490g" },
    { label: "Charging", value: "USB-C fast charging" },
  ];

  const benefits = [
    "No setup fees or monthly charges",
    "Free terminal hardware",
    "Next-day payouts",
    "24/7 UK-based support",
    "No long-term contracts",
    "EPOS integration available",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Dojo Go - Fast Portable Card Machine"
        description="UK's most popular payment terminal. 58% faster payments, built-in 4G & WiFi, all-day battery. Zero setup fees, no contracts. Get started in 24 hours."
        keywords="Dojo Go, card machine UK, portable payment terminal, 4G card machine, contactless payments"
        canonical="https://arborpaygo.com/products/dojo-go"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Dojo Go", url: "/products/dojo-go" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Dojo Go", url: "/products/dojo-go" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Most Popular Terminal
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Dojo Go
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Lightning-Fast Payments
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our most popular terminal. Accept payments in seconds with built-in 4G and WiFi. Perfect for high-volume businesses that need speed and reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Dojo Go
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
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg"
                alt="Dojo Go Terminal"
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need in one compact device
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

      {/* Specifications */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What's Included
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-100"
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Dojo Go?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses using Dojo Go. Setup in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/products"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
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
