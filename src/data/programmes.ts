// src/data/programmes.ts

export interface Programme {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  focus: string[];
  audience: string;
  image: string;
  imageAlt: string;
}

export const programmes: Programme[] = [
  {
    id: 'strength-conditioning',
    number: '01',
    name: 'Strength & Conditioning',
    shortDescription: 'Build foundational strength and improve work capacity through structured, progressive training.',
    longDescription: 'This programme combines barbell work, accessory training, and conditioning to build a well-rounded athletic foundation. Sessions are structured around compound lifts with progressive overload principles, ensuring consistent, measurable progress over time.',
    focus: ['Barbell fundamentals', 'Progressive overload', 'Work capacity', 'Structural balance'],
    audience: 'Suited for anyone looking to build serious strength with a structured, coach-guided approach.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    imageAlt: 'Athlete performing a barbell back squat in a dark industrial gym',
  },
  {
    id: 'personal-training',
    number: '02',
    name: 'Personal Training',
    shortDescription: 'Get individual coaching, personalised programming, and guidance aligned with your goals.',
    longDescription: 'Work directly with one of our coaches on a programme built entirely around your goals, current fitness level, and schedule. Every session is intentional. You receive personalised feedback, movement coaching, and regular programming adjustments as you progress.',
    focus: ['Individual programming', 'Movement coaching', 'Goal-based planning', 'Regular assessment'],
    audience: 'Ideal for members who want focused, one-on-one coaching and a plan designed specifically for them.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    imageAlt: 'Coach guiding an athlete through a training movement',
  },
  {
    id: 'functional-fitness',
    number: '03',
    name: 'Functional Fitness',
    shortDescription: 'Develop mobility, coordination, strength, and conditioning for movement that carries into everyday life.',
    longDescription: 'Functional fitness sessions combine loaded movement, bodyweight work, and conditioning drills designed to improve how you move — not just in the gym, but in everything you do. Sessions develop coordination, strength, and endurance in patterns that translate directly to real-world performance.',
    focus: ['Movement patterns', 'Mobility', 'Coordination', 'Metabolic conditioning'],
    audience: 'Open to all levels. Particularly valuable for those returning to training or building a broad athletic base.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
    imageAlt: 'Athlete performing functional training movements in a gym',
  },
  {
    id: 'group-training',
    number: '04',
    name: 'Group Training',
    shortDescription: 'Train alongside a motivated group with coached sessions designed to challenge and encourage you.',
    longDescription: 'Our group training sessions bring structure and community together. Coached by experienced trainers, each session is programmed with clear objectives and scaled for different fitness levels. The group energy keeps you accountable and the coaching keeps you progressing.',
    focus: ['Coached group sessions', 'Scaled programming', 'Community energy', 'Structured variety'],
    audience: 'Great for members who perform well with the energy of a group and benefit from shared accountability.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    imageAlt: 'Group of athletes training together in a coached gym session',
  },
];
