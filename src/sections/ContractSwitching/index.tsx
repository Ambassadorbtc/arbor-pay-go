export const ContractSwitching = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-teal-400">STUCK</span> IN A CONTRACT?
            </h2>

            <p className="text-xl sm:text-2xl mb-6 leading-relaxed text-white/90">
              We make switching easy, and will help you leave your current contract by paying off your cancellation fees.
            </p>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Pick <span className="font-bold text-white">"I currently accept cards"</span> during sign-up.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/quote"
                className="group px-8 py-4 text-base font-bold text-gray-900 bg-teal-400 rounded-full hover:bg-teal-300 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 text-base font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg"
                alt="Payment Terminal"
                className="w-full h-auto"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 hidden sm:block">
              <div className="text-3xl font-black text-teal-600 mb-1">Up to £3,000</div>
              <div className="text-sm font-bold text-gray-900">Exit Fees Covered**</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
