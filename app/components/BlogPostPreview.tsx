import Link from 'next/link'
import Image from 'next/image'

interface BlogPostPreviewProps {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  coverImage: string
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  slug,
  title,
  excerpt,
  date,
  author,
  coverImage
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image src={coverImage} alt={title} width={400} height={250} className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{excerpt}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-base-content/70">
            <span>{date}</span> • <span>{author}</span>
          </div>
          <Link href={`/blog/${slug}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

