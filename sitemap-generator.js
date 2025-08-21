// sitemap-generator.js - Place this in your project root
import fs from 'fs';
import path from 'path';

const domain = 'https://suhtech.top';

// Define your routes with priority and change frequency
const routes = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  },
  {
    url: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/careers',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  // Add more routes as needed
  {
    url: '/services/seo-services-india',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/web-development-india',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/digital-marketing-india',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/mobile-app-development',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${domain}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${domain}/sitemap.xml

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*ref=*
Disallow: /api/

# Allow important files
Allow: /logo_Suh.jpg
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp

# Crawl delay (optional)
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 2`;

  fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt generated successfully at public/robots.txt');
}

// Generate both files
generateSitemap();
generateRobotsTxt();

export { generateRobotsTxt, generateSitemap };
