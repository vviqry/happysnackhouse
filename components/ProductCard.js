import Image from "next/image";

/**
 * Reusable product card component.
 *
 * @param {object} props
 * @param {string} props.name - Product name
 * @param {string} props.description - Product description
 * @param {string} props.image - Image URL or path
 * @param {string} [props.badge] - Optional badge text (e.g., "Produk Pertama", "Baru!")
 * @param {boolean} props.available - Whether the product is available
 */
export default function ProductCard({
  name,
  description,
  image,
  badge,
  available = true,
}) {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-happy-yellow/40 transition-all duration-300 hover:-translate-y-1">
      {/* Image Area */}
      <div className="relative bg-gradient-to-br from-happy-yellow-50 to-happy-yellow-light/30 p-6 sm:p-8 flex items-center justify-center aspect-square sm:aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="object-contain w-28 h-28 sm:w-36 sm:h-36 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-happy-red text-white text-xs font-bold rounded-full shadow-sm">
            {badge}
          </span>
        )}

        {/* Availability Badge */}
        {!available && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">
            Segera Hadir
          </span>
        )}
      </div>

      {/* Info Area */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-extrabold text-chocolate-brown mb-1.5">
          {name}
        </h3>
        <p className="text-sm text-chocolate-brown/60 font-medium leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Status indicator */}
        <div className="mt-3 flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${
              available ? "bg-happy-green" : "bg-gray-300"
            }`}
          />
          <span
            className={`text-xs font-semibold ${
              available ? "text-happy-green" : "text-gray-400"
            }`}
          >
            {available ? "Tersedia" : "Segera Hadir"}
          </span>
        </div>
      </div>
    </div>
  );
}
