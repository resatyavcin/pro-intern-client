/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
    domains: [
      {
        domain: 'pro-intern-client.vercel.app',
        defaultLocale: 'tr'
      },
      {
        domain: 'pro-intern-client.vercel.app/en',
        defaultLocale: 'en'
      }
    ],
    isLocaleDomain: true
  }
};

module.exports = nextConfig;
