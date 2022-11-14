/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "pt"],
    
  }
}

// module.exports = {
//   i18n: {
//     defaultLocale: "es",
//     locales: ["es", "en", "pt"],
    
//   },
// }
module.exports = nextConfig
