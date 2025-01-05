import { FC, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

interface FeaturesSectionWithButtonProps {
  features: Feature[];
  title?: string;
  description?: string;
}

const FeaturesSectionWithButton: FC<FeaturesSectionWithButtonProps> = ({
  features,
  title,
  description,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center px-4 md:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-lg text-muted-foreground mb-12">
            {description}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-3 md:mb-4 text-3xl md:text-4xl text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2 mb-4">
                  {feature.description}
                </p>
              </CardContent>
              {feature.buttonText && feature.buttonLink && (
                <CardFooter className="pt-0">
                  <Button asChild className="w-full">
                    <Link href={feature.buttonLink}>{feature.buttonText}</Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionWithButton;
