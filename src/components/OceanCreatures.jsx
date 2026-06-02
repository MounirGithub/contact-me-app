import styles from './OceanCreatures.module.css';

/* ─── JELLYFISH (Surface — Skills) ─── */
const Jellyfish = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="jellyBody" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="rgba(180, 220, 255, 0.6)" />
                <stop offset="40%" stopColor="rgba(100, 180, 255, 0.35)" />
                <stop offset="100%" stopColor="rgba(60, 120, 200, 0.1)" />
            </radialGradient>
            <radialGradient id="jellyInner" cx="50%" cy="40%" r="40%">
                <stop offset="0%" stopColor="rgba(200, 240, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(100, 180, 255, 0.1)" />
            </radialGradient>
            <filter id="jellyGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Bell (dome) */}
        <ellipse cx="60" cy="45" rx="38" ry="40" fill="url(#jellyBody)" filter="url(#jellyGlow)" />
        {/* Inner organs */}
        <ellipse cx="60" cy="50" rx="20" ry="18" fill="url(#jellyInner)" />
        {/* Bell rim */}
        <path d="M22,55 Q35,70 60,68 Q85,70 98,55" fill="none" stroke="rgba(150,210,255,0.4)" strokeWidth="1.5" />
        {/* Tentacles */}
        <path d="M35,65 Q32,95 38,120 Q35,140 30,165" fill="none" stroke="rgba(150,200,255,0.3)" strokeWidth="1.2" className={styles.tentacle} />
        <path d="M45,68 Q42,100 48,130 Q44,150 42,175" fill="none" stroke="rgba(130,190,255,0.25)" strokeWidth="1" className={styles.tentacle} style={{ animationDelay: '0.3s' }} />
        <path d="M60,70 Q58,105 62,135 Q59,155 58,180" fill="none" stroke="rgba(150,200,255,0.35)" strokeWidth="1.3" className={styles.tentacle} style={{ animationDelay: '0.6s' }} />
        <path d="M75,68 Q78,100 72,130 Q76,150 78,175" fill="none" stroke="rgba(130,190,255,0.25)" strokeWidth="1" className={styles.tentacle} style={{ animationDelay: '0.9s' }} />
        <path d="M85,65 Q88,95 82,120 Q85,140 90,165" fill="none" stroke="rgba(150,200,255,0.3)" strokeWidth="1.2" className={styles.tentacle} style={{ animationDelay: '0.4s' }} />
        {/* Bioluminescent spots */}
        <circle cx="50" cy="40" r="2" fill="rgba(200,240,255,0.6)" />
        <circle cx="70" cy="38" r="1.5" fill="rgba(200,240,255,0.5)" />
        <circle cx="60" cy="50" r="1.8" fill="rgba(180,230,255,0.4)" />
    </svg>
);

/* ─── MANTA RAY (Mesopelagic — Experience) ─── */
const MantaRay = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mantaBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(20, 40, 80, 0.85)" />
                <stop offset="50%" stopColor="rgba(30, 55, 100, 0.7)" />
                <stop offset="100%" stopColor="rgba(60, 90, 140, 0.5)" />
            </linearGradient>
            <radialGradient id="mantaBelly" cx="50%" cy="60%" r="40%">
                <stop offset="0%" stopColor="rgba(180, 200, 230, 0.4)" />
                <stop offset="100%" stopColor="rgba(100, 140, 180, 0.15)" />
            </radialGradient>
            <filter id="mantaShadow">
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>
        {/* Shadow */}
        <ellipse cx="150" cy="90" rx="80" ry="20" fill="rgba(0,0,0,0.15)" filter="url(#mantaShadow)" />
        {/* Body + wings */}
        <path d="M150,40 C180,35 240,20 280,55 C290,65 270,80 250,85 C220,90 180,88 150,85 C120,88 80,90 50,85 C30,80 10,65 20,55 C60,20 120,35 150,40 Z" fill="url(#mantaBody)" />
        {/* Belly marking */}
        <ellipse cx="150" cy="70" rx="40" ry="20" fill="url(#mantaBelly)" />
        {/* Cephalic fins */}
        <path d="M130,42 Q125,30 120,20" fill="none" stroke="rgba(20,40,80,0.8)" strokeWidth="3" strokeLinecap="round" />
        <path d="M170,42 Q175,30 180,20" fill="none" stroke="rgba(20,40,80,0.8)" strokeWidth="3" strokeLinecap="round" />
        {/* Tail */}
        <path d="M150,85 Q152,110 148,140 Q147,150 150,155" fill="none" stroke="rgba(20,40,80,0.6)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="132" cy="50" r="3" fill="rgba(200,220,255,0.7)" />
        <circle cx="168" cy="50" r="3" fill="rgba(200,220,255,0.7)" />
        {/* Gill slits */}
        <path d="M130,65 L130,75" stroke="rgba(100,140,180,0.3)" strokeWidth="1" />
        <path d="M138,66 L138,76" stroke="rgba(100,140,180,0.3)" strokeWidth="1" />
        <path d="M162,66 L162,76" stroke="rgba(100,140,180,0.3)" strokeWidth="1" />
        <path d="M170,65 L170,75" stroke="rgba(100,140,180,0.3)" strokeWidth="1" />
        {/* Wing edge detail */}
        <path d="M50,85 C80,90 120,88 150,85 C180,88 220,90 250,85" fill="none" stroke="rgba(80,130,180,0.3)" strokeWidth="0.8" />
    </svg>
);

