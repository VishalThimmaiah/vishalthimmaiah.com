import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/content/seo-content'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteConfig.title,
		short_name: siteConfig.name,
		description: siteConfig.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#000000',
		theme_color: '#000000',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
		categories: ['business', 'technology', 'portfolio'],
		lang: 'en',
		dir: 'ltr',
	}
}
