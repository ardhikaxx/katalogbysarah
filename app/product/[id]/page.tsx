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
    <div className="ecommerceDetailPage">
      <div className="ecoContainer">
        <nav className="ecoBreadcrumb">
          <Link href="/" className="ecoBackLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Katalog
          </Link>
          <span className="ecoBreadcrumbSep">/</span>
          <span className="ecoBreadcrumbCurrent">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="ecoProductSection">
          <div className="ecoImageGallery">
            <div className="ecoMainImageWrapper">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="ecoMainImage"
                priority
              />
              <div className="ecoCategoryBadge">{product.category}</div>
            </div>
          </div>
          
          <div className="ecoProductInfo">
            <h1 className="ecoProductTitle">{product.name}</h1>
            <p className="ecoProductPrice">{product.price}</p>
            
            <div className="ecoDivider"></div>
            
            <div className="ecoDescription">
              <h3 className="ecoDescTitle">Deskripsi Produk</h3>
              <div className="ecoDescContent">
                {product.desc.split('\n').map((line, i) => (
                  <p key={i} className={line.trim().startsWith('~') ? 'ecoListItem' : ''}>
                     {line.replace('~', '').trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="ecoActionBox">
              <div className="ecoDeliveryInfo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span>Produk Pre-Order (Pengerjaan 3-7 hari)</span>
              </div>
              <a 
                href={getWhatsAppLink(product)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ecoBuyBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Pesan Sekarang via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="ecoRelatedSection">
          <h2 className="ecoRelatedTitle">Mungkin Anda Juga Suka</h2>
          <div className="ecoRelatedGrid">
            {relatedProducts.map(related => (
              <Link href={`/product/${related.id}`} key={related.id} className="ecoRelatedCard">
                <div className="ecoRelatedImageWrapper">
                  <Image 
                    src={related.image} 
                    alt={related.name}
                    fill
                    className="ecoRelatedImage"
                  />
                </div>
                <div className="ecoRelatedInfo">
                  <span className="ecoRelatedCategory">{related.category}</span>
                  <h4 className="ecoRelatedName">{related.name}</h4>
                  <p className="ecoRelatedPrice">{related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
