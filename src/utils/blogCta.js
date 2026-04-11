const queryText = (blog) =>
  `${blog?.title || ""} ${(blog?.tags || []).join(" ")} ${blog?.description || ""}`.toLowerCase();

export const getBlogCta = (blog) => {
  const text = queryText(blog);

  if (text.includes("forex") || text.includes("currency") || text.includes("fx")) {
    return {
      href: "/forex-algo-execution-india",
      kicker: "For forex execution workflows",
      title: "Review forex automation with risk controls",
      description:
        "Map currency-pair monitoring, broker access, and risk gates before moving any FX workflow toward live execution.",
      button: "Discuss FX Workflow",
    };
  }

  if (text.includes("cross-broker") || text.includes("multi-broker") || text.includes("broker")) {
    return {
      href: "/multi-broker-order-routing",
      kicker: "For broker-connected execution",
      title: "Plan multi-broker routing for this workflow",
      description:
        "Review broker coverage, routing rules, failure behavior, and reporting before scaling trading operations across accounts.",
      button: "Review Broker Routing",
    };
  }

  if (text.includes("risk") || text.includes("war") || text.includes("drawdown") || text.includes("volatility")) {
    return {
      href: "/risk-managed-trading-automation",
      kicker: "For risk-managed execution",
      title: "Add risk checks before live orders",
      description:
        "Define loss limits, position sizing, exposure caps, approvals, and kill-switch behavior before deploying trading workflows.",
      button: "Review Risk Controls",
    };
  }

  if (text.includes("quant") || text.includes("market") || text.includes("portfolio") || text.includes("ai trading")) {
    return {
      href: "/quant-research-services-india",
      kicker: "For research validation",
      title: "Turn this idea into testable quant research",
      description:
        "Clarify the data, assumptions, backtest limits, and execution-readiness requirements behind a trading hypothesis.",
      button: "Discuss Research Review",
    };
  }

  return {
    href: "/algo-trading-platform-india",
    kicker: "For rules-based execution",
    title: "Move from research to broker-aware execution",
    description:
      "Connect strategy logic, backtesting, broker routing, and risk controls in one disciplined workflow.",
    button: "Explore Algo Platform",
  };
};
