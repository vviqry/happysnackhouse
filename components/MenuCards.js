import Link from "next/link";
import { Handshake, Candy, MapPin, Package } from "lucide-react";
import { links } from "@/data/products";

const menuItems = [
  {
    icon: Handshake,
    emoji: "🤝",
    title: "Jadi Mitra",
    description: "Gabung kemitraan dan mulai bisnis snack bersama kami",
    href: links.mitra,
    external: true,
    bgColor: "bg-happy-red",
    hoverColor: "hover:bg-happy-red-hover",
    shadowColor: "shadow-happy-red/20",
    hoverShadow: "hover:shadow-happy-red/30",
    iconBg: "bg-white/20",
  },
  {
    icon: Candy,
    emoji: "🍬",
    title: "Produk",
    description: "Lihat koleksi camilan berkualitas kami",
    href: "/produk",
    external: false,
    bgColor: "bg-happy-yellow",
    hoverColor: "hover:bg-happy-yellow/90",
    shadowColor: "shadow-happy-yellow/20",
    hoverShadow: "hover:shadow-happy-yellow/30",
    iconBg: "bg-chocolate-brown/15",
    textColor: "text-chocolate-brown",
    descColor: "text-chocolate-brown/60",
  },
  {
    icon: MapPin,
    emoji: "📍",
    title: "Hubungi Kami",
    description: "Kontak dan lokasi Happy Snack House",
    href: "#kontak",
    external: false,
    bgColor: "bg-happy-green",
    hoverColor: "hover:bg-happy-green-hover",
    shadowColor: "shadow-happy-green/20",
    hoverShadow: "hover:shadow-happy-green/30",
    iconBg: "bg-white/20",
  },
  {
    icon: Package,
    emoji: "📦",
    title: "Cara Order",
    description: "Langkah mudah memesan produk kami",
    href: "#cara-order",
    external: false,
    bgColor: "bg-happy-blue",
    hoverColor: "hover:bg-happy-blue-hover",
    shadowColor: "shadow-happy-blue/20",
    hoverShadow: "hover:shadow-happy-blue/30",
    iconBg: "bg-white/20",
  },
];

export default function MenuCards() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-chocolate-brown mb-3">
            Apa yang Kamu Cari? 🔍
          </h2>
          <p className="text-chocolate-brown/60 font-medium text-sm sm:text-base max-w-md mx-auto">
            Pilih menu di bawah untuk menemukan informasi yang kamu butuhkan
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-2xl mx-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isDefaultText = !item.textColor;
            const Component = item.external ? "a" : Link;
            const extraProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Component
                key={item.title}
                href={item.href}
                {...extraProps}
                className={`animate-scale-in delay-${(index + 1) * 100} btn-press group flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl ${item.bgColor} ${item.hoverColor} ${isDefaultText ? "text-white" : item.textColor} shadow-lg ${item.shadowColor} ${item.hoverShadow} hover:shadow-xl transition-all duration-200 hover:-translate-y-1`}
              >
                {/* Icon Container */}
                <span
                  className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.iconBg} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </span>

                {/* Title */}
                <span className="font-extrabold text-base sm:text-lg leading-tight mb-1.5">
                  {item.emoji} {item.title}
                </span>

                {/* Description */}
                <span
                  className={`text-xs sm:text-sm font-medium leading-snug ${
                    isDefaultText ? "text-white/75" : item.descColor
                  }`}
                >
                  {item.description}
                </span>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
