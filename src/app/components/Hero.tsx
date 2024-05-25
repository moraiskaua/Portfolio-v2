'use client';

import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Power of Web Development with Next.js
          </h2>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Kauã, a Full-stack Developer 👋.
          </p>

          <a href="#about" className="mb-4 md:m-0">
            <MagicButton
              title="Show my work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </a>

          <div className="flex flex-col gap-4 md:flex-row text-center md:space-x-5">
            <MagicButton
              title="LinkedIn"
              icon={<FaLinkedin />}
              position="right"
              otherClasses="bg-[#161A31]"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/kauamorais03/',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            />
            <MagicButton
              title="GitHub"
              icon={<FaGithub />}
              position="right"
              otherClasses="bg-[#161A31]"
              onClick={() =>
                window.open(
                  'https://github.com/moraiskaua',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
