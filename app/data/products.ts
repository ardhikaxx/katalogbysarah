export const products = [
  {
    id: 1,
    image: "/assets/produk/produk1.jpg",
    name: "[25 cm] CUSTOM CROCHET Bare Bunny / Boneka Rajut Kelinci Telanjang (PLUSHIE AMIGURUMI)",
    desc: "CHAT SEBELUM ORDER~~\nBisa custom lain di luar etalase, sesuai desainmu!\nCUSTOM CROCHET BARE BUNNY :\n~ Tinggi: ± 25 cm | Lebar: ± 23 cm\n~ Benang: Chenille bulky\n~ BISA TAMBAH NAMA\n~ Bisa request bagian tertentu saja (baju/topi)\nWaktu pengerjaan: 3-7 hari\nGrab you crochet here :>",
    price: "Rp145.902",
    category: "Bare Bunny"
  },
  {
    id: 2,
    image: "/assets/produk/produk2.jpg",
    name: "[SARAH] CROCHET AMIGURUMI Bunny in Dress & Frog hat / Boneka Rajut Kelinci dengan Dress dan Topi Kodok [24cm] (CUSTOM WARNA)",
    desc: "CHAT SEBELUM ORDER\n(jika tidak, akan dikirim dengan warna yang sama seperti di gambar ya ^_^)\nCUSTOM CROCHET BUNNY WITH DRESS & FROG HAT\n~ Tinggi: ± 24 cm\n~ Lebar: ± 20 cm\n~ Benang: Chenille Bulky (super soft and fluffy)\nADD ON\n~ Tambah Nama: 3k per huruf\n~ Tambah Bordir (sesuai request)\nHappy Handmade Shopping<3",
    price: "Rp198.500",
    category: "Dress & Hat"
  },
  {
    id: 3,
    image: "/assets/produk/produk3.jpg",
    name: "[SARAH] CROCHET AMIGURUMI Bunny in Dress + Floppy Hat / Boneka Rajut Kelinci dengan Dress dan Floppy Hat [27-30cm] (CUSTOM WARNA)",
    desc: "CHAT SEBELUM ORDER\n(jika tidak, akan dikirim dengan warna yang sama seperti di gambar ya ^_^)\nBUNNY IN DRESS + FLOPPY HAT\n~ Tinggi: ± 27–30 cm\n~ Lebar: ± 20–25 cm\n~ Benang: Chenille Bulky (super soft and fluffy)\nADD ON\n~ Tambah Nama: 3k per huruf\n~ Tambah Bordir (sesuai request)\nHappy Handmade Shopping<3",
    price: "Rp238.000",
    category: "Dress & Hat"
  },
  {
    id: 4,
    image: "/assets/produk/produk4.jpg",
    name: "[SARAH] CROCHET AMIGURUMI Bunny in Hoodie / Boneka Rajut Kelinci dengan Hoodie [27-30cm] (CUSTOM WARNA)",
    desc: "CHAT SEBELUM ORDER\n(jika tidak, akan dikirim dengan warna yang sama seperti di gambar ya ^_^)\nCUSTOM CROCHET BUNNY IN HOODIE\n~ Tinggi: ± 27–30 cm\n~ Lebar: ± 20–25 cm\n~ Benang: Chenille Bulky (super soft and fluffy)\nADD ON\n~ Tambah Nama: 3k per huruf\n~ Tambah Bordir (sesuai request)\nHappy Handmade Shopping<3",
    price: "Rp238.000",
    category: "Hoodie"
  },
  {
    id: 5,
    image: "/assets/produk/produk5.jpg",
    name: "[SARAH] CROCHET AMIGURUMI Bunny in Pajamas + Frog Hat / Boneka Rajut Kelinci dengan Kemeja dan Topi Kodok [27-30cm] (CUSTOM WARNA)",
    desc: "CHAT SEBELUM ORDER\n(jika tidak, akan dikirim dengan warna yang sama seperti di gambar ya ^_^)\nBUNNY IN PAJAMAS + FROG HAT\n~ Tinggi: ± 27–30 cm\n~ Lebar: ± 20–25 cm\n~ Benang: Chenille Bulky (super soft and fluffy)\nADD ON\n~ Tambah Nama: 3k per huruf\n~ Tambah Bordir (sesuai request)\nHappy Handmade Shopping<3",
    price: "Rp238.000",
    category: "Pajamas"
  }
];

export const getWhatsAppLink = (product: typeof products[0]) => {
  const phone = "6281234567890";
  const message = `Halo Kak Sarah, saya ingin memesan:\n\n*${product.name}*\nHarga: ${product.price}\n\nApakah masih bisa dipesan?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
