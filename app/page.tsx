"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
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

const categories = ["Semua", "Bare Bunny", "Dress & Hat", "Hoodie", "Pajamas"];

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (product: typeof products[0]) => {
    const phone = "6281234567890"; // Ganti dengan nomor WhatsApp Sarah
    const message = `Halo Kak Sarah, saya ingin memesan:\n\n*${product.name}*\nHarga: ${product.price}\n\nApakah masih bisa dipesan?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container">
      <header className="header">
        <div className="headerGlow"></div>
        <h1 className="title">
          <span className="titleEyebrow">Katalog Rajutan Eksklusif</span>
          <span className="italic">Handmade</span> By Sarah
        </h1>
        <p className="subtitle">Temukan produk rajutan impianmu yang dibuat dengan cinta.</p>
      </header>

      <div className="controls">
        <div className="searchBar">
          <input 
            type="text" 
            placeholder="Cari produk impianmu..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          <span className="searchIcon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        
        <div className="filterPills">
          {categories.map(category => (
            <button
              key={category}
              className={`pill ${activeCategory === category ? "pillActive" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <div className="cardImageWrapper">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="cardImage"
              />
              <div className="cardCategoryBadge">{product.category}</div>
            </div>
            <div className="cardContentWrapper">
              <h2 className="cardTitle">{product.name}</h2>
              <p className="cardDesc">{product.desc}</p>
              <div className="cardDivider"></div>
              <div className="cardFooter">
                <div className="priceContainer">
                  <span className="priceLabel">Harga</span>
                  <span className="cardPrice">{product.price}</span>
                </div>
                <a 
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buyBtn"
                >
                  <span className="buyBtnText">Beli</span>
                  <span className="buyBtnIconWrapper">
                    <svg className="whatsappIcon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="emptyState">
          <p>Produk tidak ditemukan.</p>
        </div>
      )}
    </div>
  );
}
