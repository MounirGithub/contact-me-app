import { useInView } from 'react-intersection-observer';

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
    <div className="skills__marquee">
        <div className={`skills__marquee-track ${reverse ? 'skills__marquee-track--reverse' : ''}`}>
            {[...skills, ...skills].map((skill, i) => (
                <div key={`${skill.name}-${i}`} className="skills__chip">
                    <span className="skills__chip-icon">{skill.icon}</span>
                    <span className="skills__chip-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const SkillsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="skills">
            <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
                <h2 className="section__title">Skills</h2>

                <div className="skills__carousel">
                    <MarqueeRow skills={skillsRow1} />
                    <MarqueeRow skills={skillsRow2} reverse />
                </div>
            </div>
        </section>
    );
};
