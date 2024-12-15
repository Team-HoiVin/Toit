/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/user/:path*',
        destination: `${process.env.API_URL}/auth/:path*`,
      },
      {
        source: '/groups/:path*',
        destination: `${process.env.API_URL}/groups/:path*`,
      },
      {
        source: '/oauthApps',
        destination: `${process.env.API_URL}/oauthApps`,
      },
      {
        source: '/images',
        destination: `${process.env.API_URL}/images`,
      },
      {
        source: '/tasks/:path*',
        destination: `${process.env.API_URL}/tasks/:path*`,
      },
      {
        source: '/auth/:path*',
        destination: `${process.env.API_URL}/auth/:path*`,
      },
      {
        source: '/articles/:path*',
        destination: `${process.env.API_URL}/articles/:path*`,
      },
      {
        source: '/comments/:path*',
        destination: `${process.env.API_URL}/comments/:path*`,
      },
    ];
  },
};

export default nextConfig;