/* ─── SMALL FISH (school) ─── */
const SmallFish = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M5,10 Q10,4 20,5 Q30,4 35,10 Q30,16 20,15 Q10,16 5,10 Z" fill="rgba(60,120,180,0.5)" />
        <path d="M2,10 L8,6 L8,14 Z" fill="rgba(50,100,160,0.4)" />
        <circle cx="28" cy="9" r="1.5" fill="rgba(200,230,255,0.7)" />
    </svg>
);

/* ─── OCTOPUS (Bathypelagic — Projects) ─── */
const Octopus = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="octoBody" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="rgba(120, 50, 160, 0.7)" />
                <stop offset="60%" stopColor="rgba(80, 30, 120, 0.5)" />
                <stop offset="100%" stopColor="rgba(40, 15, 80, 0.3)" />
            </radialGradient>
            <filter id="octoGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <radialGradient id="bioSpot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0, 229, 255, 0.8)" />
                <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
            </radialGradient>
        </defs>
        {/* Head */}
        <ellipse cx="100" cy="60" rx="45" ry="55" fill="url(#octoBody)" filter="url(#octoGlow)" />
        {/* Eyes */}
        <ellipse cx="82" cy="65" rx="10" ry="12" fill="rgba(20,10,40,0.8)" />
        <ellipse cx="118" cy="65" rx="10" ry="12" fill="rgba(20,10,40,0.8)" />
        <ellipse cx="84" cy="63" rx="4" ry="5" fill="rgba(200,180,255,0.7)" />
        <ellipse cx="120" cy="63" rx="4" ry="5" fill="rgba(200,180,255,0.7)" />
        {/* Tentacles */}
        <path d="M65,100 Q50,130 45,155 Q40,175 50,195 Q55,210 48,230" fill="none" stroke="rgba(100,40,140,0.5)" strokeWidth="4" strokeLinecap="round" className={styles.tentacle} />
        <path d="M75,105 Q65,140 70,165 Q68,185 60,210 Q55,225 62,240" fill="none" stroke="rgba(90,35,130,0.45)" strokeWidth="3.5" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.5s' }} />
        <path d="M90,110 Q85,145 92,175 Q88,195 85,220" fill="none" stroke="rgba(110,45,150,0.5)" strokeWidth="3.8" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '1s' }} />
        <path d="M100,112 Q100,150 105,180 Q102,200 100,235" fill="none" stroke="rgba(100,40,140,0.45)" strokeWidth="3.5" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.3s' }} />
        <path d="M110,110 Q115,145 108,175 Q112,195 115,220" fill="none" stroke="rgba(110,45,150,0.5)" strokeWidth="3.8" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.8s' }} />
        <path d="M125,105 Q135,140 130,165 Q132,185 140,210 Q145,225 138,240" fill="none" stroke="rgba(90,35,130,0.45)" strokeWidth="3.5" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '1.2s' }} />
        <path d="M135,100 Q150,130 155,155 Q160,175 150,195 Q145,210 152,230" fill="none" stroke="rgba(100,40,140,0.5)" strokeWidth="4" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.6s' }} />
        <path d="M145,95 Q162,120 165,145 Q170,165 160,185" fill="none" stroke="rgba(90,35,130,0.4)" strokeWidth="3" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '1.4s' }} />
        {/* Bioluminescent spots */}
        <circle cx="75" cy="50" r="4" fill="url(#bioSpot)" className={styles.bioGlow} />
        <circle cx="125" cy="45" r="3" fill="url(#bioSpot)" className={styles.bioGlow} style={{ animationDelay: '1s' }} />
        <circle cx="95" cy="35" r="2.5" fill="url(#bioSpot)" className={styles.bioGlow} style={{ animationDelay: '2s' }} />
        <circle cx="110" cy="85" r="3.5" fill="url(#bioSpot)" className={styles.bioGlow} style={{ animationDelay: '0.5s' }} />
        <circle cx="70" cy="80" r="2" fill="url(#bioSpot)" className={styles.bioGlow} style={{ animationDelay: '1.5s' }} />
        {/* Sucker dots on visible tentacles */}
        <circle cx="52" cy="155" r="1.5" fill="rgba(180,140,200,0.3)" />
        <circle cx="48" cy="170" r="1.3" fill="rgba(180,140,200,0.25)" />
        <circle cx="70" cy="165" r="1.5" fill="rgba(180,140,200,0.3)" />
        <circle cx="92" cy="175" r="1.3" fill="rgba(180,140,200,0.25)" />
    </svg>
);

