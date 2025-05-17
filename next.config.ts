import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		domains: ['localhost', 'https://candlesfrontend.vercel.app'],
	},
}

export default nextConfig
