import { create } from 'zustand';
import { mockFarms } from '../data/mockFarms';
import { Farm } from '../types';

interface FarmState {
  farms: Farm[];
  addFarm: (farm: Farm) => void;
  updateFarm: (farmId: string, updates: Partial<Farm>) => void;
  deleteFarm: (farmId: string) => void;
}

export const useFarmStore = create<FarmState>((set) => ({
  farms: mockFarms,
  addFarm: (farm) => set((state) => ({ farms: [...state.farms, farm] })),
  updateFarm: (farmId, updates) =>
    set((state) => ({
      farms: state.farms.map((farm) =>
        farm.id === farmId ? { ...farm, ...updates } : farm
      ),
    })),
  deleteFarm: (farmId) =>
    set((state) => ({
      farms: state.farms.filter((farm) => farm.id !== farmId),
    })),
}));