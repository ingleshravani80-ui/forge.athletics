import { useEffect, useRef } from 'react';

/**
 * Attaches IntersectionObserver to a container element and adds
 * the `is-visible` class to every child that has `data-reveal` set,
 * once it enters the viewport.
 *
 * Respects `prefers-reduced-motion`: when motion is reduced, all
 * children are made visible immediately with no animation.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Immediately show everything if the user prefers reduced motion.
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    if (!motionOk) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
