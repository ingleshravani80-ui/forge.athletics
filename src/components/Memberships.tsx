// src/components/Memberships.tsx
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { memberships, type Membership } from '../data/memberships';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Memberships.css';

interface MembershipsProps {
  onSelect: (id: string) => void;
}

export default function Memberships({ onSelect }: MembershipsProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  const handleEnquire = (membership: Membership) => {
    onSelect(membership.id);
    const el = document.querySelector('#enquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="section memberships" aria-labelledby="membership-headline" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="Choose Your Commitment"
          headline="INVEST IN YOURSELF."
          subtext="Choose a training option that fits your routine and your goals."
          align="center"
        />

        <div className="memberships__grid">
          {memberships.map((plan, i) => (
            <div
              key={plan.id}
              className={`plan-card${plan.recommended ? ' plan-card--recommended' : ''}`}
              data-reveal="up"
              data-reveal-delay={String(Math.min(i + 1, 5)) as '1' | '2' | '3' | '4' | '5'}
            >
              {plan.recommended && (
                <div className="plan-card__badge" aria-label="Recommended plan">
                  RECOMMENDED
                </div>
              )}
              <div className="plan-card__header">
                <h3 className="plan-card__name">{plan.name}</h3>
                <div className="plan-card__price-wrap">
                  <span className="plan-card__price">{plan.price}</span>
                  <span className="plan-card__period">{plan.period}</span>
                </div>
              </div>
              <ul className="plan-card__features" aria-label={`${plan.name} plan features`}>
                {plan.features.map((f) => (
                  <li key={f.text} className="plan-card__feature">
                    <Check size={14} className="plan-card__check" aria-hidden="true" />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`plan-card__cta${plan.recommended ? ' plan-card__cta--accent' : ''}`}
                onClick={() => handleEnquire(plan)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="memberships__disclaimer">
          These prices and features are fictional portfolio-demonstration content and do not represent real offers.
        </p>
      </div>
    </section>
  );
}
