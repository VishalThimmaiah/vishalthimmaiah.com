import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/content/seo-content'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/'],
		},
		sitemap: `${siteConfig.url}/sitemap.xml`,
		host: siteConfig.url,
	}
}
