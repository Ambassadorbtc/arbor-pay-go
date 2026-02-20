import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { SEO } from "@/components/SEO";
import { CookieConsent } from "@/components/CookieConsent";
import { TrustBar } from "@/sections/TrustBar";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { SocialProof } from "@/sections/SocialProof";
import { Features } from "@/sections/Features";
import { Comparison } from "@/sections/Comparison";
import { ContractSwitching } from "@/sections/ContractSwitching";
import { Industries } from "@/sections/Industries";
import { CTABanner } from "@/sections/CTABanner";
import { Testimonials } from "@/sections/Testimonials";
import { PricingCTA } from "@/sections/PricingCTA";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { IndustryServices } from "@/pages/IndustryServices";
import { Pricing } from "@/pages/Pricing";
import { Products } from "@/pages/Products";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Resources } from "@/pages/Resources";
import { Quote } from "@/pages/Quote";
import { QuoteSuccess } from "@/pages/QuoteSuccess";
import { SmallMediumBusiness } from "@/pages/industries/SmallMediumBusiness";
import { Hospitality } from "@/pages/industries/Hospitality";
import { Retail } from "@/pages/industries/Retail";
import { PersonalServices } from "@/pages/industries/PersonalServices";
import { DojoGo } from "@/pages/products/DojoGo";
import { DojoPocket } from "@/pages/products/DojoPocket";
import { DojoWired } from "@/pages/products/DojoWired";
import { CardMachines } from "@/pages/products/CardMachines";
import { OnlinePayments } from "@/pages/products/OnlinePayments";
import { IntegratedPayments } from "@/pages/products/IntegratedPayments";
import { TapToPayIPhone } from "@/pages/products/TapToPayIPhone";
import { Bookings } from "@/pages/products/Bookings";
import { Sidekick } from "@/pages/products/Sidekick";
import { BusinessFunding } from "@/pages/products/BusinessFunding";
import { FlexFunds } from "@/pages/products/FlexFunds";
import { CapitalOnTap } from "@/pages/products/CapitalOnTap";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
    import { TermsOfService } from "@/pages/TermsOfService";
    import { MarketingCampaign } from "@/pages/MarketingCampaign";

    const HomePage = () => {
  useEffect(() => {
    // Set homepage structured data
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Arborpaygo Payment Terminals",
      "description": "Fast, reliable payment terminals for UK businesses. Zero setup fees, 24/7 support, no contracts.",
      "brand": {
        "@type": "Brand",
        "name": "Arborpaygo"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "0",
        "highPrice": "79",
        "offerCount": "3"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15000"
      }
    };

    let script = document.querySelector('script[data-schema="product"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'product');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(productSchema);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="UK's Leading Payment Provider - Card Machines & Payment Solutions"
        description="Join 110,000+ UK businesses using Arborpaygo. Fast payment terminals, zero setup fees, 24/7 support, no contracts. Get started in 24 hours."
        keywords="payment terminal UK, card machine, business payments, contactless payments, EPOS integration, merchant services, payment provider"
        canonical="https://arborpaygo.com/"
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProductShowcase />
        <SocialProof />
        <Features />
        <ContractSwitching />
        <Comparison />
        <Industries />
        <CTABanner />
        <Testimonials />
        <PricingCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industry/services" element={<IndustryServices />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/quote/success" element={<QuoteSuccess />} />
        <Route path="/small-medium-business" element={<SmallMediumBusiness />} />
        <Route path="/industry/hospitality" element={<Hospitality />} />
        <Route path="/industry/retail" element={<Retail />} />
        <Route path="/industry/personal-services" element={<PersonalServices />} />
        <Route path="/products/dojo-go" element={<DojoGo />} />
        <Route path="/products/dojo-pocket" element={<DojoPocket />} />
        <Route path="/products/dojo-wired" element={<DojoWired />} />
        <Route path="/products/card-machines" element={<CardMachines />} />
        <Route path="/products/online-payments" element={<OnlinePayments />} />
        <Route path="/integrated-payments" element={<IntegratedPayments />} />
        <Route path="/products/tap-to-pay-iphone" element={<TapToPayIPhone />} />
        <Route path="/products/bookings" element={<Bookings />} />
        <Route path="/products/sidekick" element={<Sidekick />} />
        <Route path="/products/business-funding" element={<BusinessFunding />} />
        <Route path="/products/flex-funds" element={<FlexFunds />} />
        <Route path="/products/capital-on-tap" element={<CapitalOnTap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/free-website-review" element={<MarketingCampaign />} />
          </Routes>
        </Router>
      );
    };
