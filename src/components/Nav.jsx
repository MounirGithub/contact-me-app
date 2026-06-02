import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <a href="#hero" className={styles.logo}>M.</a>

                <ul className={styles.links}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={styles.link}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeMenu}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
                onClick={closeMenu}
            />
        </>
    );
};
