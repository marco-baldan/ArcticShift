import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import Image from 'next/image'
import { notFound } from 'next/navigation'


interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  coverImage: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const posts: Record<string, BlogPost> = {
    'getting-started-with-nextjs': {
      title: 'Getting Started with Next.js',
      content: `
        <p>Next.js is a powerful React framework that allows you to build fast, efficient, and SEO-friendly websites.</p>
        <h2>Key Features</h2>
        <ul>
          <li>Server-side rendering for better SEO</li>
          <li>API routes to add backend functionality</li>
          <li>Image optimisation for faster load times</li>
          <li>Rich ecosystem and extensive community support</li>
        </ul>
        <p>Get started today and elevate your web projects with Next.js.</p>
      `,
      date: '2023-03-10',
      author: 'Marco Baldan',
      coverImage: '/images/hero1.jpg?height=400&width=800',
    },
    'wordpress-vs-shopify': {
      title: 'WordPress vs Shopify: Choosing the Right Platform for Your Business',
      content: `
        <p>Choosing the right platform for your e-commerce site can be challenging. In this post, we'll compare WordPress and Shopify to help you make an informed decision.</p>
        <h2>WordPress</h2>
        <ul>
          <li>Highly customisable with plugins</li>
          <li>Best for content-heavy websites</li>
          <li>Requires hosting and technical setup</li>
        </ul>
        <h2>Shopify</h2>
        <ul>
          <li>Simple and quick setup</li>
          <li>Designed for e-commerce with built-in tools</li>
          <li>Monthly subscription fees</li>
        </ul>
        <p>Evaluate your business needs to choose the platform that suits you best.</p>
      `,
      date: '2023-04-05',
      author: 'Marco Baldan',
      coverImage: '/images/hero1.jpg?height=400&width=800',
    },
    'top-5-seo-tips': {
      title: 'Top 5 SEO Tips to Boost Your Website Rankings in 2023',
      content: `
        <p>Search Engine Optimisation (SEO) is essential for improving your site's visibility. Here are five key tips for success:</p>
        <ul>
          <li>Focus on keyword research to target the right audience</li>
          <li>Ensure your site is mobile-friendly</li>
          <li>Optimise page load speed</li>
          <li>Regularly update content to stay relevant</li>
          <li>Use high-quality backlinks to improve authority</li>
        </ul>
        <p>Implement these strategies to see significant improvements in your search engine rankings.</p>
      `,
      date: '2023-02-20',
      author: 'Marco Baldan',
      coverImage: '/images/hero1.jpg?height=400&width=800',
    },
    'maximising-conversions-digital-marketing': {
      title: 'Maximising Conversions with Digital Marketing in 2023',
      content: `
        <p>Driving traffic to your website is just the first step. To maximise conversions, focus on:</p>
        <ul>
          <li>Creating clear and compelling calls-to-action</li>
          <li>Personalising user experiences</li>
          <li>Analysing data to refine campaigns</li>
          <li>Using retargeting to engage past visitors</li>
        </ul>
        <p>By aligning your digital marketing efforts with customer needs, you can turn traffic into tangible results.</p>
      `,
      date: '2023-01-15',
      author: 'Marco Baldan',
      coverImage: '/images/hero1.jpg?height=400&width=800',
    },
    'nextjs-seo-strategies': {
      title: 'Next.js SEO Strategies for Lightning-Fast Websites',
      content: `
        <p>Next.js combines performance with SEO best practices. Here’s how you can use it to optimise your website:</p>
        <ul>
          <li>Leverage server-side rendering to improve crawlability</li>
          <li>Use dynamic routing for seamless navigation</li>
          <li>Optimise images using Next.js Image component</li>
          <li>Implement structured data for rich search results</li>
        </ul>
        <p>With Next.js, you can create sites that not only look great but also rank higher in search engines.</p>
      `,
      date: '2023-03-28',
      author: 'Marco Baldan',
      coverImage: '/images/hero1.jpg?height=400&width=800',
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(posts[slug] || null), 500);
  });
};
export default async function BlogPost({ params }: PageProps) {
  const { slug } = params;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title, href: `/blog/${params.slug}` }]} />
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-base-content/70 mb-6">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-96 object-cover rounded-lg mb-8"
          priority
        />
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}