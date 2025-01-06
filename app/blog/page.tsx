import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { BlogPostPreview } from "@/app/components/BlogPostPreview";
import { CTA } from "@/app/components/CTA";

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
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn to build fast, efficient web apps using Next.js, the go-to React framework.",
    date: "2023-03-10",
    author: "Marco Baldan",
    coverImage: "/images/hero1.jpg?height=250&width=400",
  },
  {
    slug: "wordpress-vs-shopify",
    title: "WordPress vs Shopify: Choosing the Right Platform",
    excerpt:
      "Compare WordPress and Shopify to find the best platform for your business needs.",
    date: "2023-04-05",
    author: "Marco Baldan",
    coverImage: "/images/hero1.jpg?height=250&width=400",
  },
  {
    slug: "top-5-seo-tips",
    title: "Top 5 SEO Tips to Boost Your Rankings in 2023",
    excerpt:
      "Discover actionable SEO tips to enhance your site’s visibility and performance.",
    date: "2023-02-20",
    author: "Marco Baldan",
    coverImage: "/images/hero1.jpg?height=250&width=400",
  },
  {
    slug: "maximising-conversions-digital-marketing",
    title: "Maximising Conversions with Digital Marketing",
    excerpt:
      "Optimise campaigns to drive traffic and convert visitors into loyal customers.",
    date: "2023-01-15",
    author: "Marco Baldan",
    coverImage: "/images/hero1.jpg?height=250&width=400",
  },
  {
    slug: "nextjs-seo-strategies",
    title: "Next.js SEO Strategies for High Rankings",
    excerpt:
      "Learn how Next.js improves SEO with modern features and lightning-fast performance.",
    date: "2023-03-28",
    author: "Marco Baldan",
    coverImage: "/images/hero1.jpg?height=250&width=400",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <h1 className="text-4xl font-bold mt-8 mb-12 text-primary">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
      <CTA />
    </div>
  );
}
