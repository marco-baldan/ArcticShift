import Image from "next/image";
import {FC} from "react";

interface HeroProps {
    src: string;
    alt: string;
    h1text: string;
    ptext:string;
    btntext: string;

}

const HeroType2: FC<HeroProps> = ({ src, alt, h1text, ptext, btntext }) => {
    return(
        <div className="hero min-h-screen relative">
        <Image
        src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={75}
          className="z-0"
        />
        <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">{h1text}</h1>
            <p className="mb-5">
              {ptext}
            </p>
            <button className="btn btn-primary">{btntext}</button>
          </div>
        </div>
      </div>
    );

}
export default HeroType2;