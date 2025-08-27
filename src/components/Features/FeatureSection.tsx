'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import FeatureBullet from './FeatureBullet';
import SectionTitle from '../SectionTitle';
import { IBenefit } from '@/types';

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

// フィーチャーセクションのアニメーション
//コンポーネントの挙動によって、onscreenとoffscreenの状態が変わる
const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

//子要素のアニメーション
//コンポーネントの挙動によって、onscreenとoffscreenの状態が変わる
export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};

//親から渡されたpropsを受け取る
const FeatureSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
  // 親から渡されたpropsを分割代入で受け取る
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section">
      <motion.div
        className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx('flex flex-wrap items-center w-full max-w-2xl', {
            'justify-start': imageAtRight,
            'lg:order-1 justify-end': !imageAtRight,
          })}
        >
          <div className="w-full text-left px-4 lg:px-0">
            <motion.div
              className="flex flex-col w-full"
              variants={childVariants}
            >
              <SectionTitle>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight lg:max-w-2xl">
                  {title}
                </h3>
              </SectionTitle>

              <p className="mt-3 lg:ml-0 leading-relaxed text-foreground-accent text-base lg:text-lg">
                {description}
              </p>
            </motion.div>

            <div className="lg:ml-0 w-full mt-6">
              {bullets.map((item, index) => (
                <FeatureBullet
                  key={index}
                  title={item.title}
                  iconName={item.iconName}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={clsx('mt-5 lg:mt-0', { 'lg:order-2': imageAtRight })}>
          <div
            className={clsx('w-fit flex', {
              'justify-start': imageAtRight,
              'justify-end': !imageAtRight,
            })}
          >
            <Image
              src={imageSrc}
              alt={`${title}のイメージ画像`}
              width={800}
              height={533}
              quality={90}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 500px, 600px"
              className="lg:ml-0 rounded-xl shadow-elevate max-w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
