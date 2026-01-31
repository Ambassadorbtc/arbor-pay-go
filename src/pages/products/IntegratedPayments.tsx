import { ArrowRight, Check, Zap, Shield, RefreshCw, Link2, Clock, Smartphone, BarChart, Settings } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const IntegratedPayments = () => {
  const heroFeatures = [
    "450+ EPOS integrations",
    "Real-time data sync",
    "Zero setup fees",
  ];

  const keyBenefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Sync",
      description: "Every transaction instantly updates across your EPOS, accounting software, and payment terminal. No delays, no manual entry.",
      stat: "Real-time",
    },
    {
      icon: Shield,
      title: "Error-Free Operations",
      description: "Eliminate manual keying mistakes. Amounts flow directly from your EPOS to the terminal - tap once, payment done.",
      stat: "100% Accurate",
    },
    {
      icon: RefreshCw,
      title: "Always Trading",
      description: "If your EPOS goes offline, instantly switch to standalone mode. Keep taking payments without interruption.",
      stat: "Zero Downtime",
    },
  ];

  const capabilities = [
    {
      title: "Instant Setup, Lasting Results",
      description: "Connect your payment terminal to your EPOS in minutes, not hours. Our team works with your provider to get you operational fast - most integrations complete within 24 hours.",
      icon: Clock,
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
    },
    {
      title: "One Tap, Complete Transaction",
      description: "Enter the amount once in your EPOS and watch it appear on your terminal automatically. No re-keying, no mistakes, no wasted time. Your end-of-day reconciliation becomes effortless.",
      icon: Smartphone,
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
    },
    {
      title: "Unified Business Intelligence",
      description: "See your complete business picture in one dashboard. Sales, inventory, payments, and customer data all synchronized and ready to analyze.",
      icon: BarChart,
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg",
    },
  ];

  const paymentModes = [
    {
      mode: "Counter Service",
      description: "Perfect for high-speed retail and quick-service venues. Amount pushes from EPOS to terminal instantly - customers tap and go.",
      benefits: [
        "Eliminate queue bottlenecks",
        "Process 3x more customers per hour",
        "Automatic receipt generation",
        "Instant inventory updates",
      ],
      icon: "🏪",
      bestFor: "Retail stores, cafes, quick-service restaurants",
    },
    {
      mode: "Table Service",
      description: "Bring the payment to your customers. Split bills, add tips, and close tabs right at the table using your portable terminal.",
      benefits: [
        "Faster table turnover",
        "Improved customer experience",
        "Built-in tip management",
        "Split bill functionality",
      ],
      icon: "🍽️",
      bestFor: "Full-service restaurants, bars, hotels",
    },
  ];

  const integrationPartners = [
    {
      category: "EPOS Systems",
      count: "450+",
      examples: ["Lightspeed", "Square", "Clover", "Toast", "Revel", "Epos Now"],
      icon: "💻",
    },
    {
      category: "Accounting",
      count: "25+",
      examples: ["Xero", "QuickBooks", "Sage", "FreeAgent", "KashFlow"],
      icon: "📊",
    },
    {
      category: "Booking Systems",
      count: "60+",
      examples: ["OpenTable", "Resy", "Booksy", "Fresha", "Vagaro"],
      icon: "📅",
    },
    {
      category: "E-commerce",
      count: "40+",
      examples: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      icon: "🛒",
    },
  ];

  const technicalFeatures = [
    {
      title: "Bank-Grade Security",
      description: "Every integration is PCI DSS Level 1 certified with end-to-end encryption. Your data and your customers' information stay protected.",
    },
    {
      title: "Automatic Updates",
      description: "Software updates happen automatically in the background. You always have the latest features and security patches without any downtime.",
    },
    {
      title: "Custom API Access",
      description: "Need something unique? Our developer-friendly API lets you build custom integrations with full technical support from our team.",
    },
    {
      title: "No Extra Hardware",
      description: "Use your existing EPOS and terminals. Our integration works with what you already have - no expensive upgrades required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Integrated Payments - Connect Your EPOS & Payment Terminal"
        description="450+ EPOS integrations. Real-time sync, error-free operations, automatic reconciliation. Connect your payment terminal to your business systems."
        keywords="EPOS integration, integrated payments, payment system integration, POS integration UK, automated payments"
        canonical="https://arborpaygo.com/integrated-payments"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Integrated Payments", url: "/integrated-payments" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Integrated Payments", url: "/integrated-payments" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-teal-50 via-white to-stone-50 relative overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
              Integrated Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 leading-[1.3]">
              Your Systems.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800 mt-4">
                Working as One.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect your payment terminal with your EPOS, accounting software, and business tools. One transaction, everything updated automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/quote"
                className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Integrated
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                Talk to Integration Expert
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {heroFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">450+</div>
              <div className="text-sm sm:text-base font-medium text-white/80">EPOS Partners</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">100%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Automatic Sync</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">0</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Manual Entry</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24hrs</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Transform How You Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three game-changing benefits that will revolutionize your operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white to-stone-50 p-10 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute top-6 right-6 text-6xl font-black text-teal-600/10">
                    {benefit.stat}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-3xl font-black text-teal-600">{benefit.stat}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities with Images */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              How Integration Powers Your Business
            </h2>
          </div>

          <div className="space-y-24">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="text-sm font-bold text-teal-700 uppercase tracking-wider">
                        Capability {idx + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      {capability.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>

                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Modes */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Two Modes. Total Control.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you take payments based on your business type
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {paymentModes.map((mode, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-stone-50 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-white">
                  <div className="text-5xl mb-4">{mode.icon}</div>
                  <h3 className="text-3xl font-black mb-3">
                    {mode.mode}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    {mode.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-900 font-semibold">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-sm font-bold text-gray-500 uppercase mb-2">Best For</div>
                    <div className="text-gray-900 font-semibold">{mode.bestFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Get Integrated in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us Your System",
                description: "Let us know which EPOS or business software you use. We'll confirm compatibility instantly.",
              },
              {
                step: "2",
                title: "We Handle Setup",
                description: "Our technical team works with your provider to configure the integration. Most complete within 24 hours.",
              },
              {
                step: "3",
                title: "Start Trading",
                description: "Begin taking integrated payments immediately. Everything syncs automatically from day one.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  {step.step}
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-900 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-bold">7 Days a Week</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Expert Integration Support
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our technical specialists are available 7 days a week, 8am-11pm to help with your integration. From initial setup to ongoing optimization, we're here to ensure everything runs smoothly.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Free Technical Setup</div>
                    <div className="text-white/80 text-sm">We handle all the configuration</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Ongoing Support</div>
                    <div className="text-white/80 text-sm">Help whenever you need it</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Provider Coordination</div>
                    <div className="text-white/80 text-sm">We work with your EPOS team</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Training Included</div>
                    <div className="text-white/80 text-sm">Get your team up to speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            Ready to Connect Everything?
          </h2>
          
          <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join 110,000+ businesses using integrated payments. Setup in 24 hours with expert support included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="/quote"
              className="px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Integration
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/contact"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Speak to Specialist
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Free technical support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>24-hour setup</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
