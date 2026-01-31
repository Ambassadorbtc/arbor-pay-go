export const FeatureSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/epos.jpg"
                alt="EPOS Integration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-900 text-sm font-semibold rounded-full">
              Enterprise Solutions
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Seamless payment integrations at scale
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Deliver standout experiences at scale with fast, effortless
              in-person, online, and mobile payments. With our enterprise
              payments solutions, you'll find:
            </p>

            <ul className="space-y-4">
              {[
                "More than 450 EPOS integrations",
                "Industry-leading 99.99% uptime",
                "Award-winning customer support",
                "Powerful customer insights tools",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/enterprise"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-950 rounded-full hover:bg-teal-900 transition-all"
              >
                Explore enterprise
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-teal-950 border-2 border-teal-950 rounded-full hover:bg-teal-50 transition-all"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
