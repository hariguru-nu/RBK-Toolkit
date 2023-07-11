/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