/* ─── LANTERNFISH ─── */
const Lanternfish = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="lanternGlow" cx="75%" cy="40%" r="30%">
                <stop offset="0%" stopColor="rgba(0, 229, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
            </radialGradient>
        </defs>
        <path d="M10,15 Q20,5 35,8 Q48,6 55,15 Q48,24 35,22 Q20,25 10,15 Z" fill="rgba(15,25,50,0.7)" />
        <path d="M5,15 L12,10 L12,20 Z" fill="rgba(15,25,50,0.5)" />
        {/* Bioluminescent photophores */}
        <circle cx="45" cy="13" r="3" fill="url(#lanternGlow)" className={styles.bioGlow} />
        <circle cx="35" cy="16" r="1.5" fill="rgba(0,229,255,0.5)" className={styles.bioGlow} style={{ animationDelay: '0.5s' }} />
        <circle cx="25" cy="14" r="1" fill="rgba(0,229,255,0.4)" className={styles.bioGlow} style={{ animationDelay: '1s' }} />
        <circle cx="48" cy="12" r="2" fill="rgba(200,240,255,0.8)" />
    </svg>
);

/* ─── SEA TURTLE (Mesopelagic — Experience) ─── */
const SeaTurtle = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="turtleShell" cx="50%" cy="45%" r="50%">
                <stop offset="0%" stopColor="rgba(80, 120, 60, 0.8)" />
                <stop offset="50%" stopColor="rgba(50, 90, 40, 0.7)" />
                <stop offset="100%" stopColor="rgba(30, 60, 25, 0.5)" />
            </radialGradient>
            <radialGradient id="turtleSkin" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(70, 130, 90, 0.7)" />
                <stop offset="100%" stopColor="rgba(40, 80, 50, 0.5)" />
            </radialGradient>
        </defs>
        {/* Shell */}
        <ellipse cx="110" cy="75" rx="55" ry="42" fill="url(#turtleShell)" />
        {/* Shell pattern (scutes) */}
        <path d="M110,40 L95,55 L110,70 L125,55 Z" fill="rgba(60,100,45,0.4)" stroke="rgba(90,140,70,0.3)" strokeWidth="0.8" />
        <path d="M85,50 L70,65 L85,80 L100,65 Z" fill="rgba(55,95,40,0.35)" stroke="rgba(90,140,70,0.25)" strokeWidth="0.7" />
        <path d="M135,50 L120,65 L135,80 L150,65 Z" fill="rgba(55,95,40,0.35)" stroke="rgba(90,140,70,0.25)" strokeWidth="0.7" />
        <path d="M95,70 L80,85 L95,100 L110,85 Z" fill="rgba(50,90,38,0.3)" stroke="rgba(90,140,70,0.2)" strokeWidth="0.7" />
        <path d="M125,70 L110,85 L125,100 L140,85 Z" fill="rgba(50,90,38,0.3)" stroke="rgba(90,140,70,0.2)" strokeWidth="0.7" />
        {/* Head */}
        <ellipse cx="170" cy="70" rx="18" ry="14" fill="url(#turtleSkin)" />
        <circle cx="177" cy="66" r="3" fill="rgba(20,30,15,0.8)" />
        <circle cx="178" cy="65" r="1.2" fill="rgba(180,220,160,0.6)" />
        {/* Front flippers */}
        <path d="M145,55 Q170,35 195,45 Q185,50 170,55" fill="url(#turtleSkin)" className={styles.flipper} />
        <path d="M145,95 Q170,115 195,105 Q185,100 170,95" fill="url(#turtleSkin)" className={styles.flipper} style={{ animationDelay: '0.5s' }} />
        {/* Rear flippers */}
        <path d="M65,60 Q50,50 40,55 Q48,62 60,65" fill="url(#turtleSkin)" className={styles.flipper} style={{ animationDelay: '0.25s' }} />
        <path d="M65,90 Q50,100 40,95 Q48,88 60,85" fill="url(#turtleSkin)" className={styles.flipper} style={{ animationDelay: '0.75s' }} />
        {/* Tail */}
        <path d="M55,75 Q45,75 38,73" fill="none" stroke="rgba(50,90,40,0.5)" strokeWidth="3" strokeLinecap="round" />
        {/* Shell rim highlight */}
        <ellipse cx="110" cy="75" rx="54" ry="41" fill="none" stroke="rgba(120,180,90,0.2)" strokeWidth="1" />
    </svg>
);

