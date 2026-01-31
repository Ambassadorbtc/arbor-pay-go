export const TrustBar = () => {
  const logos = [
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/lane7.svg", alt: "Lane7" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/cote.svg", alt: "Cote" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/boxpark.svg", alt: "Boxpark" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pizza-pilgrims.svg", alt: "Pizza Pilgrims" },
    { src: "https://c.animaapp.com/mky7fepxnTIlgE/assets/londis.svg", alt: "Londis" },
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-bold text-gray-400 mb-6 sm:mb-8 uppercase tracking-wider">
          Trusted by 110,000+ businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <img src={logo.src} alt={logo.alt} className="h-6 sm:h-8 lg:h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
