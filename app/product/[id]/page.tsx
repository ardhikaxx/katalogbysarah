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
    <div className="productDetailPage">
      {/* Immersive blurred background */}
      <div className="productBgBlur">
        <Image src={product.image} alt="Background" fill className="bgBlurImage" />
      </div>

      <div className="productDetailWrapper">
        <nav className="productNavDetail">
          <Link href="/" className="backBtnDetail">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Kembali
          </Link>
        </nav>

        <div className="productShowcaseCard">
          <div className="showcaseImageCol">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="showcaseImage"
              priority
            />
            <div className="imageOverlayGradient"></div>
          </div>
          
          <div className="showcaseInfoCol">
            <div className="infoInner">
              <span className="premiumBadge">{product.category}</span>
              <h1 className="showcaseTitle">{product.name}</h1>
              <p className="showcasePrice">{product.price}</p>
              
              <div className="descBox">
                <h3 className="descBoxTitle">Tentang Produk Ini</h3>
                <div className="showcaseDesc">
                  {product.desc.split('\n').map((line, i) => {
                    if (line.trim().startsWith('~')) {
                      return (
                        <div key={i} className="descListItem">
                          <span className="checkIcon">✔</span>
                          <p>{line.replace('~', '').trim()}</p>
                        </div>
                      );
                    }
                    return <p key={i} className="descText">{line}</p>;
                  })}
                </div>
              </div>
            </div>
            
            <div className="showcaseAction">
              <a 
                href={getWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btnBuyPremium"
              >
                <span>Pesan Melalui WhatsApp</span>
                <span className="btnIconWrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
              <p className="secureNote">🔒 Transaksi 100% Aman & Terpercaya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
