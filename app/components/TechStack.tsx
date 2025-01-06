"use client";

import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
const techStack = [
  {
    title: "Core Technologies",
    items: [
      {
        prefix: "</>",
        command: "install next.js",
        fullText:
          "🚀 Next.js - The React framework for scalable web applications.",
      },
      {
        prefix: "</>",
        command: "install react.js",
        fullText:
          "⚛️ React.js - A powerful library for building user interfaces.",
      },
      {
        prefix: "</>",
        command: "install express.js",
        fullText:
          "🌐 Express.js - Minimal and flexible framework for Node.js apps.",
      },
      {
        prefix: "</>",
        command: "install node.js",
        fullText:
          "🖥️ Node.js - JavaScript runtime for fast, scalable backends.",
      },
      {
        prefix: "</>",
        command: "install python",
        fullText:
          "🐍 Python - Versatile language for web, data, and AI projects.",
      },
    ],
  },
  {
    title: "☁️ Cloud & Databases",
    items: [
      {
        prefix: "➜",
        command: "install aws",
        fullText: "☁️ AWS - Reliable cloud platform for hosting and services.",
      },
      {
        prefix: "➜",
        command: "install google-cloud",
        fullText: "☁️ Google Cloud - Scalable cloud services with AI tools.",
      },
      {
        prefix: "➜",
        command: "install mongodb",
        fullText: "📊 MongoDB - NoSQL database for modern, flexible apps.",
      },
    ],
  },
  {
    title: "🌐 Content Platforms",
    items: [
      {
        prefix: "➜",
        command: "install wordpress",
        fullText: "🌐 WordPress - Popular CMS for blogs and websites.",
      },
      {
        prefix: "➜",
        command: "install shopify",
        fullText: "🛒 Shopify - Leading platform for e-commerce businesses.",
      },
      {
        prefix: "➜",
        command: "install contentful",
        fullText: "📄 Contentful - Headless CMS for multi-channel content.",
      },
      {
        prefix: "➜",
        command: "install webflow",
        fullText: "💻 Webflow - Visual design tool with integrated CMS.",
      },
    ],
  },
  {
    title: "📈 Marketing & Creative Tools",
    items: [
      {
        prefix: "➜",
        command: "install hubspot-crm",
        fullText: "📈 HubSpot - All-in-one CRM for marketing and sales.",
      },
      {
        prefix: "➜",
        command: "install analytics-seo",
        fullText: "📈 Google Analytics - Advanced tools for SEO insights.",
      },
      {
        prefix: "➜",
        command: "install marketing-automation",
        fullText:
          "💼 Marketing Automation - Streamlined workflows and analytics.",
      },
      {
        prefix: "➜",
        command: "install adobe-creative-suite",
        fullText: "🎨 Adobe Suite - Industry-standard creative design tools.",
      },
    ],
  },
] as const;

interface TechStackItem {
  prefix: string;
  command: string;
  fullText: string;
}

interface TechCategory {
  title: string;
  items: TechStackItem[];
}

interface TechStackProps {
  categories?: TechCategory[];
  typingSpeed?: number;
  delayBetweenCategories?: number;
  className?: string;
}

