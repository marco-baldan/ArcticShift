import { FC } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface AboutUsProps {
  title: string;
  description: string;
  points: string[];
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

const AboutUs: FC<AboutUsProps> = ({
  title,
  description,
  points,
  imageSrc,
  imagePosition = "left",
}) => {
  return (
    <section className="bg-secondary py-16 px-6 md:px-12 lg:px-24">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-8 ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {imageSrc && (
          <div className="w-full md:w-1/2">
            <Card>
              <CardContent className="p-0">
                <Image
                  src={imageSrc}
                  alt="About us"
                  className="rounded-lg"
                  width={500}
                  height={500}
                />
              </CardContent>
            </Card>
          </div>
        )}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>
          <ul className="list-disc list-inside space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-base text-muted-foreground">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
