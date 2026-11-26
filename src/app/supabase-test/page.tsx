
import { createClient } from "@/lib/supabase/server";

export default async function SupabaseTestPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("collections")
    .select("id, title")
    .limit(5);

  if (error) {
    return (
      <main className="min-h-screen bg-gray-950 p-8 text-white">
        <h1 className="text-2xl font-bold">Supabase Connection Failed</h1>
        <pre className="mt-4 whitespace-pre-wrap text-red-400">
          {error.message}
        </pre>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <h1 className="text-3xl font-bold text-green-400">
        Supabase Connected Successfully!
      </h1>

      <p className="mt-3 text-gray-300">
        Your Next.js application can read from the collections table.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Collections</h2>

      {data.length === 0 ? (
        <p className="mt-3 text-gray-400">
          Connection successful. No collections have been added yet.
        </p>
      ) : (
        <ul className="mt-3 space-y-2">
          {data.map((collection) => (
            <li key={collection.id}>
              {collection.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
