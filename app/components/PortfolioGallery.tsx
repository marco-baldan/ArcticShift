"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

interface PortfolioGalleryProps {
  projects: Project[];
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  projects,
}) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover h-48 w-full"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-primary">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{project.category}</p>
                </CardHeader>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
              <p className="text-muted-foreground">{project.description}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
