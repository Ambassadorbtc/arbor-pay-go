export const SocialProof = () => {
  return (
    <section className="py-16 sm:py-20 bg-teal-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">110K+</div>
            <div className="text-sm sm:text-base font-medium text-white/80">Active Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">1.8B</div>
            <div className="text-sm sm:text-base font-medium text-white/80">Transactions/Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">99.99%</div>
            <div className="text-sm sm:text-base font-medium text-white/80">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black mb-2 text-teal-400">24/7</div>
            <div className="text-sm sm:text-base font-medium text-white/80">Customer Support</div>
          </div>
        </div>

        {/* Trustpilot CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xl sm:text-2xl font-bold mb-2">Rated 4.8/5 on Trustpilot</p>
          <p className="text-white/70 mb-6">From 15,000+ verified reviews</p>
          <a
            href="https://uk.trustpilot.com/review/dojo.tech"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-950 font-bold rounded-full hover:bg-teal-50 transition-all"
          >
            Read Reviews
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
