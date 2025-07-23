/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    }
};
// add cors CORS headers to unblock the API response froom other domains
const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
};
// add the cors middleware to the next config
nextConfig.middleware = (req, res, next) => {
    cors(req, res, next);
};
// add the middleware to the next config
module.exports = withContentlayer({ ...nextConfig });
