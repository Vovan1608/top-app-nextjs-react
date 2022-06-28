/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
}

module.exports = nextConfig

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            // issuer section restricts svg as component only to
            // svgs imported from js / ts files.
            //
            // This allows configuring other behavior for
            // svgs imported from other file types (such as .css)
            issuer: [/\.(js|ts)x?$/],
            use: ["@svgr/webpack"],
        });

        return config;
    },
};