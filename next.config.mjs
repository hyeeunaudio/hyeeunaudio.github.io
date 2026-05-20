/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages root deployment for https://gracie-na.github.io/
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
