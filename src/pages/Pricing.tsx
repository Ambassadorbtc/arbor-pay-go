import { ArrowRight, Check, X } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      nameColor: "text-teal-600",
      price: "£0",
      period: "/month",
      processingFee: "0.30%",
      processingNote: "plus any applicable surcharges",
      description: "All the core features needed to process payments quickly and reliably.",
      features: [
        "£0 monthly fee",
        "0.30% processing fee",
        "Free terminal hardware",
        "Next-day payouts (5 days/week)",
        "Email support",
        "Basic reporting",
        "All major cards accepted",
        "Contactless payments",
      ],
      notIncluded: [
        "7-day payouts",
        "Priority support",
        "Advanced analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Inclusive",
      nameColor: "text-teal-600",
      price: "£39.99",
      period: "/month",
      processingFee: "0%*",
      processingNote: "plus any applicable surcharges",
      description: "A single predictable price. Ideal for budgeting and businesses with stable sales.",
      features: [
        "£39.99 monthly fee",
        "0% processing fee*",
        "Free terminal hardware",
        "Next-day payouts (7 days/week)",
        "24/7 priority support",
        "Advanced reporting",
        "All major cards accepted",
        "Contactless payments",
        "Multiple locations",
      ],
      notIncluded: [
        "Dedicated account manager",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      nameColor: "text-teal-600",
      price: "Custom",
      period: "",
      processingFee: "Custom",
      processingNote: "(based on your volume, industry and needs)",
      description: "A tailored pricing plan for established businesses processing over £10,000 a month.",
      features: [
        "Custom pricing",
        "Volume discounts",
        "Free terminal hardware",
        "Instant payouts available",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited locations",
        "Full API access",
        "Dedicated account manager",
        "Custom reporting",
        "Priority onboarding",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const additionalFees = [
    { item: "Setup Fee", cost: "£0" },
    { item: "Monthly Fee (Standard)", cost: "£0" },
    { item: "Monthly Fee (Inclusive)", cost: "£39.99" },
    { item: "Contract Length", cost: "Flexible Agreements" },
    { item: "Cancellation Fee", cost: "£0" },
    { item: "Chargeback Fee", cost: "£15" },
    { item: "PCI Compliance", cost: "Included" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pricing - Transparent Payment Terminal Costs"
        description="Simple, transparent pricing. Standard plan from £0/month with 0.30% processing fee. Inclusive plan £39.99/month with 0% processing. No setup fees."
        keywords="payment terminal pricing, card machine costs, merchant services pricing, transparent pricing UK"
        canonical="https://arborpaygo.com/pricing"
        breadcrumbs={[
          { name: "Pricing", url: "/pricing" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <Breadcrumbs items={[
          { name: "Pricing", url: "/pricing" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
            Simple, Transparent Pricing
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Pay Only for What You Use
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just straightforward pricing that grows with your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Terminal Options */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                A920
                <span className="block">TERMINAL</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Portable 4G device designed for taking payments everywhere.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3">Pay once</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-gray-900">£79</span>
                    <span className="text-xl text-gray-400 line-through ml-2">£179</span>
                  </div>
                  <p className="text-sm text-gray-600">per terminal</p>
                </div>

                <div className="bg-gradient-to-br from-white to-stone-50 rounded-2xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3">Pay monthly</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-gray-900">£15</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">per terminal</p>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg"
                alt="A920 Terminal"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              A920 Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                  className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                    plan.popular
                      ? "border-teal-500 scale-105 lg:scale-110"
                      : "border-gray-200"
                  } p-8 hover:shadow-2xl transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-3xl font-black ${plan.nameColor} mb-2`}>
                    {plan.name} <span className="text-gray-900">Plan</span>
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>
                  
                  {/* Plan Fee */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Plan Fee
                    </div>
                    <div>
                      <span className="text-5xl font-black text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 text-xl ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Processing Fee */}
                  <div className="mb-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Processing Fee
                    </div>
                    <div>
                      <span className="text-3xl font-black text-gray-900">
                        {plan.processingFee}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{plan.processingNote}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.cta === "Contact Sales" ? "/contact" : "/quote"}
                  className={`block w-full py-4 text-center font-bold rounded-full transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 shadow-lg"
                      : "bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 shadow-lg"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p>* 0% processing fee applies to the Inclusive Plan only. Standard surcharges may apply for certain card types.</p>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Complete Fee Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="divide-y divide-gray-100">
              {additionalFees.map((fee, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-6 hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{fee.item}</span>
                  <span className="text-xl font-black text-teal-600">{fee.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Are there any hidden fees?",
                a: "No setup fees, first month free.",
              },
              {
                q: "Can I switch plans later?",
                a: "Yes! As your business grows, we can adjust your pricing based on your transaction volume.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit and debit cards, Apple Pay, Google Pay, and Samsung Pay.",
              },
              {
                q: "How quickly do I receive my funds?",
                a: "Standard plan: Next-day payouts. 5 days a week Business plan: Next day payouts. 7 days a week",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 110,000+ businesses. No setup fees. Flexible Agreements.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-teal-700 bg-white rounded-full hover:bg-stone-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
