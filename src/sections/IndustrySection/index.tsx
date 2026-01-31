export const IndustrySection = () => {
  const industries = [
    {
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachi2ne_062-2.png",
      title: "Quick-service restaurants",
      description: "Power through queues, speed up service, track payments across locations, and reduce your running costs.",
      link: "/industry/quick-service-restaurants/",
    },
    {
      video: "https://a.storyblok.com/f/267449/x/d6721a1631/fsr-landscape-2.mp4",
      title: "Full-service restaurants",
      description: "Streamline your front of house, integrate your payments and EPOS, and simplify your end-of-day reconciliation.",
      link: "/industry/full-service-restaurants/",
    },
    {
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/dojo_22_outdoor_cardmachine_062-22.png",
      title: "Dental",
      description: "Streamline payments, offer patients more ways to pay, and simplify reconciliation.",
      link: "/industry/dental-practices/",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Payments tailored for your industry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how our first-class payments platform can help your
            business thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.link}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={industry.video} type="video/mp4" />
                  </video>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-900 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-teal-800 group-hover:text-teal-950">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
