// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'Training', href: '#training' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Membership', href: '#membership' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerH = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="header__inner container">
        {/* Brand */}
        <a href="#" className="header__brand" aria-label="FORGE ATHLETICS — back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="header__mark" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,26 2,26" stroke="#D87945" strokeWidth="2" fill="none" />
              <line x1="14" y1="2" x2="14" y2="18" stroke="#D87945" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="header__wordmark">FORGE <span>ATHLETICS</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <button
          className="header__cta"
          onClick={() => handleNavClick('#enquiry')}
        >
          Join the Club
        </button>

        {/* Mobile menu toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className="mobile-menu__link"
                  onClick={() => handleNavClick(link.href)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                className="mobile-menu__cta"
                onClick={() => handleNavClick('#enquiry')}
                tabIndex={menuOpen ? 0 : -1}
              >
                Join the Club
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
