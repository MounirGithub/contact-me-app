import { AnimatedSection } from './AnimatedSection';
import styles from './Skills.module.css';

const GLINTS_TOP = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    top: 15 + Math.random() * 55,
    delay: Math.random() * 8,
    duration: 2 + Math.random() * 3,
    size: 2 + Math.random() * 2.5,
}));

const skillsRow1 = [
    { name: 'React', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🌱' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'REST API', icon: '🔗' },
];

const skillsRow2 = [
    { name: 'JUnit', icon: '✅' },
    { name: 'Jest', icon: '🃏' },
    { name: 'Selenium', icon: '🌐' },
    { name: 'VS Code', icon: '💎' },
    { name: 'IntelliJ', icon: '🧠' },
    { name: 'Git', icon: '🔀' },
    { name: 'SonarQube', icon: '📊' },
    { name: 'AI Agents', icon: '🤖' },
];

const MarqueeRow = ({ skills, reverse }) => (
    <div className={styles.marquee}>
        <div className={`${styles.track} ${reverse ? styles.trackReverse : ''}`}>
            {[...skills, ...skills].map((skill, i) => (
                <div key={`${skill.name}-${i}`} className={styles.chip}>
                    <span className={styles.chipIcon}>{skill.icon}</span>
                    <span className={styles.chipName}>{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const SkillsSection = () => {
    return (
        <section className={`section ${styles.root}`} id="skills">
            <div className={styles.wavesTop}>
                <svg className={styles.wave} viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z" />
                </svg>
                <svg className={`${styles.wave} ${styles.wave2}`} viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,80 C360,40 720,100 1080,50 C1260,30 1440,70 1440,70 L1440,0 L0,0 Z" />
                </svg>
                {GLINTS_TOP.map((g) => (
                    <span
                        key={g.id}
                        className={styles.glint}
                        style={{
                            left: `${g.left}%`,
                            top: `${g.top}%`,
                            width: `${g.size}px`,
                            height: `${g.size}px`,
                            animationDelay: `${g.delay}s`,
                            animationDuration: `${g.duration}s`,
                        }}
                    />
                ))}
            </div>

            <AnimatedSection>
                <h2 className="section__title">Skills</h2>

                <div className={styles.carousel}>
                    <MarqueeRow skills={skillsRow1} />
                    <MarqueeRow skills={skillsRow2} reverse />
                </div>
            </AnimatedSection>
        </section>
    );
};
