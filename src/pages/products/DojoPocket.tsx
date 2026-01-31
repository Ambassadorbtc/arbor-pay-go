import { ArrowRight, Check, Wifi, Zap, Battery, Shield, Smartphone, Users } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const DojoPocket = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Ultra-Portable",
      description: "Pocket-sized design fits anywhere. Perfect for mobile businesses and table service.",
    },
    {
      icon: Users,
      title: "Order & Pay at Table",
      description: "Take orders and payments tableside. Improve customer experience and turnover.",
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "All-day battery keeps you running through the busiest shifts.",
    },
    {
      icon: Wifi,
      title: "4G Connectivity",
      description: "Built-in 4G ensures you're always connected, wherever you are.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level encryption protects every transaction.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick contactless payments keep service moving smoothly.",
    },
  ];

  const specs = [
    { label: "Display", value: "4-inch touchscreen" },
    { label: "Connectivity", value: "4G, WiFi, Bluetooth" },
    { label: "Battery Life", value: "All-day operation" },
    { label: "Receipts", value: "Digital receipts via email/SMS" },
    { label: "Payment Methods", value: "Contactless, Chip & PIN" },
    { label: "Dimensions", value: "Compact pocket-sized" },
    { label: "Weight", value: "Lightweight design" },
    { label: "Charging", value: "USB-C charging dock" },
  ];

  const useCases = [
    {
      title: "Restaurants & Cafes",
      description: "Take orders and payments at the table. Speed up service and increase tips.",
      icon: "🍽️",
    },
    {
      title: "Mobile Businesses",
      description: "Perfect for food trucks, market stalls, and pop-up shops.",
      icon: "🚚",
    },
    {
      title: "Delivery Services",
      description: "Accept payments on delivery with secure mobile connectivity.",
      icon: "📦",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Dojo Pocket - Portable Payment Terminal"
        description="Ultra-portable payment terminal perfect for table service and mobile businesses. Built-in 4G, all-day battery, digital receipts. Zero setup fees."
        keywords="portable card machine, mobile payment terminal, table service payments, Dojo Pocket, portable POS"
        canonical="https://arborpaygo.com/products/dojo-pocket"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Dojo Pocket", url: "/products/dojo-pocket" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Dojo Pocket", url: "/products/dojo-pocket" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-gray-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Portable Solution
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Dojo Pocket
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Portable Powerhouse
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take payments anywhere. Perfect for table service, mobile businesses, and on-the-go transactions. Compact yet powerful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Dojo Pocket
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
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg"
                alt="Dojo Pocket Terminal"
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
              Designed for Mobility
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need in a pocket-sized device
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Dojo Pocket?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Perfect for businesses on the move. Setup in 24 hours.
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
