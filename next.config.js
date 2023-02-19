/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	// If we end up using Cloudinary, we can use this to allow Next.js to optimize images
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'res.cloudinary.com',
	// 			port: '',
	// 			pathname: '/bh-futures-foundation/**',
	// 		},
	// 	],
	// },
};

module.exports = nextConfig;
