
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { MovieBlueprint, TeaserSettings, Scene, MarketPattern } from "./types";

export class GeminiService {
  constructor() {}

  async generateMovieBlueprint(
    prompt: string, 
    territory: string = "Philippines (Billboard HQ)", 
    isPatternBreaker: boolean = false,
    customDNA?: { pacing: number; colorSaturation: number; darkness: number; complexity: number }
  ): Promise<MovieBlueprint> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const instructions = `LEADER PERSONA: Ralph Luther Maypa (Year of the Horse 2002).
    HQ: 103 Libis Talisay Dulo, Barangay 12, Caloocan City.
    MISSION: Uplift Barangay 12 through a successful Gaming & Philanthropy Empire.
    BANK: Butch Bank (The Global Liquidity Node).
    THEME: Taylor Gang, Wiz Khalifa, and the "Young, Wild & Free" energy.
    TACTIC: Use Billboard Philippines and the Taylor Gang network to drive global attention to "Empire Games".
    STYLE: High-Stakes Tech-Humanitarian + Global Financial Dominance + Khalifa Cloud Aesthetic.`;

    const dnaConstraint = customDNA ? 
      `CINEMATIC DNA: Pacing: ${customDNA.pacing}, Saturation: ${customDNA.colorSaturation}, Darkness: ${customDNA.darkness}, Complexity: ${customDNA.complexity}.` : '';

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
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
        thinkingConfig: { thinkingBudget: 16384 },
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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const artists = blueprint.artistCoalition?.map(a => a.name).join(", ");
    const prompt = `Billboard Philippines magazine cover featuring Ralph Luther Maypa and Wiz Khalifa with Taylor Gang. Cinematic gold leaf aesthetic, "Young, Wild & Free" graffiti in the background. High-end financial empire visual mixed with street luxury. Text: "TAYLOR GANG X BUTCH EMPIRE".`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
    }
    throw new Error("Poster generation failed.");
  }

  async generateTeaser(blueprint: MovieBlueprint, settings: TeaserSettings): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Cinematic 1080p video: Wiz Khalifa and Ralph Maypa walking through Barangay 12, surrounded by the Taylor Gang. They are laughing and handing out gold Butch Bank cheques. Visual style: "Young, Wild & Free". High energy, sun-drenched, vibrant, epic scale.`;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: { 
        numberOfVideos: 1, 
        resolution: '1080p', 
        aspectRatio: '16:9' 
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }

  async getGlobalIntelligence(): Promise<MarketPattern[]> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Global trends in streetwear, gaming, and Wiz Khalifa-style philanthropy 2025.",
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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Hip-hop culture and Billboard trends in ${territory}, specifically Taylor Gang influence.`,
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
