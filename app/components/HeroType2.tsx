import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  src: string;
  alt: string;
  h1text: string;
  ptext: string;
  btntext: string;
}

const HeroType2: FC<HeroProps> = ({ src, alt, h1text, ptext, btntext }) => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={75}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">{h1text}</h1>
          <p className="mb-5 text-white">{ptext}</p>
          <Button>{btntext}</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroType2;
