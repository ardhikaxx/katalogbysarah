# 🌸 Katalog Handmade By Sarah

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)

Selamat datang di repositori **Katalog Handmade By Sarah**! Proyek ini adalah sebuah purwarupa aplikasi web katalog produk rajutan (*crochet & amigurumi*) eksklusif yang dirancang dengan antarmuka yang sangat elegan, modern, dan sangat responsif di berbagai perangkat.

## ✨ Fitur Utama

- 📱 **Mobile-First Design**: Tata letak yang dioptimalkan dengan cermat untuk ukuran layar Smartphone, Tablet, hingga Layar Desktop yang sangat lebar.
- 🎨 **Premium Aesthetics**: Skema warna bernuansa *Pink pastel* yang lembut (`--color-primary`), dipadukan dengan tipografi ganda (Playfair Display & Plus Jakarta Sans) untuk nuansa mewah dan jelas terbaca.
- 🪄 **Micro-Animations**: Transisi halus saat *hover* (disorot), efek *glow* (cahaya) pada *header*, serta animasi turun berlahan saat halaman pertama kali dimuat.
- 🗂️ **Grid Katalog Cerdas**: Daftar produk yang dapat dilipat dan diperluas jumlah kolomnya secara otomatis tanpa memutus tata letak (*Symmetrical Vertical & Horizontal layout*).
- 🏷️ **Filter & Pencarian Dinamis**: Dilengkapi dengan fitur pencarian interaktif dan *Filter Pills* kategori yang membungkus (wrap) dengan rapi di perangkat *mobile*.
- 🖼️ **Giant Elongated Detail Card**: Halaman detail produk menggunakan konsep desain "Kartu Raksasa" yang imersif.

## 🚀 Teknologi yang Digunakan

Aplikasi web ini dibangun menggunakan tumpukan teknologi modern untuk memastikan kecepatan, keandalan, dan kemudahan pengembangan masa depan:

- **Framework**: [Next.js 16](https://nextjs.org/) dengan *App Router* terbaru.
- **Library UI**: [React](https://reactjs.org/).
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/) untuk pengetikan statis yang kokoh.
- **Styling**: *Vanilla CSS* (`globals.css`) dengan pemanfaatan ekstensif CSS Variables (Custom Properties) untuk memudahkan pembuatan Tema (Theming).

## 📂 Struktur Proyek Utama

```text
├── app/
│   ├── globals.css         # Jantung sistem desain dan utility classes (Micro-animations, Layouts)
│   ├── layout.tsx          # Wrapper halaman Next.js global
│   ├── page.tsx            # Halaman Beranda (Katalog Utama)
│   └── product/
│       └── [id]/page.tsx   # Halaman Detail Produk Dinamis (Giant Elongated Card)
├── public/                 # Aset gambar statis
└── package.json            # Daftar dependensi dan script aplikasi
```

## 🛠️ Panduan Memulai (Development)

Untuk menjalankan proyek ini secara lokal (di komputer Anda), ikuti langkah-langkah mudah berikut:

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/ardhikaxx/katalogbysarah.git
   ```
2. **Masuk ke direktori proyek:**
   ```bash
   cd katalogbysarah
   ```
3. **Instal dependensi NPM:**
   ```bash
   npm install
   ```
4. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda untuk melihat hasil maha karya ini!

## 🤝 Kontribusi & Dukungan
Sangat dipersilakan untuk memberikan *Bugs report*, masukan ide desain, maupun Pull Requests!

---
*Dirancang dengan penuh ketelitian untuk menampilkan karya rajutan terbaik.* 🧶💖
