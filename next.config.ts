import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		domains: ['localhost', 'candles-backend-latest.onrender.com'],
	},
}

export default nextConfig
