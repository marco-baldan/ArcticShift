import { FC } from "react";
import Link from "next/link";

interface HeroProps {
  topText: string;
  h1Text: string;
  descText: string;
  btn1Text: string;
  btn2Text: string;
  link1: string;
  link2: string;
}

const HeroType1: FC<HeroProps> = ({ topText, h1Text, descText, btn1Text, btn2Text, link1, link2 }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center gap-6 max-w-xl">
        <span className="text-sm text-accent">{topText}</span>

        <h1 className="text-5xl font-bold text-primary">{h1Text}</h1>

        <span className="text-base-content">
          {descText}
        </span>

        <div className="flex gap-4">
          <Link href={link1} className="btn btn-primary">
            {btn1Text}
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </Link>

          <Link href={link2} className="btn btn-neutral">
            {btn2Text}
            <i className="fa-solid fa-blog"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroType1;
