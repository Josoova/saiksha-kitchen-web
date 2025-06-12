
import { motion } from 'framer-motion';
import { Heater } from 'lucide-react';

interface HeaterTransitionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  showIcon?: boolean;
}

const HeaterTransition = ({ 
  children, 
  delay = 0, 
  className = "",
  showIcon = false 
}: HeaterTransitionProps) => {
  const heaterVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      rotate: -5,
      scale: 0.9 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    animate: {
      rotate: [0, 15, -15, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={heaterVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {showIcon && (
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          variants={iconVariants}
          animate="animate"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-brand-gold to-amber-500 rounded-full flex items-center justify-center shadow-lg">
            <Heater className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      )}
      {children}
    </motion.div>
  );
};

export default HeaterTransition;
