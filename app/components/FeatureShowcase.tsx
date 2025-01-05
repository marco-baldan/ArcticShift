import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  image: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  features,
  image,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-primary rounded-full p-3">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-96">
            <Image
              src={image}
              alt="Feature showcase"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