/* ─── GIANT SQUID (Abyss — Contact) ─── */
const GiantSquid = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 100 280" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="squidBody" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(80, 20, 30, 0.75)" />
                <stop offset="50%" stopColor="rgba(100, 30, 50, 0.6)" />
                <stop offset="100%" stopColor="rgba(60, 15, 25, 0.4)" />
            </linearGradient>
            <radialGradient id="squidGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 50, 80, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 50, 80, 0)" />
            </radialGradient>
        </defs>
        {/* Mantle (body) */}
        <path d="M50,10 Q70,15 72,40 Q75,70 70,95 Q65,110 50,115 Q35,110 30,95 Q25,70 28,40 Q30,15 50,10 Z" fill="url(#squidBody)" />
        {/* Fins */}
        <path d="M28,25 Q15,35 20,50 Q25,45 30,40" fill="rgba(90,25,40,0.5)" />
        <path d="M72,25 Q85,35 80,50 Q75,45 70,40" fill="rgba(90,25,40,0.5)" />
        {/* Eyes */}
        <ellipse cx="40" cy="60" rx="8" ry="10" fill="rgba(10,5,15,0.9)" />
        <ellipse cx="60" cy="60" rx="8" ry="10" fill="rgba(10,5,15,0.9)" />
        <ellipse cx="42" cy="58" rx="3" ry="4" fill="rgba(100,200,255,0.5)" />
        <ellipse cx="62" cy="58" rx="3" ry="4" fill="rgba(100,200,255,0.5)" />
        {/* Arms (5 short) */}
        <path d="M38,115 Q35,140 32,160 Q30,170 35,175" fill="none" stroke="rgba(80,20,35,0.5)" strokeWidth="2.5" strokeLinecap="round" className={styles.tentacle} />
        <path d="M43,116 Q40,145 38,168 Q36,178 40,182" fill="none" stroke="rgba(90,25,40,0.45)" strokeWidth="2.2" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.3s' }} />
        <path d="M50,117 Q50,148 52,172 Q53,180 50,185" fill="none" stroke="rgba(85,22,38,0.5)" strokeWidth="2.5" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.6s' }} />
        <path d="M57,116 Q60,145 62,168 Q64,178 60,182" fill="none" stroke="rgba(90,25,40,0.45)" strokeWidth="2.2" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.9s' }} />
        <path d="M62,115 Q65,140 68,160 Q70,170 65,175" fill="none" stroke="rgba(80,20,35,0.5)" strokeWidth="2.5" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.4s' }} />
        {/* Tentacles (2 long hunting tentacles) */}
        <path d="M42,118 Q35,160 30,200 Q25,235 32,260 Q35,270 30,278" fill="none" stroke="rgba(100,30,45,0.55)" strokeWidth="2" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.2s' }} />
        <path d="M58,118 Q65,160 70,200 Q75,235 68,260 Q65,270 70,278" fill="none" stroke="rgba(100,30,45,0.55)" strokeWidth="2" strokeLinecap="round" className={styles.tentacle} style={{ animationDelay: '0.7s' }} />
        {/* Bioluminescent spots */}
        <circle cx="45" cy="40" r="3" fill="url(#squidGlow)" className={styles.bioGlow} />
        <circle cx="55" cy="35" r="2.5" fill="url(#squidGlow)" className={styles.bioGlow} style={{ animationDelay: '1.2s' }} />
        <circle cx="50" cy="85" r="2" fill="url(#squidGlow)" className={styles.bioGlow} style={{ animationDelay: '0.8s' }} />
        <circle cx="38" cy="75" r="1.8" fill="url(#squidGlow)" className={styles.bioGlow} style={{ animationDelay: '1.5s' }} />
        <circle cx="62" cy="78" r="2.2" fill="url(#squidGlow)" className={styles.bioGlow} style={{ animationDelay: '0.4s' }} />
    </svg>
);

