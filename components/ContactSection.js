import { Phone, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/data/products";

/* Instagram icon — lucide-react doesn't export one */
function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Phone,
    emoji: "💬",
    label: "WhatsApp",
    value: contactInfo.whatsapp.display,
    href: `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`,
    external: true,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    icon: InstagramIcon,
    emoji: "📸",
    label: "Instagram",
    value: contactInfo.instagram.handle,
    href: contactInfo.instagram.url,
    external: true,
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
  },
  {
    icon: MapPin,
    emoji: "📍",
    label: "Alamat",
    value: contactInfo.address,
    href: null,
    color: "bg-happy-red",
  },
  {
    icon: Clock,
    emoji: "🕐",
    label: "Jam Operasional",
    value: contactInfo.operationalHours,
    href: null,
    color: "bg-happy-blue",
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-chocolate-brown mb-3">
            Hubungi Kami 📍
          </h2>
          <p className="text-chocolate-brown/60 font-medium text-sm sm:text-base max-w-md mx-auto">
            Kami siap membantu kamu kapan saja
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isClickable = !!item.href;
            const Wrapper = isClickable ? "a" : "div";
            const wrapperProps = isClickable
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className={`group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-light-gray border border-transparent ${
                  isClickable
                    ? "hover:border-happy-yellow/50 hover:shadow-md cursor-pointer"
                    : ""
                } transition-all duration-200`}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.color} text-white shrink-0 ${
                    isClickable ? "group-hover:scale-110" : ""
                  } transition-transform duration-200`}
                >
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-bold text-chocolate-brown/45 uppercase tracking-wider mb-0.5">
                    {item.emoji} {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-chocolate-brown truncate">
                    {item.value}
                  </p>
                </div>

                {/* Arrow for clickable items */}
                {isClickable && (
                  <svg
                    className="ml-auto w-4 h-4 text-chocolate-brown/30 group-hover:text-chocolate-brown/60 group-hover:translate-x-0.5 transition-all shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
