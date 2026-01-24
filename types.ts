
export interface MovieBlueprint {
  title: string;
  tagline: string;
  genre: string;
  synopsis: string;
  characters: Character[];
  keyScenes: Scene[];
  estimatedBoxOffice: number;
  estimatedBudget: number;
  marketFitScore: number;
  visualAesthetic: string;
  posterUrl?: string;
  teaserUrl?: string;
  // International Expansion Fields
  primaryTerritory: string;
  territorialRevenue: Record<string, number>;
  localizedTitles: Record<string, string>;
  // ROI Intelligence
  roiVerdict?: string;
  strategicRiskScore?: number;
  // Disruption Fields
  isDisruptive?: boolean;
  disruptionAnalysis?: string;
  // Global Empire Expansion
  globalStrategy: string;
  territoryTactics: Record<string, string>;
  conquestRoadmap: ConquestPhase[];
  globalResonance: Record<string, number>; // Dimensions: Spectacle, Emotion, Philosophy, Modernity
  saturationIndex: number;
}

export interface ConquestPhase {
  phase: string;
  territory: string;
  strategy: string;
  targetRevenue: number;
}

export interface MarketPattern {
  genre: string;
  territory: string;
  roiPotential: number;
  demandIndex: number;
  keyThemes: string[];
}

export interface Character {
  name: string;
  archetype: string;
  description: string;
  actorArchetype: string;
  directorArchetype: string;
}

export interface Scene {
  title: string;
  description: string;
  visualPrompt: string;
}

export interface TeaserSettings {
  visualStyle: string;
  focus: 'opening' | 'midpoint' | 'climax';
  targetTerritory?: string;
}

export enum GenerationStep {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  DRAFTING = 'DRAFTING',
  RENDERING_POSTER = 'RENDERING_POSTER',
  GENERATING_TEASER = 'GENERATING_TEASER',
  FINALIZING = 'FINALIZING'
}
