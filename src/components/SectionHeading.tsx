// src/components/SectionHeading.tsx
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow: string;
  headline: string;
  subtext?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, headline, subtext, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal="up">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{headline}</h2>
      {subtext && <p className="section-heading__sub">{subtext}</p>}
    </div>
  );
}
