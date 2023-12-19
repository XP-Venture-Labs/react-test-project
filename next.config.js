/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/pokedex/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
