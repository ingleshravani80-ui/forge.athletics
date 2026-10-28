// src/components/Coaches.tsx
import { useState } from 'react';
import Modal from './Modal';
import SectionHeading from './SectionHeading';
import { coaches, type Coach } from '../data/coaches';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Coaches.css';

export default function Coaches() {
  const [selected, setSelected] = useState<Coach | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="coaches" className="section coaches" aria-labelledby="coaches-headline" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="Meet Your Coaches"
          headline="EXPERIENCE. INTENTION. RESULTS."
          align="center"
        />

        <div className="coaches__grid">
          {coaches.map((coach, i) => (
            <article
              key={coach.id}
              className="coach-card"
              data-reveal="up"
              data-reveal-delay={String(Math.min(i + 1, 5)) as '1' | '2' | '3' | '4' | '5'}
            >
              <div className="coach-card__img-wrap">
                <img
                  src={coach.image}
                  alt={coach.imageAlt}
                  className="coach-card__img"
                  style={coach.objectPosition ? { objectPosition: coach.objectPosition } : undefined}
                  loading="lazy"
                />
                <div className="coach-card__img-overlay" aria-hidden="true" />
              </div>
              <div className="coach-card__body">
                <span className="coach-card__specialty">{coach.specialty}</span>
                <h3 className="coach-card__name">{coach.name}</h3>
                <p className="coach-card__role">{coach.role}</p>
                <p className="coach-card__bio">{coach.bio}</p>
                <button
                  className="coach-card__btn"
                  onClick={() => setSelected(coach)}
                  aria-label={`View full profile for ${coach.name}`}
                >
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="coaches__disclaimer">
          All coach names and biographies are fictional portfolio-demonstration content.
        </p>
      </div>

      {/* Coach detail modal */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.name} — ${selected.role}` : ''}
      >
        {selected && (
          <div className="coach-modal">
            <div className="coach-modal__img-wrap">
              <img
                src={selected.image}
                alt={selected.imageAlt}
                className="coach-modal__img"
              />
            </div>
            <span className="coach-modal__specialty">{selected.specialty}</span>
            <p className="coach-modal__bio">{selected.fullBio}</p>
            <div className="coach-modal__section">
              <h4 className="coach-modal__label">Specialties</h4>
              <ul className="coach-modal__list">
                {selected.specialties.map((s) => (
                  <li key={s}>
                    <span className="coach-modal__dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="coach-modal__disclaimer">This is fictional portfolio-demonstration content.</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
