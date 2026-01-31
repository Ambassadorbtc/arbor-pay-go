import { Check, X } from "lucide-react";

export const Comparison = () => {
  const features = [
    { feature: "Setup time", arborpaygo: "24 hours", others: "5-7 days" },
    { feature: "Contract length", arborpaygo: "Rolling / Fixed Agreements", others: "12-36 months" },
    { feature: "Setup fees", arborpaygo: "£0", others: "£50-£200" },
    { feature: "Exit fees covered", arborpaygo: "Up to £3,000", others: "Not covered" },
    { feature: "Built-in 4G", arborpaygo: true, others: false },
    { feature: "24/7 UK support", arborpaygo: true, others: false },
    { feature: "Next-day payout", arborpaygo: true, others: false },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            No Setup Fees. Flexible Agreements. No Hassle.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            See how we compare to traditional payment providers
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 sm:p-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <div className="text-sm sm:text-base font-bold">Feature</div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-black mb-1">Arborpaygo</div>
              <div className="text-xs sm:text-sm opacity-90">Modern Solution</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-black mb-1">Others</div>
              <div className="text-xs sm:text-sm opacity-90">Traditional</div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-stone-50 transition-colors"
              >
                <div className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                  {item.feature}
                </div>
                <div className="flex items-center justify-center">
                  {typeof item.arborpaygo === "boolean" ? (
                    item.arborpaygo ? (
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-teal-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )
                  ) : (
                    <span className="font-bold text-teal-600 text-sm sm:text-base text-center">
                      {item.arborpaygo}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {typeof item.others === "boolean" ? (
                    item.others ? (
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-teal-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )
                  ) : (
                    <span className="font-medium text-gray-500 text-sm sm:text-base text-center">
                      {item.others}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
          <div className="text-center mt-6">
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:shadow-teal-500/50 hover:scale-105"
          >
            Switch to Arborpaygo Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-sm text-gray-600 mt-4">
            We'll cover your exit fees up to £3,000**
          </p>
        </div>
      </div>
    </section>
  );
};
