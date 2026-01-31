import { ArrowRight, Wifi, Zap, Battery, Shield } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Products = () => {
  const products = [
    {
            name: "Dojo Go",
      tagline: "Lightning-Fast Payments",
      description: "Our most popular terminal. Accept payments in seconds with built-in 4G and WiFi. Perfect for high-volume businesses that need speed and reliability.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
      price: "From £0 upfront",
      features: [
        { icon: Wifi, text: "Built-in 4G & WiFi" },
        { icon: Zap, text: "58% faster payments" },
        { icon: Battery, text: "All-day battery life" },
        { icon: Shield, text: "Bank-level security" },
      ],
      specs: [
        "5-inch touchscreen",
        "Contactless, chip & PIN",
        "Receipt printer built-in",
        "Dual connectivity",
      ],
    },
    {
            name: "Dojo Pocket",
      tagline: "Portable Powerhouse",
      description: "Take payments anywhere. Perfect for table service, mobile businesses, and on-the-go transactions. Compact yet powerful.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
      price: "From £0 upfront",
      features: [
        { icon: Wifi, text: "Ultra-portable design" },
        { icon: Zap, text: "Order & pay at table" },
        { icon: Battery, text: "Long battery life" },
        { icon: Shield, text: "Secure payments" },
      ],
      specs: [
        "Pocket-sized terminal",
        "Contactless payments",
        "Digital receipts",
        "4G connectivity",
      ],
    },
    {
            name: "Dojo Wired",
      tagline: "Always-On Reliability",
      description: "Countertop solution for high-volume businesses. Never worry about charging. Perfect for fixed locations and kiosks.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
      price: "From £0 upfront",
      features: [
        { icon: Wifi, text: "No charging needed" },
        { icon: Zap, text: "EPOS integration" },
        { icon: Battery, text: "Always powered" },
        { icon: Shield, text: "Kiosk ready" },
      ],
      specs: [
        "Wired power supply",
        "Ethernet connection",
        "Large display",
        "High-speed processing",
      ],
    },
  ];

  const comparison = [
    { feature: "Contactless Payments", go: true, pocket: true, wired: true },
    { feature: "Built-in 4G", go: true, pocket: true, wired: false },
    { feature: "WiFi Connectivity", go: true, pocket: true, wired: true },
    { feature: "Receipt Printer", go: true, pocket: false, wired: true },
    { feature: "Portable", go: true, pocket: true, wired: false },
    { feature: "Battery Powered", go: true, pocket: true, wired: false },
    { feature: "EPOS Integration", go: true, pocket: true, wired: true },
    { feature: "Touchscreen", go: true, pocket: true, wired: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Payment Terminals & Products - Card Machines for Every Business"
        description="Explore Dojo Go, Pocket, and Wired payment terminals. Fast, reliable, secure. Built-in 4G, contactless payments, EPOS integration. Zero setup fees."
        keywords="payment terminals, card machines UK, Dojo Go, Dojo Pocket, Dojo Wired, business payment solutions"
        canonical="https://arborpaygo.com/products"
        breadcrumbs={[
          { name: "Products", url: "/products" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pt-40 sm:pb-6 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
            Our Products
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Choose Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
              Payment Terminal
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From portable to countertop, we have the right solution for every business. All devices include free setup, 24/7 support, and no contracts.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-4 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 lg:space-y-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                  {product.name}
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  {product.tagline}
                </h2>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-teal-600" />
                        </div>
                        <span className="font-semibold text-gray-900">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-stone-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Key Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/quote"
                    className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get This Terminal
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Compare Our Terminals
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect fit for your business
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                    <th className="text-left p-6 font-bold">Feature</th>
                    <th className="text-center p-6 font-bold">Dojo Go</th>
                    <th className="text-center p-6 font-bold">Dojo Pocket</th>
                    <th className="text-center p-6 font-bold">Dojo Wired</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">
                        {row.feature}
                      </td>
                      <td className="p-6 text-center">
                        {row.go ? (
                          <div className="inline-flex w-8 h-8 rounded-full bg-teal-100 items-center justify-center">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.pocket ? (
                          <div className="inline-flex w-8 h-8 rounded-full bg-teal-100 items-center justify-center">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.wired ? (
                          <div className="inline-flex w-8 h-8 rounded-full bg-teal-100 items-center justify-center">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Not Sure Which Terminal to Choose?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team will help you find the perfect solution for your business
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
              href="/contact"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
