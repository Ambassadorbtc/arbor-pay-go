import { Zap, Wifi, Shield, TrendingUp, Clock, Headphones } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process payments 58% faster than market average",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Wifi,
      title: "Always Connected",
      description: "Built-in 4G & WiFi with automatic switching",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption & fraud detection",
      color: "from-green-400 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      description: "Real-time analytics and reporting dashboard",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "24-Hour Setup",
      description: "Get started tomorrow with fast approval",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Award-winning UK-based customer service",
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help your business grow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:shadow-teal-500/50 hover:scale-105"
          >
            Start Your Free Trial
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
