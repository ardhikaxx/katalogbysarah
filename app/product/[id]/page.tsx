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

  // Get up to 4 other products for "Related Products"
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container">
      <header className="header" style={{ padding: "3rem 1rem 1rem" }}>
        <div className="headerGlow"></div>
      </header>

      <div className="detailCardWrapper">
        <Link href="/" className="backLinkDetail">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Kembali ke Katalog
        </Link>

        {/* Elongated Card matching catalog style */}
        <div className="detailCardMain">
          <div className="detailCardImageWrapper">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="detailCardImage"
              priority
            />
          </div>
          
          <div className="detailCardContent">
            <div className="detailCardHeader">
              <h1 className="detailCardTitle">{product.name}</h1>
              <span className="cardCategoryBadge detailCardBadge">{product.category}</span>
            </div>
            
            <div className="detailCardDescBox">
              {product.desc.split('\n').map((line, i) => (
                <p key={i} className={line.trim().startsWith('~') ? 'detailListItem' : 'detailTextItem'}>
                   {line.replace('~', '').trim()}
                </p>
              ))}
            </div>
            
            <div className="detailCardFooter">
              <span className="detailCardPrice">{product.price}</span>
              <div className="cardActionButtons">
                <a 
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buyBtnPill detailBuyBtn"
                >
                  <svg className="basketIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10h18l-2 11H5L3 10Z"/>
                    <path d="M8 10V5a4 4 0 0 1 8 0v5"/>
                  </svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="ecoRelatedSection" style={{ maxWidth: "900px", margin: "4rem auto 0" }}>
        <h2 className="ecoRelatedTitle" style={{ textAlign: "left", marginBottom: "1.5rem" }}>Mungkin Anda Juga Suka</h2>
        <div className="grid" style={{ padding: 0 }}>
          {relatedProducts.map(related => (
            <div key={related.id} className="card">
              <div className="cardImageWrapper">
                <Image 
                  src={related.image} 
                  alt={related.name}
                  fill
                  className="cardImage"
                />
              </div>
              
              <div className="cardContent">
                <div className="cardHeader">
                  <h2 className="cardTitle">{related.name}</h2>
                  <span className="cardCategoryBadge">{related.category}</span>
                </div>
                
                <p className="cardDesc">{related.desc}</p>
                
                <div className="cardFooter">
                  <span className="cardPrice">{related.price}</span>
                  <div className="cardActionButtons">
                    <Link href={`/product/${related.id}`} className="detailBtnCircle" aria-label="Lihat Detail">
                      <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </Link>
                    <a 
                      href={getWhatsAppLink(related)}
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
      </div>
    </div>
  );
}
