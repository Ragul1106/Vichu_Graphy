import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import WhatsAppLink from "@/components/WhatsAppLink";
export default function ProductCard({ product }: { product: Product }) {
  const message = `Hello VichuGraphy! I am interested in ${product.name}. Listed price: ₹${product.price}. Please share more details and customization options.`;
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <span className="image-arrow">
          <ArrowUpRight size={18} />
        </span>
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </Link>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>From ₹{product.price.toLocaleString("en-IN")}</strong>
          <WhatsAppLink
            message={message}
            label="Enquire"
            className="small-whatsapp"
          />
        </div>
      </div>
    </article>
  );
}
