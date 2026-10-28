// src/components/Philosophy.tsx
import './Philosophy.css';

const principles = [
  { number: '01', title: 'TRAIN WITH PURPOSE', text: 'Every session has a clear objective.' },
  { number: '02', title: 'BUILD REAL STRENGTH', text: 'Focus on sound technique and sustainable progress.' },
  { number: '03', title: 'SHOW UP CONSISTENTLY', text: 'Results are built through repeatable habits.' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy" aria-labelledby="philosophy-headline">
      <div className="container">
        <div className="philosophy__grid">
          {/* Left: text */}
          <div className="philosophy__text">
            <span className="eyebrow">The Forge Method</span>
            <h2 id="philosophy-headline" className="philosophy__headline">
              PROGRESS IS EARNED.<br />NOT GIVEN.
            </h2>
            <p className="philosophy__body">
              We believe training should have purpose. Every session builds on the last, combining structured programming, quality coaching, and consistency that carries beyond the gym.
            </p>
            <div className="philosophy__principles">
              {principles.map((p) => (
                <div key={p.number} className="philosophy__principle">
                  <span className="philosophy__principle-num" aria-hidden="true">{p.number}</span>
                  <div>
                    <h3 className="philosophy__principle-title">{p.title}</h3>
                    <p className="philosophy__principle-text">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="philosophy__media">
            <div className="philosophy__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                alt="Close-up of a barbell and weight plates in a dim industrial gym"
                className="philosophy__img"
                loading="lazy"
              />
              <div className="philosophy__img-overlay" aria-hidden="true" />
            </div>
            <div className="philosophy__img-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
