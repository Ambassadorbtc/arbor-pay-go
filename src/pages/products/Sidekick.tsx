import { ArrowRight, Check, BarChart, TrendingUp, PieChart, Target, Smartphone, Clock } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Sidekick = () => {
  const features = [
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Track sales, transactions, and performance as they happen",
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Identify trends and opportunities to grow your business",
    },
    {
      icon: PieChart,
      title: "Detailed Reports",
      description: "Comprehensive reporting on all aspects of your business",
    },
    {
      icon: Target,
      title: "Performance Goals",
      description: "Set targets and track progress towards your objectives",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Check your business performance anywhere, anytime",
    },
    {
      icon: Clock,
      title: "Historical Data",
      description: "Compare performance across days, weeks, and months",
    },
  ];

  const benefits = [
    "Sales performance tracking",
    "Customer behavior insights",
    "Peak trading hours analysis",
    "Product performance metrics",
    "Staff performance reports",
    "Custom report builder",
    "Export data to Excel/CSV",
    "Multi-location comparison",
  ];

  const capabilities = [
    {
      title: "Track Your Sales",
      description: "Monitor your daily, weekly, and monthly sales performance. See which products are selling best and identify trends to optimize your inventory.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/img/uploaded-asset-1769704874907-0.png",
    },
    {
      title: "Understand Your Customers",
      description: "Gain insights into customer spending patterns, peak times, and payment preferences. Use this data to improve service and boost revenue.",
      image: "https://a.storyblok.com/f/267449/1080x910/3c640a4907/admin.jpg/m/800x674",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Dojo Sidekick - Business Intelligence & Analytics"
        description="Real-time business analytics and insights. Track sales, understand customers, optimize operations. Mobile access, custom reports, data export."
        keywords="business analytics, sales reporting, business intelligence, payment analytics, retail insights"
        canonical="https://arborpaygo.com/products/sidekick"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Sidekick", url: "/products/sidekick" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Sidekick", url: "/products/sidekick" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Growth Tools
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Dojo Sidekick
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Business Intelligence at Your Fingertips
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides Dojo's Sidekick analytics platform. Get powerful insights into your business performance and make data-driven decisions - with zero setup fees.
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
                  See Demo
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Real-time data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Mobile access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Custom reports</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://a.storyblok.com/f/267449/1080x992/62e91134cb/understanding-business-2.jpg/m/800x734"
                alt="Dojo Sidekick Dashboard"
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
              Powerful Business Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand and grow your business
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

      {/* Capabilities Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">
              See Your Business Clearly
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful analytics that help you make better decisions
            </p>
          </div>

          <div className="space-y-10">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""} animate-fade-in-up`}>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">
              What You Get with Sidekick
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-lg"
              >
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-semibold leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Make Smarter Business Decisions
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Get the insights you need to grow your business with Dojo Sidekick
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="px-8 py-3 text-base font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
