/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
    domains: [
      {
        domain: 'http://localhost:3000',
        defaultLocale: 'tr'
      },
      {
        domain: 'http://localhost:3000/en',
        defaultLocale: 'en'
      }
    ],
    isLocaleDomain: true
  }
}

module.exports = nextConfig
