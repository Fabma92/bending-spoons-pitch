export interface SlideProps {
  isActive: boolean;
}

// Enums are not supported in 'erasableSyntaxOnly' mode during deployment.
// We use a const object instead, which achieves the same goal but is standard JavaScript.
export const SlideType = {
  INTRO: 0,
  HISTORY: 1,
  WHY_BS: 2,
  THE_BLEND: 3,
  IMPACT_DATA: 4,
  CHAOS_THEORY: 5,
  TEAM: 6,
  CONTACT: 7
} as const;

export type SlideType = typeof SlideType[keyof typeof SlideType];
