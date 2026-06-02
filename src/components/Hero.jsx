import { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';

export const Hero = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 80 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 2 + Math.random() * 3,
            size: 1 + Math.random() * 2.5,
        }));
    }, []);

    return (
        <section className={styles.root} id="hero">
            <div className={styles.sky} />

            <div className={styles.stars}>
                {stars.map((s) => (
                    <span
                        key={s.id}
                        className={styles.star}
                        style={{
                            left: `${s.left}%`,
                            top: `${s.top}%`,
                            width: `${s.size}px`,
                            height: `${s.size}px`,
                            animationDelay: `${s.delay}s`,
                            animationDuration: `${s.duration}s`,
                        }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <h1 className={styles.name}>Mounir</h1>
                <TypeAnimation
                    sequence={[
                        'AI-Augmented Software Engineer',
                        2000,
                        'Full Stack Developer',
                        2000,
                        'Migration & Code Transformation',
                        2000,
                        'React · Java · Spring Boot',
                        2000,
                        'AI-Driven Automation',
                        2000,
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                    className={styles.typed}
                />
                <p className={styles.description}>
                    Since 2020, I design and build applications end-to-end — from R&D to production. I leverage AI to plan, develop, test and ship faster. Specializing in code migration, automation, and full-stack development.
                </p>
                <a href="#skills" className={styles.cta}>Explore my work</a>
            </div>

            <div className={styles.horizon}>
                <svg className={styles.wave} viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
                </svg>
                <svg className={`${styles.wave} ${styles.wave2}`} viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,80 C360,40 720,100 1080,50 C1260,30 1440,70 1440,70 L1440,120 L0,120 Z" />
                </svg>
            </div>
        </section>
    );
};
