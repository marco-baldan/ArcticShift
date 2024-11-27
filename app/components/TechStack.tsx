"use client"
  import React, { FC, useState, useEffect, useRef } from 'react';

// Predefined tech stack data
const techStack = [
  {
    title: '🚀 Core Technologies',
    items: [
      { 
        prefix: '➜', 
        command: 'install next.js', 
        fullText: '🚀 Next.js - Advanced React framework for production-grade web applications' 
      },
      { 
        prefix: '➜', 
        command: 'install react.js', 
        fullText: '⚛️ React.js - Declarative, efficient, and flexible JavaScript library for building UIs' 
      },
      { 
        prefix: '➜', 
        command: 'install express.js', 
        fullText: '🌐 Express.js - Minimal and flexible Node.js web application framework' 
      },
      { 
        prefix: '➜', 
        command: 'install node.js', 
        fullText: '🖥️ Node.js - JavaScript runtime built on Chrome\'s V8 JavaScript engine' 
      },
      { 
        prefix: '➜', 
        command: 'install python', 
        fullText: '🐍 Python - High-level, interpreted programming language for versatile development' 
      }
    ]
  },
  {
    title: '☁️ Cloud & Database',
    items: [
      { 
        prefix: '➜', 
        command: 'install aws', 
        fullText: '☁️ AWS - Comprehensive cloud computing platform with extensive services' 
      },
      { 
        prefix: '➜', 
        command: 'install google-cloud', 
        fullText: '☁️ Google Cloud - Scalable cloud computing services with advanced machine learning capabilities' 
      },
      { 
        prefix: '➜', 
        command: 'install mongodb', 
        fullText: '📊 MongoDB - Flexible, scalable NoSQL database for modern applications' 
      }
    ]
  },
  {
    title: '🌐 Content Platforms',
    items: [
      { 
        prefix: '➜', 
        command: 'install wordpress', 
        fullText: '🌐 WordPress - Popular content management system and website builder' 
      },
      { 
        prefix: '➜', 
        command: 'install shopify', 
        fullText: '🛒 Shopify - E-commerce platform for online stores and retail point of sale' 
      },
      { 
        prefix: '➜', 
        command: 'install contentful', 
        fullText: '📄 Contentful - Headless CMS for omnichannel content management' 
      },
      { 
        prefix: '➜', 
        command: 'install webflow', 
        fullText: '💻 Webflow - Visual web design tool with powerful CMS capabilities' 
      }
    ]
  },
  {
    title: '📈 Marketing & Creative Tools',
    items: [
      { 
        prefix: '➜', 
        command: 'install hubspot-crm', 
        fullText: '📈 HubSpot & CRM Integrations - Comprehensive marketing, sales, and customer service platform' 
      },
      { 
        prefix: '➜', 
        command: 'install analytics-seo', 
        fullText: '📈 Google Analytics & SEO Tools - Advanced web analytics and search engine optimization tools' 
      },
      { 
        prefix: '➜', 
        command: 'install marketing-automation', 
        fullText: '💼 Marketing Automation - Streamlined marketing processes and personalized customer journeys' 
      },
      { 
        prefix: '➜', 
        command: 'install adobe-creative-suite', 
        fullText: '🎨 Adobe Creative Suite - Professional-grade creative and design software' 
      }
    ]
  }
];

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
}

const TechStack: FC<TechStackProps> = ({ 
  categories = [], 
  typingSpeed = 50, 
  delayBetweenCategories = 1000 
}) => {
  // Use the predefined tech stack if no categories are passed
  const effectiveCategories = categories.length > 0 ? categories : techStack;
  
  const [displayedCategories, setDisplayedCategories] = useState<TechCategory[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentFullCommand, setCurrentFullCommand] = useState('');
  const [isCommandComplete, setIsCommandComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll to bottom effect
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedCategories, typedCommand]);

  useEffect(() => {
    // If no categories or we've displayed all categories, stop
    if (effectiveCategories.length === 0 || currentCategoryIndex >= effectiveCategories.length) return;

    // If we've displayed all items in current category, stop
    if (currentItemIndex >= effectiveCategories[currentCategoryIndex].items.length) return;

    // Get current item being processed
    const currentItem = effectiveCategories[currentCategoryIndex].items[currentItemIndex];
    
    // If no typed command or command is not complete, type the command
    if (typedCommand.length < currentItem.command.length) {
      const timer = setTimeout(() => {
        setTypedCommand(currentItem.command.slice(0, typedCommand.length + 1));
        setCurrentFullCommand(currentItem.command);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    // Once command is fully typed, wait and then add to displayed categories
    if (!isCommandComplete) {
      const timer = setTimeout(() => {
        setIsCommandComplete(true);
        setDisplayedCategories(prev => {
          const newCategories = [...prev];
          if (!newCategories[currentCategoryIndex]) {
            newCategories[currentCategoryIndex] = {
              title: effectiveCategories[currentCategoryIndex].title,
              items: []
            };
          }
          newCategories[currentCategoryIndex].items.push({
            ...effectiveCategories[currentCategoryIndex].items[currentItemIndex],
            command: currentItem.fullText
          });
          return newCategories;
        });
      }, delayBetweenCategories);
      return () => clearTimeout(timer);
    }

    // Move to next item or category
    if (isCommandComplete) {
      const timer = setTimeout(() => {
        // Reset for next item
        setTypedCommand('');
        setIsCommandComplete(false);
        
        // Move to next item or category
        if (currentItemIndex + 1 < effectiveCategories[currentCategoryIndex].items.length) {
          setCurrentItemIndex(prev => prev + 1);
        } else {
          // Move to next category
          setCurrentCategoryIndex(prev => prev + 1);
          setCurrentItemIndex(0);
        }
      }, delayBetweenCategories);
      return () => clearTimeout(timer);
    }
  }, [
    effectiveCategories, 
    currentCategoryIndex, 
    currentItemIndex, 
    typedCommand, 
    isCommandComplete, 
    typingSpeed, 
    delayBetweenCategories
  ]);

  // If no categories, show a placeholder
  if (effectiveCategories.length === 0) {
    return (
      <div className="w-full md:w-1/2 p-2 inline">
        <div className="mockup-code">
          <pre data-prefix="$"><code>No tech stack defined</code></pre>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full md:w-3/4 mx-auto p-2 max-h-[600px] overflow-y-auto"
    >
      <div className="mockup-code p-4">
        {/* Terminal header */}
        <div className="text-sm text-base-content opacity-50 mb-2">
          💻 Tech Stack Installer | v1.0.0
        </div>

        {/* Title */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-primary">🚀 Our Tech Ecosystem</h1>
        </div>

        {/* Displayed categories */}
        {displayedCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-4">
            <h2 className="text-lg font-bold text-secondary mb-2">{category.title}</h2>
            {category.items.map((item, itemIdx) => (
              <pre 
                key={itemIdx} 
                data-prefix={item.prefix} 
                className="text-base-content"
              >
                <code>{item.command}</code>
              </pre>
            ))}
          </div>
        ))}

        {/* Current typing line */}
        {currentCategoryIndex < effectiveCategories.length && (
          <div className="flex">
            <pre data-prefix="➜" className="flex-grow">
              <code>
                {typedCommand}
                {showCursor && currentItemIndex < effectiveCategories[currentCategoryIndex].items.length ? 
                  <span className="animate-pulse">|</span> : null}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStack;
