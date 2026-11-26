export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 p-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8">
        <h1 className="text-3xl font-bold text-center">
          Vichu<span className="text-blue-500">G</span>raphy
        </h1>

        <h2 className="mt-8 text-center text-xl font-semibold">
          Admin Login
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Sign-in functionality will be connected to Supabase next.
        </p>
      </div>
    </main>
  );
}