/* ─── ANGLERFISH (Abyss — Contact) ─── */
const Anglerfish = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="anglerBody" cx="40%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(50, 35, 70, 0.95)" />
                <stop offset="100%" stopColor="rgba(25, 15, 45, 0.8)" />
            </radialGradient>
            <radialGradient id="anglerLure" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 230, 120, 1)" />
                <stop offset="40%" stopColor="rgba(255, 200, 60, 0.85)" />
                <stop offset="100%" stopColor="rgba(255, 150, 0, 0)" />
            </radialGradient>
            <filter id="lureGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Body */}
        <path d="M50,75 Q60,40 100,45 Q140,40 160,65 Q170,80 165,95 Q155,115 130,118 Q100,120 75,115 Q50,110 40,95 Q35,85 50,75 Z" fill="url(#anglerBody)" />
        {/* Illicium (fishing rod) */}
        <path d="M95,45 Q90,30 85,20 Q80,10 90,5" fill="none" stroke="rgba(40,25,60,0.7)" strokeWidth="1.5" />
        {/* Esca (lure) */}
        <circle cx="90" cy="5" r="8" fill="url(#anglerLure)" filter="url(#lureGlow)" className={styles.lure} />
        <circle cx="90" cy="5" r="3" fill="rgba(255,255,200,0.9)" />
        {/* Mouth with teeth */}
        <path d="M55,85 Q70,95 95,93 Q120,95 140,88" fill="none" stroke="rgba(60,40,80,0.6)" strokeWidth="2" />
        {/* Teeth */}
        <path d="M62,85 L65,90 L68,85" fill="rgba(200,200,220,0.6)" />
        <path d="M75,87 L78,93 L81,87" fill="rgba(200,200,220,0.5)" />
        <path d="M90,88 L93,94 L96,88" fill="rgba(200,200,220,0.6)" />
        <path d="M105,87 L108,93 L111,87" fill="rgba(200,200,220,0.5)" />
        <path d="M120,86 L123,91 L126,86" fill="rgba(200,200,220,0.55)" />
        <path d="M133,85 L136,90 L139,85" fill="rgba(200,200,220,0.5)" />
        {/* Eye */}
        <circle cx="120" cy="60" r="10" fill="rgba(10,5,15,0.9)" />
        <circle cx="122" cy="58" r="4" fill="rgba(100,200,255,0.6)" />
        <circle cx="123" cy="57" r="1.5" fill="rgba(200,240,255,0.9)" />
        {/* Dorsal fin */}
        <path d="M120,45 Q130,35 140,45 Q145,38 155,48" fill="rgba(20,15,35,0.5)" />
        {/* Pectoral fin */}
        <path d="M60,95 Q50,105 55,115 Q65,110 70,100" fill="rgba(25,18,40,0.4)" />
        {/* Tail */}
        <path d="M165,80 Q175,75 185,80 Q180,85 185,90 Q175,85 165,90" fill="rgba(20,15,35,0.5)" />
    </svg>
);

