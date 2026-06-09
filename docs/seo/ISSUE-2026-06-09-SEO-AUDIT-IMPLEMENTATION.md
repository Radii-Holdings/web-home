# SEO Audit Recovery Implementation - Metadata, Indexing, Trust Signals, and Slug Hygiene

**Date**: 2026-06-09  
**Time**: 10:45 AM IST  
**Severity**: HIGH  
**Status**: IMPLEMENTED - Production Deployment Verification Pending

---

## Issue Description

The merged SEO audits on `radii.in` showed that the site was not primarily failing because of crawlability. The stronger pattern was:

1. **Low clicks despite rankings** because key pages were showing weak or generic snippets, especially on non-blog pages where Open Graph and Twitter metadata fell back to homepage defaults.
2. **Low impressions on commercial and research surfaces** because the main research hub (`/categories/all`) was `noindex`, tag archives were mixed into the site structure, and blog slugs were inconsistent and partially low quality for URL presentation.
3. **Weak trust signals on a finance/YMYL site** because about/contact copy was thin, typo-prone, and brand usage was fragmented across `Radii Labs`, `Layr0`, `layr0.org`, and `aitrade.ing`.
4. **Slow first render on critical pages** because the homepage loaded a full YouTube embed immediately and the footer injected third-party Substack scripts on every visit.

This repo also had a **repo/live drift problem**: the codebase already contained stronger service-page metadata and blog E-E-A-T structure than the live site exposed.

---

## Impact

**Affected areas**

- Homepage snippet quality and CTR
- Money-page snippet consistency and social preview consistency
- Research hub discoverability
- Blog URL hygiene and sitemap quality
- About/contact trust and conversion quality
- Homepage mobile performance

**User impact**

- Searchers were seeing weak or less relevant snippets, reducing clicks
- Google had fewer strong indexable hub surfaces to rank for research queries
- Trust signals were weaker than expected for financial workflow pages
- Mobile users were paying for unnecessary third-party and video embed cost

---

## Search Console Baseline

From the shared Google Search Console screenshot for the last 28 days:

- **Clicks**: 13
- **Impressions**: 5.61K
- **CTR**: 0.2%
- **Average position**: 4.6

This baseline supports the audit conclusion that the site is already surfacing in search, but under-clicking for the impressions it earns.

---

## Audit Evidence

### Confirmed pre-fix issues

- Static pages such as `/about`, `/contact`, and category pages were inheriting homepage-style social metadata instead of page-specific metadata.
- `/categories/all` was configured as `noindex,follow`, blocking the strongest research hub from earning impressions.
- Sitemaps were not intentionally filtering category archives; the desired indexed archive surface was not clearly defined.
- Several blog URLs used uppercase letters and double hyphens, for example:
  - `/blogs/Cross-Broker-Algo-Trading-Platforms-in-India`
  - `/blogs/Exploring-High-Risk--High-Reward-Investment-Opportunities`
  - `/blogs/Long-termVSshort-term--Investing-What-Works-in-India`
- About/contact branding and copy included weak trust language and typo issues such as `Open market Reseach`.
- The homepage rendered a real YouTube iframe in the hero section.
- The footer injected `substackapi.com/embeds/feed.js` on every page load.
- Markdown/MDX article images still used raw `<img>` rendering paths, which was already surfacing in build warnings and left article media less optimized than necessary.

### Local baseline used during implementation

Initial live audit snapshots gathered before implementation:

- **Homepage Lighthouse**: Performance 55, LCP ~24.3s
- **Algo page Lighthouse**: Performance 56, LCP ~13.6s

These were treated as directional audit evidence, not as exact like-for-like local benchmarks.

---

## Root Cause Analysis

### 1. Metadata was split across pages with no shared page-level builder

The repo had a strong layout-level metadata baseline, but most non-blog routes only defined `title`, `description`, and `canonical`. That meant route pages were not emitting their own `og:url`, `og:title`, `twitter:title`, or `twitter:site` consistently.

### 2. The research hub was intentionally hidden from indexing

`/categories/all` had `index: false`, which prevented the best consolidated research page from accumulating impressions while still surfacing tag archive pages in the route tree.

### 3. URL hygiene was inconsistent across blog content

