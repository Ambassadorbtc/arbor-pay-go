export const ProductsSection = () => {
  const products = [
    {
      name: "Dojo Go",
      title: "High pace, face-to-face",
      description: "Serve more customers, faster. Take payments in seconds with our fast, versatile card machine.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/go.jpg",
      link: "/products/dojo-go/",
      color: "from-teal-700 to-teal-900",
    },
    {
      name: "Dojo Pocket",
      title: "In-the-pocket, on-the-go",
      description: "Boost revenue and streamline service with our portable device for orders and payments.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/pocket.jpg",
      link: "/products/dojo-pocket/",
      color: "from-gray-100 to-gray-200",
    },
    {
      name: "Dojo Wired",
      title: "Wired in, switched on",
      description: "Stationary countertop and kiosk payments. No charging, no staff – just easy, integrated payments.",
      image: "https://c.animaapp.com/mky7fepxnTIlgE/assets/wired.jpg",
      link: "/products/dojo-wired/",
      color: "from-teal-400 to-teal-500",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of hard-working hardware for the right solution for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-6 pb-0">
                <div className="text-sm font-semibold text-teal-800 mb-2">
                  {product.name}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/all-products"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-teal-950 border-2 border-teal-950 rounded-full hover:bg-teal-50 transition-all"
          >
            View all products
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
