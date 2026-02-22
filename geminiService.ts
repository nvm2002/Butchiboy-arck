
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { MovieBlueprint, TeaserSettings, Scene, MarketPattern } from "./types";

export class GeminiService {
  constructor() { }

  private static isMockMode(apiKey: string): boolean {
    return !apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.length < 10;
  }

  async generateBlueprint(
    prompt: string,
    territory: string = "Philippines (Billboard HQ)",
    isPatternBreaker: boolean = false,
    customDNA?: { pacing: number; colorSaturation: number; darkness: number; complexity: number }
  ): Promise<MovieBlueprint> {
    const apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";

    if (GeminiService.isMockMode(apiKey)) {
      console.warn("Gemini Service: No valid API Key found. Running in BUTCH MOCK MODE.");
      return {
        title: "Sovereign Logistics: Barangay 12 Dispatch",
        tagline: "High-stakes humanitarian engineering for the global masa.",
        genre: "Cyberpunk Philanthropy",
        synopsis: "The ultimate blueprint for street-level luxury and community upliftment.",
        characters: [{ name: "Ralph Luther Maypa", archetype: "Visionary CEO", description: "Year of the Horse 2002 Leader.", actorArchetype: "Philanthropist", directorArchetype: "Auteur" }],
        keyScenes: [{ title: "The Handshake", description: "Wiz Khalifa and Ralph Maypa synchronize signals at Libis Talisay.", visualPrompt: "Cinematic gold leaf over Barangay 12" }],
        challenges: [],
        aidInventory: [],
        artistCoalition: [],
        gamingEmpire: [],
        estimatedBoxOffice: 1250000000,
        estimatedBudget: 50000000,
        marketingSpend: 10000000,
        marketFitScore: 99,
        visualAesthetic: "Obsidian & Gold",
        primaryTerritory: "Philippines",
        territorialRevenue: {},
        localizedTitles: {},
        globalStrategy: "Satellite Dominance",
        territoryTactics: {},
        upliftmentRoadmap: [],
        globalResonance: {},
        saturationIndex: 0.98,
        revenueProjection: [],
        demographicResonance: [],
        sentimentKeywords: ["Sovereign", "Luxury", "Masa"],
        visualDNA: { pacing: 0.8, colorSaturation: 0.9, darkness: 0.2, complexity: 0.7 },
        optimalReleaseWindow: { season: "Lunar New Year", reasoning: "High resonance with Horse status." },
        budgetBreakdown: [],
        revenueStreams: [],
        breakevenWeek: 3,
        missionHQ: "103 Libis Talisay",
        leaderIdentity: "Ralph Maypa",
        philanthropyPlan: { objective: "Direct Aid", targetCommunity: "Brgy 12", resourceAllocation: 500000, impactType: "Direct Aid" },
        socialImpactGoals: ["100% Connectivity"],
        internationalReachStrategy: "Meta Satellite Relay",
        viralHook: "Gold Cheque Protocol",
        billboardCampaigns: [],
        globalMediaTargets: []
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    const instructions = `LEADER PERSONA: Ralph Luther Maypa (Year of the Horse 2002).
    HQ: 103 Libis Talisay Dulo, Barangay 12, Caloocan City.
    MISSION: Build a success blueprint for an EMPIRE that dominates markets through CASHFLOW and UPLIFTS the masa.
    CORE DIRECTIVE: Maximize global liquidity to help as many people as possible starting from Barangay 12.
    BANK: Butch Bank (The Global Liquidity Node).
    THEME: Taylor Gang, Wiz Khalifa, and the "Young, Wild & Free" energy.
    TACTIC: Use Billboard Philippines and the Taylor Gang network to drive global attention to "Empire Games".
    STYLE: High-Stakes Tech-Humanitarian + Global Financial Dominance + Khalifa Cloud Aesthetic.`;

    const dnaConstraint = customDNA ?
      `CINEMATIC DNA: Pacing: ${customDNA.pacing}, Saturation: ${customDNA.colorSaturation}, Darkness: ${customDNA.darkness}, Complexity: ${customDNA.complexity}.` : '';

    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: `Design a global mission blueprint focusing on GAMING, REVENUE, and the "Young, Wild & Free" lifestyle for Barangay 12.
      Objective: "${prompt}"
      Requirement: The artist coalition MUST include Wiz Khalifa and the Taylor Gang collective.
      Requirement: Create 4 "Empire Games" infused with street culture and philanthropy.
      Requirement: Generate "Butch Bank" Legendary Cheque details.
      ${dnaConstraint}
      
      Requirements:
      - legendaryCheque: Specific Butch Bank metadata.
      - gamingEmpire: List 4 specific games with monetization.
      - billboardCampaigns: 3 strategies featuring Wiz Khalifa.
      - artistCoalition: 4 global celebs, including Wiz Khalifa and Taylor Gang.
      - revenueStreams: Detailed financial nodes.`,
      config: {
        systemInstruction: instructions,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            genre: { type: Type.STRING },
            synopsis: { type: Type.STRING },
            missionHQ: { type: Type.STRING },
            leaderIdentity: { type: Type.STRING },
            viralHook: { type: Type.STRING },
            legendaryCheque: {
              type: Type.OBJECT,
              properties: {
                serialNumber: { type: Type.STRING },
                manifestationQuote: { type: Type.STRING },
                issuingBranch: { type: Type.STRING },
                securityLevel: { type: Type.STRING }
              }
            },
            gamingEmpire: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  platform: { type: Type.STRING },
                  monetizationModel: { type: Type.STRING },
                  mechanics: { type: Type.STRING },
                  projectedDailyRevenue: { type: Type.NUMBER }
                }
              }
            },
            artistCoalition: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  role: { type: Type.STRING },
                  influenceMetric: { type: Type.STRING },
                  collabConcept: { type: Type.STRING }
                }
              }
            },
            billboardCampaigns: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  location: { type: Type.STRING },
                  visualConcept: { type: Type.STRING },
                  estimatedImpression: { type: Type.STRING },
                  targetPartner: { type: Type.STRING },
                  gameLink: { type: Type.STRING },
                  conversionStrategy: { type: Type.STRING }
                }
              }
            },
            aidInventory: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  item: { type: Type.STRING },
                  quantity: { type: Type.STRING },
                  priorityLevel: { type: Type.STRING }
                }
              }
            },
            upliftmentRoadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING },
                  territory: { type: Type.STRING },
                  strategy: { type: Type.STRING },
                  targetRevenue: { type: Type.NUMBER }
                }
              }
            },
            visualDNA: {
              type: Type.OBJECT,
              properties: {
                pacing: { type: Type.NUMBER },
                colorSaturation: { type: Type.NUMBER },
                darkness: { type: Type.NUMBER },
                complexity: { type: Type.NUMBER }
              }
            },
            revenueStreams: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  stream: { type: Type.STRING },
                  projection: { type: Type.NUMBER }
                }
              }
            }
          },
          required: ["title", "tagline", "legendaryCheque", "gamingEmpire", "billboardCampaigns", "upliftmentRoadmap", "aidInventory", "visualDNA"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  }

  async generatePoster(blueprint: MovieBlueprint): Promise<string> {
    const apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (GeminiService.isMockMode(apiKey)) {
      return "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop";
    }
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Billboard Philippines magazine cover featuring Ralph Luther Maypa and Wiz Khalifa with Taylor Gang. Cinematic gold leaf aesthetic, "Young, Wild & Free" graffiti in the background. High-end financial empire visual mixed with street luxury. Text: "TAYLOR GANG X BUTCH EMPIRE".`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        // Note: as of current SDK, image generation via generateContent is experimental or specific to certain models
        // We'll keep the structure but ensure model is 2.0
      }
    });
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
    }
    throw new Error("Poster generation failed.");
  }

  async generateTeaser(blueprint: MovieBlueprint, settings: TeaserSettings): Promise<string> {
    const apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (GeminiService.isMockMode(apiKey)) {
      return "https://player.vimeo.com/external/mock-teaser.mp4"; // Placeholder
    }
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Cinematic 1080p video: Wiz Khalifa and Ralph Maypa walking through Barangay 12, surrounded by the Taylor Gang. They are laughing and handing out gold Butch Bank cheques. Visual style: "Young, Wild & Free". High energy, sun-drenched, vibrant, epic scale.`;

    let operation = await (ai.models as any).generateVideos({
      model: 'gemini-2.0-flash',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await (ai.operations as any).getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const response = await fetch(`${downloadLink}&key=${(import.meta as any).env.VITE_API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }

  async getGlobalIntelligence(): Promise<MarketPattern[]> {
    const apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (GeminiService.isMockMode(apiKey)) {
      return [
        { genre: "Cyberpunk", territory: "Global", roiPotential: 8.5, demandIndex: 0.9, keyThemes: ["Luxury", "Impact"] },
        { genre: "Streetwear", territory: "PH", roiPotential: 12.2, demandIndex: 0.95, keyThemes: ["Masa", "Gold"] }
      ];
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ parts: [{ text: "Global trends in streetwear, gaming, and Wiz Khalifa-style philanthropy 2025." }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              genre: { type: Type.STRING },
              territory: { type: Type.STRING },
              roiPotential: { type: Type.NUMBER },
              demandIndex: { type: Type.NUMBER },
              keyThemes: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  }

  async getMarketIntelligence(territory: string): Promise<MarketPattern[]> {
    const apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (GeminiService.isMockMode(apiKey)) {
      return [
        { genre: "Hip-Hop", territory: territory, roiPotential: 9.8, demandIndex: 0.85, keyThemes: ["Taylor Gang", "Influence"] },
        { genre: "Street Culture", territory: territory, roiPotential: 11.5, demandIndex: 0.92, keyThemes: ["Masa", "Luxury"] }
      ];
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ parts: [{ text: `Hip-hop culture and Billboard trends in ${territory}, specifically Taylor Gang influence.` }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              genre: { type: Type.STRING },
              territory: { type: Type.STRING },
              roiPotential: { type: Type.NUMBER },
              demandIndex: { type: Type.NUMBER },
              keyThemes: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  }
}
