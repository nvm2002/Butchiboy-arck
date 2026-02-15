
declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey?: () => Promise<boolean>;
      openSelectKey?: () => Promise<void>;
    };
  }
}

export interface BillboardCampaign {
  location: string;
  visualConcept: string;
  estimatedImpression: string;
  targetPartner: string;
  gameLink?: string;
  conversionStrategy?: string;
}

export interface GamingEmpireNode {
  title: string;
  platform: 'Mobile' | 'PC' | 'Console' | 'Web3' | 'Real-World';
  monetizationModel: string;
  mechanics: string;
  projectedDailyRevenue: number;
}

export interface MediaTarget {
  entity: string;
  broadcastGoal: string;
  reachMetric: string;
}

export interface ArtistPartner {
  name: string;
  role: string;
  influenceMetric: string;
  collabConcept: string;
}

export interface Challenge {
  title: string;
  mechanics: string;
  targetParticipants: string;
  aidPrize: string;
  estimatedCost: number;
}

export interface AidPackage {
  item: string;
  quantity: string;
  priorityLevel: 'Critical' | 'High' | 'Standard';
}

export interface MovieBlueprint {
  title: string;
  tagline: string;
  genre: string;
  synopsis: string;
  characters: Character[];
  keyScenes: Scene[];
  challenges: Challenge[];
  aidInventory: AidPackage[];
  artistCoalition: ArtistPartner[];
  gamingEmpire: GamingEmpireNode[];
  legendaryCheque?: {
    serialNumber: string;
    manifestationQuote: string;
    issuingBranch: string;
    securityLevel: string;
  };
  estimatedBoxOffice: number;
  estimatedBudget: number;
  marketingSpend: number;
  marketFitScore: number;
  visualAesthetic: string;
  posterUrl?: string;
  teaserUrl?: string;
  primaryTerritory: string;
  territorialRevenue: Record<string, number>;
  localizedTitles: Record<string, string>;
  roiVerdict?: string;
  strategicRiskScore?: number;
  isDisruptive?: boolean;
  disruptionAnalysis?: string;
  globalStrategy: string;
  territoryTactics: Record<string, string>;
  upliftmentRoadmap: ConquestPhase[];
  globalResonance: Record<string, number>;
  saturationIndex: number;
  revenueProjection: RevenuePoint[];
  demographicResonance: DemographicPoint[];
  sentimentKeywords: string[];
  visualDNA: {
    pacing: number;
    colorSaturation: number;
    darkness: number;
    complexity: number;
  };
  optimalReleaseWindow: {
    season: string;
    reasoning: string;
  };
  budgetBreakdown: { category: string; amount: number }[];
  revenueStreams: { stream: string; projection: number }[];
  breakevenWeek: number;
  missionHQ: string;
  leaderIdentity: string;
  philanthropyPlan: {
    objective: string;
    targetCommunity: string;
    resourceAllocation: number;
    impactType: 'Direct Aid' | 'Infrastructure' | 'Education' | 'Entertainment';
  };
  socialImpactGoals: string[];
  internationalReachStrategy: string;
  viralHook: string;
  billboardCampaigns: BillboardCampaign[];
  globalMediaTargets: MediaTarget[];
}

export interface RevenuePoint {
  week: number;
  amount: number;
}

export interface DemographicPoint {
  segment: string;
  score: number;
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
  sceneArchetype?: string;
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
