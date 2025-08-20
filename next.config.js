/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer2")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export"
};



module.exports = withContentlayer({ ...nextConfig });
