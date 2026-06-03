import { useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './Moon.module.css';

const moonVariants = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    exit: { y: '350%', opacity: 0, scale: 0.6, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } },
    enter: { y: '-300%', opacity: 0, scale: 0.6 },
};

const sunVariants = {
    hidden: { y: '350%', opacity: 0, scale: 0.6 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    exit: { y: '-300%', opacity: 0, scale: 0.6, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } },
};

export const Moon = ({ onDayMode }) => {
    const [isDay, setIsDay] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, -80]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const handleClick = useCallback(() => {
        const next = !isDay;
        setIsDay(next);
        onDayMode?.(next);
    }, [isDay, onDayMode]);

    return (
        <motion.div
            className={styles.container}
            style={{ y, opacity }}
            onClick={handleClick}
        >
            <AnimatePresence mode="wait">
                {!isDay ? (
                    <motion.div
                        key="moon"
                        className={styles.orb}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                        variants={moonVariants}
                    >
                        <svg viewBox="0 0 200 200" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
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
                            </defs>
                            <circle cx="100" cy="100" r="70" fill="rgba(255,253,220,0.08)" filter="url(#moonGlow)" />
                            <circle cx="100" cy="100" r="60" fill="url(#moonGrad)" />
                            <ellipse cx="120" cy="100" rx="55" ry="60" fill="rgba(20,15,5,0.15)" />
                            <circle cx="75" cy="80" r="12" fill="url(#craterGrad)" opacity="0.6" />
                            <circle cx="90" cy="115" r="8" fill="url(#craterGrad)" opacity="0.5" />
                            <circle cx="110" cy="75" r="6" fill="url(#craterGrad)" opacity="0.4" />
                            <circle cx="65" cy="105" r="5" fill="url(#craterGrad)" opacity="0.35" />
                            <circle cx="95" cy="90" r="4" fill="url(#craterGrad)" opacity="0.3" />
                            <circle cx="80" cy="130" r="7" fill="url(#craterGrad)" opacity="0.45" />
                            <circle cx="100" cy="100" r="59" fill="none" stroke="rgba(255,253,220,0.15)" strokeWidth="1.5" />
                        </svg>
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        className={styles.orb}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sunVariants}
                    >
                        <svg viewBox="0 0 200 200" className={styles.svgSun} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#fff8e1" />
                                    <stop offset="40%" stopColor="#ffeb3b" />
                                    <stop offset="70%" stopColor="#ff9800" />
                                    <stop offset="100%" stopColor="#f57c00" />
                                </radialGradient>
                                <filter id="sunGlow" x="-80%" y="-80%" width="260%" height="260%">
                                    <feGaussianBlur stdDeviation="14" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <circle cx="100" cy="100" r="85" fill="rgba(255,235,59,0.08)" filter="url(#sunGlow)" />
                            <g className={styles.rays}>
                                {Array.from({ length: 12 }, (_, i) => {
                                    const angle = (i * 30) * Math.PI / 180;
                                    const x1 = 100 + Math.cos(angle) * 62;
                                    const y1 = 100 + Math.sin(angle) * 62;
                                    const x2 = 100 + Math.cos(angle) * 88;
                                    const y2 = 100 + Math.sin(angle) * 88;
                                    return (
                                        <line
                                            key={i}
                                            x1={x1} y1={y1} x2={x2} y2={y2}
                                            stroke={i % 2 === 0 ? '#ffeb3b' : '#ffc107'}
                                            strokeWidth={i % 2 === 0 ? '3' : '2'}
                                            strokeLinecap="round"
                                            opacity="0.85"
                                        />
                                    );
                                })}
                            </g>
                            <g className={styles.raysInner}>
                                {Array.from({ length: 12 }, (_, i) => {
                                    const angle = (i * 30 + 15) * Math.PI / 180;
                                    const x1 = 100 + Math.cos(angle) * 58;
                                    const y1 = 100 + Math.sin(angle) * 58;
                                    const x2 = 100 + Math.cos(angle) * 70;
                                    const y2 = 100 + Math.sin(angle) * 70;
                                    return (
                                        <line
                                            key={i}
                                            x1={x1} y1={y1} x2={x2} y2={y2}
                                            stroke="#ffe082"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            opacity="0.6"
                                        />
                                    );
                                })}
                            </g>
                            <circle cx="100" cy="100" r="50" fill="url(#sunGrad)" />
                            <circle cx="92" cy="92" r="20" fill="rgba(255,255,255,0.25)" />
                            <circle cx="100" cy="100" r="49" fill="none" stroke="rgba(255,200,0,0.4)" strokeWidth="1.5" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
