export const SuccessStoriesSection = () => {
  const stories = [
    {
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/group-1321317070.png",
      logo: "https://c.animaapp.com/mky7fepxnTIlgE/assets/iblu.svg",
      title: "Bespoke solutions to supercharge efficiency and drive growth.",
      link: "/case-studies/speed-and-precision-transforming-infinityblus-payments-at-scale/",
    },
    {
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/eat-on-the-green.png",
      logo: "https://c.animaapp.com/mky7fepxnTIlgE/assets/eat-on-green.svg",
      title: "Transforming customer experience with integrated payments.",
      link: "/case-studies/how-dojo-payments-and-bookings-transformed-eat-on-the-green/",
    },
    {
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/story.png",
      title: "Discover the power of smart, swift payment solutions.",
      link: "/case-studies/how-dojo-helped-spudman-serve-spuds-speedier-than-ever/",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore real stories and industry insights from our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <a
              key={index}
              href={story.link}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-96"
            >
              <div className="absolute inset-0">
                <img
                  src={story.image}
                  alt=""
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-between p-6">
                {story.logo && (
                  <div className="mb-4">
                    <img src={story.logo} alt="" className="h-12 w-auto" />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <span className="inline-flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300">
                    Read story
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
