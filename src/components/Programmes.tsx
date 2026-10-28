// src/components/Programmes.tsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Modal from './Modal';
import SectionHeading from './SectionHeading';
import { programmes, type Programme } from '../data/programmes';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Programmes.css';

export default function Programmes() {
  const [selected, setSelected] = useState<Programme | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  const scrollToEnquiry = () => {
    const el = document.querySelector('#enquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setSelected(null);
  };

  return (
    <section id="training" className="section programmes" aria-labelledby="programmes-headline" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="Find Your Focus"
          headline="TRAIN FOR WHAT MATTERS."
          align="left"
        />

        <div className="programmes__grid">
          {programmes.map((prog, i) => (
            <article
              key={prog.id}
              className="programme-card"
              data-reveal="up"
              data-reveal-delay={String(Math.min(i + 1, 5)) as '1' | '2' | '3' | '4' | '5'}
            >
              <div className="programme-card__img-wrap">
                <img
                  src={prog.image}
                  alt={prog.imageAlt}
                  className="programme-card__img"
                  loading="lazy"
                />
                <span className="programme-card__num" aria-hidden="true">{prog.number}</span>
              </div>
              <div className="programme-card__body">
                <h3 className="programme-card__name">{prog.name}</h3>
                <p className="programme-card__desc">{prog.shortDescription}</p>
                <button
                  className="programme-card__link"
                  onClick={() => setSelected(prog)}
                  aria-label={`Discover ${prog.name} programme`}
                >
                  <span>DISCOVER PROGRAMME</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Programme detail modal */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.name ?? ''}
      >
        {selected && (
          <div className="programme-modal">
            <span className="programme-modal__num">{selected.number}</span>
            <p className="programme-modal__desc">{selected.longDescription}</p>

            <div className="programme-modal__section">
              <h4 className="programme-modal__label">Training Focus</h4>
              <ul className="programme-modal__list">
                {selected.focus.map((f) => (
                  <li key={f}>
                    <span className="programme-modal__dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="programme-modal__section">
              <h4 className="programme-modal__label">Intended Audience</h4>
              <p className="programme-modal__text">{selected.audience}</p>
            </div>

            <button className="programme-modal__cta btn-primary" onClick={scrollToEnquiry}>
              Enquire About This Programme
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
