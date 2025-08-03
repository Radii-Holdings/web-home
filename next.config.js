/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer2")

const nextConfig = {
    compiler: {
        removeConsole: true,
    }
};



module.exports = withContentlayer({ ...nextConfig });
