
import React, { useState, useEffect, useCallback } from 'react';
import { MovieBlueprint, GenerationStep, TeaserSettings } from './types';
import { GeminiService } from './geminiService';
import BlueprintViewer from './components/BlueprintViewer';
import GeneratorForm from './components/GeneratorForm';
import LYWFManifesto from './components/LYWFManifesto';
import SignalFeed from './components/SignalFeed';
import EmpireFutureCheque from './components/EmpireFutureCheque';
import Horse2002Heritage from './components/Horse2002Heritage';
import ResinEmpire from './components/ResinEmpire';
import TaylorGangPartnership from './components/TaylorGangPartnership';
import EmpireWisdom from './components/EmpireWisdom';
import LaunchStrategicBoard from './components/LaunchStrategicBoard';
import { Layout, Film, Cpu, Zap, Globe, ShieldCheck, AlertCircle, X, TrendingUp, Key, Radio, MapPin, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [apiKeySelected, setApiKeySelected] = useState<boolean>(false);
  const [blueprint, setBlueprint] = useState<MovieBlueprint | null>(null);
  const [step, setStep] = useState<GenerationStep>(GenerationStep.IDLE);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>('');

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setApiKeySelected(hasKey);
      } else {
        setApiKeySelected(true);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setApiKeySelected(true);
      setError(null);
    }
  };

  const generateEmpire = async (
    userPrompt: string,
    includeVideo: boolean,
    teaserSettings: TeaserSettings,
    territory: string,
    isPatternBreaker: boolean,
    visualDNA: { pacing: number; colorSaturation: number; darkness: number; complexity: number }
  ) => {
    try {
      setError(null);
      if (includeVideo && !apiKeySelected) {
        if (window.aistudio?.openSelectKey) {
          setError("Billboard PH Satellite requires an active API key.");
          await window.aistudio.openSelectKey();
          setApiKeySelected(true);
        } else {
          setError("Signal restricted. Connect satellite first.");
          return;
        }
      }

      const service = new GeminiService();
      setStep(GenerationStep.ANALYZING);
      setLoadingMessage("Locating Barangay 12 Coordinates...");

      setStep(GenerationStep.DRAFTING);
      setLoadingMessage("Synchronizing Billboard PH Strategy...");
      const newBlueprint = await service.generateMovieBlueprint(userPrompt, territory, isPatternBreaker, visualDNA);
      setBlueprint(newBlueprint);

      setStep(GenerationStep.RENDERING_POSTER);
      setLoadingMessage("Rendering Empire Cover Art...");
      const posterUrl = await service.generatePoster(newBlueprint);
      setBlueprint(prev => prev ? ({ ...prev, posterUrl }) : null);

      if (includeVideo) {
        setStep(GenerationStep.GENERATING_TEASER);
        setLoadingMessage("Broadcasting from Dagat-Dagatan (Veo Link)...");
        try {
          const videoService = new GeminiService();
          const teaserUrl = await videoService.generateTeaser(newBlueprint, teaserSettings);
          setBlueprint(prev => prev ? ({ ...prev, teaserUrl }) : null);
        } catch (vidErr: any) {
          console.error(vidErr);
          setError(`Veo error: ${vidErr.message}`);
        }
      }

      setStep(GenerationStep.FINALIZING);
      setLoadingMessage("Global Signal Deployed.");
      setTimeout(() => {
        setStep(GenerationStep.IDLE);
        setLoadingMessage("");
      }, 1000);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Protocol Failure.");
      setStep(GenerationStep.IDLE);
    }
  };

  return (
    <div className="min-h-screen blueprint-grid relative overflow-hidden flex flex-col">
      <div className="scanline"></div>

      <header className="border-b border-red-900/30 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/30">
              <Zap className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-white uppercase mono">
                BUTCH <span className="text-red-500">SIGNAL</span>
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mono">Barangay 12 Hub • Horse 2002</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleSelectKey}
              className={`flex items-center gap-2 px-4 py-1.5 border rounded-full text-xs font-bold transition-all ${apiKeySelected
                ? 'bg-green-500/10 border-green-500/30 text-green-500'
                : 'bg-red-500/10 border-red-500/30 text-red-500 animate-pulse'
                }`}
            >
              <Key className="w-4 h-4" />
              {apiKeySelected ? 'HEGEMONY ACTIVE' : 'CONNECT SATELLITE'}
            </button>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-[10px] font-black text-yellow-500 mono uppercase tracking-widest">
              LYWF PROTOCOL: VIBE CHECKED
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col">
        {!blueprint && step === GenerationStep.IDLE ? (
          <>
            <div className="max-w-7xl mx-auto w-full px-4 py-32 flex flex-col items-center gap-12 text-center min-h-[90vh] justify-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-[10px] font-black text-red-500 mono uppercase tracking-widest neon-glow-red">
                  <MapPin className="w-3 h-3" /> BARANGAY 12 • CALOOCAN SOUTH HUB
                </div>
                <h2 className="text-7xl md:text-9xl font-black text-white leading-[0.85] uppercase italic tracking-tighter font-orbitron">
                  Billboard <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-gradient">PHILIPPINES</span>
                </h2>
                <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
                  Ang rurok ng street luxury meets high-stakes humanitarian impact.
                  <span className="text-white"> 103 Libis Talisay Dulo.</span> Ralph Luther Maypa's Sovereign Command.
                  Synchronizing global revenue points for the upliftment of the masa.
                </p>

                <div className="pt-8 max-w-2xl mx-auto w-full">
                  <GeneratorForm onGenerate={generateEmpire} isGenerating={step !== GenerationStep.IDLE} />
                </div>
              </div>

              {/* Community Success Feed */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-12">
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                  <TrendingUp className="w-5 h-5 text-green-500 mb-2 mx-auto" />
                  <p className="text-[9px] text-slate-500 uppercase mono font-black">Community ROI</p>
                  <p className="text-2xl font-black text-white font-orbitron italic">+420%</p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                  <Globe className="w-5 h-5 text-blue-500 mb-2 mx-auto" />
                  <p className="text-[9px] text-slate-500 uppercase mono font-black">Global Signal</p>
                  <p className="text-2xl font-black text-white font-orbitron italic">ACTIVE</p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                  <ShieldCheck className="w-5 h-5 text-red-500 mb-2 mx-auto" />
                  <p className="text-[9px] text-slate-500 uppercase mono font-black">Security Protocol</p>
                  <p className="text-2xl font-black text-white font-orbitron italic">V.12B</p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                  <Zap className="w-5 h-5 text-yellow-500 mb-2 mx-auto" />
                  <p className="text-[9px] text-slate-500 uppercase mono font-black">Horse 2002 Energy</p>
                  <p className="text-2xl font-black text-white font-orbitron italic">MAX</p>
                </div>
              </div>

              <div className="mt-12 animate-bounce opacity-40">
                <ChevronDown className="w-8 h-8 text-white" />
              </div>
            </div>

            <SignalFeed />
            <Horse2002Heritage />
            <LaunchStrategicBoard />
            <LYWFManifesto />
            <ResinEmpire />
            <TaylorGangPartnership />
            <EmpireWisdom />
            <EmpireFutureCheque />
          </>
        ) : (
          <div className="max-w-7xl mx-auto w-full px-4 py-8">
            <BlueprintViewer
              blueprint={blueprint}
              step={step}
              onReset={() => { setBlueprint(null); setStep(GenerationStep.IDLE); }}
            />
          </div>
        )}

        {error && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg backdrop-blur-md z-[100] flex items-center gap-3 max-w-[90vw] shadow-2xl">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-bold uppercase mono text-[10px]">{error}</span>
            <button onClick={() => setError(null)} className="ml-2 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
        )}
      </main>

      {step !== GenerationStep.IDLE && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 border-4 border-red-500/20 rounded-full border-t-red-500 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Radio className="w-12 h-12 text-red-500 animate-pulse" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-widest uppercase mono">{step.replace(/_/g, ' ')}</h3>
              <p className="text-red-500 text-[10px] animate-pulse tracking-[0.3em] font-black uppercase">
                {loadingMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-6 border-t border-slate-900 text-center">
        <p className="text-[10px] text-slate-600 mono uppercase tracking-[0.5em]">
          &copy; 2025 Global Signal Protocol • Ralph Luther Maypa • Barangay 12
        </p>
      </footer>
    </div>
  );
};

export default App;
