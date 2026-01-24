
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { MovieBlueprint, TeaserSettings, Scene, MarketPattern } from "./types";

export class GeminiService {
  constructor() {}

  async getGlobalIntelligence(): Promise<MarketPattern[]> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Identify the top high-ROI "movie patterns" across all major international territories: 
      Hollywood, Bollywood, East Asia, Europe, Nigeria, and Latin America. 
      Return the most profitable combination for EACH territory. Focus on trends for 2026-2027.`,
      config: {
        thinkingConfig: { thinkingBudget: 4096 }, // Explicit thinking budget for Gemini 3
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
            },
            required: ["genre", "territory", "roiPotential", "demandIndex", "keyThemes"]
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
      contents: `Identify the top 3 highest ROI "movie patterns" for the ${territory} market in the near future. 
      Focus on combinations of genre, themes, and production scale that maximize profit.`,
      config: {
        thinkingConfig: { thinkingBudget: 4096 }, // Explicit thinking budget for Gemini 3
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
            },
            required: ["genre", "territory", "roiPotential", "demandIndex", "keyThemes"]
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  }

  async generateMovieBlueprint(prompt: string, territory: string = "Hollywood", isPatternBreaker: boolean = false): Promise<MovieBlueprint> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const instructions = isPatternBreaker 
      ? `BREAK THE PATTERN: Create a disruptive, anti-hegemonic, and culturally explosive movie blueprint. 
         Ignore market safety. Subvert tropes of ${territory}. Intentionally break established genre rules.`
      : `Generate a high-ROI cinematic blueprint for the ${territory} market. Optimize for global stability and imperial reach.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generate a detailed movie blueprint for an international audience. 
      Base Prompt: "${prompt}"
      Primary Market Focus: ${territory}
      
      ${instructions}

      Requirements:
      - globalResonance: Scores (0-100) for "Spectacle", "Emotion", "Philosophy", and "Modernity".
      - conquestRoadmap: 4 sequential release phases with "phase" name, "territory", "strategy", and "targetRevenue".
      - saturationIndex: % of global audience reached (0-100).
      - territoryTactics: Tactics for "Asia-Pacific", "Americas", "EMEA", "LATAM".
      - ROI Verdict: Strategic analysis.
      - Strategic Risk Score: 0-100.
      - Usual creative fields (synopsis, characters, etc).`,
      config: {
        thinkingConfig: { thinkingBudget: 16384 }, // Explicit thinking budget for reasoning model
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            genre: { type: Type.STRING },
            synopsis: { type: Type.STRING },
            primaryTerritory: { type: Type.STRING },
            roiVerdict: { type: Type.STRING },
            strategicRiskScore: { type: Type.NUMBER },
            isDisruptive: { type: Type.BOOLEAN },
            disruptionAnalysis: { type: Type.STRING },
            globalStrategy: { type: Type.STRING },
            saturationIndex: { type: Type.NUMBER },
            globalResonance: {
              type: Type.OBJECT,
              properties: {
                "Spectacle": { type: Type.NUMBER },
                "Emotion": { type: Type.NUMBER },
                "Philosophy": { type: Type.NUMBER },
                "Modernity": { type: Type.NUMBER }
              },
              required: ["Spectacle", "Emotion", "Philosophy", "Modernity"]
            },
            conquestRoadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING },
                  territory: { type: Type.STRING },
                  strategy: { type: Type.STRING },
                  targetRevenue: { type: Type.NUMBER }
                },
                required: ["phase", "territory", "strategy", "targetRevenue"]
              }
            },
            territoryTactics: {
              type: Type.OBJECT,
              properties: {
                "Asia-Pacific": { type: Type.STRING },
                "Americas": { type: Type.STRING },
                "EMEA": { type: Type.STRING },
                "LATAM": { type: Type.STRING }
              },
              required: ["Asia-Pacific", "Americas", "EMEA", "LATAM"]
            },
            localizedTitles: {
              type: Type.OBJECT,
              properties: {
                "China": { type: Type.STRING },
                "India": { type: Type.STRING },
                "Brazil": { type: Type.STRING },
                "Japan": { type: Type.STRING },
                "Europe": { type: Type.STRING }
              },
              required: ["China", "India", "Brazil", "Japan", "Europe"]
            },
            characters: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  archetype: { type: Type.STRING },
                  description: { type: Type.STRING },
                  actorArchetype: { type: Type.STRING },
                  directorArchetype: { type: Type.STRING }
                },
                required: ["name", "archetype", "description", "actorArchetype", "directorArchetype"]
              }
            },
            keyScenes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  visualPrompt: { type: Type.STRING }
                },
                required: ["title", "description", "visualPrompt"]
              }
            },
            estimatedBoxOffice: { type: Type.NUMBER },
            estimatedBudget: { type: Type.NUMBER },
            territorialRevenue: {
              type: Type.OBJECT,
              properties: {
                "Domestic": { type: Type.NUMBER },
                "Asia-Pacific": { type: Type.NUMBER },
                "EMEA": { type: Type.NUMBER },
                "LATAM": { type: Type.NUMBER }
              }
            },
            marketFitScore: { type: Type.NUMBER },
            visualAesthetic: { type: Type.STRING }
          },
          required: ["title", "tagline", "genre", "synopsis", "primaryTerritory", "characters", "keyScenes", "estimatedBoxOffice", "estimatedBudget", "territorialRevenue", "marketFitScore", "visualAesthetic", "roiVerdict", "strategicRiskScore", "localizedTitles", "isDisruptive", "disruptionAnalysis", "globalStrategy", "territoryTactics", "conquestRoadmap", "globalResonance", "saturationIndex"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  }

  async generateSceneScript(blueprint: MovieBlueprint, scene: Scene): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Write a 1-page professional screenplay scene for the movie "${blueprint.title}". 
      Market Context: ${blueprint.primaryTerritory}
      Scene Title: ${scene.title}
      Description: ${scene.description}
      Format the dialogue according to the cultural nuances of a ${blueprint.primaryTerritory} production.`,
      config: { 
        thinkingConfig: { thinkingBudget: 8192 }, // Reasoning for scriptwriting
        temperature: 0.8 
      }
    });
    return response.text || "Failed to forge script.";
  }

  async generatePoster(blueprint: MovieBlueprint): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `${blueprint.isDisruptive ? 'Disruptive, chaotic, avant-garde' : 'Commercial, high-end'} cinema poster for "${blueprint.title}". 
    Primary Market: ${blueprint.primaryTerritory}. 
    Aesthetic: ${blueprint.visualAesthetic}. 
    Incorporate minimal text in local languages if applicable. Masterpiece quality, 8k.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "3:4" } }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
    }
    throw new Error("No image data returned from Gemini");
  }

  async generateTeaser(blueprint: MovieBlueprint, settings: TeaserSettings): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let sceneIndex = 0;
    if (settings.focus === 'midpoint') sceneIndex = Math.floor(blueprint.keyScenes.length / 2);
    if (settings.focus === 'climax') sceneIndex = blueprint.keyScenes.length - 1;
    
    const selectedScene = blueprint.keyScenes[sceneIndex] || blueprint.keyScenes[0];
    const prompt = `${blueprint.isDisruptive ? 'Experimental and chaotic' : 'Sleek and professional'} teaser for "${blueprint.title}". Market: ${blueprint.primaryTerritory}. Style: ${settings.visualStyle || blueprint.visualAesthetic}. Scene: ${selectedScene.visualPrompt}.`;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
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
}
