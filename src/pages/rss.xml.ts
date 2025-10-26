import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await import.meta.glob('./blog/*.md', { eager: true });
  
  const items = Object.values(posts).map((post: any) => ({
    title: post.frontmatter.title,
    pubDate: new Date(post.frontmatter.pubDate),
    description: post.frontmatter.description,
    link: post.url,
  }));

  return rss({
    title: 'Nila Blog',
    description: 'Insights on building production AI systems',
    site: context.site || 'https://nila.is',
    items: items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
    customData: `<language>en-us</language>`,
  });
};

