'use client';

import { createContext, useContext, ReactNode } from 'react';

interface MagicEffectsContextType {
  triggerFlowerBurst: (x: number, y: number) => void;
  triggerGoldenGlow: (x: number, y: number) => void;
}

const MagicEffectsContext = createContext<MagicEffectsContextType | null>(null);

export function useMagicEffects() {
  const context = useContext(MagicEffectsContext);
  return context;
}

// All effects disabled - clean minimal design
export function MagicEffectsProvider({ children }: { children: ReactNode }) {
  // Empty functions - no effects
  const triggerFlowerBurst = () => {};
  const triggerGoldenGlow = () => {};

  return (
    <MagicEffectsContext.Provider value={{ triggerFlowerBurst, triggerGoldenGlow }}>
      {children}
    </MagicEffectsContext.Provider>
  );
}