/* ─── MAIN COMPONENT ─── */
export const OceanCreatures = ({ depth }) => {
    if (depth === 'surface') {
        return (
            <div className={styles.layer}>
                <Jellyfish className={`${styles.creature} ${styles.float1}`} style={{ left: '8%', top: '20%', width: '110px' }} />
                <Jellyfish className={`${styles.creature} ${styles.float2}`} style={{ left: '75%', top: '35%', width: '85px', opacity: 0.75 }} />
                <Jellyfish className={`${styles.creature} ${styles.float3}`} style={{ left: '42%', top: '55%', width: '70px', opacity: 0.6 }} />
                <SmallFish className={`${styles.creature} ${styles.swim1}`} style={{ left: '60%', top: '25%', width: '40px' }} />
                <SmallFish className={`${styles.creature} ${styles.swim1}`} style={{ left: '65%', top: '28%', width: '35px', opacity: 0.7 }} />
                <SmallFish className={`${styles.creature} ${styles.swim2}`} style={{ left: '20%', top: '70%', width: '38px', opacity: 0.6 }} />
            </div>
        );
    }

    if (depth === 'meso') {
        return (
            <div className={styles.layer}>
                <MantaRay className={`${styles.creature} ${styles.glide}`} style={{ left: '10%', top: '25%', width: '280px' }} />
                <SeaTurtle className={`${styles.creature} ${styles.drift}`} style={{ right: '8%', top: '55%', width: '180px' }} />
                <SmallFish className={`${styles.creature} ${styles.swim1}`} style={{ left: '70%', top: '20%', width: '35px' }} />
                <SmallFish className={`${styles.creature} ${styles.swim1}`} style={{ left: '74%', top: '24%', width: '30px', opacity: 0.8 }} />
                <SmallFish className={`${styles.creature} ${styles.swim1}`} style={{ left: '68%', top: '22%', width: '28px', opacity: 0.6 }} />
                <SmallFish className={`${styles.creature} ${styles.swim2}`} style={{ left: '50%', top: '65%', width: '30px', opacity: 0.5 }} />
                <SmallFish className={`${styles.creature} ${styles.swim2}`} style={{ left: '55%', top: '68%', width: '25px', opacity: 0.4 }} />
            </div>
        );
    }

    if (depth === 'bathy') {
        return (
            <div className={styles.layer}>
                <Octopus className={`${styles.creature} ${styles.float2}`} style={{ right: '5%', top: '10%', width: '190px' }} />
                <Lanternfish className={`${styles.creature} ${styles.swim1}`} style={{ left: '12%', top: '40%', width: '60px' }} />
                <Lanternfish className={`${styles.creature} ${styles.swim2}`} style={{ left: '55%', top: '70%', width: '50px', opacity: 0.7 }} />
                <Lanternfish className={`${styles.creature} ${styles.swim1}`} style={{ left: '30%', top: '75%', width: '45px', opacity: 0.55 }} />
            </div>
        );
    }

    if (depth === 'abyss') {
        return (
            <div className={styles.layer}>
                <Anglerfish className={`${styles.creature} ${styles.drift}`} style={{ left: '5%', top: '15%', width: '220px' }} />
                <GiantSquid className={`${styles.creature} ${styles.float2}`} style={{ right: '5%', top: '50%', width: '100px' }} />
                <Lanternfish className={`${styles.creature} ${styles.float3}`} style={{ left: '50%', top: '70%', width: '50px', opacity: 0.6 }} />
                <Lanternfish className={`${styles.creature} ${styles.float1}`} style={{ left: '55%', top: '12%', width: '40px', opacity: 0.45 }} />
            </div>
        );
    }

    return null;
};
