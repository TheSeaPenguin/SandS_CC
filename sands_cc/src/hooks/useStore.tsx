import { create } from 'zustand';

interface StoreState {
  name: string;
  cp: number;
  improvementPoints: number;
  skillBonus: number;
  resources: {
    hp: number;
    energy: number;
    destiny: number;
  };
  attributes: {
    earth: number;
    water: number;
    fire: number;
    air: number;
  };
  updateAttribute: (attr: string, value: number) => void;
  updateResource: (resource: string, value: number) => void;
  updateName: (newName: string) => void;
  updateCp: (value: number) => void;
  updateImprovementPoints: (points: number) => void;
  incrementImprovementPoints: () => void;
  decrementImprovementPoints: () => void;
  updateSkillBonus: (value: number) => void;
}

export const useStore = create<StoreState>()((set) => ({
  name: 'Unnamed',
  cp: 25,
  improvementPoints: 3,
  skillBonus: 2,
  resources: {
    hp: 14,
    energy: 1,
    destiny: 0
  },
  attributes: {
    earth: 0,
    water: 0,
    fire: 0,
    air: 0
  },
  updateAttribute: (attr: string, value: number) =>
    set((state) => ({ attributes: { ...state.attributes, [attr]: value } })),

  updateResource: (resource: string, value: number) =>
    set((state) => ({ resources: { ...state.resources, [resource]: value } })),

  updateName: (newName: string) => set(() => ({ name: newName })),

  updateCp: (value: number) => set(() => ({ cp: value })),

  updateImprovementPoints: (points: number) =>
    set(() => ({ improvementPoints: points })),
  incrementImprovementPoints: () =>
    set((state) => ({ improvementPoints: state.improvementPoints + 1 })),
  decrementImprovementPoints: () =>
    set((state) => ({ improvementPoints: state.improvementPoints - 1 })),

  updateSkillBonus: (value: number) => set(() => ({ skillBonus: value }))
}));
