import { ArrowRight, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Everything we do is focused on helping our customers succeed and grow their businesses.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every product, service, and interaction.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge payment solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices.",
    },
  ];

  const milestones = [
    { year: "2019", event: "Arborpaygo founded with a mission to revolutionize payments" },
    { year: "2020", event: "Reached 10,000 businesses using our platform" },
    { year: "2021", event: "Launched Dojo Pocket and expanded product line" },
    { year: "2022", event: "Processed over 1 billion transactions" },
    { year: "2023", event: "Grew to 110,000+ businesses across the UK" },
    { year: "2024", event: "Achieved 99.99% uptime and industry-leading speeds" },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "James Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Thompson",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Roberts",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - UK's Fastest Growing Payment Provider"
        description="Arborpaygo is a UK financial services consultancy providing merchant services through Dojo. Serving 110,000+ businesses with innovative payment solutions."
        keywords="about Arborpaygo, payment provider UK, merchant services, financial services consultancy"
        canonical="https://arborpaygo.com/about"
        breadcrumbs={[
          { name: "About", url: "/about" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "About", url: "/about" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              We're Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Business Payments
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, Arborpaygo is a UK based financial services consultancy providing dedicated merchant services through Dojo. Dojo has grown to become the UK's leading payment provider, serving over 110,000 businesses with fast, reliable, and innovative payment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">110K+</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">1.8B</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Transactions/Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">99.99%</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
              <div className="text-sm sm:text-base font-medium text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe every business deserves access to fast, reliable, and affordable payment solutions. Our mission is to empower businesses of all sizes with the tools they need to succeed in today's digital economy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From small independent shops to large enterprise chains, we're committed to providing exceptional service, innovative technology, and transparent pricing that helps businesses grow.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg"
                alt="Our Mission"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Join the UK's Fastest Growing Payment Provider
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Be part of the payment revolution. Start accepting payments in 24 hours.
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
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
