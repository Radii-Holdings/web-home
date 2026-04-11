const siteMetadata = require("./src/utils/siteMetaData");

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
]);

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    exclude: [
        '/apple-icon.png',
        '/categories/*',
    ],
    transform: async (config, path) => {
        const isBlog = path.startsWith('/blogs/');

        return {
            loc: path,
            changefreq: isBlog ? 'weekly' : 'monthly',
            priority: path === '/' ? 1.0 : servicePages.has(path) ? 0.9 : isBlog ? 0.7 : 0.5,
            lastmod: new Date().toISOString(),
        };
    },
}
