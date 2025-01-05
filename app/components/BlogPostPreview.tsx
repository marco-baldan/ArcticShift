import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPostPreviewProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  slug,
  title,
  excerpt,
  date,
  author,
  coverImage,
}) => {
  return (
    <Card>
      <CardContent className="p-0">
        <Image
          src={coverImage}
          alt={title}
          width={400}
          height={250}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span>{date}</span> • <span>{author}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
