import { FC } from "react";

interface TechStackItem {
  prefix: string;
  name: string;
}

interface TechCategory {
  title: string;
  items: TechStackItem[];
}

interface TechStackProps {
  categories: TechCategory[];
}

const TechStack: FC<TechStackProps> = ({ categories }) => {
  return (
      <div className="w-full md:w-1/2 p-2 inline">
        <div className="mockup-code">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h1 className="text-lg font-bold">{category.title}</h1>
              {category.items.map((item, itemIdx) => (
                <pre data-prefix="$" key={itemIdx}>
                  <code>{item.prefix} {item.name}</code>
                </pre>
              ))}
            </div>
          ))}
        </div>
    </div>
  );
};

export default TechStack;
