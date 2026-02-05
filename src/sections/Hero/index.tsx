import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png",
    "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
    "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-6 sm:pt-32 sm:pb-8 lg:pt-40 lg:pb-10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-teal-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-lg border border-teal-100">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">
                UK's Leading Payment Provider
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Get Paid
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Faster & Easier
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join 110,000+ businesses using our lightning-fast payment terminals. 
              <span className="font-semibold text-gray-900"> Setup in 24 hours.</span>
            </p>

            {/* Benefits - Hidden on Mobile */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start text-xs sm:text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-medium">No setup fees</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-medium">Rolling / Fixed Agreements</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-medium">24/7 support</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <a
                href="/quote"
                className="group relative px-6 xl:px-8 py-3 xl:py-4 text-sm xl:text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust indicator */}
            <a 
              href="https://uk.trustpilot.com/review/dojo.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-500 pt-2 sm:pt-4 hover:text-teal-700 transition-colors inline-block"
            >
              ⭐ Rated 4.8/5 from 15,000+ reviews on Trustpilot
            </a>
          </div>

          {/* Right image carousel */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-square">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Product ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    idx === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-6 sm:w-8 bg-teal-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 hidden sm:block">
              <div className="text-2xl sm:text-3xl font-black text-teal-600">99.99%</div>
              <div className="text-xs font-semibold text-gray-600">Uptime</div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 hidden sm:block">
              <div className="text-2xl sm:text-3xl font-black text-teal-600">58%</div>
              <div className="text-xs font-semibold text-gray-600">Faster</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
