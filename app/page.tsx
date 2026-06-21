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
            </div>
            
            <div className="cardContent">
              <div className="cardHeader">
                <h2 className="cardTitle">{product.name}</h2>
                <span className="cardCategoryBadge">{product.category}</span>
              </div>
              
              <p className="cardDesc">{product.desc}</p>
              
              <div className="cardFooter">
                <span className="cardPrice">{product.price}</span>
                <div className="cardActionButtons">
                  <a href={`#detail-${product.id}`} className="detailBtnCircle" aria-label="Lihat Detail">
                    <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </a>
                  <a 
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buyBtnPill"
                  >
                    <svg className="basketIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10h18l-2 11H5L3 10Z"/>
                      <path d="M8 10V5a4 4 0 0 1 8 0v5"/>
                    </svg>
                    Beli
                  </a>
                </div>
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
