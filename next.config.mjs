/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    // this is deployed on github pages, so we need to set the basePath
    basePath: "/music-predictor-pages/",
    assetPrefix: "/music-predictor-pages/",
  };
  
export default nextConfig;