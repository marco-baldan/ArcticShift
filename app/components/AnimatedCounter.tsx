"use client";

import React, { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  label?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration,
  prefix = "",
  suffix = "",
  label = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="text-4xl font-bold text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      {label && (
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
      )}
    </div>
  );
};
