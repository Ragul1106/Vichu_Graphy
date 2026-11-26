import Link from "next/link";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Add New Product</h1>

        <p className="mt-2 text-gray-400">
          Product creation will be connected to Supabase next.
        </p>

        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-8">
          <p className="text-gray-300">
            This page will allow you to add product names, descriptions,
            prices, categories and images.
          </p>
        </div>

        <Link
          href="/admin/products"
          className="mt-8 inline-block text-blue-400 hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    </main>
  );
}