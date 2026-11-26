import type { Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
export default function ProductGrid({ items }: { items: Product[] }) {
  if (!items.length)
    return (
      <p className="empty-state">
        No products found in this category yet. Please contact us for available
        designs.
      </p>
    );
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
