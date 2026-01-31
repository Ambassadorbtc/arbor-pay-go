import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden animate-fade-in"
        onClick={onClose}
      />

      {/* Mobile Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-stone-100 z-[70] lg:hidden overflow-y-auto animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="bg-white p-6 flex items-center justify-between border-b border-gray-200 sticky top-0 z-10">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            <img
              src="https://c.animaapp.com/mky7fepxnTIlgE/img/uploaded-asset-1769700689352-0.png"
              alt="Arborpaygo"
              className="h-10"
            />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2.5} className="text-gray-900" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          {/* Products Section */}
          <div className="mb-2">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between w-full text-left py-4 px-4 text-xl font-black text-gray-900 hover:bg-white rounded-xl transition-colors"
            >
              Products
              <ChevronDown 
                className={`w-6 h-6 transition-transform duration-300 ${
                  productsOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {productsOpen && (
              <div className="bg-white rounded-xl p-2 mb-2 space-y-1">
                {/* In-person payments */}
                <div className="mb-4">
                  <div className="px-4 py-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                    In-person payments
                  </div>
                  <button
                    onClick={() => handleNavigation("/products/dojo-go")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Dojo Go</div>
                    <div className="text-xs text-gray-500 mt-0.5">Fast, portable payments on 4G</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/dojo-pocket")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Dojo Pocket</div>
                    <div className="text-xs text-gray-500 mt-0.5">Orders and payments in one device</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/dojo-wired")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Dojo Wired</div>
                    <div className="text-xs text-gray-500 mt-0.5">Wired countertop card machine</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/card-machines")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Card machines</div>
                    <div className="text-xs text-gray-500 mt-0.5">Explore all Dojo hardware</div>
                  </button>
                </div>

                {/* Remote payments */}
                <div className="mb-4 border-t border-gray-100 pt-2">
                  <div className="px-4 py-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Remote payments
                  </div>
                  <button
                    onClick={() => handleNavigation("/products/online-payments")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Online Payments</div>
                    <div className="text-xs text-gray-500 mt-0.5">Accept payments online</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/tap-to-pay-iphone")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Tap to Pay on iPhone</div>
                    <div className="text-xs text-gray-500 mt-0.5">Take payments with an iPhone</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/integrated-payments")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Integrations</div>
                    <div className="text-xs text-gray-500 mt-0.5">Connect with your systems</div>
                  </button>
                </div>

                {/* Growth */}
                <div className="border-t border-gray-100 pt-2">
                  <div className="px-4 py-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Growth
                  </div>
                  <button
                    onClick={() => handleNavigation("/products/bookings")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Bookings</div>
                    <div className="text-xs text-gray-500 mt-0.5">Manage appointments</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/sidekick")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Sidekick</div>
                    <div className="text-xs text-gray-500 mt-0.5">Business intelligence</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/business-funding")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Business Funding</div>
                    <div className="text-xs text-gray-500 mt-0.5">Fuel your growth</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/flex-funds")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Flex Funds</div>
                    <div className="text-xs text-gray-500 mt-0.5">Flexible business finance</div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/products/capital-on-tap")}
                    className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold">Capital on Tap</div>
                    <div className="text-xs text-gray-500 mt-0.5">Business credit card</div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Industries Section */}
          <div className="mb-2">
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center justify-between w-full text-left py-4 px-4 text-xl font-black text-gray-900 hover:bg-white rounded-xl transition-colors"
            >
              Industries
              <ChevronDown 
                className={`w-6 h-6 transition-transform duration-300 ${
                  industriesOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {industriesOpen && (
              <div className="bg-white rounded-xl p-2 mb-2 space-y-1">
                <button
                  onClick={() => handleNavigation("/industry/services")}
                  className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <div className="font-semibold">All Industries</div>
                </button>
                <button
                  onClick={() => handleNavigation("/small-medium-business")}
                  className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Small & Medium Business</div>
                </button>
                <button
                  onClick={() => handleNavigation("/industry/hospitality")}
                  className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Hospitality</div>
                </button>
                <button
                  onClick={() => handleNavigation("/industry/retail")}
                  className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Retail</div>
                </button>
                <button
                  onClick={() => handleNavigation("/industry/personal-services")}
                  className="w-full text-left px-4 py-3 text-base text-gray-900 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Personal Services</div>
                </button>
              </div>
            )}
          </div>

          {/* Other Links */}
          <button
            onClick={() => handleNavigation("/pricing")}
            className="w-full text-left py-4 px-4 text-xl font-black text-gray-900 hover:bg-white rounded-xl transition-colors mb-2"
          >
            Pricing
          </button>
          
          <button
            onClick={() => handleNavigation("/about")}
            className="w-full text-left py-4 px-4 text-xl font-black text-gray-900 hover:bg-white rounded-xl transition-colors mb-2"
          >
            About
          </button>
          
          <button
            onClick={() => handleNavigation("/contact")}
            className="w-full text-left py-4 px-4 text-xl font-black text-gray-900 hover:bg-white rounded-xl transition-colors mb-2"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="p-4 bg-white border-t border-gray-200 sticky bottom-0">
          <button
            onClick={() => handleNavigation("/quote")}
            className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full shadow-lg hover:from-teal-700 hover:to-teal-800 transition-all"
          >
            Get Started →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
