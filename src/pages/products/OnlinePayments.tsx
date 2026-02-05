import { ArrowRight, Check, Globe, Lock, Smartphone, TrendingUp } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const OnlinePayments = () => {
  const features = [
    {
      icon: Globe,
      title: "Accept Payments Online",
      description: "Take payments through your website, social media, or payment links",
    },
    {
      icon: Lock,
      title: "Secure Checkout",
      description: "PCI DSS compliant with 3D Secure authentication",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless checkout experience on any device",
    },
    {
      icon: TrendingUp,
      title: "Boost Conversions",
      description: "Fast checkout process increases completed sales",
    },
  ];

  const benefits = [
    "Accept all major cards and digital wallets",
    "Payment links for social media and email",
    "Customizable checkout page",
    "Real-time transaction notifications",
    "Detailed online reporting",
    "Same competitive 1.2% rate",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Online Payments - Secure Payment Gateway"
        description="Accept payments online securely. Easy integration, fraud protection, and fast settlements. Perfect for e-commerce and remote businesses."
        keywords="online payments, payment gateway, e-commerce payments, secure checkout, payment links"
        canonical="https://arborpaygo.com/products/online-payments"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Online Payments", url: "/products/online-payments" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Online Payments", url: "/products/online-payments" }
        ]} />
      </div>
      
      <section className="pt-8 pb-16 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Remote Payments
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Online Payments
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Sell Anywhere, Anytime
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides Dojo's online payment solutions. Accept payments through your website, social media, or payment links with zero setup fees. Perfect for businesses selling online or taking remote payments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Talk to Sales
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg"
                alt="Online Payments"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Everything You Need to Sell Online
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Start Selling Online Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Set up online payments in minutes and start accepting orders
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
