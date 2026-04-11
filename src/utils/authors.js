const authors = {
  "radii-labs": {
    slug: "radii-labs",
    name: "Radii Labs",
    role: "Quantitative research and trading technology team",
    url: "/authors/radii-labs",
    bio: "Radii Labs publishes research on market structure, quantitative workflows, broker connectivity, and risk-managed algorithmic execution for Indian and global markets.",
    methodology:
      "Research is reviewed for query intent, practical usefulness, and financial risk clarity before publication. Market articles separate observations from predictions and should not be read as investment advice.",
  },
  "layr0-team": {
    slug: "layr0-team",
    name: "Layr0 Team",
    role: "Execution workflow and broker integration team",
    url: "/authors/layr0-team",
    bio: "The Layr0 team writes about algorithmic execution, broker workflows, risk checks, and practical trading automation for operators who need disciplined execution infrastructure.",
    methodology:
      "Execution articles focus on workflow design, operational controls, and broker-aware implementation details. Any examples are illustrative and depend on broker API access, market conditions, and user configuration.",
  },
};

const normalizeAuthorName = (name = "") =>
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getAuthorBySlug = (slug) => authors[slug];

export const getAuthorByName = (name) => {
  const normalized = normalizeAuthorName(name);
  return authors[normalized] || authors["radii-labs"];
};

export const authorList = Object.values(authors);
