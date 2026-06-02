import { useState, useEffect, useCallback } from 'react';
import styles from './Nav.module.css';

export const Navbar = ({ scrollTo }) => {
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

    const handleNav = useCallback((e, href) => {
        e.preventDefault();
        closeMenu();
        if (scrollTo) {
            scrollTo(href, { offset: -80 });
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollTo]);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className={styles.logo}>M.</a>

                <ul className={styles.links}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleNav(e, link.href)} className={styles.link}>{link.label}</a>
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
                            <a href={link.href} onClick={(e) => handleNav(e, link.href)}>{link.label}</a>
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
