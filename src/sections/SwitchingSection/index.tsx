export const SwitchingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Switching made simple
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Sign up to Arborpaygo in just a few steps and enjoy a simple setup with no
          fixed contracts, an easy 2-step PCI compliance reporting process, and
          we could even cover your exit fees up to £3,000.**
        </p>

        <a
          href="/quote"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-950 rounded-full hover:bg-teal-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Get started
        </a>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <sup>**</sup>Subject to your annual card turnover. See our{" "}
            <a
              href="https://support.arborpaygo.com/support/s/?language=en_GB"
              className="text-teal-800 hover:text-teal-900 underline"
            >
              Help Centre
            </a>{" "}
            for more info.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <sup>[1]</sup> In an independent research study with Savanta 2023.
          </p>
        </div>
      </div>
    </section>
  );
};
