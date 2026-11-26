
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFixedProductBySlug } from "@/lib/supabase/data";
import WhatsAppLink from "@/components/WhatsAppLink";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getFixedProductBySlug(slug);

  return {
    title: product?.name ?? "Product not found",
    description: product?.description ?? "VichuGraphy products",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const p = await getFixedProductBySlug(slug);

  if (!p) notFound();

  const message = `Hello VichuGraphy! I am interested in ${p.name}. Listed price: ₹${p.price}. ${p.description} Please share designs, sizes and customization details.`;

  return (
    <section className="product-detail page-section">
      <div className="detail-image">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            unoptimized
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
            No image available
          </div>
        )}
      </div>

      <div className="detail-copy">
        <span className="eyebrow">{p.category}</span>

        <h1>{p.name}</h1>

        <p className="detail-price">
          From ₹{p.price.toLocaleString("en-IN")}
        </p>

        <p>{p.description}</p>

        {p.details.length > 0 && (
          <>
            <h3>Details</h3>

            <ul>
              {p.details.map((detail, index) => (
                <li key={`${detail}-${index}`}>{detail}</li>
              ))}
            </ul>
          </>
        )}

        {p.gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {p.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${p.name} gallery ${index + 1}`}
                  fill
                  unoptimized
                  sizes="150px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <WhatsAppLink
          message={message}
          label="Enquire about this product"
        />

        <p className="fine-print">
          The displayed price is indicative. Final pricing may depend on size,
          material and customization.
        </p>

        <Link className="text-link" href="/gifts">
          Back to gifts
        </Link>
      </div>
    </section>
  );
}
