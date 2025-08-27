import { motion } from 'framer-motion';

import { IBenefitBullet } from '@/types';
import { childVariants } from './FeatureSection';
import {
  FiTarget,
  FiTrendingUp,
  FiBarChart2,
  FiEdit3,
  FiMonitor,
  FiSettings,
  FiZap,
} from 'react-icons/fi';
const FeatureBullet: React.FC<IBenefitBullet> = ({
  title,
  description,
  iconName,
}: IBenefitBullet) => {
  return (
    <motion.div
      className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
      variants={childVariants}
    >
      <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit">
        {iconName === 'target' && <FiTarget size={26} />}
        {iconName === 'trending-up' && <FiTrendingUp size={26} />}
        {iconName === 'bar-chart' && <FiBarChart2 size={26} />}
        {iconName === 'edit' && <FiEdit3 size={26} />}
        {iconName === 'monitor' && <FiMonitor size={26} />}
        {iconName === 'settings' && <FiSettings size={26} />}
        {iconName === 'zap' && <FiZap size={26} />}
      </div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-base text-foreground-accent">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureBullet;
