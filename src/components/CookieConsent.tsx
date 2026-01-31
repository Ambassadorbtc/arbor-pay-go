import { useState, useEffect } from "react";
import { X, Cookie, Check } from "lucide-react";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <a
                    href="/privacy-policy"
                    className="text-teal-700 hover:text-teal-800 font-semibold underline text-sm"
                  >
                    Read our Privacy Policy
                  </a>
                </div>
                <button
                  onClick={acceptNecessary}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-6 py-3 text-base font-bold text-gray-900 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-200"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-3 text-base font-bold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Choose which cookies you want to accept. You can change these settings at any time.
              </p>

              <div className="space-y-6 mb-8">
                {/* Necessary Cookies */}
                <div className="p-6 bg-stone-50 rounded-2xl border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-black text-gray-900 mb-2">
                        Necessary Cookies
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Essential for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-teal-600 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Always Active
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-200 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-black text-gray-900 mb-2">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Help us understand how visitors interact with our website by collecting anonymous information.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className="ml-4"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.analytics
                            ? "bg-teal-600 justify-end"
                            : "bg-gray-300 justify-start"
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-200 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-black text-gray-900 mb-2">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className="ml-4"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.marketing
                            ? "bg-teal-600 justify-end"
                            : "bg-gray-300 justify-start"
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 text-base font-bold text-gray-900 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-200"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
};
