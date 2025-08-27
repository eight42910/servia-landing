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
      className="flex flex-row items-start mt-8 gap-4 lg:gap-5"
      variants={childVariants}
    >
      <div className="flex justify-center flex-shrink-0 mt-1 w-fit">
        {iconName === 'target' && <FiTarget size={26} />}
        {iconName === 'trending-up' && <FiTrendingUp size={26} />}
        {iconName === 'bar-chart' && <FiBarChart2 size={26} />}
        {iconName === 'edit' && <FiEdit3 size={26} />}
        {iconName === 'monitor' && <FiMonitor size={26} />}
        {iconName === 'settings' && <FiSettings size={26} />}
        {iconName === 'zap' && <FiZap size={26} />}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-base text-foreground-accent leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureBullet;
