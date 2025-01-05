import React from "react";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Service {
  name: string;
  features: {
    [key: string]: boolean;
  };
}

interface ServiceComparisonProps {
  services: Service[];
}

export const ServiceComparison: React.FC<ServiceComparisonProps> = ({
  services,
}) => {
  const allFeatures = Array.from(
    new Set(services.flatMap((service) => Object.keys(service.features)))
  );

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-muted">Feature</TableHead>
            {services.map((service) => (
              <TableHead key={service.name} className="bg-muted text-center">
                {service.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {allFeatures.map((feature) => (
            <TableRow key={feature}>
              <TableCell className="font-medium">{feature}</TableCell>
              {services.map((service) => (
                <TableCell
                  key={`${service.name}-${feature}`}
                  className="text-center"
                >
                  {service.features[feature] ? (
                    <Check className="inline-block text-success" />
                  ) : (
                    <X className="inline-block text-destructive" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
