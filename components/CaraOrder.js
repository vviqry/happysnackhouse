import { MessageCircle, ClipboardList, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Hubungi Admin",
    description: "Chat via WhatsApp untuk konsultasi produk",
    color: "bg-happy-green",
    iconColor: "text-happy-green",
    ringColor: "ring-happy-green/20",
  },
  {
    icon: ClipboardList,
    emoji: "📋",
    title: "Pilih Produk",
    description: "Tentukan produk dan jumlah yang diinginkan",
    color: "bg-happy-yellow",
    iconColor: "text-happy-yellow",
    ringColor: "ring-happy-yellow/30",
  },
  {
    icon: CheckCircle,
    emoji: "✅",
    title: "Konfirmasi Pesanan",
    description: "Konfirmasi detail pesanan dan pembayaran",
    color: "bg-happy-blue",
    iconColor: "text-happy-blue",
    ringColor: "ring-happy-blue/20",
  },
  {
    icon: Truck,
    emoji: "🚚",
    title: "Produk Dikirim",
    description: "Pesanan dikemas dan dikirim ke alamat kamu",
    color: "bg-happy-red",
    iconColor: "text-happy-red",
    ringColor: "ring-happy-red/20",
  },
];

export default function CaraOrder() {
  return (
    <section id="cara-order" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-chocolate-brown mb-3">
            Cara Order 📦
          </h2>
          <p className="text-chocolate-brown/60 font-medium text-sm sm:text-base max-w-md mx-auto">
            Pesan camilan Happy Snack House dalam 4 langkah mudah
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-md mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-happy-green via-happy-yellow via-happy-blue to-happy-red opacity-25" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-4 sm:gap-5"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${step.color} ring-4 ${step.ringColor} shrink-0 shadow-md`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="pt-1 sm:pt-2 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-chocolate-brown/40 uppercase tracking-wider">
                        Langkah {index + 1}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-chocolate-brown leading-tight mb-1">
                      {step.emoji} {step.title}
                    </h3>
                    <p className="text-sm text-chocolate-brown/60 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
