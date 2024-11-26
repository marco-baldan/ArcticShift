import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { BlogPostPreview } from '@/app/components/BlogPostPreview'
import { CTA } from '../components/CTA'

interface BlogPostPreviewData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
}

const blogPosts: BlogPostPreviewData[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build fast and efficient web applications with Next.js, the React framework for production.',
    date: '2023-03-10',
    author: 'Marco Baldan',
    coverImage: '/placeholder.svg?height=250&width=400'
  },
  {
    slug: 'wordpress-vs-shopify',
    title: 'WordPress vs Shopify: Choosing the Right Platform for Your Business',
    excerpt: 'Explore the pros and cons of WordPress and Shopify to decide which is best for your e-commerce needs.',
    date: '2023-04-05',
    author: 'Marco Baldan',
    coverImage: '/placeholder.svg?height=250&width=400'
  },
  {
    slug: 'top-5-seo-tips',
    title: 'Top 5 SEO Tips to Boost Your Website Rankings in 2023',
    excerpt: 'Uncover actionable SEO strategies that will help your site rank higher in search engine results.',
    date: '2023-02-20',
    author: 'Marco Baldan',
    coverImage: '/placeholder.svg?height=250&width=400'
  },
  {
    slug: 'maximising-conversions-digital-marketing',
    title: 'Maximising Conversions with Digital Marketing in 2023',
    excerpt: 'Learn how to optimise your digital marketing campaigns to drive traffic and convert visitors into customers.',
    date: '2023-01-15',
    author: 'Marco Baldan',
    coverImage: '/placeholder.svg?height=250&width=400'
  },
  {
    slug: 'nextjs-seo-strategies',
    title: 'Next.js SEO Strategies for Lightning-Fast Websites',
    excerpt: 'Discover how Next.js enhances SEO and helps you achieve better rankings with its modern features.',
    date: '2023-03-28',
    author: 'Marco Baldan',
    coverImage: '/placeholder.svg?height=250&width=400'
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      <h1 className="text-4xl font-bold mt-8 mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
      <CTA />
    </div>
  )
}

