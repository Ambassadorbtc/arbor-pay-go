export const LogoSection = () => {
  const logos = [
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/lane7.svg", alt: "Lane7" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/cote.svg", alt: "Cote" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/boxpark.svg", alt: "Boxpark" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/lawson.svg", alt: "Lawson" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/n-m-no-frame.svg", alt: "N&M" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/londis.svg", alt: "Londis" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pizza-pilgrims.svg", alt: "Pizza Pilgrims" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wookey-hole.svg", alt: "Wookey Hole" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-12">
          Trusted by leading businesses across the UK
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
