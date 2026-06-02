import { motion } from 'framer-motion';
import styles from './Experience.module.css';

// Experience data from LinkedIn
const experienceData = [
    {
        date: '2023 — Present',
        role: 'AI-Augmented Software Engineer',
        company: 'R&D / Freelance',
        description: 'Retrodocumentation and industrialization via an ecosystem integrating automated migration, documentation generation, AI-assisted planning and agent-driven workflows.',
    },
    {
        date: '2022 — 2023',
        role: 'Developer & Technical Lead',
        company: 'AFD (Agence Française de Développement)',
        description: 'Migration of legacy UIs to Angular via an automated process. Technical design, development and delivery of the full migration pipeline.',
    },
    {
        date: '2021 — 2022',
        role: 'Developer',
        company: 'Crédit Agricole',
        description: 'Built a migration tool integrating SonarQube for code quality analysis, automated code transformation and technical debt reduction.',
    },
    {
        date: '2020 — 2021',
        role: 'R&D Developer',
        company: 'ADEO (Leroy Merlin)',
        description: 'Developed analysis tools based on Refine (internal Lisp tool) for application assessment, reverse-documentation and migration planning.',
    },
    {
        date: 'Nov 2019 — Jun 2020',
        role: 'Software Engineer',
        company: 'ALTIM',
        description: 'R&D project integrating sensors into trains for autonomous train systems. Research, prototyping and embedded software development.',
    },
    {
        date: 'Apr 2019 — Sep 2019',
        role: 'Front-End Developer (Internship)',
        company: 'AXA',
        description: 'Built reusable atomic components for AXA.fr via AEM CMS. Applied TDD/BDD, clean code practices, CSS4 migration, CI/CD with Azure DevOps. Stack: JS ES6+, CSS4/LESS, Jest, Webpack, Docker.',
    },
];

export const Experience = () => {
    return (
        <section className="section" id="experience">
            <h2 className="section__title">Experience</h2>

            <div className={styles.timeline}>
                {experienceData.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} delay={index * 200} />
                ))}
            </div>
        </section>
    );
};

const ExperienceItem = ({ date, role, company, description, delay }) => {
    return (
        <motion.div
            className={styles.item}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: delay / 1000 }}
        >
            <span className={styles.date}>{date}</span>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>{company}</p>
            <p className={styles.description}>{description}</p>
        </motion.div>
    );
};
