import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface ProductRow {
  id: string;
  collection_id: string | null;
  slug: string;
  name: string;
  category: string | null;
  description: string | null;
  price: number | null;
  pricing_type: "fixed" | "quote";
  image_url: string | null;
  gallery_urls: string[] | null;
  tag: string | null;
  details: unknown;
  sort_order: number;
  is_active: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  pricingType: "fixed" | "quote";
  image: string;
  gallery: string[];
  tag: string | null;
  details: string[];
  collectionId: string | null;
}

export interface CollectionWithItems extends Collection {
  items: Product[];
}

function mapProduct(row: ProductRow): Product {
  const rawDetails = row.details;

  const details: string[] = Array.isArray(rawDetails)
    ? rawDetails
        .map((item) => {
          if (typeof item === "string") return item;

          if (item && typeof item === "object") {
            const value = item as Record<string, unknown>;
            return String(value.label ?? value.name ?? value.value ?? "");
          }

          return String(item);
        })
        .filter(Boolean)
    : [];

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category ?? "",
    description: row.description ?? "",
    price: Number(row.price ?? 0),
    pricingType: row.pricing_type,
    image: row.image_url ?? "",
    gallery: [
      ...new Set(
        [row.image_url, ...(row.gallery_urls ?? [])].filter(
          (url): url is string => Boolean(url),
        ),
      ),
    ],
    tag: row.tag,
    details,
    collectionId: row.collection_id,
  };
}

// Homepage: five active collections and their 36 quote-based items.
export async function getCollectionsWithItems(): Promise<
  CollectionWithItems[]
> {
  const { data: collectionData, error: collectionError } = await supabase
    .from("collections")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (collectionError) {
    throw new Error(`Failed to fetch collections: ${collectionError.message}`);
  }

  const collections = (collectionData ?? []) as Collection[];

  if (collections.length === 0) return [];

  const collectionIds = collections.map((item) => item.id);

  const { data: productData, error: productError } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .eq("pricing_type", "quote")
    .in("collection_id", collectionIds)
    .order("sort_order", { ascending: true });

  if (productError) {
    throw new Error(
      `Failed to fetch collection products: ${productError.message}`,
    );
  }

  const products = ((productData ?? []) as ProductRow[]).map(mapProduct);

  return collections.map((collection) => ({
    ...collection,
    items: products.filter((product) => product.collectionId === collection.id),
  }));
}

// Fetch one active collection and its quote-based products.
export async function getCollectionBySlug(
  slug: string,
): Promise<CollectionWithItems | null> {
  const { data: collectionData, error: collectionError } = await supabase
    .from("collections")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (collectionError) {
    throw new Error(collectionError.message);
  }

  if (!collectionData) return null;

  const collection = collectionData as Collection;

  const { data: productData, error: productError } = await supabase
    .from("products")
    .select("*")
    .eq("collection_id", collection.id)
    .eq("pricing_type", "quote")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (productError) {
    throw new Error(productError.message);
  }

  return {
    ...collection,
    items: ((productData ?? []) as ProductRow[]).map(mapProduct),
  };
}

// Fetch one quote-based item for /items/[slug].
export async function getQuoteItemBySlug(slug: string): Promise<{
  item: Product;
  collection: Collection;
} | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("pricing_type", "quote")
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) return null;

  const row = data as ProductRow;

  if (!row.collection_id) return null;

  const { data: collectionData, error: collectionError } = await supabase
    .from("collections")
    .select("*")
    .eq("id", row.collection_id)
    .eq("is_active", true)
    .maybeSingle();

  if (collectionError) {
    throw new Error(collectionError.message);
  }

  if (!collectionData) return null;

  return {
    item: mapProduct(row),
    collection: collectionData as Collection,
  };
}

// Fetch one fixed-price product for /products/[slug].
export async function getFixedProductBySlug(
  slug: string,
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("pricing_type", "fixed")
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) return null;

  return mapProduct(data as ProductRow);
}
