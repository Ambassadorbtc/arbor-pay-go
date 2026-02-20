import { useState } from "react";
import { ArrowRight, Zap, Wifi, Shield } from "lucide-react";

export const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Dojo Go",
      tagline: "Lightning-Fast Payments",
      description: "Our most popular terminal. Accept payments in seconds with built-in 4G and WiFi.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
      features: ["Built-in 4G & WiFi", "58% faster payments", "All-day battery"],
      color: "from-teal-500 to-teal-700",
    },
    {
      name: "Dojo Pocket",
      tagline: "Portable Powerhouse",
      description: "Take payments anywhere. Perfect for table service and mobile businesses.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
      features: ["Ultra-portable", "Order & pay", "Instant receipts"],
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Dojo Wired",
      tagline: "Always-On Reliability",
      description: "Countertop solution for high-volume businesses. Never worry about charging.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
      features: ["No charging needed", "EPOS integration", "Kiosk ready"],
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Choose Your Perfect Terminal
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            All devices include free setup, 24/7 support, and no contracts
          </p>
        </div>

        {/* Product tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 max-w-3xl mx-auto">
          {products.map((product, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProduct(idx)}
              className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeProduct === idx
                  ? "bg-gradient-to-r " + product.color + " text-white shadow-xl scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active product display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 sm:h-96 lg:h-auto bg-gradient-to-br from-stone-100 to-stone-200">
              <img
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${products[activeProduct].color} text-white text-sm font-bold mb-6 self-start`}>
                {products[activeProduct].name}
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                {products[activeProduct].tagline}
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {products[activeProduct].description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {products[activeProduct].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="font-semibold text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/quote"
                  className={`group px-8 py-4 text-base font-bold text-white bg-gradient-to-r ${products[activeProduct].color} rounded-full hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  Get This Terminal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`/products/${products[activeProduct].name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not sure which one is right for you?</p>
          <a
            href="/compare"
            className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors"
          >
            Compare All Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
