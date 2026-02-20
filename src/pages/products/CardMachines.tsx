import { ArrowRight, Check, CreditCard, Zap, Shield } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const CardMachines = () => {
  const terminals = [
    {
      name: "Dojo Go",
      description: "Fast, portable payments on 4G",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
      link: "/products/dojo-go",
    },
    {
      name: "Dojo Pocket",
      description: "Orders and payments in one device",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
      link: "/products/dojo-pocket",
    },
    {
      name: "Dojo Wired",
      description: "Wired countertop card machine",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
      link: "/products/dojo-wired",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process payments 58% faster than market average",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Bank-level encryption and PCI DSS compliance",
    },
    {
      icon: CreditCard,
      title: "All Payment Types",
      description: "Accept contactless, chip & PIN, Apple Pay, Google Pay",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Card Machines
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Built for Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Arborpaygo provides Dojo's complete range of card machines. Fast, reliable, and designed for UK businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {terminals.map((terminal, idx) => (
              <a
                key={idx}
                href={terminal.link}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={terminal.image}
                    alt={terminal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{terminal.name}</h3>
                  <p className="text-gray-600 mb-4">{terminal.description}</p>
                  <span className="inline-flex items-center gap-2 text-teal-700 font-bold">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Choose your perfect card machine and start accepting payments in 24 hours
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
