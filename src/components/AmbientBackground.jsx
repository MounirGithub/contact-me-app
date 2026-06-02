import { useMemo } from 'react';
import styles from './AmbientBackground.module.css';

export const AmbientBackground = ({ variant }) => {
    const orbs = useMemo(() => {
        const configs = {
            skills: [
                { top: '10%', left: '5%', size: 300, color: 'rgba(0, 229, 255, 0.04)', delay: 0 },
                { top: '60%', left: '80%', size: 250, color: 'rgba(255, 171, 64, 0.03)', delay: 3 },
            ],
            experience: [
                { top: '20%', left: '70%', size: 350, color: 'rgba(0, 184, 212, 0.04)', delay: 1 },
                { top: '70%', left: '10%', size: 200, color: 'rgba(0, 229, 255, 0.03)', delay: 4 },
            ],
            projects: [
                { top: '15%', left: '85%', size: 280, color: 'rgba(255, 171, 64, 0.04)', delay: 2 },
                { top: '50%', left: '5%', size: 320, color: 'rgba(0, 229, 255, 0.03)', delay: 0 },
                { top: '80%', left: '60%', size: 200, color: 'rgba(0, 184, 212, 0.03)', delay: 5 },
            ],
        };
        return configs[variant] || configs.skills;
    }, [variant]);

    return (
        <div className={styles.root} aria-hidden="true">
            {orbs.map((orb, i) => (
                <div
                    key={i}
                    className={styles.orb}
                    style={{
                        top: orb.top,
                        left: orb.left,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                        animationDelay: `${orb.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
