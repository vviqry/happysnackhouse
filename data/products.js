/**
 * Products data for Happy Snack House.
 * 
 * Mudah ditambah produk baru — cukup tambahkan object baru ke array.
 * Setiap produk memiliki:
 *   - id: unique identifier (untuk key & URL)
 *   - name: nama produk
 *   - description: deskripsi singkat
 *   - image: path gambar (dari /public/products/ atau URL external)
 *   - badge: label khusus (opsional, contoh: "Produk Pertama", "Baru!")
 *   - available: apakah produk tersedia
 *   - comingSoon: apakah produk akan datang (opsional)
 */

export const products = [
  {
    id: "fruity-candy",
    name: "Fruity Candy",
    description:
      "Permen buah dengan rasa segar dan manis. Disukai anak-anak dan cocok untuk dijual di warung, sekolah, maupun acara.",
    image: "https://iili.io/CUxDTNV.png",
    badge: "Produk Pertama",
    available: true,
  },
  // ──────────────────────────────────────────────────
  // Tambahkan produk baru di bawah ini:
  // ──────────────────────────────────────────────────
  //
  // {
  //   id: "chocolate-balls",
  //   name: "Chocolate Balls",
  //   description: "Bola cokelat renyah dengan isian lembut.",
  //   image: "/products/chocolate-balls.png",
  //   badge: "Baru!",
  //   available: true,
  // },
  //
  // {
  //   id: "basreng",
  //   name: "Basreng",
  //   description: "Bakso goreng kering pedas gurih yang bikin nagih.",
  //   image: "/products/basreng.png",
  //   available: true,
  // },
  //
  // {
  //   id: "makaroni",
  //   name: "Makaroni",
  //   description: "Makaroni kering renyah dengan bumbu spesial.",
  //   image: "/products/makaroni.png",
  //   available: true,
  // },
  //
  // {
  //   id: "sanjai",
  //   name: "Sanjai",
  //   description: "Keripik singkong khas dengan rasa pedas nikmat.",
  //   image: "/products/sanjai.png",
  //   available: true,
  // },
];

/**
 * Site-wide contact information.
 * Ubah di sini untuk update di seluruh website.
 */
export const contactInfo = {
  whatsapp: {
    number: "6285169175438",
    display: "+62 851-6917-5438",
    message: "Halo Happy Snack House! Saya ingin bertanya tentang produk Anda.",
  },
  instagram: {
    handle: "@happysnackhouse",
    url: "https://instagram.com/happysnackhouse",
  },
  address: "Padang, Sumatera Barat, Indonesia",
  operationalHours: "Senin - Sabtu, 08:00 - 17:00 WIB",
};

/**
 * External links
 */
export const links = {
  mitra: "https://kemitraan-happysnackhouse.vercel.app",
};
