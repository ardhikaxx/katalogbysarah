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
    <div className="editorialDetailLayout">
      <div className="editorialImageCol">
        <Link href="/" className="editorialBackBtn" aria-label="Kembali ke Katalog">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="editorialImage"
          priority
        />
      </div>
      
      <div className="editorialInfoCol">
        <div className="editorialInfoContent">
          <span className="editorialBadge">{product.category}</span>
          <h1 className="editorialTitle">{product.name}</h1>
          <p className="editorialPrice">{product.price}</p>
          
          <div className="editorialDivider"></div>
          
          <div className="editorialDescSection">
            <h3 className="editorialDescTitle">Keterangan Produk</h3>
            <div className="editorialDescBody">
              {product.desc.split('\n').map((line, i) => {
                if (line.trim().startsWith('~')) {
                  return (
                    <div key={i} className="editorialListItem">
                      <div className="editorialDot"></div>
                      <p>{line.replace('~', '').trim()}</p>
                    </div>
                  );
                }
                return <p key={i} className="editorialText">{line}</p>;
              })}
            </div>
          </div>
          
          <div className="editorialActionSection">
            <a 
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="editorialBuyBtn"
            >
              <span>Hubungi via WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <p className="editorialNote">Pesanan dibuat secara khusus (made-to-order). Waktu pengerjaan bergantung pada antrean.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