Contentlayer uses the directory name as the flattened path. Because several content folders used uppercase letters and double hyphens, the generated blog URLs inherited those weak slug patterns directly.

### 4. Trust and entity clarity were not aligned with finance/YMYL expectations

About/contact pages were too thin and too generic. Brand usage also mixed site brand and product brand inconsistently, weakening entity clarity for both search engines and users.

### 5. Third-party embeds were too eager

The homepage video used a live iframe immediately, and the footer injected a remote Substack script on all pages. Those patterns increased unnecessary work during early render.

---

## Fix Applied

### Shared metadata and route normalization

- Added `src/utils/pageMetadata.js` with a shared builder for:
  - canonical URL
  - `og:url`
  - `og:title`
  - `twitter:title`
  - `twitter:site`
  - page-specific image normalization
- Updated homepage, about, contact, tutorial, author, and category routes to use page-specific metadata through the shared builder.
- Normalized service-page metadata through the same helper so service routes emit the same structure consistently.
- Added `twitterHandle`, `consoleUrl`, `newsletterUrl`, `productName`, and `seoReviewDate` to `src/utils/siteMetaData.js`.

### Indexing, sitemap, and schema fixes

- Changed `/categories/all` to `index,follow`.
- Kept tag archive pages as `noindex,follow`.
- Updated `next-sitemap.config.js` to:
  - include `/categories/all`
  - exclude all other `/categories/*` archive pages
  - use blog `updatedAt/publishedAt` data from Contentlayer for blog `lastmod`
  - use explicit reviewed dates for static/service pages
- Added missing page-specific schema with `src/components/StructuredData/PageSchemas.js`:
  - `AboutPage`
  - `ContactPage`
  - `CollectionPage`

### Trust, copy, and brand cleanup

- Reworked about page copy and headings so the page now has a true `h1` and concrete operator-facing messaging.
- Reworked contact page copy so the page now has a true `h1`, clearer intent, and a more trustworthy structured form.
- Replaced typo-heavy/about-layout labels with clearer operational language.
- Standardized external brand destinations away from `layr0.org` and `aitrade.ing` toward `https://console.radii.in/`.
- Updated manifest and logo alt text from `Radii Lab` to `Radii Labs`.

### Performance and embed cleanup

- Replaced the homepage hero YouTube iframe with a click-to-load facade component:
  - `src/components/Media/YouTubeFacade.js`
- Removed the eager Substack script injection from the footer.
- Kept the Substack embed only as a lazy-loaded iframe plus direct CTA link.
- Reworked MDX image rendering so local article images use `next/image` instead of raw JSX `<img>` tags where optimization is possible.

### Blog slug normalization and internal linking

- Renamed the content directories for legacy mixed-case and double-hyphen blog slugs to normalized lowercase kebab-case.
- Added `src/data/legacy-blog-slugs.json` to preserve the old-to-new URL mapping.
- Added route-level legacy slug handling in `src/app/blogs/[slug]/page.js` so old indexed slugs resolve through the blog route and redirect toward the normalized path in production environments.
- Added related research and next-step internal link blocks to blog pages so informational content pushes users toward additional research and commercial workflow pages.

---

## Verification Steps

### Repo/build checks

1. [x] `npm run build` passes after the implementation changes.
2. [x] Contentlayer regenerates the 20 documents using normalized blog slugs.
3. [x] `next-sitemap` completes successfully after the slug and metadata changes.

### Rendered metadata checks on local production build

Verified against a local `next start` production instance:

- [x] `/` emits page-specific canonical, OG, Twitter, and indexable robots metadata
- [x] `/algo-trading-platform-india` emits page-specific canonical, OG URL, and title
- [x] `/about` emits page-specific canonical, OG URL, title, and now has an `h1`
- [x] `/contact` emits page-specific canonical, OG URL, title, and now has an `h1`
- [x] `/categories/all` emits page-specific canonical, OG URL, title, and `index,follow`
- [x] `/authors/radii-labs` emits page-specific canonical and social metadata
- [x] Normalized blog route `/blogs/cross-broker-algo-trading-platforms-in-india` emits page-specific canonical and OG URL

### Sitemap and robots checks

