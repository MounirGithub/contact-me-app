import { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export const Loader = ({ onComplete }) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
            setTimeout(onComplete, 800);
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`${styles.root} ${hidden ? styles.hidden : ''}`}>
            <div className={styles.name}>Mounir BENABDERRAHMANE</div>
            <div className={styles.subtitle}>AI-Augmented Software Engineer</div>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar} />
            </div>
        </div>
    );
};
