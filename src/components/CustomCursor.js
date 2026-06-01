import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.classList.add('visible');
        };

        const addHover = () => cursor.classList.add('hover');
        const removeHover = () => cursor.classList.remove('hover');

        document.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .projects__card');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" />;
};
