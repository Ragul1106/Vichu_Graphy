import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getQuoteItemBySlug } from "@/lib/supabase/data";
import ItemImageGallery from "@/components/ItemImageGallery";

export const revalidate = 60;

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await getQuoteItemBySlug(slug);

  if (!result) notFound();

  const { item, collection } = result;

  const message = `Hello VichuGraphy! I am interested in ${item.name}. Please share the price, photos and available designs.`;

  const whatsappUrl = `https://wa.me/919092223815?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-[#fffdf9] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* ITEM IMAGE GALLERY */}
          <div>
            <ItemImageGallery images={item.gallery} name={item.name} />
          </div>

          {/* ITEM DETAILS */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              {collection.title}
            </p>

            <h1 className="text-3xl font-bold sm:text-5xl">{item.name}</h1>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {item.description}
            </p>

            <div className="mt-8 space-y-3 rounded-xl bg-gray-100 p-5">
              <p className="font-semibold">Product Enquiry</p>

              <p className="text-sm leading-6 text-gray-600">
                Contact us to know the price, available designs and further
                details about this item.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              <MessageCircle size={20} />
              Enquire on WhatsApp
            </a>

            <div className="mt-8">
              <Link
                href={`/#${collection.slug}`}
                className="text-sm font-medium text-gray-600 underline underline-offset-4 hover:text-green-700"
              >
                Explore more {collection.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
