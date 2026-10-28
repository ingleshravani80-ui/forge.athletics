// src/components/Community.tsx
import './Community.css';

const statements = [
  'BUILT THROUGH CONSISTENCY',
  'COACHED WITH INTENTION',
  'STRONGER TOGETHER',
];

export default function Community() {
  const scrollToEnquiry = () => {
    const el = document.querySelector('#enquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="community" className="community" aria-labelledby="community-headline">
      <div className="community__main">
        {/* Large background image */}
        <div className="community__bg">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80"
            alt="Athletes training in a group session in an industrial gym"
            className="community__img"
            loading="lazy"
          />
          <div className="community__overlay" aria-hidden="true" />
        </div>

        <div className="container community__content">
          <span className="eyebrow">More Than a Workout</span>
          <h2 id="community-headline" className="community__headline">
            A PLACE TO PUT<br />IN THE WORK.
          </h2>
          <p className="community__body">
            Good training is built on effort, shared energy, and the decision to keep showing up. Find a training environment that challenges you to move forward.
          </p>

          {/* Statements */}
          <div className="community__statements" aria-label="Brand statements">
            {statements.map((s, i) => (
              <div key={i} className="community__statement">
                <span className="community__statement-line" aria-hidden="true" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <button className="btn-outline community__cta" onClick={scrollToEnquiry}>
            Start Your Enquiry
          </button>
        </div>
      </div>

      {/* Secondary image strip */}
      <div className="community__strip">
        <div className="community__strip-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
            alt="Close-up of hands gripping a barbell before a heavy lift"
            className="community__strip-img"
            loading="lazy"
          />
        </div>
        <div className="community__strip-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80"
            alt="Athlete performing a dumbbell exercise with focused form"
            className="community__strip-img"
            loading="lazy"
          />
        </div>
        <div className="community__strip-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80"
            alt="Coach observing an athlete during a training session"
            className="community__strip-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
