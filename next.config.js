const bundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextTranslate = require("next-translate");

const plugins = [bundleAnalyzer, nextTranslate];

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "rey-product.s3.ap-southeast-1.amazonaws.com",
            "rey-assets.rey.id",
            "rey.id",
        ],
    },
    optimizeFonts: false,
};

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig);
