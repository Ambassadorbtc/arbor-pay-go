export const StatsSection = () => {
  const stats = [
    {
      icon: "https://c.animaapp.com/mky7fepxnTIlgE/assets/cloudcheck.svg",
      value: "99.99%",
      label: "Uptime",
      description: "Take payments whenever with our always-on payments platform.",
    },
    {
      icon: "https://c.animaapp.com/mky7fepxnTIlgE/assets/trendup.svg",
      value: "1.8bn",
      label: "Transactions",
      description: "We process over 1.8 billion transactions every year.",
    },
    {
      icon: "https://c.animaapp.com/mky7fepxnTIlgE/assets/lightning.svg",
      value: "58%",
      label: "Faster",
      description: "Take payments 58% faster than market average.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading technology that keeps your business running smoothly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-white to-stone-50 p-8 rounded-2xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={stat.icon} alt="" className="w-16 h-16" />
              </div>
              
              <div className="relative">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <img src={stat.icon} alt="" className="w-6 h-6" />
                </div>
                
                <div className="text-5xl font-bold text-teal-950 mb-2">
                  {stat.value}
                </div>
                
                <div className="text-sm font-semibold text-gray-900 mb-3">
                  {stat.label}
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
