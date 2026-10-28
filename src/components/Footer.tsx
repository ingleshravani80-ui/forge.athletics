// src/components/Footer.tsx
import './Footer.css';

const quickLinks = [
  { label: 'Training', href: '#training' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Membership', href: '#membership' },
  { label: 'Enquiry', href: '#enquiry' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand col */}
        <div className="footer__brand-col">
          <a href="#" className="footer__brand" onClick={() => handleNav('#')} aria-label="FORGE ATHLETICS — scroll to top">
            <span className="footer__brand-mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,26 2,26" stroke="#D87945" strokeWidth="2" fill="none" />
                <line x1="14" y1="2" x2="14" y2="18" stroke="#D87945" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="footer__wordmark">FORGE <span>ATHLETICS</span></span>
          </a>
          <p className="footer__tagline">
            Strength. Discipline. Performance.<br />
            Training built for people who show up.
          </p>
        </div>

        {/* Nav col */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">Quick Links</p>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button className="footer__nav-link" onClick={() => handleNav(link.href)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top col */}
        <div className="footer__top-col">
          <button className="footer__back-top" onClick={() => handleNav('#')} aria-label="Back to top of page">
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} FORGE ATHLETICS
          </p>
          <p className="footer__demo-note">
            Portfolio demonstration website — fictional brand, not a registered gym
          </p>
        </div>
      </div>
    </footer>
  );
}
