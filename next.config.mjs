/** @type {import('next').NextConfig} */

// Sur GitHub Pages, le site est servi depuis /<nom-du-repo>/.
// La variable GITHUB_PAGES est définie par le workflow de déploiement.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "Portfolio";

const nextConfig = {
  output: "export", // génère un site statique dans out/
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
};

export default nextConfig;
