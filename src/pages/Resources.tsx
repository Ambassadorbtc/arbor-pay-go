import { ArrowRight, BookOpen, Video, FileText, Download } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Resources = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Guides & Tutorials",
      description: "Step-by-step guides to help you get the most from Arborpaygo",
      count: "24 resources",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Watch demos and learn from our experts",
      count: "18 videos",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real success stories from our customers",
      count: "12 stories",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Brochures, spec sheets, and documentation",
      count: "15 files",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const featuredResources = [
    {
      type: "Guide",
      title: "Complete Guide to Payment Processing",
      description: "Everything you need to know about accepting payments in 2024",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg",
      readTime: "10 min read",
    },
    {
      type: "Video",
      title: "Setting Up Your Arborpaygo Terminal",
      description: "Watch our step-by-step setup tutorial",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
      readTime: "5 min watch",
    },
    {
      type: "Case Study",
      title: "How Pizza Pilgrims Increased Sales by 40%",
      description: "Learn how faster payments transformed their business",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/story.png",
      readTime: "8 min read",
    },
  ];

  const guides = [
    {
      title: "Getting Started with Arborpaygo",
      description: "Your first steps to accepting payments",
      category: "Beginner",
    },
    {
      title: "Optimizing Payment Speed",
      description: "Tips to process transactions faster",
      category: "Advanced",
    },
    {
      title: "Understanding Transaction Fees",
      description: "A complete breakdown of payment costs",
      category: "Finance",
    },
    {
      title: "Security Best Practices",
      description: "Keep your business and customers safe",
      category: "Security",
    },
    {
      title: "Integrating with EPOS Systems",
      description: "Connect Arborpaygo to your existing setup",
      category: "Technical",
    },
    {
      title: "Managing Multiple Locations",
      description: "Scale your payment operations",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Resources & Learning Center - Guides, Videos & Case Studies"
        description="Free payment processing guides, video tutorials, case studies, and downloads. Learn how to optimize your business payments and grow revenue."
        keywords="payment processing guides, merchant services resources, business payment tutorials, case studies"
        canonical="https://arborpaygo.com/resources"
        breadcrumbs={[
          { name: "Resources", url: "/resources" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Resources", url: "/resources" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Resources & Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Center
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to succeed with Arborpaygo. Guides, videos, case studies, and more.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-full hover:from-teal-700 hover:to-teal-800 transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <a
                  key={idx}
                  href="/quote"
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <p className="text-teal-700 font-bold text-sm">
                    {category.count}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular content to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, idx) => (
              <a
                key={idx}
                href="/quote"
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">
                    {resource.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.readTime}</span>
                    <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              All Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <a
                key={idx}
                href="/quote"
                className="group p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1 bg-teal-100 text-teal-900 text-xs font-bold rounded-full">
                    {guide.category}
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {guide.description}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get the latest guides, tips, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
