import { create } from 'zustand';

interface StoreState {
  attributes: {
    earth: number;
    water: number;
    fire: number;
    air: number;
  };
  updateAttribute: (attr: string, value: number) => void;
}

export const useStore = create<StoreState>()((set) => ({
  attributes: {
    earth: 0,
    water: 0,
    fire: 0,
    air: 0
  },
  updateAttribute: (attr: string, value: number) =>
    set((state) => ({ attributes: { ...state.attributes, [attr]: value } }))
}));
