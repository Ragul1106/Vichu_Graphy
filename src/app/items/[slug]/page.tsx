
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { collections } from "@/lib/data";

export function generateStaticParams() {
  return collections.flatMap((collection) =>
    collection.items.map((item) => ({
      slug: item.slug,
    }))
  );
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = collections.find((group) =>
    group.items.some((item) => item.slug === slug)
  );

  const item = collection?.items.find(
    (product) => product.slug === slug
  );

  if (!collection || !item) {
    notFound();
  }

  const message = `Hello VichuGraphy! I am interested in ${item.name}. Please share the price, photos and available designs.`;

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

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

          {/* ITEM IMAGE */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* ITEM DETAILS */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              {collection.title}
            </p>

            <h1 className="text-3xl font-bold sm:text-5xl">
              {item.name}
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {item.description}
            </p>

            <div className="mt-8 space-y-3 rounded-xl bg-gray-100 p-5">
              <p className="font-semibold">Product Enquiry</p>

              <p className="text-sm leading-6 text-gray-600">
                Contact us to know the price, available designs and
                further details about this item.
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
