if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);
// http://0.gravatar.com/avatar/0fe723ef7db78b5fbcd5af6aea162a00?s=96&d=mm&r=g
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
      {
        protocol: 'http',
        hostname: '0.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'http',
        hostname: 'abc-transitionbascarbone.scienceontheweb.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
