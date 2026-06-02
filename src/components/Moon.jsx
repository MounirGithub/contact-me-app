import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Moon.module.css';

export const Moon = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, -80]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <motion.div
            className={styles.moon}
            style={{ y, opacity }}
            animate={{ translateY: [0, -8, 0] }}
            transition={{
                translateY: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                },
            }}
        >
            <svg
                viewBox="0 0 200 200"
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Glow filter */}
                <defs>
                    <radialGradient id="moonGrad" cx="40%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="#fffde8" />
                        <stop offset="50%" stopColor="#f5e6b8" />
                        <stop offset="100%" stopColor="#d4b978" />
                    </radialGradient>
                    <radialGradient id="craterGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(180,150,90,0.4)" />
                        <stop offset="100%" stopColor="rgba(120,100,60,0.2)" />
                    </radialGradient>
                    <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="craterShadow">
                        <feGaussianBlur stdDeviation="1.5" />
                    </filter>
                </defs>

                {/* Outer glow */}
                <circle cx="100" cy="100" r="70" fill="rgba(255,253,220,0.08)" filter="url(#moonGlow)" />

                {/* Moon body */}
                <circle cx="100" cy="100" r="60" fill="url(#moonGrad)" />

                {/* Shadow terminator (gives 3D effect) */}
                <ellipse cx="120" cy="100" rx="55" ry="60" fill="rgba(20,15,5,0.15)" />

                {/* Craters */}
                <circle cx="75" cy="80" r="12" fill="url(#craterGrad)" opacity="0.6" />
                <circle cx="90" cy="115" r="8" fill="url(#craterGrad)" opacity="0.5" />
                <circle cx="110" cy="75" r="6" fill="url(#craterGrad)" opacity="0.4" />
                <circle cx="65" cy="105" r="5" fill="url(#craterGrad)" opacity="0.35" />
                <circle cx="95" cy="90" r="4" fill="url(#craterGrad)" opacity="0.3" />
                <circle cx="80" cy="130" r="7" fill="url(#craterGrad)" opacity="0.45" />
                <circle cx="105" cy="130" r="3" fill="url(#craterGrad)" opacity="0.25" />

                {/* Subtle highlight rim */}
                <circle
                    cx="100"
                    cy="100"
                    r="59"
                    fill="none"
                    stroke="rgba(255,253,220,0.15)"
                    strokeWidth="1.5"
                />
            </svg>
        </motion.div>
    );
};
