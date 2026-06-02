import { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

export const ScrollIndicator = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) setVisible(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className={styles.root} aria-hidden="true">
            <svg className={styles.chevron} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </div>
    );
};
