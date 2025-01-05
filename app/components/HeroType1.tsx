import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  topText: string;
  h1Text: string;
  descText: string;
  btn1Text: string;
  btn2Text: string;
  link1: string;
  link2: string;
}

const HeroType1: FC<HeroProps> = ({
  topText,
  h1Text,
  descText,
  btn1Text,
  btn2Text,
  link1,
  link2,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center gap-6 max-w-xl">
        <span className="text-sm text-accent">{topText}</span>

        <h1 className="text-5xl font-bold text-primary">{h1Text}</h1>

        <span className="text-muted-foreground">{descText}</span>

        <div className="flex gap-4">
          <Button asChild>
            <Link href={link1}>
              {btn1Text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={link2}>
              {btn2Text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                <path d="M10 2v20"></path>
                <path d="m19 7-3-3 3-3"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroType1;
