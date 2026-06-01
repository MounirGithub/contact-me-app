import { useInView } from 'react-intersection-observer';

export const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // TODO: Remplacer par tes propres items
    const notItems = [
        '...',
        '...',
        '...',
        '...',
    ];

    // TODO: Remplacer par tes propres items
    const isItems = [
        '...',
        '...',
        '...',
        '...',
    ];

    return (
        <section className="section" id="about">
            <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
                <h2 className="section__title">À propos</h2>

                <div className="about__grid">
                    <div className="about__not">
                        <h3 className="about__col-title">Ce que je ne suis pas</h3>
                        <ul className="about__list">
                            {notItems.map((item, i) => (
                                <li key={i} className="about__list-item">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="about__is">
                        <h3 className="about__col-title">Ce que je suis</h3>
                        <ul className="about__list">
                            {isItems.map((item, i) => (
                                <li key={i} className="about__list-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
