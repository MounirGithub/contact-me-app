import { useInView } from 'react-intersection-observer';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';

const projectsData = [
    {
        title: 'Refine SaaS Portal',
        description: 'Ecosystem portal for migration, retrodocumentation and analytics — the hub of AI-driven automation tools.',
        url: 'https://github.com/MounirGithub',
        image: projImg5,
    },
    {
        title: 'Automated Migration Tool',
        description: 'Code migration pipeline integrating SonarQube, static analysis and automated transformation for enterprise clients.',
        url: 'https://github.com/MounirGithub',
        image: projImg2,
    },
    {
        title: 'Personal Kanban',
        description: 'Kanban task management app built with React and Spring Boot.',
        url: 'https://github.com/MounirGithub/PersonnalKanbanTool',
        image: projImg3,
    },
    {
        title: 'Portfolio',
        description: 'This immersive one-page portfolio — sky-to-ocean animated experience.',
        url: 'https://github.com/MounirGithub/contact-me-app',
        image: projImg1,
    },
    {
        title: 'Vision App',
        description: 'React UI for interactive eye training exercises.',
        url: 'https://github.com/MounirGithub/vision-app',
        image: projImg4,
    },
];

export const ProjectsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="projects">
            <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
                <h2 className="section__title">Projects</h2>

                <div className="projects__grid">
                    {projectsData.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__card"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="projects__card-bg"
                            />
                            <div className="projects__card-content">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-desc">{project.description}</p>
                                <span className="projects__card-link">
                                    View on GitHub →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
