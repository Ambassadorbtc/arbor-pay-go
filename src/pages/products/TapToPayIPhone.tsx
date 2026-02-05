    import { ArrowRight, Check, Smartphone, Shield, Zap } from "lucide-react";
    import { Header } from "@/sections/Header";
    import { Footer } from "@/sections/Footer";
    import { SEO } from "@/components/SEO";
    import { Breadcrumbs } from "@/components/Breadcrumbs";

    export const TapToPayIPhone = () => {
  const features = [
    {
      icon: Smartphone,
      title: "No Extra Hardware",
      description: "Turn your iPhone into a payment terminal - no additional devices needed",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Download the app and start accepting payments in minutes",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level security with Apple's built-in NFC technology",
    },
  ];

  const benefits = [
    "Accept contactless cards and digital wallets",
    "No monthly fees or hardware costs",
    "Same competitive transaction rate",
    "Perfect for mobile businesses",
    "Instant payment confirmation",
    "Digital receipt delivery",
  ];

      return (
        <div className="min-h-screen bg-white">
          <SEO
            title="Tap to Pay on iPhone - No Card Machine Needed"
            description="Turn your iPhone into a payment terminal. Accept contactless payments with no extra hardware. Secure, fast, and easy setup."
            keywords="tap to pay iphone, iphone card machine, mobile payments, contactless iphone payments, softpos"
            canonical="https://arborpaygo.com/products/tap-to-pay-iphone"
            breadcrumbs={[
              { name: "Products", url: "/products" },
              { name: "Tap to Pay on iPhone", url: "/products/tap-to-pay-iphone" }
            ]}
          />
          <Header />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
            <Breadcrumbs items={[
              { name: "Products", url: "/products" },
              { name: "Tap to Pay on iPhone", url: "/products/tap-to-pay-iphone" }
            ]} />
          </div>

          <section className="pt-8 pb-16 sm:pb-24 bg-gradient-to-br from-gray-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Remote Payments
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Tap to Pay on iPhone
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Your iPhone is Your Terminal
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides Dojo's Tap to Pay on iPhone solution. Accept contactless payments using just your iPhone - no card reader required, no setup fees.
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
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://a.storyblok.com/f/267449/1080x880/d16a41dd4e/tap-usp-3.jpg/m/800x651"
                alt="Tap to Pay on iPhone"
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
              Simple, Secure, Smart
            </h2>
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
            Start Accepting Payments Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Download the app and turn your iPhone into a payment terminal
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
