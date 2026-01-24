
import React, { useState, useEffect } from 'react';
import { Send, Video, Settings2, Sparkles, Target, Globe, Loader2, Skull, ShieldCheck, Zap } from 'lucide-react';
import { TeaserSettings, MarketPattern } from '../types';
import { GeminiService } from '../geminiService';
import MarketIntelligence from './MarketIntelligence';

interface GeneratorFormProps {
  onGenerate: (prompt: string, includeVideo: boolean, teaserSettings: TeaserSettings, territory: string, isPatternBreaker: boolean) => void;
  isGenerating: boolean;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, isGenerating }) => {
  const [prompt, setPrompt] = useState('');
  const [includeVideo, setIncludeVideo] = useState(false);
  const [isPatternBreaker, setIsPatternBreaker] = useState(false);
  const [visualStyle, setVisualStyle] = useState('');
  const [focus, setFocus] = useState<'opening' | 'midpoint' | 'climax'>('opening');
  const [territory, setTerritory] = useState('Hollywood (Global)');
  const [patterns, setPatterns] = useState<MarketPattern[]>([]);
  const [globalPatterns, setGlobalPatterns] = useState<MarketPattern[]>([]);
  const [isLoadingPatterns, setIsLoadingPatterns] = useState(false);
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(true);

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
      onGenerate(prompt, includeVideo, { visualStyle, focus }, territory, isPatternBreaker);
    }
  };

  const handleSelectPattern = (pattern: MarketPattern) => {
    setPrompt(`A ${pattern.genre} designed for the ${pattern.territory} market. Key themes: ${pattern.keyThemes.join(', ')}. Optimize for maximal ROI.`);
    setTerritory(pattern.territory);
  };

  const territories = [
    "Hollywood (Global)",
    "Bollywood (South Asia)",
    "East Asian (CN/JP/KR)",
    "Euro-Cinema (France/Italy/UK)",
    "Nollywood (West Africa)",
    "Neo-LATAM (Mexico/Brazil)"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${isPatternBreaker ? 'from-rose-500 to-amber-600' : 'from-cyan-500 to-purple-600'} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
          
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className={`p-4 ${isPatternBreaker ? 'bg-rose-950/20' : 'bg-slate-900/50'} border-b border-slate-800 flex items-center justify-between gap-4 transition-colors duration-500`}>
              <div className="flex-1 space-y-1">
                <label className="text-[10px] mono text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Target Production Hegemony
                </label>
                <select 
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                >
                  {territories.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <button
                type="button"
                onClick={() => setIsPatternBreaker(!isPatternBreaker)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-500 mono text-[10px] font-black uppercase tracking-[0.2em] ${
                  isPatternBreaker 
                    ? 'bg-rose-500 border-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]' 
                    : 'bg-slate-900 border-slate-700 text-slate-500 hover:text-white'
                }`}
              >
                {isPatternBreaker ? <Skull className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                {isPatternBreaker ? 'PATTERN BREAKER ACTIVE' : 'STEADY HEGEMONY'}
              </button>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={isPatternBreaker ? "Initiate narrative chaos..." : "Enter the creative spark for your international empire..."}
              className={`w-full bg-transparent p-6 text-white text-lg focus:outline-none min-h-[200px] resize-none placeholder:text-slate-700 font-light leading-relaxed transition-all duration-500 ${isPatternBreaker ? 'border-l-4 border-rose-500/50' : ''}`}
              disabled={isGenerating}
            />
            
            {includeVideo && (
              <div className="px-6 py-4 bg-slate-900/30 border-t border-slate-800/50 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Settings2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-[10px] font-black mono text-slate-400 uppercase tracking-widest">Advanced Teaser Config</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold tracking-widest">
                      <Sparkles className="w-3 h-3" />
                      Visual Style Override
                    </label>
                    <input 
                      type="text"
                      value={visualStyle}
                      onChange={(e) => setVisualStyle(e.target.value)}
                      placeholder="e.g. Noir, VHS, Hyper-saturated"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold tracking-widest">
                      <Target className="w-3 h-3" />
                      Dramatic Focus
                    </label>
                    <div className="flex gap-2">
                      {(['opening', 'midpoint', 'climax'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFocus(opt)}
                          className={`flex-1 py-2 text-[10px] font-black mono uppercase tracking-widest rounded-lg border transition-all ${
                            focus === opt 
                              ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' 
                              : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className={`flex items-center justify-between p-4 ${isPatternBreaker ? 'bg-rose-950/20' : 'bg-slate-900/50'} border-t border-slate-800 transition-colors duration-500`}>
              <label className="flex items-center gap-3 cursor-pointer group/label">
                <div className={`relative w-12 h-6 rounded-full transition-colors ${includeVideo ? (isPatternBreaker ? 'bg-rose-600' : 'bg-cyan-600') : 'bg-slate-700'}`}>
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={includeVideo}
                    onChange={() => setIncludeVideo(!includeVideo)}
                  />
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${includeVideo ? 'translate-x-6' : ''}`}></div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Video className={`w-4 h-4 ${includeVideo ? (isPatternBreaker ? 'text-rose-400' : 'text-cyan-400') : 'text-slate-500'}`} />
                  <span className={`text-xs font-bold uppercase tracking-widest mono ${includeVideo ? (isPatternBreaker ? 'text-rose-400' : 'text-cyan-400') : 'text-slate-500'}`}>
                    Render Teaser (Veo)
                  </span>
                </div>
              </label>

              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                  isGenerating || !prompt.trim() 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : isPatternBreaker 
                      ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]'
                }`}
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {isPatternBreaker ? 'FRACTURING...' : 'ORCHESTRATING...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {isPatternBreaker ? 'INITIATE FRACTURE' : 'INITIATE GLOBAL PROTOCOL'}
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setShowGlobalLeaderboard(!showGlobalLeaderboard)}
            className={`text-[10px] mono font-black uppercase tracking-widest flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
              showGlobalLeaderboard ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}
          >
            <Zap className="w-3 h-3" /> {showGlobalLeaderboard ? 'Global ROI Top Patterns' : 'Show Multi-Region Stats'}
          </button>
        </div>
        
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
