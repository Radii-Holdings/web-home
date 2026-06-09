const siteMetadata = require("./src/utils/siteMetaData");
let generatedBlogs = [];

try {
    generatedBlogs = require("./.contentlayer/generated/Blog/_index.json");
} catch (error) {
    generatedBlogs = [];
}

const blogLastmodByPath = new Map(
    generatedBlogs.map((blog) => [
        blog.url,
        new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    ])
);

const servicePages = new Set([
    '/',
    '/algo-trading-platform-india',
    '/forex-algo-execution-india',
    '/multi-broker-order-routing',
    '/quant-research-services-india',
    '/risk-managed-trading-automation',
    '/tutorial',
    '/about',
    '/contact',
    '/categories/all',
]);

const staticPageLastmod = new Date(siteMetadata.seoReviewDate || Date.now()).toISOString();

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    exclude: [
        '/apple-icon.png',
    ],
    transform: async (config, path) => {
        if (path.startsWith('/categories/') && path !== '/categories/all') {
            return null;
        }

        const isBlog = path.startsWith('/blogs/');
        const isServiceOrCorePage = servicePages.has(path);
        const isAuthorPage = path.startsWith('/authors/');
        const lastmod = isBlog
            ? blogLastmodByPath.get(path) || staticPageLastmod
            : staticPageLastmod;

        return {
            loc: path,
            changefreq: isBlog || path === '/categories/all' ? 'weekly' : 'monthly',
            priority: path === '/' ? 1.0 : isServiceOrCorePage ? 0.9 : isBlog ? 0.7 : isAuthorPage ? 0.5 : 0.4,
            lastmod,
        };
    },
}
