import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I start taking payments?",
      answer: "Most businesses are approved within 24 hours and can start taking payments immediately. We'll ship your terminal with next-day delivery, and our team will help you get set up in minutes.",
    },
    {
      question: "Are there any setup fees or contracts?",
      answer: "No setup fees, no monthly fees, and no long-term contracts. You only pay 1.2% per transaction. Cancel anytime with no penalties.",
    },
    {
      question: "What if my internet goes down?",
      answer: "All our terminals have built-in 4G connectivity that automatically kicks in if your WiFi drops. You'll never miss a sale due to connectivity issues.",
    },
    {
      question: "How secure are the payments?",
      answer: "We use bank-level encryption and are fully PCI DSS compliant. Every transaction is protected with end-to-end encryption and real-time fraud detection.",
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! We integrate with over 450 EPOS systems, accounting software, and business tools. Our team will help you set up seamless integrations.",
    },
    {
      question: "What support do you offer?",
      answer: "We provide 24/7 UK-based customer support via phone, email, and live chat. Our award-winning team is always here to help, day or night.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-teal-200 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
              >
                <span className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-teal-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors text-lg"
          >
            Contact Our Team
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
