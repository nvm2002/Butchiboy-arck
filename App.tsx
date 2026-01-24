
import React, { useState, useEffect, useCallback } from 'react';
import { MovieBlueprint, GenerationStep, TeaserSettings } from './types';
import { GeminiService } from './geminiService';
import BlueprintViewer from './components/BlueprintViewer';
import GeneratorForm from './components/GeneratorForm';
import { Layout, Film, Cpu, Zap, Globe, ShieldCheck, AlertCircle, X, TrendingUp } from 'lucide-react';

const App: React.FC = () => {
  const [apiKeySelected, setApiKeySelected] = useState<boolean>(false);
  const [blueprint, setBlueprint] = useState<MovieBlueprint | null>(null);
  const [step, setStep] = useState<GenerationStep>(GenerationStep.IDLE);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // @ts-ignore
      if (window.aistudio?.hasSelectedApiKey) {
        // @ts-ignore
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setApiKeySelected(hasKey);
      } else {
        setApiKeySelected(true); 
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    // @ts-ignore
    if (window.aistudio?.openSelectKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      setApiKeySelected(true);
      setError(null);
    }
  };

  const generateEmpire = async (userPrompt: string, includeVideo: boolean, teaserSettings: TeaserSettings, territory: string, isPatternBreaker: boolean) => {
    try {
      setError(null);
      
      if (includeVideo && !apiKeySelected) {
        setError("Veo video generation requires a billing-enabled API key. Please initiate auth.");
        return;
      }

      setStep(GenerationStep.ANALYZING);
      const service = new GeminiService();
      
      setStep(GenerationStep.DRAFTING);
      const newBlueprint = await service.generateMovieBlueprint(userPrompt, territory, isPatternBreaker);
      setBlueprint(newBlueprint);

      setStep(GenerationStep.RENDERING_POSTER);
      const posterUrl = await service.generatePoster(newBlueprint);
      setBlueprint(prev => prev ? ({ ...prev, posterUrl }) : null);

      if (includeVideo) {
        setStep(GenerationStep.GENERATING_TEASER);
        try {
          const teaserUrl = await service.generateTeaser(newBlueprint, teaserSettings);
          setBlueprint(prev => prev ? ({ ...prev, teaserUrl }) : null);
        } catch (vidErr: any) {
          console.error("Video generation failed:", vidErr);
        }
      }

      setStep(GenerationStep.FINALIZING);
      setTimeout(() => setStep(GenerationStep.IDLE), 1000);

    } catch (err: any) {
      console.error("Generation Error:", err);
      setError(err.message || "An error occurred during generation.");
      setStep(GenerationStep.IDLE);
    }
  };

  return (
    <div className="min-h-screen blueprint-grid relative overflow-hidden flex flex-col">
      <div className="scanline"></div>
      
      <header className="border-b border-cyan-900/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-white uppercase mono">
                Blueprint <span className="text-cyan-400">Empire</span>
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mono">Project Hegemony • International Forge</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {!apiKeySelected && (
              <button 
                onClick={handleSelectKey}
                className="flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full text-xs font-bold hover:bg-yellow-500/20 transition-all animate-pulse"
              >
                <ShieldCheck className="w-4 h-4" />
                INITIATE AUTH
              </button>
            )}
            <div className="flex items-center gap-2 text-slate-400">
              <span className={`w-2 h-2 rounded-full ${apiKeySelected ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></span>
              <span className="text-[10px] mono uppercase font-bold tracking-widest">
                {apiKeySelected ? 'Global Online' : 'Restricted Mode'}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-8">
        {!blueprint && step === GenerationStep.IDLE ? (
          <div className="max-w-2xl mx-auto w-full mt-12 flex flex-col gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase italic">
                Architect Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Global Empire</span>
              </h2>
              <p className="text-slate-400 text-lg">
                The world is your audience. Deploy your cinematic vision across every continent with our neural production hegemony.
              </p>
            </div>
            
            <div className="space-y-4">
              <GeneratorForm onGenerate={generateEmpire} isGenerating={step !== GenerationStep.IDLE} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard icon={<Globe className="w-5 h-5"/>} title="Trans-Territorial" desc="AI adapted for Hollywood, Bollywood, and beyond." />
              <FeatureCard icon={<TrendingUp className="w-5 h-5"/>} title="Global Financials" desc="Localized market projections and territorial splits." />
              <FeatureCard icon={<ShieldCheck className="w-5 h-5"/>} title="Hegemony Mode" desc="Strategic command of your cinematic legacy." />
            </div>
          </div>
        ) : (
          <BlueprintViewer 
            blueprint={blueprint} 
            step={step} 
            onReset={() => { setBlueprint(null); setStep(GenerationStep.IDLE); }} 
          />
        )}

        {error && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg backdrop-blur-md z-[100] flex items-center gap-3 max-w-[90vw] shadow-2xl">
            <Zap className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-bold">{error}</span>
            <button onClick={() => setError(null)} className="ml-2 hover:text-white"><X className="w-4 h-4"/></button>
          </div>
        )}
      </main>

      {step !== GenerationStep.IDLE && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 border-4 border-cyan-500/20 rounded-full border-t-cyan-500 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase mono">{step.replace(/_/g, ' ')}</h3>
              <p className="text-cyan-500 text-xs animate-pulse tracking-[0.3em] font-black uppercase">
                Consolidating Global Data
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-6 border-t border-slate-900 text-center">
        <p className="text-[10px] text-slate-600 mono uppercase tracking-[0.5em]">
          &copy; 2025 Blueprint Empire • International Hegemony Protocols
        </p>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
    <div className="mb-4 text-cyan-500 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-white font-bold mb-1 mono text-sm uppercase tracking-wider">{title}</h4>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default App;
