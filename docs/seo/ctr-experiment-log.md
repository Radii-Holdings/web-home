# Radii CTR Experiment Log

Use this file to track Search Console CTR changes at the page/query level. Sitewide CTR is useful context, but the working target for this project is priority commercial queries with average position 1-8.

## How to Use

1. Export Search Console data for the last 28 days and previous 28 days.
2. Filter by page, then query.
3. Prioritize queries with average position 1-10, impressions 50+, and CTR below the expected range.
4. Record the metadata and page-body changes before deployment.
5. Check after 7-14 days for title/snippet pickup.
6. Compare after 28 days against the previous equivalent window.

## Priority Pages

| URL | Primary query cluster | Current action |
| --- | --- | --- |
| `/algo-trading-platform-india` | algo trading platform India, algo trading Zerodha, algo trading Angel One | Page rewritten for broker-specific commercial intent |
| `/multi-broker-order-routing` | multi broker order routing, multi broker trading platform, broker API routing | Page rewritten for broker-routing intent |
| `/forex-algo-execution-india` | forex algo trading India, forex automation, INR forex algo execution | Page rewritten for FX workflow and compliance-aware intent |
| `/risk-managed-trading-automation` | trading risk management software, algo trading risk controls, kill switch trading | Page rewritten for risk-control intent |
| `/quant-research-services-india` | quant research services India, trading strategy backtesting, quantitative research service | Page rewritten for research validation intent |

## Experiment Table

| Date changed | URL | Target query | Avg position baseline | Impressions baseline | CTR baseline | Old title/meta | New title/meta | Page-body changes | 7-14 day pickup check | 28-day CTR result | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-11 | `/algo-trading-platform-india` | algo trading platform India | TBD from GSC | TBD from GSC | TBD from GSC | Generic algo trading page | Algo Trading Platform for Zerodha and Angel One | Added broker names, proof, workflow, risk controls, FAQ, disclaimer | Pending | Pending | Monitor |
| 2026-04-11 | `/multi-broker-order-routing` | multi broker trading platform | TBD from GSC | TBD from GSC | TBD from GSC | Generic routing page | Multi-Broker Order Routing for Zerodha, Angel One, and IBKR | Added broker coverage, routing checks, fair comparison, FAQ, disclaimer | Pending | Pending | Monitor |
| 2026-04-11 | `/forex-algo-execution-india` | forex algo trading India | TBD from GSC | TBD from GSC | TBD from GSC | Generic FX page | Forex Algo Execution for INR and Global FX Workflows | Added INR/global FX distinction, compliance notes, risk controls, FAQ | Pending | Pending | Monitor |
| 2026-04-11 | `/risk-managed-trading-automation` | trading risk management software | TBD from GSC | TBD from GSC | TBD from GSC | Generic risk page | Trading Risk Management Software for Algo Teams | Added controls, audience, kill switch, loss limits, FAQ, disclaimer | Pending | Pending | Monitor |
| 2026-04-11 | `/quant-research-services-india` | quant research services India | TBD from GSC | TBD from GSC | TBD from GSC | Generic quant page | Quant Research Services for Indian Trading Teams | Added methodology, backtesting realism, execution readiness, FAQ, disclaimer | Pending | Pending | Monitor |

## Expected CTR Bands

| Query type | Position range | Working CTR target |
| --- | --- | --- |
| Brand | 1-3 | 10%+ |
| Branded commercial | 1-5 | 6%+ |
| Non-brand commercial | 1-8 | 5-6%+ |
| Research/informational | 1-8 | 2x current page/query CTR |

## Rewrite Queue Rules

Add a row to the experiment table when any of these conditions appear in Search Console:

- Average position 1-5 with CTR below 3%.
- Average position 1-8 with impressions above 50 and CTR below 5% for a commercial query.
- Google rewrites the title into unclear or repetitive text after recrawl.
- The query intent is irrelevant to the target page and should be retargeted, internally deprioritized, or noindexed if archive-like.
