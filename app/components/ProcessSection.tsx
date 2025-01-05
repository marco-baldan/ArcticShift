"use client";

import { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SubStep {
  title: string;
  description: string;
}

interface ProcessStep {
  icon: ReactNode;
  title: string;
  description: string;
  subSteps?: SubStep[];
}

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

const ProcessSection: FC<ProcessSectionProps> = ({ title, steps }) => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          {title}
        </h2>

        <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <div className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-full md:h-0.5 w-0.5 md:w-full bg-primary md:top-8 hidden md:block"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/4 flex flex-col md:items-center text-left md:text-center my-8 md:my-0 px-4 md:px-0 transition duration-300 hover:scale-105 hover:bg-accent/10 rounded-lg"
            >
              <div className="z-10 flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4 hover:scale-110 transition">
                {step.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{step.title}</DialogTitle>
                      <DialogDescription>{step.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      {step.subSteps?.map((subStep, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="text-lg font-semibold text-accent">
                              {subStep.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              {subStep.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
