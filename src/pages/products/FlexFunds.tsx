    import { ArrowRight, Check, Zap, Calendar, TrendingUp, Shield } from "lucide-react";
    import { Header } from "@/sections/Header";
    import { Footer } from "@/sections/Footer";
    import { SEO } from "@/components/SEO";
    import { Breadcrumbs } from "@/components/Breadcrumbs";

    export const FlexFunds = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "Access funds immediately when you need them",
    },
    {
      icon: Calendar,
      title: "Flexible Repayment",
      description: "Repay based on your daily card sales",
    },
    {
      icon: TrendingUp,
      title: "Grow as You Go",
      description: "Your credit limit increases as your business grows",
    },
    {
      icon: Shield,
      title: "No Fixed Payments",
      description: "Repayments adjust with your sales volume",
    },
  ];

  const benefits = [
    "No fixed monthly payments",
    "Automatic repayment from card sales",
    "Reusable credit line",
    "No early repayment fees",
    "Quick online application",
    "Transparent pricing",
  ];

      return (
        <div className="min-h-screen bg-white">
          <SEO
            title="Flex Funds - Flexible Business Credit"
            description="Access flexible business funding that grows with you. Instant access, repay from card sales, no fixed monthly payments."
            keywords="flexible business funding, business credit line, revenue based finance, flexible finance"
            canonical="https://arborpaygo.com/products/flex-funds"
            breadcrumbs={[
              { name: "Products", url: "/products" },
              { name: "Flex Funds", url: "/products/flex-funds" }
            ]}
          />
          <Header />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
            <Breadcrumbs items={[
              { name: "Products", url: "/products" },
              { name: "Flex Funds", url: "/products/flex-funds" }
            ]} />
          </div>

          <section className="pt-8 pb-16 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Growth Tools
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Flex Funds
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Flexible Business Finance
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides Dojo's Flex Funds - a flexible credit line that grows with your business. Access funds when you need them, repay from your card sales, with no setup fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png"
                alt="Flex Funds"
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
              Finance That Flexes With You
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
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Key Benefits</h3>
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
            Get Flexible Funding Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Apply in minutes and access funds when you need them
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Apply for Flex Funds
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
