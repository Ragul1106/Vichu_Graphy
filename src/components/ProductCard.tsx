
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const images =
    product.images?.length
      ? product.images
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const message = `Hello VichuGraphy! I am interested in ${product.name}. Listed price: ₹${product.price}. Please share more details and customization options.`;

  return (
    <article className="product-card">

      {/* Main Image */}
      <div className="product-image">
        <Link
          href={`/products/${product.slug}`}
          className="main-product-image"
        >
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            priority={false}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          <span className="image-arrow">
            <ArrowUpRight size={18} />
          </span>
        </Link>

        {product.tag && (
          <span className="product-tag">{product.tag}</span>
        )}
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="product-thumbnails">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={`product-thumbnail ${
                selectedImage === image ? "active" : ""
              }`}
              onClick={() => setSelectedImage(image)}
              aria-label={`View product image ${index + 1}`}
              aria-pressed={selectedImage === image}
            >
              <Image
                src={image}
                alt={`${product.name} view ${index + 1}`}
                fill
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Product Details */}
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>

        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>
            From ₹{product.price.toLocaleString("en-IN")}
          </strong>

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
