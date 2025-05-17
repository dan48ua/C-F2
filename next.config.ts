import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		domains: [
			'localhost',
			'https://candles-backend-latest.onrender.com',
			'candles-backend-latest.onrender.com',
		],
	},
}

export default nextConfig
