import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="w-96 transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-center">
          <div className="rounded-full bg-primary p-3 text-primary-foreground">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-2 text-primary">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
