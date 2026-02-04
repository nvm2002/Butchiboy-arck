
import React, { useState, useEffect } from 'react';
import { Send, Video, Settings2, Sparkles, Target, Globe, Loader2, Skull, ShieldCheck, Zap, Dna, Sliders, Timer, Film, Flame } from 'lucide-react';
import { TeaserSettings, MarketPattern } from '../types';
import { GeminiService } from '../geminiService';
import MarketIntelligence from './MarketIntelligence';

interface GeneratorFormProps {
  onGenerate: (
    prompt: string, 
    includeVideo: boolean, 
    teaserSettings: TeaserSettings, 
    territory: string, 
    isPatternBreaker: boolean,
    visualDNA: { pacing: number; colorSaturation: number; darkness: number; complexity: number }
  ) => void;
  isGenerating: boolean;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, isGenerating }) => {
  const [prompt, setPrompt] = useState('');
  const [includeVideo, setIncludeVideo] = useState(false);
  const [isPatternBreaker, setIsPatternBreaker] = useState(false);
  const [visualStyle, setVisualStyle] = useState('Taylor Gang Visuals');
  const [sceneArchetype, setSceneArchetype] = useState('Young, Wild & Free Party');
  const [focus, setFocus] = useState<'opening' | 'midpoint' | 'climax'>('opening');
  const [territory, setTerritory] = useState('Philippines (Billboard HQ)');
  const [patterns, setPatterns] = useState<MarketPattern[]>([]);
  const [globalPatterns, setGlobalPatterns] = useState<MarketPattern[]>([]);
  const [isLoadingPatterns, setIsLoadingPatterns] = useState(false);
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(true);

  // visualDNA State
  const [dna, setDna] = useState({
    pacing: 70,
    colorSaturation: 85,
    darkness: 20,
    complexity: 60
  });

  const visualStyles = [
    "Taylor Gang Visuals",
    "Cyberpunk Caloocan",
    "Golden Era Philanthropy",
    "Noir Dagat-Dagatan",
    "Billboard Magazine Aesthetic",
    "VHS Retro Archive",
    "Hyper-Vibrant Global Signal"
  ];

  const archetypes = [
    "Young, Wild & Free Party",
    "Global Artist Summit",
    "The Great Aid Distribution",
    "Billboard PH Billboard Takeover",
    "Ralph Maypa Leadership Speech",
    "Community Game Climax"
  ];

  useEffect(() => {
    fetchGlobalPatterns();
    fetchPatterns();
  }, [territory]);

  const fetchGlobalPatterns = async () => {
    try {
      const service = new GeminiService();
      const data = await service.getGlobalIntelligence();
      setGlobalPatterns(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPatterns = async () => {
    setIsLoadingPatterns(true);
    try {
      const service = new GeminiService();
      const data = await service.getMarketIntelligence(territory);
      setPatterns(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingPatterns(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt, includeVideo, { visualStyle, focus, sceneArchetype }, territory, isPatternBreaker, dna);
    }
  };

  const applyTaylorGangPreset = () => {
    setDna({
      pacing: 95,
      colorSaturation: 100,
      darkness: 10,
      complexity: 80
    });
    setVisualStyle("Taylor Gang Visuals");
    setSceneArchetype("Young, Wild & Free Party");
    setPrompt("Establish a Taylor Gang base in Brgy 12 with Wiz Khalifa to manifest global wealth.");
  };

  const handleSelectPattern = (pattern: MarketPattern) => {
    setPrompt(`A ${pattern.genre} mission in ${pattern.territory}. Core themes: ${pattern.keyThemes.join(', ')}. Ralph Maypa x Taylor Gang x Billboard PH.`);
    setTerritory(pattern.territory);
  };

  const territories = [
    "Philippines (Billboard HQ)",
    "Hollywood (Global)",
    "East Asian (CN/JP/KR)",
    "Euro-Cinema (France/Italy/UK)"
  ];

  const handleDnaChange = (key: keyof typeof dna, value: number) => {
    setDna(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <form onSubmit={handleSubmit} className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${isPatternBreaker ? 'from-rose-500 to-amber-600' : 'from-yellow-400 to-red-600'} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
          
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className={`p-4 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between gap-4 transition-colors duration-500`}>
              <div className="flex-1 space-y-1">
                <label className="text-[10px] mono text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Broadcast Origin
                </label>
                <select 
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                >
                  {territories.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={applyTaylorGangPreset}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-500/50 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-all mono text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  <Flame className="w-3 h-3" /> TAYLOR GANG MODE
                </button>
                <button
                  type="button"
                  onClick={() => setIsPatternBreaker(!isPatternBreaker)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-500 mono text-[10px] font-black uppercase tracking-[0.2em] ${
                    isPatternBreaker 
                      ? 'bg-rose-500 border-rose-400 text-white' 
                      : 'bg-slate-900 border-slate-700 text-slate-500'
                  }`}
                >
                  {isPatternBreaker ? <Skull className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                  {isPatternBreaker ? 'CHAOS SIGNAL' : 'NOBLE SIGNAL'}
                </button>
              </div>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What is the mission objective for Ralph Maypa and the Taylor Gang?"
              className="w-full bg-transparent p-6 text-white text-lg focus:outline-none min-h-[160px] resize-none placeholder:text-slate-700 font-light"
              disabled={isGenerating}
            />

            <div className="px-6 py-4 bg-slate-900/20 border-t border-slate-800/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Dna className="w-4 h-4 text-yellow-500" />
                    <h4 className="text-[10px] font-black mono text-slate-400 uppercase tracking-widest">Empire DNA Calibration</h4>
                  </div>
                  <Timer className="w-3 h-3 text-red-500" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                   {(Object.entries(dna) as [keyof typeof dna, number][]).map(([key, value]) => (
                     <div key={key} className="space-y-2 group/slider">
                        <div className="flex justify-between items-center">
                           <label className="text-[8px] mono text-slate-500 uppercase font-black group-hover/slider:text-yellow-500 transition-colors">{key}</label>
                           <span className="text-[8px] mono text-yellow-500 font-black">{value}%</span>
                        </div>
                        <div className="relative flex items-center">
                          <input 
                             type="range" 
                             min="0" 
                             max="100" 
                             value={value} 
                             onChange={(e) => handleDnaChange(key, parseInt(e.target.value))}
                             className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                          />
                        </div>
                     </div>
                   ))}
                </div>
            </div>
            
            {includeVideo && (
              <div className="px-6 py-4 bg-slate-900/40 border-t border-slate-800/50 space-y-4">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-red-400" />
                  <h4 className="text-[10px] font-black mono text-slate-400 uppercase tracking-widest">Veo Teaser Lab</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] mono text-slate-500 uppercase font-bold tracking-widest">Visual Style</label>
                    <select 
                      value={visualStyle}
                      onChange={(e) => setVisualStyle(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      {visualStyles.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] mono text-slate-500 uppercase font-bold tracking-widest">Scene Archetype</label>
                    <select 
                      value={sceneArchetype}
                      onChange={(e) => setSceneArchetype(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      {archetypes.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between p-4 bg-slate-900/50 border-t border-slate-800">
              <label className="flex items-center gap-3 cursor-pointer group/toggle">
                <div className={`relative w-12 h-6 rounded-full transition-colors ${includeVideo ? 'bg-yellow-600' : 'bg-slate-700'}`}>
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={includeVideo}
                    onChange={() => setIncludeVideo(!includeVideo)}
                  />
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${includeVideo ? 'translate-x-6' : ''}`}></div>
                </div>
                <span className={`text-[10px] font-black uppercase mono transition-colors ${includeVideo ? 'text-yellow-400' : 'text-slate-500'} group-hover/toggle:text-yellow-300`}>
                  Render Cinematic Signal
                </span>
              </label>

              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black transition-all ${
                  isGenerating || !prompt.trim() 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : 'bg-yellow-600 hover:bg-yellow-500 text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                }`}
              >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                {isGenerating ? 'ANALYZING SIGNAL...' : 'DEPLOY EMPIRE MISSION'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <MarketIntelligence 
          patterns={showGlobalLeaderboard && globalPatterns.length > 0 ? globalPatterns : patterns} 
          isLoading={isLoadingPatterns} 
          onSelectPattern={handleSelectPattern} 
          isGlobalView={showGlobalLeaderboard}
        />
      </div>
    </div>
  );
};

export default GeneratorForm;
