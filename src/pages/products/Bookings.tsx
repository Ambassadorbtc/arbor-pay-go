import { ArrowRight, Check, Calendar, Users, Clock, Bell, TrendingUp, Smartphone } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Bookings = () => {
  const features = [
    {
      icon: Calendar,
      title: "Online Reservations",
      description: "Let diners book tables 24/7 through your website or social media",
    },
    {
      icon: Users,
      title: "Virtual Queue Management",
      description: "Manage walk-ins efficiently with digital waitlists and SMS notifications",
    },
    {
      icon: Clock,
      title: "Table Management",
      description: "Optimize table turnover and maximize covers during peak service",
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Reduce no-shows with automatic SMS and email booking confirmations",
    },
    {
      icon: Smartphone,
      title: "Guest Notifications",
      description: "Keep guests informed with real-time updates on table availability",
    },
    {
      icon: TrendingUp,
      title: "Booking Analytics",
      description: "Track reservation trends and optimize your restaurant operations",
    },
  ];

  const benefits = [
    {
      title: "Reduce No-Shows",
      description: "Automated reminders and deposit collection help ensure guests turn up",
    },
    {
      title: "Maximize Covers",
      description: "Smart table management helps you serve more guests during busy periods",
    },
    {
      title: "Improve Guest Experience",
      description: "Professional booking system creates a great first impression",
    },
    {
      title: "Save Staff Time",
      description: "Reduce phone calls and manual booking management",
    },
  ];

  const useCases = [
    {
      title: "Table Reservations",
      description: "Accept bookings online with real-time availability and instant confirmation",
      icon: "🍽️",
    },
    {
      title: "Virtual Queues",
      description: "Manage walk-in guests with digital waitlists and SMS notifications when tables are ready",
      icon: "📱",
    },
    {
      title: "Deposit Collection",
      description: "Take deposits for large bookings or peak times to reduce no-shows",
      icon: "💳",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Restaurant Bookings & Virtual Queues"
        description="Online reservation system with virtual queue management. Reduce no-shows, maximize covers, integrated payments. Perfect for restaurants and cafes."
        keywords="restaurant booking system, table reservations, virtual queue, restaurant management, online bookings"
        canonical="https://arborpaygo.com/products/bookings"
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: "Bookings", url: "/products/bookings" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Products", url: "/products" },
          { name: "Bookings", url: "/products/bookings" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
                Restaurant Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Bookings & Virtual Queues
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Fill More Tables
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Arborpaygo provides Dojo's restaurant booking system with integrated payments. Manage reservations, virtual queues, and walk-ins all in one place with zero setup fees. Perfect for restaurants, cafes, and hospitality venues.
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
                  Book a Demo
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Integrated payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">Virtual queues</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold">SMS notifications</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg"
                alt="Restaurant Bookings System"
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
              Everything You Need to Manage Bookings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From online reservations to virtual queues, we've got you covered
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

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three powerful ways to manage your restaurant bookings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
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
              Why Restaurants Choose Dojo Bookings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Integrated with Your Payments
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dojo Bookings works seamlessly with your Dojo payment terminals. Take deposits, process pre-payments, and manage your entire guest experience from one platform.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Collect Deposits</div>
                    <div className="text-gray-600">Secure bookings with card deposits for large parties or peak times</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Pre-Payment Options</div>
                    <div className="text-gray-600">Take payment for set menus or special events in advance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Unified Reporting</div>
                    <div className="text-gray-600">See bookings and payments together in one dashboard</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg"
                alt="Integrated Payments"
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
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">50%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Fewer No-Shows</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">30%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">More Covers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Online Bookings</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">100%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Integrated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Fill More Tables?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start managing bookings and virtual queues with Dojo today
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
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
