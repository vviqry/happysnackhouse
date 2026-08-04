import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/products";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-happy-yellow-50 via-happy-yellow-light/40 to-white">
      {/* Decorative circles */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-happy-yellow/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-happy-yellow/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-6 sm:pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Merek 2 / Brand Banner Image */}
          <div className="animate-fade-in-up w-full flex justify-center p-0 m-0">
            <Image
              src="/merek2.png"
              alt="Happy Snack House — Rumahnya Camilan Manis & Momen Ceria"
              width={550}
              height={280}
              className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg h-auto drop-shadow-md p-0 m-0"
              priority
            />
          </div>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-base sm:text-lg text-chocolate-brown/70 font-medium max-w-xl my-4 leading-relaxed">
            Happy Snack House menyediakan berbagai camilan berkualitas untuk
            keluarga, warung, reseller, dan sekolah.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* CTA Utama */}
            <Link
              href={links.mitra}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-happy-red hover:bg-happy-red-hover text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-happy-red/25 hover:shadow-xl hover:shadow-happy-red/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              🤝 Jadi Mitra
            </Link>

            {/* CTA Kedua */}
            <Link
              href="/produk"
              className="btn-press w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-happy-yellow text-chocolate-brown font-bold text-base sm:text-lg rounded-2xl shadow-md hover:shadow-lg hover:bg-happy-yellow-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              🍬 Lihat Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
