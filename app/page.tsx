"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { products, getWhatsAppLink } from "@/app/data/products";
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
                  <Link href={`/product/${product.id}`} className="detailBtnCircle" aria-label="Lihat Detail">
                    <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </Link>
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
