export type Race = {
  name: string;
  type: string;
  description: string;
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
      energyCost: number;
      actionCost: string;
      description: string;
    }
  ];
};
