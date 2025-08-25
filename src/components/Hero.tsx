import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <div className="text-center">
        <h1 className="text-hero-md md:text-hero-lg lg:text-hero-xl text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
          <a
            href={heroDetails.ctaPrimary.url}
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {heroDetails.ctaPrimary.text}
          </a>
          <a
            href={heroDetails.ctaSecondary.url}
            className="border-2 border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
          >
            {heroDetails.ctaSecondary.text}
          </a>
        </div>
        <Image
          src={heroDetails.heroImageSrc}
          width={1200}
          height={800}
          quality={90}
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 700px, 900px"
          priority={true}
          alt="Serviaのビジネスコンサルテーション風景"
          className="relative mt-12 md:mt-16 mx-auto z-10 rounded-2xl shadow-elevate max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
