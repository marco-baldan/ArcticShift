import React from "react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full bg-primary"></div>
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>
      <div className="pb-8">
        <p className="text-sm text-primary mb-2">{date}</p>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
