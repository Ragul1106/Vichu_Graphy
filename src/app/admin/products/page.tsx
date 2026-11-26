import Link from "next/link";
import { requireAdmin } from "@/lib/supabase/admin-auth";

export default async function AdminProductsPage() {
    await requireAdmin();
  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="mt-2 text-gray-400">
              Manage your personalised gift products.
            </p>
          </div>

          <Link
            href="/admin/products/new"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700"
          >
            + Add Product
          </Link>
        </div>

        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
          <h2 className="text-xl font-semibold">Product Management</h2>
          <p className="mt-2 text-gray-400">
            Your Supabase products will appear here after database integration.
          </p>
        </div>

        <Link
          href="/admin/dashboard"
          className="mt-8 inline-block text-blue-400 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </main>
  );
}