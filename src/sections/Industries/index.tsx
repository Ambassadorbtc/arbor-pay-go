import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const Industries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Built for Your Industry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every type of business
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry, idx) => (
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
            {industries.map((industry, idx) => (
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
              {industries.map((_, idx) => (
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

        <div className="text-center mt-12">
          <a
            href="/industry/services"
            className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors text-lg"
          >
            View All Industries
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
