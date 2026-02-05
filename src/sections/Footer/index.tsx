import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const footerLinks = {
    Products: [
      { label: "Dojo Go", href: "/products/dojo-go" },
      { label: "Dojo Pocket", href: "/products/dojo-pocket" },
      { label: "Dojo Wired", href: "/products/dojo-wired" },
      { label: "Card Machines", href: "/products/card-machines" },
      { label: "Online Payments", href: "/products/online-payments" },
      { label: "Integrations", href: "/integrated-payments" },
      { label: "Bookings", href: "/products/bookings" },
      { label: "Sidekick", href: "/products/sidekick" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    Industries: [
      { label: "All Industries", href: "/industry/services" },
      { label: "Small & Medium Business", href: "/small-medium-business" },
      { label: "Hospitality", href: "/industry/hospitality" },
      { label: "Retail", href: "/industry/retail" },
      { label: "Personal Services", href: "/industry/personal-services" },
    ],
    Resources: [
      { label: "Blog", href: "/contact" },
      { label: "Case Studies", href: "/contact" },
      { label: "Guides", href: "/contact" },
      { label: "FAQs", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-base sm:text-lg mb-3 text-teal-400">{category}</h3>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm block text-left w-full py-0 leading-tight"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://c.animaapp.com/mky7fepxnTIlgE/img/uploaded-asset-1769700689352-0.png"
                alt="Arborpaygo"
                className="h-12 sm:h-16"
              />
            </div>

            <div className="flex gap-4 sm:gap-6">
              <a href="https://twitter.com/dojo_business_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/Dojotech-101737171450003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
            <p>© 2026 Arborpaygo LTD is a contracting partner of Paymentsense Ltd.</p>
            <p className="mt-1">All rights reserved. Paymentsense Limited is authorised and regulated by the Financial Conduct Authority.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
