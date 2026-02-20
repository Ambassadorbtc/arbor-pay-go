import { ArrowRight, Check } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 110,000+ businesses. No setup fees. Flexible Agreements.
          </p>

          {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Rolling / Fixed Agreements</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>24/7 support</span>
              </div>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="group px-8 py-4 text-base font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 text-base font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-all duration-200 flex items-center justify-center"
            >
              Talk to Sales
            </a>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ⭐ Rated 4.8/5 from 15,000+ reviews
          </p>
        </div>
      </div>
    </section>
  );
};
