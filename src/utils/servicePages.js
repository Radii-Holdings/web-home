import { buildPageMetadata } from "@/src/utils/pageMetadata";

export const servicePages = {
  "algo-trading-platform-india": {
    slug: "algo-trading-platform-india",
    lastReviewed: "2026-06-09",
    label: "Algo Trading Platform",
    eyebrow: "Algo trading platform India",
    metaTitle: "Algo Trading Platform for Zerodha and Angel One",
    metaDescription:
      "Run rules-based strategies across Zerodha, Angel One, 5Paisa, and Interactive Brokers with backtesting, risk checks, and broker-aware execution.",
    heroTitle: "Algo Trading Platform for Zerodha, Angel One, and Indian Brokers",
    heroLead:
      "Build, test, and deploy rules-based trading workflows for Indian equities, futures, options, and broker APIs from one execution layer.",
    image: "/images/algo-trading-platform-india.png",
    imageAlt: "Broker-aware algo trading dashboard for Indian markets",
    primaryCta: "Book an Algo Trading Demo",
    secondaryCta: "Review Broker Workflow",
    secondaryHref: "/multi-broker-order-routing",
    supportedBrokers: ["Zerodha", "Angel One", "5Paisa", "Interactive Brokers", "Broker API review on request"],
    audience: [
      "Retail traders moving from manual execution to rules-based workflows",
      "Developers who want Python-friendly research and deployment paths",
      "Trading teams that need risk controls before orders reach the broker",
    ],
    proofPoints: [
      {
        title: "Strategy to execution",
        text: "Connect research logic, backtests, and live order checks without rebuilding the workflow for each broker account.",
      },
      {
        title: "Broker-aware routing",
        text: "Route orders with account, margin, symbol, and API availability checks before an execution request is sent.",
      },
      {
        title: "Risk controls first",
        text: "Use hard stops, exposure limits, order throttles, and kill-switch rules as part of the deployment workflow.",
      },
    ],
    workflow: ["Research idea", "Backtest and cost check", "Risk rule review", "Broker connection", "Paper or limited rollout", "Live monitoring"],
    riskControls: ["Daily loss limits", "Position sizing rules", "Order throttles", "Manual approval modes", "Kill switch"],
    comparison: {
      title: "Radii vs Tradetron and Algomojo",
      text: "Tradetron is useful for marketplace-style no-code strategy access, and Algomojo is useful for API bridge workflows. Radii is positioned for teams that want research, broker routing, and risk controls reviewed together before deployment.",
    },
    faqs: [
      {
        question: "Which Indian brokers can Radii connect with?",
        answer:
          "Radii can support workflows around major Indian brokers such as Zerodha, Angel One, and 5Paisa, subject to account approvals, API access, and broker-specific limitations.",
      },
      {
        question: "Do I need to know Python?",
        answer:
          "No. Non-coders can use guided strategy workflows, while advanced users can discuss Python-based research and execution logic.",
      },
      {
        question: "Can I test before live trading?",
        answer:
          "Yes. Strategies should be reviewed through backtests, cost assumptions, paper trading, and limited rollouts before any meaningful live exposure.",
      },
    ],
    disclaimer:
      "Radii provides trading technology and research workflows, not guaranteed returns. Broker access, latency, order fills, and strategy outcomes depend on market conditions and your own account configuration.",
  },
  "multi-broker-order-routing": {
    slug: "multi-broker-order-routing",
    lastReviewed: "2026-06-09",
    label: "Multi-Broker Routing",
    eyebrow: "Multi-broker order routing",
    metaTitle: "Multi-Broker Order Routing for Zerodha, Angel One, and IBKR",
    metaDescription:
      "Route trading orders across multiple broker accounts with redundancy, broker-aware controls, reporting, and operational risk checks.",
    heroTitle: "Multi-Broker Order Routing for Zerodha, Angel One, and IBKR",
    heroLead:
      "Centralize execution across broker accounts so your team can reduce single-broker dependency and monitor orders, exposure, and failures from one place.",
    image: "/images/multi-broker-order-routing.png",
    imageAlt: "Multi-broker routing network for trading operations",
    primaryCta: "Discuss Broker Integration",
    secondaryCta: "See Risk Controls",
    secondaryHref: "/risk-managed-trading-automation",
    supportedBrokers: ["Zerodha", "Angel One", "5Paisa", "Interactive Brokers", "Fyers review on request"],
    audience: [
      "Trading teams running more than one broker account",
      "Portfolio operators who need consolidated execution monitoring",
      "Founders and desks reducing operational dependency on one broker API",
    ],
    proofPoints: [
      {
        title: "Broker redundancy",
        text: "Plan fallback, pause, or reroute behavior when a broker API is unavailable or does not pass pre-trade checks.",
      },
      {
        title: "Unified order log",
        text: "Keep strategy, broker, account, status, and failure reasons visible in one execution record.",
      },
      {
        title: "Account-aware routing",
        text: "Route by instrument, account, margin rule, strategy type, or manual approval requirement.",
      },
    ],
    workflow: ["Order request", "Account and broker checks", "Routing rule", "Risk gate", "Broker API submission", "Status and reconciliation"],
    riskControls: ["Broker outage behavior", "Duplicate order prevention", "Exposure caps", "Symbol restrictions", "Manual approval queue"],
    comparison: {
      title: "Routing layer vs broker-native APIs",
      text: "Broker-native APIs are useful for direct execution in one account. A routing layer becomes useful when the same strategy, operator, or risk policy must work across multiple broker accounts with consistent monitoring.",
    },
    faqs: [
      {
        question: "Does multi-broker routing add latency?",
        answer:
          "Any routing layer adds some processing, so Radii focuses on keeping checks intentional: reliability, account fit, and risk control where those benefits outweigh the added step.",
      },
      {
        question: "Can manual and automated orders use the same routing layer?",
        answer:
          "Yes. Teams can configure hybrid workflows where manual approvals and automated strategies pass through the same broker-aware checks.",
      },
      {
        question: "Can one broker failure be automatically bypassed?",
        answer:
          "It depends on the strategy and compliance rules. Some workflows can reroute; others should pause or require manual review when a broker fails.",
      },
    ],
    disclaimer:
      "Broker routing depends on broker API terms, market status, account permissions, and exchange rules. Redundancy reduces operational risk but cannot remove execution risk.",
  },
  "forex-algo-execution-india": {
    slug: "forex-algo-execution-india",
    lastReviewed: "2026-06-09",
    label: "Forex Algo Execution",
    eyebrow: "Forex algo execution India",
    metaTitle: "Forex Algo Execution for INR and Global FX Workflows",
    metaDescription:
      "Automate INR and eligible global FX workflows with currency-pair monitoring, risk gates, broker access review, and disciplined execution controls.",
    heroTitle: "Forex Algo Execution for INR and Global FX Workflows",
    heroLead:
      "Monitor currency pairs, prepare execution rules, and apply risk checks for forex workflows where broker access and compliance requirements allow automation.",
    image: "/images/forex-algo-execution-india.png",
    imageAlt: "Forex algo execution workflow for currency markets",
    primaryCta: "Discuss FX Workflow",
    secondaryCta: "Compare Execution Setup",
    secondaryHref: "/blogs/retail-vs-prop-firm-forex-execution",
    supportedBrokers: ["INR pair workflows", "Interactive Brokers review", "Eligible FX broker review", "Compliance-dependent access"],
    audience: [
      "Traders monitoring INR pairs and currency-market events",
      "Teams that need automated alerts, risk gates, or execution preparation",
      "Eligible entities with broker access for global currency workflows",
    ],
    proofPoints: [
      {
        title: "Currency-pair monitoring",
        text: "Track pair behavior, volatility changes, and event windows before rules move into execution.",
      },
      {
        title: "Session-aware controls",
        text: "Align workflow behavior with London, New York, and Asia sessions instead of relying on constant manual attention.",
      },
      {
        title: "Compliance-aware setup",
        text: "Separate INR exchange workflows from global FX access requirements so the execution design matches the user profile.",
      },
    ],
    workflow: ["Pair selection", "Event and volatility review", "Risk parameters", "Broker access check", "Execution rule", "Monitoring and logs"],
    riskControls: ["Pair whitelist", "Session limits", "Max exposure by currency", "Spread or volatility filters", "Manual approval for event windows"],
    comparison: {
      title: "Retail FX execution vs structured workflow",
      text: "Retail FX tools often focus on charts and single-account orders. A structured workflow focuses on when the trade is allowed, which account can place it, and what should happen when spreads or volatility move outside policy.",
    },
    faqs: [
      {
        question: "Can Radii support INR currency pairs?",
        answer:
          "Yes. INR pair workflows such as USDINR, EURINR, GBPINR, and JPYINR can be discussed around the user's exchange and broker access.",
      },
      {
        question: "Can Radii execute international FX pairs?",
        answer:
          "Eligible entities can discuss global FX workflows based on broker access, jurisdiction, and compliance requirements. Availability is not universal.",
      },
      {
        question: "Is this investment advice?",
        answer:
          "No. Radii helps with workflow, research, and execution controls. Users remain responsible for strategy decisions and regulatory suitability.",
      },
    ],
    disclaimer:
      "Forex and currency derivatives involve substantial risk. Access, leverage, and permitted instruments vary by jurisdiction, account type, broker, and regulation.",
  },
  "risk-managed-trading-automation": {
    slug: "risk-managed-trading-automation",
    lastReviewed: "2026-06-09",
    label: "Risk Automation",
    eyebrow: "Trading risk management software",
    metaTitle: "Trading Risk Management Software for Algo Teams",
    metaDescription:
      "Add automated risk checks for stops, exposure, position sizing, loss limits, approvals, and kill-switch behavior across trading workflows.",
    heroTitle: "Trading Risk Management Software for Algo and Manual Teams",
    heroLead:
      "Put risk rules between your trading idea and live orders, so position sizing, exposure, daily loss, and approval controls are checked before execution.",
    image: "/images/risk-managed-trading-automation.png",
    imageAlt: "Trading risk controls and automation dashboard",
    primaryCta: "Review Risk Controls",
    secondaryCta: "See Algo Platform",
    secondaryHref: "/algo-trading-platform-india",
    supportedBrokers: ["Broker-neutral policy layer", "Zerodha workflow review", "Angel One workflow review", "Interactive Brokers workflow review"],
    audience: [
      "Traders who need daily loss and position-size discipline",
      "Teams running automated strategies that need a final pre-trade gate",
      "Operators who want manual approval options for sensitive trades",
    ],
    proofPoints: [
      {
        title: "Pre-trade checks",
        text: "Review size, symbol, account, broker status, and exposure before an order is sent.",
      },
      {
        title: "Loss limit behavior",
        text: "Define what happens when daily, strategy, or account loss limits are reached: alert, pause, flatten, or lock.",
      },
      {
        title: "Operator accountability",
        text: "Create a clear record of risk decisions, overrides, approval modes, and rejected orders.",
      },
    ],
    workflow: ["Trade signal", "Position sizing", "Exposure check", "Loss limit check", "Approval or rejection", "Order monitoring"],
    riskControls: ["Per-trade risk", "Daily loss limit", "Strategy exposure cap", "Symbol blacklist", "Kill switch", "Override audit trail"],
    comparison: {
      title: "Risk layer vs strategy stop-loss",
      text: "A strategy stop-loss controls one trade idea. A risk layer controls the account or team workflow, including exposure, repeated losses, duplicate orders, and operator overrides across strategies.",
    },
    faqs: [
      {
        question: "Can I override a risk rule?",
        answer:
          "Teams can choose approval modes, but stricter lock modes are available when some rules should not be bypassed during live trading.",
      },
      {
        question: "Can this work with manual trading?",
        answer:
          "Yes. Manual and automated orders can pass through the same policy layer when the workflow is configured around that operating model.",
      },
      {
        question: "Does a risk engine prevent trading losses?",
        answer:
          "No. It helps enforce predefined limits and process discipline, but it cannot guarantee profitable outcomes or prevent all loss scenarios.",
      },
    ],
    disclaimer:
      "Risk controls can reduce operational mistakes, but they do not remove market risk, liquidity risk, gap risk, broker risk, or strategy risk.",
  },
  "quant-research-services-india": {
    slug: "quant-research-services-india",
    lastReviewed: "2026-06-09",
    label: "Quant Research",
    eyebrow: "Quant research services India",
    metaTitle: "Quant Research Services for Indian Trading Teams",
    metaDescription:
      "Work with Radii Labs on quantitative research, backtesting, signal review, portfolio analysis, and execution-readiness checks for trading workflows.",
    heroTitle: "Quant Research Services for Indian Trading Teams",
    heroLead:
      "Turn trading hypotheses into testable research with assumptions, data checks, cost models, risk review, and a clear path from analysis to execution.",
    image: "/images/quant-research-services-india.png",
    imageAlt: "Quant research workspace with market data and models",
    primaryCta: "Schedule Research Call",
    secondaryCta: "See Execution Platform",
    secondaryHref: "/algo-trading-platform-india",
    supportedBrokers: ["Research-first engagements", "Execution-readiness review", "Broker API feasibility", "Data and cost assumption checks"],
    audience: [
      "Founders and desks validating strategy ideas before engineering spend",
      "Traders who need backtesting, signal review, or portfolio diagnostics",
      "Teams preparing execution requirements for broker-connected systems",
    ],
    proofPoints: [
      {
        title: "Assumption clarity",
        text: "Document the data source, lookback window, slippage, costs, and risk assumptions behind each research result.",
      },
      {
        title: "Backtest realism",
        text: "Review survivorship bias, overfitting, execution costs, and drawdown behavior before strategy claims become product decisions.",
      },
      {
        title: "Execution readiness",
        text: "Translate research outputs into broker, risk, monitoring, and rollout requirements when a model is ready to test live.",
      },
    ],
    workflow: ["Research question", "Data audit", "Hypothesis test", "Cost and risk model", "Report review", "Execution-readiness brief"],
    riskControls: ["Out-of-sample review", "Drawdown checks", "Slippage assumptions", "Sensitivity analysis", "Deployment guardrails"],
    comparison: {
      title: "Research report vs deployment-ready research",
      text: "A standard report can explain a signal. Deployment-ready research also defines when the signal should be ignored, what costs can break it, and what controls are needed before live execution.",
    },
    faqs: [
      {
        question: "Who owns the strategy IP?",
        answer:
          "For custom consulting engagements, the strategy intellectual property belongs to the client unless a different agreement is defined in writing.",
      },
      {
        question: "Which markets can Radii research?",
        answer:
          "Radii can support equities, futures, options, FX workflow research, portfolio diagnostics, and execution-readiness reviews.",
      },
      {
        question: "Can research move into live execution?",
        answer:
          "Yes, when the research passes data, cost, risk, and broker feasibility checks. Deployment should start with controlled exposure.",
      },
    ],
    disclaimer:
      "Quantitative research is not a prediction guarantee. Model outputs depend on data quality, assumptions, costs, liquidity, and market regime changes.",
  },
};

export const moneyPageLinks = Object.values(servicePages).map((page) => ({
  href: `/${page.slug}`,
  label: page.label,
  description: page.heroLead,
}));

export const getServicePage = (slug) => servicePages[slug];

export const getServiceMetadata = (slug) => {
  const page = getServicePage(slug);

  return buildPageMetadata({
    title: `${page.metaTitle} | Radii Labs`,
    description: page.metaDescription,
    path: `/${page.slug}`,
    image: page.image,
    type: "website",
  });
};
