import { Check, ArrowRight, Gift } from "lucide-react";

export const PricingCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12 text-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6">
              <Gift className="w-4 h-4" />
              🎉 Limited Time Offer
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Get a £50 Welcome Bonus!
            </h2>

            <p className="text-xl sm:text-2xl mb-8 text-white/90 font-bold">
              This exclusive offer means you can now get a terminal for £29!
            </p>

            {/* Offer Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-black mb-2">£0</div>
                <div className="text-lg font-bold mb-2">Pay £0 today</div>
                <p className="text-sm text-white/80">
                  Try it out for 30 days before you decide to buy. We'll ship it out without any upfront payment.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-black mb-2">£0/month</div>
                <div className="text-lg font-bold mb-2">Plans from £0/month</div>
                <p className="text-sm text-white/80">
                  The basic plan is just £0 per month and includes a free upgrade until 2026.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-black mb-2">£100</div>
                <div className="text-lg font-bold mb-2">£100 discount included</div>
                <p className="text-sm text-white/80">
                  The A920 Terminal is down to only £79 (normally £179) for a limited time.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-black mb-2">£29</div>
                <div className="text-lg font-bold mb-2">Card machine for £29 one-time</div>
                <p className="text-sm text-white/80">
                  Take advantage of the £100 discount + £50 welcome bonus to offset the card machine price.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">
              {[
                "Free terminal hardware",
                "Next-day payouts",
                "24/7 UK support",
                "No long-term contract",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
            >
              Claim Your £50 Welcome Bonus
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-sm text-white/70 mt-6">
              Join 110,000+ businesses • Setup in 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
