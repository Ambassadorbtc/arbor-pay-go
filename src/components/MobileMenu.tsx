import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  console.log('__ANIMA_DBG__ MobileMenu render - isOpen:', isOpen);

  // Prevent body scroll when menu is open
  useEffect(() => {
    console.log('__ANIMA_DBG__ MobileMenu useEffect triggered - isOpen:', isOpen);
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

  if (!isOpen) {
    console.log('__ANIMA_DBG__ MobileMenu not rendering - isOpen is false');
    return null;
  }

  console.log('__ANIMA_DBG__ MobileMenu rendering full menu');

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-900 hover:bg-gray-50"
                >
                  <span className="font-medium">Products</span>
                  {productsOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {productsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button
                      onClick={() => handleNavigation('/products/dojo-go')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Dojo Go
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/dojo-pocket')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Dojo Pocket
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/dojo-wired')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Dojo Wired
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/card-machines')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Card Machines
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/online-payments')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Online Payments
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/tap-to-pay-iphone')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Tap to Pay on iPhone
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/bookings')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Bookings
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/sidekick')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Sidekick
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/business-funding')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Business Funding
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/flex-funds')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Flex Funds
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/capital-on-tap')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Capital on Tap
                    </button>
                    <button
                      onClick={() => handleNavigation('/products/integrated-payments')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Integrated Payments
                    </button>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-900 hover:bg-gray-50"
                >
                  <span className="font-medium">Industries</span>
                  {industriesOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {industriesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button
                      onClick={() => handleNavigation('/industries/small-medium-business')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Small & Medium Business
                    </button>
                    <button
                      onClick={() => handleNavigation('/industries/hospitality')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Hospitality
                    </button>
                    <button
                      onClick={() => handleNavigation('/industries/retail')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Retail
                    </button>
                    <button
                      onClick={() => handleNavigation('/industries/personal-services')}
                      className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                    >
                      Personal Services
                    </button>
                  </div>
                )}
              </div>

              {/* Other Menu Items */}
              <button
                onClick={() => handleNavigation('/pricing')}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation('/resources')}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
              >
                Resources
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Footer CTA */}
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={() => handleNavigation('/quote')}
              className="w-full rounded-lg bg-[#00D9C1] px-6 py-3 font-semibold text-white hover:bg-[#00C4AD]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
