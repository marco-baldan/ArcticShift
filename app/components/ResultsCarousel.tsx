"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Result {
  id: string;
  clientName: string;
  metric: string;
  value: string;
  description: string;
}

interface ResultsCarouselProps {
  results: Result[];
}

export const ResultsCarousel: React.FC<ResultsCarouselProps> = ({
  results,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + results.length) % results.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {results.map((result) => (
              <div key={result.id} className="w-full flex-shrink-0 p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {result.clientName}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-accent mr-2">
                    {result.value}
                  </span>
                  <span className="text-xl text-muted-foreground">
                    {result.metric}
                  </span>
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
