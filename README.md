# TidyNest - Home Organization Affiliate Website

A premium, Pinterest-optimized affiliate website built with Astro SSG for the home organization niche.

## Features

- ✅ **Static Site Generation (SSG)** - All pages pre-rendered at build time
- ✅ **SEO Optimized** - Unique meta tags, OG tags, and canonical URLs on every page
- ✅ **Pinterest Ready** - Domain verification meta tag + Pinterest save buttons
- ✅ **Amazon Affiliate Ready** - Automatic affiliate link generation from ASINs
- ✅ **Mobile-First Design** - Responsive grids (2 cols mobile, 3 tablet, 4 desktop)
- ✅ **FTC Compliant** - Affiliate disclosures throughout the site
- ✅ **Easy to Edit** - Simple JSON data files for all content

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

### Deploy to Netlify

1. Push this repository to GitHub/GitLab
2. Connect to Netlify
3. Netlify will auto-detect Astro and use settings from `netlify.toml`
4. Deploy!

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎯 ONLY EDIT THESE FILES

### 1. `src/data/site.json` - Site Settings

```json
{
  "siteName": "TidyNest",
  "siteDomain": "https://your-domain.com",     // ← CHANGE THIS
  "amazonAssociateTag": "yourtag-20",          // ← CHANGE THIS
  "pinterestDomainVerifyToken": "abc123...",   // ← CHANGE THIS
  "pinterestProfileUrl": "https://pinterest.com/yourusername"  // ← CHANGE THIS
}
```

### 2. `src/data/products.json` - Products

Add/edit products with your ASINs:

```json
{
  "title": "Product Name",
  "slug": "product-name",           // Used for URLs and images
  "categorySlug": "craft-room",     // Must match a category slug
  "asin": "B08XXXXXX",              // ← PASTE YOUR ASIN HERE
  "shortDescription": "Brief description...",
  "badge": "top-pick",              // top-pick | budget | premium | editor-pick | trending
  "bullets": ["Feature 1", "Feature 2", "Feature 3"],
  "alt": "Image alt text"
}
```

### 3. `public/images/` - Replace Images

Drop in your images using this naming convention:

```
public/images/
├── products/
│   └── {product-slug}.jpg     (e.g., rotating-craft-caddy.jpg)
├── categories/
│   └── {category-slug}.jpg    (e.g., craft-room.jpg)
└── guides/
    └── {guide-slug}.jpg       (e.g., ultimate-craft-room-organization.jpg)
```

Images will automatically fall back to placeholders if missing.

---

## File Structure

```
├── src/
│   ├── data/
│   │   ├── site.json          # Site settings (EDIT THIS)
│   │   ├── categories.json    # Category definitions
│   │   ├── products.json      # Product catalog (EDIT THIS)
│   │   └── guides.json        # Guide content
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO meta tags
│   ├── lib/
│   │   └── helpers.ts         # Utility functions
│   └── pages/
│       ├── index.astro
│       ├── category/[slug].astro
│       ├── product/[slug].astro
│       ├── guide/[slug].astro
│       └── ...
├── public/
│   ├── images/                # Drop your images here
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Categories

The site comes with 4 categories:
- `craft-room` - Craft Room Organization
- `pantry` - Pantry Organization
- `closet` - Closet Organization
- `bathroom` - Bathroom Organization

To add more, edit `src/data/categories.json`.

## Adding New Products

1. Add product to `src/data/products.json` with a unique `slug`
2. Place product image at `public/images/products/{slug}.jpg`
3. Rebuild the site

## Adding New Guides

1. Add guide to `src/data/guides.json`
2. Reference products by their `slug` in the `productSlugs` arrays
3. Place guide image at `public/images/guides/{slug}.jpg`
4. Rebuild the site

## SEO Checklist

After deployment:

1. ✅ Update `siteDomain` in `site.json`
2. ✅ Update `robots.txt` with your domain
3. ✅ Update `sitemap.xml` with your domain
4. ✅ Verify Pinterest domain ownership
5. ✅ Submit sitemap to Google Search Console
6. ✅ Test OG tags with Facebook Sharing Debugger
7. ✅ Test Pinterest Rich Pins

## Pinterest Verification

1. Go to Pinterest Settings → Claim
2. Choose "Add HTML tag" method
3. Copy the content value from the meta tag
4. Paste into `pinterestDomainVerifyToken` in `site.json`
5. Rebuild and deploy
6. Complete verification in Pinterest

## License

MIT License - Feel free to use for your own affiliate sites!
