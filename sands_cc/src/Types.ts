export type Race = {
  name: string;
  type: string;
  description: string;
  appearance: string;
  characteristics?: string;
  benefits: [
    {
      title: string;
      description: string;
    }
  ];
  optionalAbilities?: [
    {
      title: string;
      cpCost: number;
      requirements?: string;
      energyCost: number;
      actionCost: string;
      duration?: string;
      description: string;
    }
  ];
};
