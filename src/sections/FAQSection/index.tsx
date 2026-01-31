import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Arborpaygo?",
      answer:
        "Arborpaygo is a payment provider providing small business and enterprise card machines that are robust, flexible and secure. If you sign up today, you could be ready to take contactless debit and credit card payments by tomorrow. You'll be able to take payments via Apple Pay, Google Pay and Samsung Pay too.",
    },
    {
      question: "Why choose an Arborpaygo card machine?",
      answer:
        "Arborpaygo card machines come with built-in 4G connectivity, so if your Wi-Fi drops out, you can continue accepting contactless payments.",
    },
    {
      question: "Are Arborpaygo card machines secure?",
      answer:
        "We know protecting your profits and your customers' card data is paramount. That's why Arborpaygo card machines come with point-to-point encryption built-in as well as instant fraud detection. It's first-class payment security, so you don't have to worry.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-teal-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-teal-900 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-teal-800 transition-colors"
              >
                <span className="text-xl font-bold text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
