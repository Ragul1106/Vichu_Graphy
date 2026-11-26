
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getCollectionBySlug } from "@/lib/supabase/data";

export const revalidate = 60;

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = await getCollectionBySlug(slug);

  if (!collection) notFound();

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
          VichuGraphy Collections
        </p>

        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          {collection.title}
        </h1>

        <p className="mx-auto max-w-2xl text-gray-600">
          {collection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {collection.items.map((item, index) => {
          const message = `Hello VichuGraphy! I am interested in ${item.name}. Please share the price and available designs.`;

          const whatsappUrl = `https://wa.me/919092223815?text=${encodeURIComponent(message)}`;

          return (
            <article
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 font-semibold text-green-800">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h2 className="mb-3 text-xl font-semibold">
                {item.name}
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/items/${item.slug}`}
                  className="inline-flex items-center rounded-full border border-green-700 px-5 py-2.5 text-sm font-medium text-green-700 transition hover:bg-green-50"
                >
                  View Details
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-800"
                >
                  <MessageCircle size={17} />
                  Enquire Now
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {collection.items.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No products are currently available in this collection.
        </p>
      )}
    </section>
  );
}
