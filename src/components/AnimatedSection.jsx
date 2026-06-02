import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export const AnimatedSection = ({ children, className, delay = 0 }) => (
    <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
        {children}
    </motion.div>
);
