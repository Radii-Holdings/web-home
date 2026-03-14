const siteMetadata = require("./src/utils/siteMetaData");


module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
        const result = []
        if (siteMetadata.subdomains && siteMetadata.subdomains.length > 0) {
            siteMetadata.subdomains.forEach(subdomain => {
                result.push({
                    loc: subdomain,
                    changefreq: 'daily',
                    priority: 0.7,
                    lastmod: new Date().toISOString(),
                })
            })
        }
        return result
    },
}