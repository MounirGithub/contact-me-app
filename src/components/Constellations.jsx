import { useState, useCallback } from 'react';
import styles from './Constellations.module.css';

// Real constellation patterns positioned in % of the sky area
// Each constellation has stars (x%, y%) and lines connecting star indices
const CONSTELLATIONS = [
    {
        name: 'Orion',
        stars: [
            { x: 8, y: 12 },   // 0 - Betelgeuse (shoulder left)
            { x: 14, y: 12 },  // 1 - Bellatrix (shoulder right)
            { x: 9, y: 18 },   // 2 - belt left
            { x: 11, y: 18.5 },// 3 - belt center
            { x: 13, y: 19 },  // 4 - belt right
            { x: 8, y: 26 },   // 5 - Saiph (knee left)
            { x: 14, y: 26 },  // 6 - Rigel (knee right)
        ],
        lines: [[0, 1], [0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]],
    },
    {
        name: 'Grande Ourse',
        stars: [
            { x: 55, y: 6 },   // 0
            { x: 60, y: 5 },   // 1
            { x: 63, y: 8 },   // 2
            { x: 61, y: 12 },  // 3
            { x: 66, y: 14 },  // 4
            { x: 70, y: 12 },  // 5
            { x: 72, y: 15 },  // 6
        ],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [3, 0]],
    },
    {
        name: 'Cassiopée',
        stars: [
            { x: 32, y: 4 },   // 0
            { x: 35, y: 8 },   // 1
            { x: 38, y: 5 },   // 2
            { x: 41, y: 9 },   // 3
            { x: 44, y: 5 },   // 4
        ],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]],
    },
    {
        name: 'Cygne',
        stars: [
            { x: 82, y: 22 },  // 0 - Deneb (top)
            { x: 84, y: 28 },  // 1 - center
            { x: 86, y: 34 },  // 2 - Albireo (bottom)
            { x: 80, y: 28 },  // 3 - wing left
            { x: 88, y: 28 },  // 4 - wing right
        ],
        lines: [[0, 1], [1, 2], [3, 1], [1, 4]],
    },
    {
        name: 'Lion',
        stars: [
            { x: 22, y: 38 },  // 0 - head
            { x: 25, y: 36 },  // 1
            { x: 28, y: 38 },  // 2
            { x: 30, y: 42 },  // 3 - body
            { x: 34, y: 40 },  // 4
            { x: 36, y: 43 },  // 5 - tail
        ],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 2]],
    },
];

export const Constellations = () => {
    const [active, setActive] = useState(null);

    const handleInteraction = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX ?? e.touches?.[0]?.clientX) - rect.left) / rect.width * 100;
        const y = ((e.clientY ?? e.touches?.[0]?.clientY) - rect.top) / rect.height * 100;

        // Find closest constellation to pointer
        let closest = null;
        let minDist = Infinity;

        for (const c of CONSTELLATIONS) {
            const centerX = c.stars.reduce((s, p) => s + p.x, 0) / c.stars.length;
            const centerY = c.stars.reduce((s, p) => s + p.y, 0) / c.stars.length;
            const dist = Math.hypot(x - centerX, y - centerY);
            if (dist < minDist && dist < 15) {
                minDist = dist;
                closest = c.name;
            }
        }

        setActive(closest);
    }, []);

    const handleLeave = useCallback(() => setActive(null), []);

    return (
        <div
            className={styles.constellations}
            onMouseMove={handleInteraction}
            onTouchStart={handleInteraction}
            onTouchMove={handleInteraction}
            onMouseLeave={handleLeave}
            onTouchEnd={handleLeave}
        >
            {CONSTELLATIONS.map((c) => {
                const isActive = active === c.name;
                return (
                    <div key={c.name} className={styles.constellation}>
                        {/* Stars */}
                        {c.stars.map((star, i) => (
                            <span
                                key={i}
                                className={`${styles.cStar} ${isActive ? styles.cStarActive : ''}`}
                                style={{ left: `${star.x}%`, top: `${star.y}%` }}
                            />
                        ))}
                        {/* Lines SVG */}
                        <svg className={`${styles.lines} ${isActive ? styles.linesActive : ''}`}>
                            {c.lines.map(([a, b], i) => (
                                <line
                                    key={i}
                                    x1={`${c.stars[a].x}%`}
                                    y1={`${c.stars[a].y}%`}
                                    x2={`${c.stars[b].x}%`}
                                    y2={`${c.stars[b].y}%`}
                                />
                            ))}
                        </svg>
                        {/* Label */}
                        {isActive && (
                            <span
                                className={styles.label}
                                style={{
                                    left: `${c.stars[0].x}%`,
                                    top: `${c.stars[0].y - 4}%`,
                                }}
                            >
                                {c.name}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
