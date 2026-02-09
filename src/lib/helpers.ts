import siteData from '../data/site.json';

/**
 * Generate Amazon affiliate URL from ASIN
 */
export function amazonUrlFromAsin(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${siteData.amazonAssociateTag}`;
}

/**
 * Build canonical URL from pathname
 */
export function canonicalUrl(pathname: string): string {
  const base = siteData.siteDomain.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  return `${base}${normalizedPath}`;
}

/**
 * Get product image path with fallback
 */
export function productImagePath(slug: string): string {
  return `/images/products/${slug}.jpg`;
}

/**
 * Get category image path with fallback
 */
export function categoryImagePath(slug: string): string {
  return `/images/categories/${slug}.jpg`;
}

/**
 * Get guide image path with fallback
 */
export function guideImagePath(slug: string): string {
  return `/images/guides/${slug}.jpg`;
}

/**
 * Fallback placeholder image
 */
export function placeholderImage(type: 'product' | 'category' | 'guide'): string {
  return `/images/placeholder-${type}.svg`;
}

/**
 * Get badge display info
 */
export function getBadgeInfo(badge: string): { label: string; color: string } {
  const badges: Record<string, { label: string; color: string }> = {
    'top-pick': { label: 'Top Pick', color: 'bg-emerald-600' },
    'budget': { label: 'Best Budget', color: 'bg-amber-600' },
    'premium': { label: 'Premium Choice', color: 'bg-purple-600' },
    'editor-pick': { label: "Editor's Pick", color: 'bg-blue-600' },
    'trending': { label: 'Trending', color: 'bg-rose-600' }
  };
  return badges[badge] || { label: badge, color: 'bg-stone-600' };
}

/**
 * Get category icon SVG
 */
export function getCategoryIcon(icon: string): string {
  const icons: Record<string, string> = {
    scissors: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.838c.228.368.245.773.024 1.148l-3.85 6.499a3 3 0 01-5.196-3l3.867-6.5a2.165 2.165 0 011.083-1.838c.228-.368.542-.665.928-.815.42-.165.888-.164 1.324-.052.435.112.824.355 1.114.72.29.365.467.817.467 1.284a2.165 2.165 0 01-.844 1.714zM16.152 8.25l-1.536.887M16.152 8.25a3 3 0 105.196-3 3 3 0 00-5.196 3zm-1.536.887a2.165 2.165 0 00-1.083 1.838 2.165 2.165 0 01-.024 1.148l3.85 6.499a3 3 0 105.196-3l-3.867-6.5a2.165 2.165 0 00-1.083-1.838 2.165 2.165 0 00-.928-.815 2.165 2.165 0 00-1.324-.052 2.165 2.165 0 00-1.114.72 2.165 2.165 0 00-.467 1.284c0 .653.292 1.27.844 1.714z" /></svg>`,
    utensils: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>`,
    shirt: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>`,
    bath: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`
  };
  return icons[icon] || icons.scissors;
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Get products by category slug
 */
export function getProductsByCategory(products: any[], categorySlug: string): any[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

/**
 * Get product by slug
 */
export function getProductBySlug(products: any[], slug: string): any | undefined {
  return products.find(p => p.slug === slug);
}

/**
 * Get guide by slug
 */
export function getGuideBySlug(guides: any[], slug: string): any | undefined {
  return guides.find(g => g.slug === slug);
}

/**
 * Get guides by category slug
 */
export function getGuidesByCategory(guides: any[], categorySlug: string): any[] {
  return guides.filter(g => g.categorySlug === categorySlug);
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(categories: any[], slug: string): any | undefined {
  return categories.find(c => c.slug === slug);
}

/**
 * Get related products (same category, excluding current)
 */
export function getRelatedProducts(products: any[], currentProduct: any, limit: number = 4): any[] {
  return products
    .filter(p => p.categorySlug === currentProduct.categorySlug && p.slug !== currentProduct.slug)
    .slice(0, limit);
}

/**
 * Get related guides (same category)
 */
export function getRelatedGuides(guides: any[], categorySlug: string, limit: number = 3): any[] {
  return guides
    .filter(g => g.categorySlug === categorySlug)
    .slice(0, limit);
}

/**
 * Get top picks across all categories
 */
export function getTopPicks(products: any[], limit: number = 8): any[] {
  const topBadges = ['top-pick', 'editor-pick', 'premium'];
  return products
    .filter(p => topBadges.includes(p.badge))
    .slice(0, limit);
}
