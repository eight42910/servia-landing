'use client';
import { motion, Variants } from 'framer-motion';
import { FiAlertTriangle, FiClock, FiTarget } from 'react-icons/fi';

import { painPoints, IPainPoint } from '@/data/pain';
import SectionTitle from '../SectionTitle';

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.6,
    },
  },
};

const getIcon = (iconType: IPainPoint['iconType']) => {
  switch (iconType) {
    case 'target':
      return <FiTarget size={32} />;
    case 'clock':
      return <FiClock size={32} />;
    case 'alert':
      return <FiAlertTriangle size={32} />;
    default:
      return <FiTarget size={32} />;
  }
};

const Pain: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 via-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <h2 className="text-neutral-900 md:text-center text-left">
              こんなお悩み、ありませんか？
            </h2>
          </SectionTitle>
          <p className="mt-4 text-left md:text-center text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4 lg:px-0 leading-relaxed">
            多くの小規模事業者様が抱える、Web運用の共通課題
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elevate transition-shadow duration-300 border border-neutral-200"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center lg:items-center text-left lg:text-center">
                <div className="mb-6 p-4 rounded-full bg-neutral-100 text-neutral-600">
                  {getIcon(pain.iconType)}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-tight w-full">
                  {pain.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base w-full">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 px-4 lg:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-base lg:text-lg text-neutral-700 font-medium">
            これらの課題、Serviaが解決いたします
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pain;
