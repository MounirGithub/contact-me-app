import { AnimatedSection } from './AnimatedSection';
import styles from './Projects.module.css';
import projImg1 from '../assets/img/project-img1.png';
import projKanban from '../assets/img/project-kanban.png';
import projImg4 from '../assets/img/project-img4.png';

const projectsData = [
    {
        title: 'Personal Kanban',
        description: 'Project management tool prototype with RESTful API, JWT auth, React/Redux frontend, deployed on Heroku.',
        techs: ['React', 'Redux', 'Spring Boot', 'JWT', 'Heroku'],
        url: 'https://github.com/MounirGithub/PersonnalKanbanTool',
        image: projKanban,
    },
    {
        title: 'Portfolio',
        description: 'This immersive one-page portfolio — sky-to-ocean animated experience with Lenis smooth scroll.',
        techs: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
        url: 'https://github.com/MounirGithub/contact-me-app',
        image: projImg1,
    },
    {
        title: 'Vision App',
        description: 'React UI for interactive eye training exercises.',
        techs: ['React', 'CSS3', 'Canvas API'],
        url: 'https://github.com/MounirGithub/vision-app',
        image: projImg4,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="section" id="projects">
            <AnimatedSection>
                <h2 className="section__title">Projects</h2>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
                        >
                            <span className={styles.cardIndex}>0{index + 1}</span>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.cardBg}
                                loading="lazy"
                            />
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.cardTechs}>
                                    {project.techs.map((tech) => (
                                        <span key={tech} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                                <span className={styles.cardLink}>
                                    View on GitHub →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <p className={styles.disclaimer}>
                    Other projects exist but are under NDA — or my cat walked on the keyboard and deleted them. We may never know.
                </p>
            </AnimatedSection>
        </section>
    );
};
