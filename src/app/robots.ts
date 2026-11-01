import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://EpitechMscProPromo2029.github.io/T-ENT-500-MPL-5-1-portfolio-5'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}