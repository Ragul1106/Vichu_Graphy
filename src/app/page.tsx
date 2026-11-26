
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { collections } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#26231f]">

      {/* COLLECTIONS */}
      <section
        id="collections"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8"
      >
        {collections.map((collection) => (
          <section
            key={collection.slug}
            id={collection.slug}
            className="mb-20 scroll-mt-8"
          >
            {/* COLLECTION HEADING */}
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

            {/* ITEM CARDS */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
              {collection.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/items/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
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
          </section>
        ))}
      </section>
    </main>
  );
}
