import { ArrowRight, Check, Scissors, Heart, Dumbbell, Briefcase, Clock, Smartphone } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const PersonalServices = () => {
  const challenges = [
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description: "Take payments anywhere - at the client's location, in your studio, or on the go with portable terminals.",
    },
    {
      icon: Clock,
      title: "Appointment Integration",
      description: "Seamlessly integrate payments with your booking system. Collect deposits and reduce no-shows.",
    },
    {
      icon: Heart,
      title: "Client Experience",
      description: "Provide a professional payment experience that matches your high-quality service.",
    },
    {
      icon: Check,
      title: "Flexible Options",
      description: "Offer payment plans, split billing, and multiple payment methods to suit every client.",
    },
  ];

  const services = [
    {
      type: "Beauty & Wellness",
      description: "Salons, spas, and beauty therapists need flexible payment solutions for treatments and retail.",
      icon: "💅",
      features: [
        "Pay at chair with portable terminals",
        "Retail product sales integration",
        "Appointment booking with deposits",
        "Client payment history tracking",
      ],
    },
    {
      type: "Fitness & Gyms",
      description: "Personal trainers and fitness studios benefit from membership payment automation.",
      icon: "💪",
      features: [
        "Recurring membership payments",
        "Class booking with payment",
        "Personal training session billing",
        "Equipment and merchandise sales",
      ],
    },
    {
      type: "Healthcare & Dental",
      description: "Medical and dental practices need secure, compliant payment processing.",
      icon: "🏥",
      features: [
        "HIPAA-compliant processing",
        "Treatment plan payment options",
        "Insurance co-pay collection",
        "Secure patient data handling",
      ],
    },
    {
      type: "Professional Services",
      description: "Consultants, therapists, and professionals need simple invoicing and payment collection.",
      icon: "💼",
      features: [
        "Invoice payment links",
        "Retainer and deposit collection",
        "Recurring billing automation",
        "Professional payment receipts",
      ],
    },
  ];

  const benefits = [
    "Accept payments at client locations",
    "Integrated appointment booking",
    "Secure, PCI-compliant transactions",
    "Detailed reporting and analytics",
    "Split billing and payment plans",
    "Contactless and mobile payments",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Payment Solutions for Personal Services"
        description="Flexible payment solutions for beauty salons, fitness studios, healthcare, and professional services. Mobile payments, booking integration, payment plans."
        keywords="salon card machine, beauty payment terminal, fitness studio payments, healthcare payments, mobile service payments"
        canonical="https://arborpaygo.com/industry/personal-services"
        breadcrumbs={[
          { name: "Industries", url: "/industry/services" },
          { name: "Personal Services", url: "/industry/personal-services" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Industries", url: "/industry/services" },
          { name: "Personal Services", url: "/industry/personal-services" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                <Scissors className="w-4 h-4" />
                Personal Services Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Payment Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Service Professionals
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides personal service businesses with Dojo's flexible payment solutions. From beauty salons to fitness studios, healthcare to professional services - accept payments anywhere with zero setup fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/quote"
                  className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Talk to an Expert
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Mobile payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Booking integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Payment plans</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg"
                alt="Personal Services Payment Terminal"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">110,000+</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">50%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Fewer No-Shows</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">99.99%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Uptime</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Built for Service Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Payment solutions designed for personal service businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Services We Support
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for every type of personal service business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
                  {service.type}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Everything You Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-gray-900 font-semibold leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Upgrade Your Payments?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 15,000+ service professionals using Arborpaygo. Setup in 24 hours with no setup fees and flexible agreements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/quote"
              className="px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/contact"
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Speak to Our Team
            </a>
          </div>

          <p className="text-sm text-white/70">
            ⭐ Trusted by service professionals across the UK
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
