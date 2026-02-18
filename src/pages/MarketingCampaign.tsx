import React, { useState } from "react";
    import { ArrowRight, Check, Globe, Zap, Smartphone, Search, AlertCircle, Loader2, CreditCard, Terminal, LayoutGrid } from "lucide-react";
    import { Header } from "@/sections/Header";
    import { Footer } from "@/sections/Footer";
    import { SEO } from "@/components/SEO";

    export const MarketingCampaign = () => {
      const [url, setUrl] = useState("");
      const [isAnalyzing, setIsAnalyzing] = useState(false);
      const [showResults, setShowResults] = useState(false);
      const [analysisStep, setAnalysisStep] = useState(0);
      const [formMode, setFormMode] = useState<'claim' | 'quote'>('claim');

      const analysisSteps = [
        "Connecting to server...",
        "Analyzing mobile responsiveness...",
        "Checking page load speed...",
        "Auditing SEO structure...",
        "Generating report...",
      ];

      const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsAnalyzing(true);
        setShowResults(false);
        setAnalysisStep(0);

        // Simulate analysis steps
        let step = 0;
        const interval = setInterval(() => {
          step++;
          setAnalysisStep(step);
          if (step >= analysisSteps.length) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setShowResults(true);
          }
        }, 800);
      };

      const scrollToForm = (mode: 'claim' | 'quote') => {
        setFormMode(mode);
        const element = document.getElementById('claim');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <div className="min-h-screen bg-white">
          <SEO
            title="Free Website Review & Free Website Offer"
            description="Get a free comprehensive website review and claim a free website worth £800. Limited time marketing offer."
            keywords="free website review, free website, website audit, web design offer"
            canonical="https://arborpaygo.com/free-website-review"
          />
          <Header />

          {/* Hero Section */}
          <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm font-bold text-green-400">Limited Time Offer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Is Your Website
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mt-2 pb-2">
                  Losing You Money?
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get a <strong>Free Professional Review</strong> and qualify for a <strong>Free Website Refresh</strong> (worth £800).
              </p>

              {/* Analysis Form */}
              <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-2xl transform transition-all hover:scale-[1.01]">
                <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your website URL (e.g., www.yourbusiness.com)"
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isAnalyzing}
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-teal-800 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        Review Now
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="mt-8 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 text-teal-300 font-mono mb-2">
                    <Search className="w-4 h-4" />
                    {analysisSteps[Math.min(analysisStep, analysisSteps.length - 1)]}
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal-400 transition-all duration-300 ease-out"
                      style={{ width: `${(analysisStep / analysisSteps.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Results Section */}
          {showResults && (
            <section className="py-16 bg-stone-50 animate-fade-in-up">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                      
                      {/* Score Card */}
                      <div className="w-full md:w-1/3 text-center">
                        <div className="relative inline-block">
                          <svg className="w-48 h-48 transform -rotate-90">
                            <circle
                              className="text-gray-100"
                              strokeWidth="12"
                              stroke="currentColor"
                              fill="transparent"
                              r="88"
                              cx="96"
                              cy="96"
                            />
                            <circle
                              className="text-orange-500"
                              strokeWidth="12"
                              strokeDasharray={2 * Math.PI * 88}
                              strokeDashoffset={2 * Math.PI * 88 * (1 - 65 / 100)}
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="transparent"
                              r="88"
                              cx="96"
                              cy="96"
                            />
                          </svg>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-5xl font-black text-gray-900">65</span>
                            <span className="block text-sm text-gray-500 font-bold uppercase mt-1">Score</span>
                          </div>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-bold text-sm">
                          <AlertCircle className="w-4 h-4" />
                          Needs Improvement
                        </div>
                      </div>

                      {/* Findings */}
                      <div className="flex-1">
                        <h2 className="text-3xl font-black text-gray-900 mb-6">
                          Analysis Report for <span className="text-teal-600">{url.replace(/^https?:\/\//, '').split('/')[0]}</span>
                        </h2>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                            <Smartphone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-bold text-gray-900">Mobile Responsiveness Issues</h3>
                              <p className="text-sm text-gray-600">Your site may not be displaying correctly on all mobile devices, potentially losing 50% of traffic.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                            <Zap className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-bold text-gray-900">Page Load Speed</h3>
                              <p className="text-sm text-gray-600">Load times are slower than recommended (3s+). This impacts Google rankings and user experience.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <Search className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-bold text-gray-900">SEO Opportunities</h3>
                              <p className="text-sm text-gray-600">Missing key meta tags and structure that helps customers find you on Google.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 text-center">
                    <p className="text-white text-lg font-medium">
                      Don't worry. We can fix these issues for you. <span className="text-teal-400 font-bold">Choose your solution below.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Offers Section */}
          <section className="py-20 bg-white" id="offers">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Your Upgrade Options
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Based on your review, here are your recommended solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                
                {/* Free Offer */}
                <div className="relative bg-white rounded-3xl shadow-xl border-2 border-teal-500 p-8 transform hover:-translate-y-2 transition-all flex flex-col">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-teal-600 text-white text-sm font-bold rounded-full uppercase tracking-wide">
                    Limited Time Offer
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Free Starter Website</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-5xl font-black text-teal-600">£0</span>
                      <span className="text-gray-400 line-through text-xl">£800</span>
                    </div>
                    <p className="text-gray-600">Perfect for small businesses needing a fresh start</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">Professional One-Page Site</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">Mobile Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">Fully SEO optimised for your business</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">Fast Loading Speed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">Contact Form Integration</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => scrollToForm('claim')}
                    className="block w-full py-4 text-center font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg"
                  >
                    Claim Free Website
                  </button>
                </div>

                {/* Custom Solution */}
                <div className="relative bg-stone-50 rounded-3xl border border-gray-200 p-8 transform hover:-translate-y-2 transition-all flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Custom Solution</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-black text-gray-900">Custom Quote</span>
                    </div>
                    <p className="text-gray-600">For businesses with complex requirements</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Multi-Page Website</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-gray-700">E-commerce / Online Store</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Advanced SEO Optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Custom Functionality</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => scrollToForm('quote')}
                    className="block w-full py-4 text-center font-bold text-gray-900 border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>

              {/* T&Cs */}
              <div className="text-center max-w-3xl mx-auto text-sm text-gray-500 space-y-1">
                <p>Life time of hosting for free.</p>
                <p>Any changes to the design, layout or content after the 2nd month will be chargeable.</p>
              </div>
            </div>
          </section>

          {/* Claim/Quote Form */}
          <section id="claim" className="py-20 bg-gray-900 text-white transition-all duration-500">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black mb-4 transition-all duration-300">
                  {formMode === 'claim' ? 'Claim Your Free Website' : 'Custom Quote'}
                </h2>
                <p className="text-gray-400 transition-all duration-300">
                  {formMode === 'claim' 
                    ? 'Fill in your details below to secure your free website refresh worth £800.'
                    : 'Fill out the form below and will contact ASAP.'}
                </p>
              </div>

              <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-teal-500 focus:outline-none text-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Business Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-teal-500 focus:outline-none text-white"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-teal-500 focus:outline-none text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-teal-500 focus:outline-none text-white"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Current Website (if any)</label>
                  <input
                    type="text"
                    defaultValue={url}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-teal-500 focus:outline-none text-white"
                    placeholder="www.yourbusiness.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:scale-[1.02]"
                >
                  {formMode === 'claim' ? 'Submit Application' : 'Request Quote'}
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                  The free website offer is subject to availability and standard hosting terms.
                </p>
              </form>
            </div>
          </section>

          {/* Other Offerings Section */}
          <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  More Than Just Websites
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We help businesses grow with a complete suite of tools
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <a href="/products/dojo-go" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Terminals</h3>
                  <p className="text-gray-600 mb-4">Fast, reliable card machines with next-day transfers and no setup fees.</p>
                  <span className="text-teal-600 font-bold flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                </a>

                <a href="/integrated-payments" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Terminal className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">EPOS Integration</h3>
                  <p className="text-gray-600 mb-4">Connect your payments to over 450+ EPOS systems for seamless operations.</p>
                  <span className="text-purple-600 font-bold flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                </a>

                <a href="/products/bookings" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <LayoutGrid className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bookings & Queues</h3>
                  <p className="text-gray-600 mb-4">Manage reservations and virtual queues to maximize your venue's capacity.</p>
                  <span className="text-blue-600 font-bold flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      );
    };
