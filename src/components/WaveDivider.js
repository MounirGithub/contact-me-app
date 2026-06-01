export const WaveDivider = ({ flip }) => (
    <div className={`wave-divider ${flip ? 'wave-divider--flip' : ''}`}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C240,80 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,20 720,80 1080,40 C1260,20 1440,50 1440,50 L1440,100 L0,100 Z" />
        </svg>
    </div>
);
