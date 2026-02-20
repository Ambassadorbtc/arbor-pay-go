import React, { useState, useEffect } from "react";
import { ChevronDown, CreditCard, Globe, TrendingUp, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";

export const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setProductsOpen(false);
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const productCategories = {
    "in-person": {
      icon: CreditCard,
      title: "In-person payments",
      products: [
        { name: "Dojo Go", description: "Fast, portable payments on 4G", link: "/products/dojo-go" },
        { name: "Dojo Pocket", description: "Orders and payments in one device", link: "/products/dojo-pocket" },
        { name: "Dojo Wired", description: "Wired countertop card machine", link: "/products/dojo-wired" },
        { name: "Card machines", description: "Explore all Dojo hardware", link: "/products/card-machines" },
      ],
    },
    "remote": {
      icon: Globe,
      title: "Remote payments",
      products: [
        { name: "Online Payments", description: "Accept payments online", link: "/products/online-payments" },
        { name: "Tap to Pay on iPhone", description: "Take payments with an iPhone", link: "/products/tap-to-pay-iphone" },
        { name: "Integrations", description: "Connect with your systems", link: "/integrated-payments" },
      ],
    },
    "growth": {
      icon: TrendingUp,
      title: "Growth",
      products: [
        { name: "Bookings", description: "Manage appointments", link: "/products/bookings" },
        { name: "Sidekick", description: "Business intelligence", link: "/products/sidekick" },
        { name: "Business Funding", description: "Fuel your growth", link: "/products/business-funding" },
        { name: "Flex Funds", description: "Flexible business finance", link: "/products/flex-funds" },
        { name: "Capital on Tap", description: "Business credit card", link: "/products/capital-on-tap" },
      ],
    },
  };

  const [activeProductCategory, setActiveProductCategory] = useState("in-person");

  const toggleProducts = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProductsOpen(!productsOpen);
    setIndustriesOpen(false);
  };

  const toggleIndustries = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndustriesOpen(!industriesOpen);
    setProductsOpen(false);
  };

  const handleNavigation = (path: string) => {
    setProductsOpen(false);
    setIndustriesOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation("/")} 
              className="flex items-center z-50 flex-shrink-0 cursor-pointer"
            >
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/img/uploaded-asset-1769700689352-0.png"
                alt="Arborpaygo"
                className="h-10 sm:h-11 lg:h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
              {/* Products Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={toggleProducts}
                  className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-700 hover:text-teal-700 transition-colors rounded-lg hover:bg-teal-50"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {productsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                    style={{ left: '-200px' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="grid grid-cols-12 gap-6">
                      {/* Left sidebar - Categories */}
                      <div className="col-span-4 space-y-2">
                        {Object.entries(productCategories).map(([key, category]) => {
                          const Icon = category.icon;
                          return (
                            <button
                              key={key}
                              onClick={() => setActiveProductCategory(key)}
                              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                activeProductCategory === key
                                  ? "bg-teal-50 text-teal-700"
                                  : "hover:bg-stone-50 text-gray-700"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="font-semibold text-sm">{category.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Right content - Products */}
                      <div className="col-span-8">
                        <div className="space-y-2">
                          {productCategories[activeProductCategory as keyof typeof productCategories].products.map((product) => (
                            <button
                              key={product.name}
                              onClick={() => handleNavigation(product.link)}
                              className="w-full text-left px-4 py-3 rounded-xl hover:bg-teal-50 transition-colors group"
                            >
                              <div className="font-semibold text-gray-900 mb-1 group-hover:text-teal-700">
                                {product.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {product.description}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={toggleIndustries}
                  className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-700 hover:text-teal-700 transition-colors rounded-lg hover:bg-teal-50"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {industriesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button 
                      onClick={() => handleNavigation("/industry/services")}
                      className="w-full text-left block px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      All Industries
                    </button>
                    <button 
                      onClick={() => handleNavigation("/small-medium-business")}
                      className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      Small & Medium Business
                    </button>
                    <button 
                      onClick={() => handleNavigation("/industry/hospitality")}
                      className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      Hospitality
                    </button>
                    <button 
                      onClick={() => handleNavigation("/industry/retail")}
                      className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      Retail
                    </button>
                    <button 
                      onClick={() => handleNavigation("/industry/personal-services")}
                      className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      Personal Services
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation("/pricing")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-700 hover:text-teal-700 transition-colors rounded-lg hover:bg-teal-50"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-700 hover:text-teal-700 transition-colors rounded-lg hover:bg-teal-50"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-700 hover:text-teal-700 transition-colors rounded-lg hover:bg-teal-50"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <button
                onClick={() => handleNavigation("/quote")}
                className="px-4 xl:px-6 py-2.5 xl:py-3 text-sm xl:text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Get Started Free →
              </button>
            </div>

            {/* Mobile CTA + Menu Button */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleNavigation("/quote")}
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full shadow-lg whitespace-nowrap"
              >
                Start Free
              </button>
              <button
                onClick={() => {
                  console.log('__ANIMA_DBG__ Menu button clicked');
                  console.log('__ANIMA_DBG__ Current mobileMenuOpen state:', mobileMenuOpen);
                  setMobileMenuOpen(true);
                  console.log('__ANIMA_DBG__ setMobileMenuOpen(true) called');
                }}
                className="p-2 rounded-lg transition-colors bg-gray-900 hover:bg-gray-800"
                aria-label="Open menu"
              >
                <Menu size={24} strokeWidth={2.5} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
