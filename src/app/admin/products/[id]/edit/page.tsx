import Link from "next/link";

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Edit Product</h1>

        <p className="mt-3 text-gray-400">
          Product ID: {id}
        </p>

        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-8">
          <p className="text-gray-300">
            Product editing will be connected to Supabase next.
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