import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO = ({
  title,
  description,
  keywords = "payment terminal, card machine, UK payments, business payments, contactless payments, EPOS integration",
  canonical,
  ogImage = "https://c.animaapp.com/mky7fepxnTIlgE/assets/test-split-lrg.png",
  ogType = "website",
  breadcrumbs,
}: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = `${title} | Arborpaygo`;

    // Set meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: `${title} | Arborpaygo` },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'Arborpaygo' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${title} | Arborpaygo` },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Arborpaygo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Set canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Add structured data for breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `https://arborpaygo.com${crumb.url}`
        }))
      };

      let script = document.querySelector('script[data-schema="breadcrumb"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Add organization schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arborpaygo",
      "url": "https://arborpaygo.com",
      "logo": "https://c.animaapp.com/mky7fepxnTIlgE/img/uploaded-asset-1769700689352-0.png",
      "description": "UK's leading payment provider offering card machines, online payments, and business solutions with zero setup fees.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "167-169 Great Portland Street, 5th Floor",
        "addressLocality": "London",
        "postalCode": "W1W 5PF",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-800-123-4567",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://twitter.com/dojo_business_",
        "https://www.facebook.com/Dojotech-101737171450003",
        "https://www.linkedin.com/company/dojo-tech/"
      ]
    };

    let orgScript = document.querySelector('script[data-schema="organization"]');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.setAttribute('type', 'application/ld+json');
      orgScript.setAttribute('data-schema', 'organization');
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(orgSchema);

  }, [title, description, keywords, canonical, ogImage, ogType, breadcrumbs]);

  return null;
};
