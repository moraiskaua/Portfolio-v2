'use client';

import { useState } from 'react';
import { ApproachIcon } from './ApproachIcon';
import { AnimatePresence, motion } from 'framer-motion';

const ApproachCard = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl overflow-hidden"
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <ApproachIcon className="absolute size-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <ApproachIcon className="absolute size-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <ApproachIcon className="absolute size-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <ApproachIcon className="absolute size-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-sm text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-[#E4ECFF]">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default ApproachCard;
