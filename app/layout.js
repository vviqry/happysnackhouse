import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Happy Snack House — Rumahnya Camilan Manis & Momen Ceria",
  description:
    "Happy Snack House menyediakan berbagai camilan berkualitas untuk keluarga, warung, reseller, dan sekolah. Temukan produk unggulan dan peluang kemitraan bersama kami.",
  keywords: [
    "Happy Snack House",
    "camilan",
    "snack",
    "fruity candy",
    "permen buah",
    "mitra",
    "reseller",
    "warung",
    "jajanan",
    "snack anak",
  ],
  authors: [{ name: "Happy Snack House" }],
  openGraph: {
    title: "Happy Snack House — Rumahnya Camilan Manis & Momen Ceria",
    description:
      "Camilan berkualitas untuk keluarga, warung, reseller, dan sekolah. Bergabung menjadi mitra Happy Snack House!",
    type: "website",
    locale: "id_ID",
    siteName: "Happy Snack House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Snack House — Rumahnya Camilan Manis & Momen Ceria",
    description:
      "Camilan berkualitas untuk keluarga, warung, reseller, dan sekolah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFD54A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-nunito)]">
        {children}
      </body>
    </html>
  );
}
