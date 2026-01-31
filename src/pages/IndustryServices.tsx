import { useState, useEffect } from "react";
import { ArrowRight, Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const IndustryServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };
  const benefits = [
    "Accept payments anywhere in your facility",
    "Integrated appointment booking systems",
    "Secure, PCI-compliant transactions",
    "Detailed reporting and analytics",
    "Split billing and payment plans",
    "Contactless and mobile payments",
  ];

  const features = [
    {
      title: "Mobile Payment Solutions",
      description: "Take payments at the point of service with portable terminals. Perfect for home visits and mobile practitioners.",
      icon: "📱",
    },
    {
      title: "Appointment Integration",
      description: "Seamlessly integrate payments with your booking system. Reduce no-shows with deposit collection.",
      icon: "📅",
    },
    {
      title: "Secure & Compliant",
      description: "Bank-level encryption and full PCI DSS compliance. Protect sensitive patient information.",
      icon: "🔒",
    },
    {
      title: "Flexible Payment Options",
      description: "Offer payment plans, split billing, and multiple payment methods to suit every client.",
      icon: "💳",
    },
  ];

  const testimonials = [
    {
      quote: "Arborpaygo has transformed how we handle payments. The integration with our booking system saves us hours every week.",
      author: "Dr. Sarah Williams",
      role: "Practice Manager",
      rating: 5,
    },
    {
      quote: "Our clients love the flexibility of payment options. The terminals are fast and reliable.",
      author: "Michael Chen",
      role: "Clinic Director",
      rating: 5,
    },
  ];

  const stats = [
    { value: "110,000+", label: "Businesses Served" },
    { value: "99.99%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "£0", label: "Setup Fees" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industry Payment Solutions - Tailored for Your Business"
        description="Payment solutions for hospitality, retail, personal services, and SMEs. Industry-specific features, EPOS integration, 24/7 support. Zero setup fees."
        keywords="industry payment solutions, sector-specific card machines, business payment systems, UK merchant services"
        canonical="https://arborpaygo.com/industry/services"
        breadcrumbs={[
          { name: "Industries", url: "/industry/services" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Industries", url: "/industry/services" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 sm:pt-40 sm:pb-12 bg-gradient-to-br from-teal-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Service Industry Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Payment Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Service Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From healthcare to beauty, fitness to professional services - streamline your payments and focus on what you do best.
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
                  Talk to Sales
                </a>
              </div>

              <p className="text-sm text-gray-500">
                ⭐ Trusted by 5,000+ service businesses across the UK
              </p>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg"
                alt="Service Industry Payments"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Everything Your Service Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful payment solutions designed specifically for service providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Features Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Built for Service Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Carousel */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for every type of business
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Small & Medium Business",
                description: "Complete payment solutions for growing businesses",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png",
                link: "/small-medium-business",
              },
              {
                title: "Hospitality",
                description: "Speed up service and boost table turnover",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachi2ne_062-2.png",
                link: "/industry/hospitality",
              },
              {
                title: "Retail Stores",
                description: "Fast checkouts that keep queues moving",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachine_062-22.png",
                link: "/industry/retail",
              },
              {
                title: "Personal Services",
                description: "Flexible payments for service providers",
                image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg",
                link: "/industry/personal-services",
              },
            ].map((industry, idx) => (
              <a
                key={idx}
                href={industry.link}
                className="group relative bg-gray-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[3/4]"
              >
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">
                    {industry.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-teal-400 font-bold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-gray-900">
              {[
                {
                  title: "Small & Medium Business",
                  description: "Complete payment solutions for growing businesses",
                  image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png",
                  link: "/small-medium-business",
                },
                {
                  title: "Hospitality",
                  description: "Speed up service and boost table turnover",
                  image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachi2ne_062-2.png",
                  link: "/industry/hospitality",
                },
                {
                  title: "Retail Stores",
                  description: "Fast checkouts that keep queues moving",
                  image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachine_062-22.png",
                  link: "/industry/retail",
                },
                {
                  title: "Personal Services",
                  description: "Flexible payments for service providers",
                  image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg",
                  link: "/industry/personal-services",
                },
              ].map((industry, idx) => (
                <a
                  key={idx}
                  href={industry.link}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-black text-white mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-teal-400 font-bold">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-teal-500 hover:text-teal-600 transition-all shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "w-8 bg-teal-600" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-teal-500 hover:text-teal-600 transition-all shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What Service Providers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-900 font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of service businesses already using Arborpaygo. Setup in 24 hours.
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
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
