// src/data/memberships.ts
// All prices and features are fictional portfolio-demonstration content.

export interface MembershipFeature {
  text: string;
}

export interface Membership {
  id: string;
  name: string;
  price: string;
  period: string;
  features: MembershipFeature[];
  cta: string;
  recommended: boolean;
}

export const memberships: Membership[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '₹2,499',
    period: 'per month',
    features: [
      { text: 'Gym floor access' },
      { text: 'Standard equipment access' },
      { text: 'Independent training' },
    ],
    cta: 'Enquire About Essential',
    recommended: false,
  },
  {
    id: 'performance',
    name: 'Performance',
    price: '₹3,999',
    period: 'per month',
    features: [
      { text: 'Gym floor access' },
      { text: 'Group training sessions' },
      { text: 'Structured training guidance' },
    ],
    cta: 'Enquire About Performance',
    recommended: true,
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: '₹5,499',
    period: 'per month',
    features: [
      { text: 'Gym floor access' },
      { text: 'Group training sessions' },
      { text: 'Priority session enquiries' },
      { text: 'Additional coaching guidance' },
    ],
    cta: 'Enquire About Unlimited',
    recommended: false,
  },
];
