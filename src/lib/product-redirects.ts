/**
 * When a product slug changes, map the old URL segment to the current slug.
 * Supports chains (A → B → C) in one hop to the final slug.
 */
const PRODUCT_SLUG_REDIRECTS: Record<string, string> = {
  'la-femme-rose': 'desert-rose',
};

const MAX_REDIRECT_CHAIN = 8;

export function resolveCanonicalProductSlug(slug: string): string {
  let current = slug;
  const seen = new Set<string>();
  for (let i = 0; i < MAX_REDIRECT_CHAIN; i++) {
    const next = PRODUCT_SLUG_REDIRECTS[current];
    if (!next || seen.has(current)) break;
    seen.add(current);
    current = next;
  }
  return current;
}
