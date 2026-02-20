import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Switching to Dojo was the best decision we made. Payments are lightning fast and our customers love the seamless experience.",
      author: "Sarah Mitchell",
      role: "Owner, The Coffee House",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/group-1321317070.png",
    },
    {
      quote: "The 24/7 support is incredible. Any time we have a question, they're there to help. It's like having a payment expert on our team.",
      author: "James Chen",
      role: "Manager, Urban Bites",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/eat-on-the-green.png",
    },
    {
      quote: "We process hundreds of transactions daily. Dojo's reliability and speed have been game-changing for our business.",
      author: "Emma Thompson",
      role: "Director, Retail Solutions Ltd",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/story.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Loved by Business Owners
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            See what our customers have to say
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-teal-100 text-[200px] font-serif leading-none select-none">
              "
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
                {testimonials[activeIndex].quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-teal-500 hover:text-teal-600 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-teal-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-teal-500 hover:text-teal-600 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