- [x] `robots.txt` still includes the sitemap directive
- [x] `sitemap-0.xml` includes `/categories/all`
- [x] `sitemap-0.xml` excludes tag archive paths such as `/categories/ai-trading`
- [x] `sitemap-0.xml` includes normalized blog slugs
- [x] `sitemap-0.xml` no longer includes legacy mixed-case blog slugs

### Performance checks

Local post-fix Lighthouse snapshots:

- **Homepage**: Performance 63, FCP ~3.1s, LCP ~6.8s, CLS 0
- **Algo page**: Performance 68, FCP ~3.1s, LCP ~5.3s, CLS 0

These are local production-build checks, not final deployed metrics, but they are materially better than the earlier live audit baseline and confirm that the heaviest immediate render issues were reduced.

### Remaining verification item after deployment

- [ ] Recheck legacy mixed-case blog URLs on the deployed Linux host to confirm permanent redirects behave exactly as intended in production. The redirect code path is implemented, but Windows-local route matching is case-insensitive and is not a perfect proxy for production path behavior.

---

## Files Changed

| File | Change |
|------|--------|
| `src/utils/pageMetadata.js` | New shared page-metadata builder for canonical, OG, and Twitter metadata |
| `src/components/StructuredData/PageSchemas.js` | New AboutPage, ContactPage, and CollectionPage schema components |
| `src/utils/siteMetaData.js` | Added Twitter handle, console/newsletter URLs, product metadata, and SEO review date |
| `src/utils/servicePages.js` | Added `lastReviewed` fields and normalized service metadata generation |
| `src/app/page.js` | Homepage metadata now uses shared page metadata |
| `src/app/(about)/about/page.js` | Added page schema, richer trust copy, and page-specific metadata |
| `src/app/(about)/contact/page.js` | Added page schema, clearer `h1`, and page-specific metadata |
| `src/app/categories/[slug]/page.js` | Indexed `/categories/all`, kept tag archives `noindex`, added collection schema |
| `src/app/authors/[slug]/page.js` | Added page-specific author metadata |
| `src/app/blogs/[slug]/page.js` | Added related links, normalized Twitter metadata, and legacy slug handling |
| `src/components/About/*` | Reworked headings, copy, and brand destination links |
| `src/components/Contact/ContactForm.js` | Replaced placeholder-style prose form with structured trusted form fields |
| `src/components/Home/HomeBanner.js` | Replaced eager YouTube iframe with click-to-load facade |
| `src/components/Home/HomeCarousel.js` | Replaced stray external app domain with primary console destination |
| `src/components/Footer/index.js` | Removed eager Substack script injection and lazy-loaded the embed |
| `src/components/Blog/RenderMdx.js` | Upgraded local MDX image rendering toward `next/image` optimization |
| `src/components/Blog/Category.js` | Improved archive label for the research hub |
| `src/components/StructuredData/SiteNavigationSchema.js` | Standardized product navigation naming |
| `next-sitemap.config.js` | Added content-aware `lastmod` logic and archive filtering |
| `src/data/legacy-blog-slugs.json` | Added old-to-new slug mapping artifact |
| `content/*` | Renamed legacy mixed-case and double-hyphen blog directories to lowercase kebab-case |
| `public/manifest.json` | Standardized brand naming |

---

## Follow-up Cadence

1. **Deploy day**
   - Deploy the repo changes
   - Request indexing for `/`, the five service pages, `/categories/all`, and the renamed blog URLs
   - Validate one legacy blog slug on production to confirm the permanent redirect behavior

2. **Day 7-14**
   - Check whether Google has picked up the revised titles/snippets for homepage, money pages, and the research hub
   - Confirm `/categories/all` starts collecting impressions

3. **Day 28**
   - Compare CTR and impression movement using `docs/seo/search-console-ctr-audit.md`
   - Review page/query performance in `docs/seo/ctr-experiment-log.md`
   - Prioritize another rewrite pass only on pages/queries that still rank but under-click

---

## References

- `docs/seo/search-console-ctr-audit.md`
- `docs/seo/ctr-experiment-log.md`
- `src/utils/pageMetadata.js`
- `src/components/StructuredData/PageSchemas.js`
- `src/app/blogs/[slug]/page.js`
- `next-sitemap.config.js`
- `src/data/legacy-blog-slugs.json`
