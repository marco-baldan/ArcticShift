import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  coverImage: string;
}

const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const posts: Record<string, BlogPost> = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      content: `
Next.js has revolutionised how developers build modern web applications. It combines the flexibility of React with features that enable you to create highly performant and scalable websites.

## What is Next.js?

Next.js is an open-source React framework that provides solutions for server-side rendering (SSR), static site generation (SSG), and hybrid rendering, making it a top choice for developers who prioritise speed and SEO.

## Why Use Next.js?

- **Server-side Rendering (SSR):** Improve SEO and initial load time.
- **Static Site Generation (SSG):** Generate fast-loading pages ahead of time.
- **Built-in Routing:** Simplify navigation with a file-based routing system.
- **Optimised Images:** Automatically optimise images for better performance.

Whether you're building an e-commerce site, a blog, or a corporate website, Next.js provides the tools you need to succeed. Start your Next.js journey today and unlock new possibilities for your projects.
      `,
      date: "2023-03-10",
      author: "Marco Baldan",
      coverImage: "/images/hero1.jpg?height=400&width=800",
    },
    "wordpress-vs-shopify": {
      title:
        "WordPress vs Shopify: Choosing the Right Platform for Your Business",
      content: `
        <p>Choosing the right platform for your website or e-commerce store can be daunting. WordPress and Shopify are two of the most popular options, each with its own strengths and weaknesses. This guide breaks them down to help you decide.</p>
        <h2>WordPress: The Content King</h2>
        <p>WordPress powers over 40% of the web, making it a robust choice for any type of website. With thousands of plugins and themes, WordPress is unmatched in customisability.</p>
        <ul>
          <li><strong>Best For:</strong> Blogs, content-heavy websites, and businesses requiring custom functionality.</li>
          <li><strong>Customisation:</strong> Extensive plugin ecosystem and theme options.</li>
          <li><strong>Setup:</strong> Requires hosting, domain setup, and basic technical skills.</li>
        </ul>
        <h2>Shopify: Built for E-commerce</h2>
        <p>Shopify is a fully-hosted platform specifically designed for online stores. It provides everything you need to start selling products without requiring advanced technical skills.</p>
        <ul>
          <li><strong>Best For:</strong> Small to medium-sized online stores with a focus on simplicity.</li>
          <li><strong>E-commerce Features:</strong> Built-in payment processing, inventory management, and shipping tools.</li>
          <li><strong>Ease of Use:</strong> Minimal setup required, but comes with monthly fees.</li>
        </ul>
        <p>When deciding between WordPress and Shopify, consider your business goals, technical expertise, and budget. Both platforms are powerful but serve different needs.</p>
      `,
      date: "2023-04-05",
      author: "Marco Baldan",
      coverImage: "/images/hero1.jpg?height=400&width=800",
    },
    "top-5-seo-tips": {
      title: "Top 5 SEO Tips to Boost Your Website Rankings in 2023",
      content: `
        <p>Search Engine Optimisation (SEO) is more important than ever in 2023. Whether you're a beginner or looking to refine your strategy, these tips will help you climb the search engine rankings.</p>
        <h2>1. Conduct Thorough Keyword Research</h2>
        <p>Understand your audience and target the keywords they use to search for your products or services. Use tools like Google Keyword Planner or Ahrefs to uncover high-value opportunities.</p>
        <h2>2. Optimise Your Website for Mobile</h2>
        <p>With mobile devices accounting for over half of web traffic, a mobile-friendly site is non-negotiable. Ensure your site is responsive and delivers a seamless user experience on all devices.</p>
        <h2>3. Improve Page Speed</h2>
        <p>Fast-loading websites rank higher and reduce bounce rates. Use tools like Google PageSpeed Insights to identify and fix performance bottlenecks.</p>
        <h2>4. Publish High-Quality Content</h2>
        <p>Regularly update your blog or site with informative, engaging, and well-structured content to keep users and search engines happy.</p>
        <h2>5. Build Authoritative Backlinks</h2>
        <p>Secure backlinks from reputable sites to enhance your domain authority and improve rankings. Focus on quality over quantity.</p>
        <p>By implementing these strategies, you can drive more traffic to your site and improve your online visibility in 2023 and beyond.</p>
      `,
      date: "2023-02-20",
      author: "Marco Baldan",
      coverImage: "/images/hero1.jpg?height=400&width=800",
    },
    "maximising-conversions-digital-marketing": {
      title: "Maximising Conversions with Digital Marketing in 2023",
      content: `
        <p>In today’s competitive online landscape, driving traffic is only half the battle. Converting visitors into customers requires a strategic approach. Here’s how to optimise your digital marketing for maximum impact.</p>
        <h2>Create Clear Calls-to-Action (CTAs)</h2>
        <p>Ensure every page has a clear, compelling CTA that guides users toward your desired action, whether it's a purchase, signup, or download.</p>
        <h2>Personalise User Experiences</h2>
        <p>Use data to tailor content, offers, and interactions to each user. Personalisation increases engagement and builds trust.</p>
        <h2>Leverage Retargeting Campaigns</h2>
        <p>Bring back visitors who didn’t convert with targeted ads that remind them of your offerings and encourage action.</p>
        <h2>Analyse and Iterate</h2>
        <p>Continuously track campaign performance and use the data to refine your strategies for better results over time.</p>
        <p>By focusing on these areas, you can boost your conversion rates and maximise the ROI of your digital marketing campaigns.</p>
      `,
      date: "2023-01-15",
      author: "Marco Baldan",
      coverImage: "/images/hero1.jpg?height=400&width=800",
    },
    "nextjs-seo-strategies": {
      title: "Next.js SEO Strategies for Lightning-Fast Websites",
      content: `
        <p>Next.js is not just about performance; it’s a game-changer for SEO. Here’s how you can leverage its features to improve your website rankings:</p>
        <h2>1. Server-Side Rendering (SSR)</h2>
        <p>Ensure search engines can crawl and index your content by using SSR to deliver fully-rendered pages.</p>
        <h2>2. Image Optimisation</h2>
        <p>Use the built-in Next.js Image component to automatically optimise images for faster load times and better user experiences.</p>
        <h2>3. Dynamic Routing</h2>
        <p>Implement clean and efficient URLs to make your site easier to navigate and improve its crawlability.</p>
        <h2>4. Structured Data</h2>
        <p>Incorporate JSON-LD schema to provide rich search results like FAQs, product listings, and more.</p>
        <p>With these strategies, you can unlock the full potential of Next.js and boost your website’s SEO performance.</p>
      `,
      date: "2023-03-28",
      author: "Marco Baldan",
      coverImage: "/images/hero1.jpg?height=400&width=800",
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts[slug] || null);
    }, 500);
  });
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found - Our Blog",
      description: "The blog post you're looking for does not exist.",
    };
  }

  return {
    title: `${post.title} - Our Blog`,
    description: post.content.substring(0, 150),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 150),
      url: `https://designbath.co.uk/blog/${resolvedParams.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.substring(0, 150),
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${resolvedParams.slug}` },
        ]}
      />
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>
        <div className="text-sm text-muted-foreground mb-6">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full aspect-[1200/630] object-cover rounded-lg mb-8"
          priority
        />
        <div className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children, ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 className="text-xl font-medium mt-4 mb-2" {...props}>
                  {children}
                </h3>
              ),
              p: ({ children, ...props }) => (
                <p className="mb-4" {...props}>
                  {children}
                </p>
              ),
              ul: ({ children, ...props }) => (
                <ul className="list-disc pl-6 mb-4" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="list-decimal pl-6 mb-4" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="mb-2" {...props}>
                  {children}
                </li>
              ),
              a: ({ children, ...props }) => (
                <a className="text-blue-600 hover:underline" {...props}>
                  {children}
                </a>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-300 pl-4 italic my-4"
                  {...props}
                >
                  {children}
                </blockquote>
              ),
              code: ({ children, ...props }) =>
                children ? (
                  <code className="bg-gray-100 rounded px-1 py-0.5" {...props}>
                    {children}
                  </code>
                ) : (
                  <code
                    className="block bg-gray-100 rounded p-2 my-2 whitespace-pre-wrap"
                    {...props}
                  >
                    {children}
                  </code>
                ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
