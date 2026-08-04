export default function AboutSection() {
  return (
    <section id="tentang" className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-chocolate-brown mb-6">
            Tentang Happy Snack House 🏠
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-8 bg-happy-yellow rounded-full" />
            <div className="h-1 w-3 bg-happy-yellow/50 rounded-full" />
            <div className="h-1 w-1.5 bg-happy-yellow/30 rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-chocolate-brown/75 font-medium leading-relaxed">
              <span className="font-bold text-chocolate-brown">
                Happy Snack House
              </span>{" "}
              adalah brand camilan lokal yang berkomitmen menghadirkan produk
              berkualitas dengan identitas visual yang kuat dan pelayanan
              terbaik.
            </p>

            <p className="text-base sm:text-lg text-chocolate-brown/75 font-medium leading-relaxed">
              Visi kami adalah menjadi{" "}
              <span className="font-bold text-happy-red">
                brand snack nasional
              </span>{" "}
              dengan berbagai pilihan produk yang mampu memberikan{" "}
              <span className="font-bold text-chocolate-brown">
                peluang usaha
              </span>{" "}
              bagi masyarakat.
            </p>
          </div>

          {/* Values / Trust Badges */}
          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { emoji: "🌟", label: "Berkualitas" },
              { emoji: "🤝", label: "Terpercaya" },
              { emoji: "💛", label: "Peduli" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 p-3 sm:p-4 bg-white rounded-2xl shadow-sm"
              >
                <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                <span className="text-xs sm:text-sm font-bold text-chocolate-brown">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
