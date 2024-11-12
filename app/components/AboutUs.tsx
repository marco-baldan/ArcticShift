import { FC } from 'react';

interface AboutUsProps {
  title: string;
  description: string;
  points: string[];
  imageSrc?: string;
  imagePosition?: 'left' | 'right'; 
}

const AboutUs: FC<AboutUsProps> = ({
  title,
  description,
  points,
  imageSrc,
  imagePosition = 'left' 
}) => {
  return (
    <section className="bg-base-200 py-16 px-6 md:px-12 lg:px-24">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-8 ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        {imageSrc && (
          <div className="w-full md:w-1/2">
            <img src={imageSrc} alt="About us" className="rounded-lg shadow-lg" />
          </div>
        )}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-base-content mb-6">{description}</p>
          <ul className="list-disc list-inside space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-base text-base-content">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
