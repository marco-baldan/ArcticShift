"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface InteractiveCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  frontContent,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-64 h-96 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <Card className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center">
          <CardContent>{frontContent}</CardContent>
        </Card>
        <Card className="absolute w-full h-full [backface-visibility:hidden] bg-primary text-primary-foreground flex items-center justify-center [transform:rotateY(180deg)]">
          <CardContent>{backContent}</CardContent>
        </Card>
      </div>
    </div>
  );
};
