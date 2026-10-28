// src/data/coaches.ts
// All coach names, roles, and bios are fictional portfolio-demo content.

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  fullBio: string;
  specialties: string[];
  image: string;
  imageAlt: string;
  objectPosition?: string;
}

export const coaches: Coach[] = [
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    role: 'Strength Coach',
    specialty: 'Barbell & Powerlifting',
    bio: 'Focused on building sound lifting technique, foundational strength, and progressive training habits.',
    fullBio: 'Alex has spent years developing athletes at every level — from complete beginners learning their first squat to competitive lifters refining their technique. Their coaching philosophy centres on patient, deliberate skill-building: master the pattern, add the load, repeat.',
    specialties: ['Squat, Deadlift & Press mechanics', 'Strength programme design', 'Progressive overload strategy', 'Training for longevity'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    imageAlt: 'Alex Morgan, Strength Coach, standing in a gym',
    objectPosition: 'center top',
  },
  {
    id: 'jordan-lee',
    name: 'Jordan Lee',
    role: 'Performance Coach',
    specialty: 'Athletic Conditioning',
    bio: 'Combines athletic conditioning, movement quality, and structured performance training.',
    fullBio: 'Jordan brings a background in athletic performance into every session. Their approach integrates movement quality, energy system development, and structured conditioning — building athletes who perform across multiple demands, not just one quality.',
    specialties: ['Athletic performance', 'Conditioning & energy systems', 'Movement quality', 'Sports-specific preparation'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    imageAlt: 'Jordan Lee, Performance Coach, coaching an athlete',
    objectPosition: 'center 20%',
  },
  {
    id: 'taylor-brooks',
    name: 'Taylor Brooks',
    role: 'Personal Training Coach',
    specialty: 'Goal-Based Programming',
    bio: 'Helps members develop consistent routines through individual guidance and goal-focused programming.',
    fullBio: 'Taylor specialises in working with people one-on-one to identify realistic goals, remove barriers to consistency, and build training habits that last. Every programme Taylor writes is grounded in that person\'s actual life — their schedule, their history, and where they want to get to.',
    specialties: ['Individual programme design', 'Habit and consistency coaching', 'Beginner and returning athlete guidance', 'Goal setting and progress tracking'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    imageAlt: 'Taylor Brooks, Personal Training Coach, guiding an athlete through a movement',
    objectPosition: 'center 15%',
  },
];
