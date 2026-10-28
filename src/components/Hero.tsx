// src/components/Hero.tsx
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-headline">
      {/* Background image */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=85"
          alt="Athlete training in a dark, industrial gym — heavy barbell work under dramatic lighting"
          className="hero__img"
          loading="eager"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Copper accent line */}
      <div className="hero__accent-line" aria-hidden="true" />

      <div className="container hero__content">
        {/* Eyebrow */}
        <p className="hero__eyebrow">STRENGTH. DISCIPLINE. PERFORMANCE.</p>

        {/* Headline */}
        <h1 id="hero-headline" className="hero__headline">
          BUILT BY<br />
          <span className="hero__headline-accent">DISCIPLINE.</span>
        </h1>

        {/* Supporting text */}
        <p className="hero__sub">
          Training for people who show up, put in the work,<br className="hero__br" /> and get stronger with every session.
        </p>

        {/* CTAs */}
        <div className="hero__actions">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#training')}
          >
            Explore Training
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('#membership')}
          >
            View Memberships
          </button>
        </div>

        {/* Small label */}
        <p className="hero__label">YOUR WORK STARTS HERE.</p>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('#philosophy')}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
