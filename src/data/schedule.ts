// src/data/schedule.ts

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
export type Category = 'All' | 'Strength' | 'Conditioning' | 'Functional' | 'Recovery';

export interface ClassSession {
  id: string;
  name: string;
  time: string;
  duration: string;
  coach: string;
  category: Exclude<Category, 'All'>;
  day: Day;
  description: string;
  capacity: number;
  level: string;
}

export const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const categories: Category[] = ['All', 'Strength', 'Conditioning', 'Functional', 'Recovery'];

export const schedule: ClassSession[] = [
  // Monday
  { id: 'mon-1', name: 'Strength Fundamentals', time: '06:30', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Monday', description: 'A structured session focusing on the foundational barbell lifts — squat, deadlift, and press. Suitable for all levels.', capacity: 12, level: 'All levels' },
  { id: 'mon-2', name: 'Performance Conditioning', time: '09:00', duration: '45 min', coach: 'Jordan Lee', category: 'Conditioning', day: 'Monday', description: 'High-intensity conditioning using intervals, circuits, and athletic drills to build work capacity.', capacity: 10, level: 'Intermediate' },
  { id: 'mon-3', name: 'Functional Circuit', time: '12:00', duration: '50 min', coach: 'Taylor Brooks', category: 'Functional', day: 'Monday', description: 'A varied circuit combining loaded movement patterns, bodyweight work, and conditioning.', capacity: 14, level: 'All levels' },
  { id: 'mon-4', name: 'Mobility & Recovery', time: '18:00', duration: '45 min', coach: 'Taylor Brooks', category: 'Recovery', day: 'Monday', description: 'Guided mobility work and active recovery to maintain movement quality and manage training load.', capacity: 16, level: 'All levels' },

  // Tuesday
  { id: 'tue-1', name: 'Group Strength', time: '07:00', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Tuesday', description: 'Coached group barbell session with a structured warm-up, main lift, and accessory work.', capacity: 10, level: 'All levels' },
  { id: 'tue-2', name: 'Functional Circuit', time: '10:00', duration: '50 min', coach: 'Jordan Lee', category: 'Functional', day: 'Tuesday', description: 'A varied circuit combining loaded movement patterns, bodyweight work, and conditioning.', capacity: 14, level: 'All levels' },
  { id: 'tue-3', name: 'Personal Training Assessment', time: '14:00', duration: '60 min', coach: 'Taylor Brooks', category: 'Strength', day: 'Tuesday', description: 'Individual movement screening and goal-setting session with a personal training coach.', capacity: 1, level: 'All levels' },
  { id: 'tue-4', name: 'Performance Conditioning', time: '17:30', duration: '45 min', coach: 'Jordan Lee', category: 'Conditioning', day: 'Tuesday', description: 'High-intensity conditioning using intervals, circuits, and athletic drills.', capacity: 10, level: 'Intermediate' },

  // Wednesday
  { id: 'wed-1', name: 'Strength Fundamentals', time: '06:30', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Wednesday', description: 'A structured session focusing on the foundational barbell lifts. Suitable for all levels.', capacity: 12, level: 'All levels' },
  { id: 'wed-2', name: 'Mobility & Recovery', time: '09:30', duration: '45 min', coach: 'Taylor Brooks', category: 'Recovery', day: 'Wednesday', description: 'Guided mobility work and active recovery for movement quality and training load management.', capacity: 16, level: 'All levels' },
  { id: 'wed-3', name: 'Group Strength', time: '12:00', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Wednesday', description: 'Coached group barbell session with warm-up, main lift, and accessory work.', capacity: 10, level: 'All levels' },
  { id: 'wed-4', name: 'Functional Circuit', time: '18:30', duration: '50 min', coach: 'Jordan Lee', category: 'Functional', day: 'Wednesday', description: 'A varied circuit combining loaded movement, bodyweight work, and conditioning.', capacity: 14, level: 'All levels' },

  // Thursday
  { id: 'thu-1', name: 'Performance Conditioning', time: '06:30', duration: '45 min', coach: 'Jordan Lee', category: 'Conditioning', day: 'Thursday', description: 'High-intensity conditioning using intervals and athletic drills to build work capacity.', capacity: 10, level: 'Intermediate' },
  { id: 'thu-2', name: 'Strength Fundamentals', time: '10:00', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Thursday', description: 'A structured session focusing on the foundational barbell lifts. Suitable for all levels.', capacity: 12, level: 'All levels' },
  { id: 'thu-3', name: 'Personal Training Assessment', time: '15:00', duration: '60 min', coach: 'Taylor Brooks', category: 'Strength', day: 'Thursday', description: 'Individual movement screening and goal-setting session with a personal training coach.', capacity: 1, level: 'All levels' },
  { id: 'thu-4', name: 'Mobility & Recovery', time: '18:00', duration: '45 min', coach: 'Taylor Brooks', category: 'Recovery', day: 'Thursday', description: 'Guided mobility and active recovery session to manage load and maintain movement quality.', capacity: 16, level: 'All levels' },

  // Friday
  { id: 'fri-1', name: 'Group Strength', time: '06:30', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Friday', description: 'Coached group barbell session with structured warm-up, main lift, and accessories.', capacity: 10, level: 'All levels' },
  { id: 'fri-2', name: 'Functional Circuit', time: '09:00', duration: '50 min', coach: 'Jordan Lee', category: 'Functional', day: 'Friday', description: 'A varied circuit combining loaded movement patterns, bodyweight work, and conditioning.', capacity: 14, level: 'All levels' },
  { id: 'fri-3', name: 'Performance Conditioning', time: '17:30', duration: '45 min', coach: 'Jordan Lee', category: 'Conditioning', day: 'Friday', description: 'High-intensity conditioning session. End the week strong.', capacity: 10, level: 'Intermediate' },
  { id: 'fri-4', name: 'Strength Fundamentals', time: '19:00', duration: '60 min', coach: 'Alex Morgan', category: 'Strength', day: 'Friday', description: 'Evening strength fundamentals. Structured barbell work for all levels.', capacity: 12, level: 'All levels' },

  // Saturday
  { id: 'sat-1', name: 'Group Strength', time: '08:00', duration: '75 min', coach: 'Alex Morgan', category: 'Strength', day: 'Saturday', description: 'Longer weekend group strength session. Warm-up, main lift, accessories, and cooldown.', capacity: 12, level: 'All levels' },
  { id: 'sat-2', name: 'Functional Circuit', time: '10:00', duration: '50 min', coach: 'Taylor Brooks', category: 'Functional', day: 'Saturday', description: 'Varied functional circuit — a great all-round session to finish the training week.', capacity: 14, level: 'All levels' },
  { id: 'sat-3', name: 'Mobility & Recovery', time: '12:00', duration: '45 min', coach: 'Taylor Brooks', category: 'Recovery', day: 'Saturday', description: 'Weekend wind-down. Mobility, breathing, and recovery work.', capacity: 16, level: 'All levels' },
];
