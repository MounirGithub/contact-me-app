import { useState, useEffect } from 'react';

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
        <div className={`loader ${hidden ? 'hidden' : 'visible'}`}>
            <div className="loader__name">Mounir BENABDERRAHMANE</div>
            <div className="loader__subtitle">AI-Augmented Software Engineer</div>
            <div className="loader__progress-container">
                <div className="loader__progress-bar" />
            </div>
        </div>
    );
};
