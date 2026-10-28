// src/components/ClassSchedule.tsx
import { useState } from 'react';
import { Clock, User, Tag } from 'lucide-react';
import Modal from './Modal';
import SectionHeading from './SectionHeading';
import { schedule, days, categories, type Day, type Category, type ClassSession } from '../data/schedule';
import './ClassSchedule.css';

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState<Day>('Monday');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedClass, setSelectedClass] = useState<ClassSession | null>(null);

  const filtered = schedule.filter(
    (c) => c.day === activeDay && (activeCategory === 'All' || c.category === activeCategory)
  );

  const scrollToEnquiry = () => {
    const el = document.querySelector('#enquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setSelectedClass(null);
  };

  return (
    <section id="schedule" className="section schedule" aria-labelledby="schedule-headline">
      <div className="container">
        <SectionHeading
          eyebrow="Find Your Session"
          headline="MAKE TIME TO TRAIN."
          align="left"
        />

        {/* Day selector */}
        <div className="schedule__days" role="tablist" aria-label="Select training day">
          {days.map((day) => (
            <button
              key={day}
              className={`schedule__day${activeDay === day ? ' schedule__day--active' : ''}`}
              onClick={() => { setActiveDay(day); setActiveCategory('All'); }}
              role="tab"
              aria-selected={activeDay === day}
              aria-controls="schedule-table"
            >
              <span className="schedule__day-short">{day.slice(0, 3)}</span>
              <span className="schedule__day-full">{day}</span>
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="schedule__filters" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`schedule__filter${activeCategory === cat ? ' schedule__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <div id="schedule-table" className="schedule__list" role="tabpanel" aria-label={`${activeDay} classes`}>
          {filtered.length === 0 ? (
            <div className="schedule__empty">
              <p>No classes match this filter on {activeDay}.</p>
              <button className="schedule__empty-reset" onClick={() => setActiveCategory('All')}>
                Show all {activeDay} classes
              </button>
            </div>
          ) : (
            filtered.map((cls) => (
              <article key={cls.id} className="schedule-row">
                <div className="schedule-row__time">
                  <span className="schedule-row__time-val">{cls.time}</span>
                  <span className="schedule-row__duration">
                    <Clock size={12} aria-hidden="true" />
                    {cls.duration}
                  </span>
                </div>
                <div className="schedule-row__info">
                  <h3 className="schedule-row__name">{cls.name}</h3>
                  <div className="schedule-row__meta">
                    <span className="schedule-row__coach">
                      <User size={12} aria-hidden="true" />
                      {cls.coach}
                    </span>
                    <span className={`schedule-row__cat schedule-row__cat--${cls.category.toLowerCase()}`}>
                      <Tag size={11} aria-hidden="true" />
                      {cls.category}
                    </span>
                    <span className="schedule-row__level">{cls.level}</span>
                  </div>
                </div>
                <button
                  className="schedule-row__btn"
                  onClick={() => setSelectedClass(cls)}
                  aria-label={`View session details for ${cls.name}`}
                >
                  VIEW SESSION
                </button>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Session detail modal */}
      <Modal
        isOpen={selectedClass !== null}
        onClose={() => setSelectedClass(null)}
        title={selectedClass?.name ?? ''}
      >
        {selectedClass && (
          <div className="session-modal">
            <div className="session-modal__meta">
              <div className="session-modal__meta-item">
                <span className="session-modal__meta-label">Day</span>
                <span className="session-modal__meta-val">{selectedClass.day}</span>
              </div>
              <div className="session-modal__meta-item">
                <span className="session-modal__meta-label">Time</span>
                <span className="session-modal__meta-val">{selectedClass.time}</span>
              </div>
              <div className="session-modal__meta-item">
                <span className="session-modal__meta-label">Duration</span>
                <span className="session-modal__meta-val">{selectedClass.duration}</span>
              </div>
              <div className="session-modal__meta-item">
                <span className="session-modal__meta-label">Level</span>
                <span className="session-modal__meta-val">{selectedClass.level}</span>
              </div>
            </div>
            <div className="session-modal__row">
              <span className="session-modal__label">Coach</span>
              <span>{selectedClass.coach}</span>
            </div>
            <div className="session-modal__row">
              <span className="session-modal__label">Category</span>
              <span>{selectedClass.category}</span>
            </div>
            <p className="session-modal__desc">{selectedClass.description}</p>
            <button className="session-modal__cta btn-primary" onClick={scrollToEnquiry}>
              Enquire About This Session
            </button>
            <p className="session-modal__note">
              This is a portfolio demonstration. No bookings are processed.
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}
