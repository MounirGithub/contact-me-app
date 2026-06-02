import { useState, useEffect } from 'react';

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
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <a href="#hero" className="navbar__logo">M.</a>

                <ul className="navbar__links">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="navbar__link">{link.label}</a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeMenu}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`navbar__overlay ${menuOpen ? 'visible' : ''}`}
                onClick={closeMenu}
            />
        </>
    );
};
