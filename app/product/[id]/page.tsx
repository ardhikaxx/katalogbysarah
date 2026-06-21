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
    <div className="bentoDetailPage">
      <div className="bentoNav">
        <Link href="/" className="bentoBackBtn" aria-label="Kembali ke Katalog">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Katalog
        </Link>
      </div>

      <div className="bentoGrid">
        {/* Box 1: Image Showcase (Large) */}
        <div className="bentoBox bentoImage" style={{ animationDelay: '0.1s' }}>
          <Image 
            src={product.image} 
            fill 
            className="bImg" 
            alt={product.name}
            priority
          />
          <div className="bentoCategoryTag">{product.category}</div>
        </div>

        {/* Box 2: Title & Price */}
        <div className="bentoBox bentoHeader" style={{ animationDelay: '0.2s' }}>
          <h1 className="bentoTitle">{product.name}</h1>
          <p className="bentoPrice">{product.price}</p>
        </div>

        {/* Box 3: Description / Details */}
        <div className="bentoBox bentoDesc" style={{ animationDelay: '0.3s' }}>
          <h3>Keterangan Produk</h3>
          <div className="bentoDescList">
            {product.desc.split('\n').map((line, i) => (
              <p key={i} className={line.trim().startsWith('~') ? 'bentoListItem' : 'bentoListText'}>
                 {line.replace('~', '').trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Box 4: Buy Action */}
        <div className="bentoBox bentoAction" style={{ animationDelay: '0.4s' }}>
          <div className="bentoActionInner">
            <h3>Tertarik memesan?</h3>
            <p>Silakan hubungi kami untuk menyesuaikan warna atau tambahan nama.</p>
            <a 
              href={getWhatsAppLink(product)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bentoBuyBtn"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
