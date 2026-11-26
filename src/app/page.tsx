import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCollectionsWithItems } from "@/lib/supabase/data";

export const revalidate = 60;

export default async function Home() {
  const collections = await getCollectionsWithItems();

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#26231f]">
      <section
        id="collections"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8"
      >
        {collections.map((collection) => (
          <section
            key={collection.id}
            id={collection.slug}
            className="mb-20 scroll-mt-8"
          >
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {collection.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  {collection.description}
                </p>
              </div>

              <span className="text-sm font-medium text-gray-500">
                {collection.items.length} Items
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
              {collection.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        No image available
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                    <h3 className="text-sm font-semibold sm:text-base">
                      {item.name}
                    </h3>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-green-700"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-right">
              <Link
                href={`/collections/${collection.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                View Collection
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        ))}

        {collections.length === 0 && (
          <p className="py-20 text-center text-gray-500">
            No collections are currently available.
          </p>
        )}
      </section>
    </main>
  );
}