const TechStack: FC<TechStackProps> = ({
  categories = [],
  typingSpeed = 40,
  delayBetweenCategories = 250,
  className,
}) => {
  const effectiveCategories = categories.length > 0 ? categories : techStack;

  const [displayedCategories, setDisplayedCategories] = useState<
    TechCategory[]
  >([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use RAF for smooth animations
  const requestRef = useRef<number>();

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        containerRef.current?.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    }
  }, []);

  const handleStart = () => {
    setIsStarted(true);
    setDisplayedCategories([]);
    setCurrentCategoryIndex(0);
    setCurrentItemIndex(0);
    setTypedCommand("");
    setIsTyping(true);
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [displayedCategories, typedCommand, scrollToBottom]);

  useEffect(() => {
    if (!isStarted || !isTyping) return;

    const currentItem =
      effectiveCategories[currentCategoryIndex]?.items[currentItemIndex];
    if (!currentItem) {
      setIsTyping(false);
      return;
    }

    if (typedCommand.length < currentItem.command.length) {
      const timer = setTimeout(() => {
        setTypedCommand(currentItem.command.slice(0, typedCommand.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      // Add to displayed categories
      setDisplayedCategories((prev) => {
        const newCategories = [...prev];
        if (!newCategories[currentCategoryIndex]) {
          newCategories[currentCategoryIndex] = {
            title: effectiveCategories[currentCategoryIndex].title,
            items: [],
          };
        }

        const currentItems = newCategories[currentCategoryIndex].items;
        if (
          !currentItems.some((item) => item.command === currentItem.fullText)
        ) {
          currentItems.push({
            ...currentItem,
            command: currentItem.fullText,
          });
        }

        return newCategories;
      });

      // Clear typed command and prepare for next item
      setTypedCommand("");

      // Move to next item or category
      if (
        currentItemIndex + 1 <
        effectiveCategories[currentCategoryIndex].items.length
      ) {
        setCurrentItemIndex((prev) => prev + 1);
      } else if (currentCategoryIndex + 1 < effectiveCategories.length) {
        setCurrentCategoryIndex((prev) => prev + 1);
        setCurrentItemIndex(0);
      } else {
        setIsTyping(false);
      }
    }, delayBetweenCategories);

    return () => clearTimeout(timer);
  }, [
    effectiveCategories,
    currentCategoryIndex,
    currentItemIndex,
    typedCommand,
    typingSpeed,
    delayBetweenCategories,
    isStarted,
    isTyping,
  ]);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const isComplete =
    !isTyping && currentCategoryIndex >= effectiveCategories.length;

  return (
    <div className="w-full flex flex-col items-center justify-start p-4">
      <Card
        ref={containerRef}
        className={`w-full max-w-3xl transition-all duration-300 ease-in-out ${
          isStarted ? "min-h-[200px]" : "min-h-0"
        } ${className || ""}`}
        style={{
          height: isStarted ? "auto" : "60px",
          overflow: "hidden",
        }}
      >
        <CardContent className="p-0">
          {!isStarted ? (
            <Button onClick={handleStart} className="w-full h-[60px]">
              Load The Stack
            </Button>
          ) : (
            <div className="bg-secondary text-secondary-foreground p-4">
              <CardHeader className="p-2 bg-secondary-foreground">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-secondary truncate">
                    Tech Stack Installer v1.0.0
                  </CardTitle>
                  {isComplete && (
                    <span className="bg-green-500 text-secondary px-2 py-1 text-xs rounded ml-2 whitespace-nowrap">
                      Installation Complete
                    </span>
                  )}
                </div>
              </CardHeader>

              <ScrollArea className="h-[400px] overflow-y-auto">
                <div className="p-4">
                  <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 break-words mb-6">
                    <span className="text-destructive shrink-0">💻</span>
                    <span className="break-words">Technologies</span>
                  </h1>

                  <div className="space-y-6">
                    {displayedCategories.map((category, categoryIdx) => (
                      <div key={categoryIdx} className="space-y-3">
                        <h2 className="text-base sm:text-lg font-bold text-primary break-words">
                          {category.title}
                        </h2>
                        <div className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <pre
                              key={itemIdx}
                              className="flex items-start gap-2 text-sm break-words whitespace-pre-wrap"
                            >
                              <span className="text-primary shrink-0">
                                {item.prefix}
                              </span>
                              <code className="flex-1 min-w-0">
                                {item.command}
                              </code>
                            </pre>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {isTyping && (
                    <div className="flex items-start gap-2 text-sm mt-4">
                      <span className="text-primary shrink-0">➜</span>
                      <code className="flex-1 min-w-0 break-words whitespace-pre-wrap">
                        {typedCommand}
                        {showCursor && <span className="animate-pulse">|</span>}
                      </code>
                    </div>
                  )}

                  {isComplete && (
                    <div className="mt-4">
                      <Button onClick={handleStart}>Reload Stack</Button>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
