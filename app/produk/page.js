import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Produk Kami — Happy Snack House",
  description:
    "Lihat koleksi lengkap camilan berkualitas dari Happy Snack House. Fruity Candy dan berbagai produk lainnya.",
};

export default function ProdukPage() {
  const availableProducts = products.filter((p) => p.available);
  const comingSoonProducts = products.filter((p) => !p.available);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 section-padding">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-chocolate-brown/50 hover:text-chocolate-brown mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Kembali ke Beranda
          </Link>

          {/* Page Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-chocolate-brown mb-4">
              Produk Kami 🍬
            </h1>
            <p className="text-chocolate-brown/60 font-medium text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Camilan berkualitas untuk keluarga, warung, reseller, dan sekolah.
              Selalu ada produk baru yang akan hadir!
            </p>
          </div>

          {/* Products Grid */}
          {availableProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {availableProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}

          {/* Coming Soon Products */}
          {comingSoonProducts.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-chocolate-brown mb-6 text-center">
                Segera Hadir 🚀
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {comingSoonProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🍬</p>
              <p className="text-chocolate-brown/50 font-medium">
                Produk akan segera tersedia. Nantikan ya!
              </p>
            </div>
          )}

          {/* Info Note */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-happy-yellow-50 border border-happy-yellow/30 rounded-2xl">
              <span className="text-lg">💡</span>
              <p className="text-sm font-medium text-chocolate-brown/70">
                Ingin jual produk kami di warung kamu?{" "}
                <Link
                  href="https://kemitraan-happysnackhouse.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-happy-red hover:underline"
                >
                  Gabung jadi Mitra!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
