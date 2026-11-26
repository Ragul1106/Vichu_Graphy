import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-400">
          Welcome to your VichuGraphy administration panel.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Products", href: "/admin/products" },
            { name: "Add Product", href: "/admin/products/new" },
            { name: "Website", href: "/" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:border-blue-500"
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm text-gray-400">
                Manage your VichuGraphy website
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}