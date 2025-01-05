import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
}) => {
  return (
    <Card
      className={`w-96 transition-shadow duration-300 hover:shadow-lg ${
        isPopular ? "border-primary" : ""
      }`}
    >
      {isPopular && (
        <Badge className="absolute right-2 top-2">Most Popular</Badge>
      )}
      <CardHeader>
        <CardTitle className="text-center text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-4xl font-bold">{price}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${isPopular ? "" : "variant-outline"}`}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
};
