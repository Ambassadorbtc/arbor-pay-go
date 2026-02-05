import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Building2, Users, CreditCard, TrendingUp } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Quote = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    monthlyRevenue: "",
    currentProvider: "",
    fullName: "",
    email: "",
    phone: "",
    numberOfLocations: "1",
    terminalType: "",
    additionalServices: [] as string[],
  });

  const businessTypes = [
    "Restaurant / Cafe",
    "Retail Store",
    "Healthcare / Dental",
    "Beauty / Salon",
    "Fitness / Gym",
    "Professional Services",
    "Other",
  ];

  const revenueRanges = [
    "Under £10,000",
    "£10,000 - £50,000",
    "£50,000 - £100,000",
    "£100,000 - £500,000",
    "Over £500,000",
  ];

  const terminalTypes = [
    { name: "Dojo Go", description: "Portable, all-in-one terminal", image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg" },
    { name: "Dojo Pocket", description: "Ultra-portable for table service", image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg" },
    { name: "Dojo Wired", description: "Countertop, always powered", image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg" },
    { name: "Not sure yet", description: "We'll help you choose", image: "" },
  ];

  const additionalServices = [
    "Online Payments",
    "EPOS Integration",
    "Booking System",
    "Inventory Management",
    "Advanced Analytics",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleServiceToggle = (service: string) => {
    const services = formData.additionalServices.includes(service)
      ? formData.additionalServices.filter(s => s !== service)
      : [...formData.additionalServices, service];
    setFormData({ ...formData, additionalServices: services });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Navigate to success page
    navigate("/quote/success");
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Get Your Free Quote - Start in 24 Hours"
        description="Get a personalized payment terminal quote in under 2 minutes. No obligations, no hidden fees. Start accepting payments within 24 hours."
        keywords="payment terminal quote, card machine quote, get started, free quote, merchant services application"
        canonical="https://arborpaygo.com/quote"
        breadcrumbs={[
          { name: "Get Quote", url: "/quote" }
        ]}
      />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-32">
        <Breadcrumbs items={[
          { name: "Get Quote", url: "/quote" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pt-32 sm:pb-6 bg-gradient-to-br from-teal-50 via-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 text-sm font-bold rounded-full mb-6">
            Get Your Free Quote
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Start Accepting Payments
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
              in 24 Hours
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get a personalized quote in under 2 minutes. No obligations, no hidden fees.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-gray-900">Step {step} of 3</span>
              <span className="text-sm text-gray-600">{Math.round((step / 3) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-600 to-teal-700 transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-4 sm:py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden">
            
            {/* Step 1: Business Information */}
            {step === 1 && (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Business Information</h2>
                    <p className="text-gray-600">Tell us about your business</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="Your Business Ltd"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Business Type *
                    </label>
                    <select
                      required
                      value={formData.businessType}
                      onChange={(e) => handleInputChange("businessType", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Monthly Card Revenue *
                    </label>
                    <select
                      required
                      value={formData.monthlyRevenue}
                      onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select revenue range</option>
                      {revenueRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Number of Locations
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.numberOfLocations}
                      onChange={(e) => handleInputChange("numberOfLocations", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Current Payment Provider (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.currentProvider}
                      onChange={(e) => handleInputChange("currentProvider", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="e.g., Square, Worldpay, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Terminal Selection */}
            {step === 2 && (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Choose Your Terminal</h2>
                    <p className="text-gray-600">Select the best fit for your business</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {terminalTypes.map((terminal) => (
                    <label
                      key={terminal.name}
                      className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-lg ${
                        formData.terminalType === terminal.name
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 hover:border-teal-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="terminalType"
                          value={terminal.name}
                          checked={formData.terminalType === terminal.name}
                          onChange={(e) => handleInputChange("terminalType", e.target.value)}
                          className="w-5 h-5 text-teal-600"
                        />
                        {terminal.image && (
                          <img src={terminal.image} alt={terminal.name} className="w-16 h-16 object-cover rounded-lg" />
                        )}
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{terminal.name}</div>
                          <div className="text-sm text-gray-600">{terminal.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    Additional Services (Optional)
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.additionalServices.includes(service)
                            ? "border-teal-500 bg-teal-50"
                            : "border-gray-200 hover:border-teal-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 text-teal-600 rounded"
                        />
                        <span className="font-semibold text-gray-900 text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Contact Details</h2>
                    <p className="text-gray-600">How can we reach you?</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="john@business.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-br from-teal-50 to-stone-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    Your Quote Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Business:</span>
                      <span className="font-semibold text-gray-900">{formData.businessName || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold text-gray-900">{formData.businessType || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Revenue:</span>
                      <span className="font-semibold text-gray-900">{formData.monthlyRevenue || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Terminal:</span>
                      <span className="font-semibold text-gray-900">{formData.terminalType || "—"}</span>
                    </div>
                    {formData.additionalServices.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Services:</span>
                        <span className="font-semibold text-gray-900">{formData.additionalServices.length} selected</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-teal-100 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What happens next?</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• We'll review your information and prepare a custom quote</li>
                        <li>• Our team will contact you within 2 hours</li>
                        <li>• You could be accepting payments within 24 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="bg-stone-50 px-8 py-6 sm:px-12 flex items-center justify-between border-t-2 border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 text-base font-bold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  Get My Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span>No obligations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span>2-hour response time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Why Choose Arborpaygo?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">£0</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">£0 Setup Fees</h3>
                <p className="text-gray-600">Get started with zero upfront costs. No hidden fees, ever.</p>
              </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">24h</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Setup</h3>
              <p className="text-gray-600">Get approved and start taking payments within 24 hours.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Award-winning UK-based support team available anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
