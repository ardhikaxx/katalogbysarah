import { products, getWhatsAppLink } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  return (
    <div className="productContainer">
      <div className="productNav">
        <Link href="/" className="backBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Kembali ke Katalog
        </Link>
      </div>

      <div className="productGrid">
        <div className="productImageCol">
          <div className="productImageWrapper">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="productImage"
              priority
            />
          </div>
        </div>
        
        <div className="productInfoCol">
          <div className="productBadge">{product.category}</div>
          <h1 className="productTitle">{product.name}</h1>
          <p className="productPrice">{product.price}</p>
          
          <div className="productDivider"></div>
          
          <div className="productDescSection">
            <h3 className="descTitle">Detail Produk</h3>
            <div className="productDesc">
              {product.desc.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          
          <div className="productAction">
            <a 
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="buyBtnLarge"
            >
              <svg className="basketIconLarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h18l-2 11H5L3 10Z"/>
                <path d="M8 10V5a4 4 0 0 1 8 0v5"/>
              </svg>
              Pesan via WhatsApp
            </a>
            <p className="actionNote">Pemesanan dilakukan dengan aman melalui WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
