# Search Console CTR Audit Workflow

This repo cannot pull Search Console data by itself unless API credentials are added, so the first audit pass is designed around manual exports.

## Export Windows

- Last 28 days.
- Previous 28 days.
- Last 90 days.

## Export Dimensions

Export each dimension from the Performance report:

- Queries.
- Pages.
- Countries.
- Devices.
- Search appearance.

## Buckets

Classify each page/query row into one bucket:

| Bucket | Rule | Action |
| --- | --- | --- |
| Good position, low CTR | Position 1-10, impressions 50+, CTR below expected | Rewrite title, intro, meta, FAQ, and CTA around query language |
| High impressions, wrong intent | Impressions 100+, low CTR, unrelated query | Retarget page, add clarifying copy, or remove weak internal/sitemap signals |
| Low position, high CTR | Position 10+, CTR above average | Improve content depth and internal links |
| Branded | Query contains Radii, Radii Labs, Layr0 | Protect title clarity and sitelink paths |
| Commercial | Query includes platform, software, broker, demo, API, services | Prioritize money pages |
| Informational | Query asks what/how/guide/news | Route to blog or research pages with service CTA |

## Priority Query Template

| Query | Page | Intent bucket | Position | Impressions | CTR | Needed change | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Queued |

## Review Cadence

- Day 0: deploy changes and request indexing for homepage plus five money pages.
- Day 7-14: check whether titles/snippets are picked up.
- Day 28: compare page/query CTR against the previous 28-day window.
- Day 56: keep winners, rewrite weak titles/snippets, and remove irrelevant impressions.
