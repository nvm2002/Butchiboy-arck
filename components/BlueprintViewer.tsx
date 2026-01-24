
import React, { useState, useEffect } from 'react';
import { MovieBlueprint, GenerationStep, Scene } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend, CartesianGrid, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Users, Layout, Play, ArrowLeft, Download, Share2, Info, Zap, TrendingUp, FileText, X, ChevronRight, Loader2, Clapperboard, Star, Globe, Flag, Calculator, ShieldAlert, CheckCircle2, Skull, Sparkles, Film, Map, Compass, Crosshair } from 'lucide-react';
import { GeminiService } from '../geminiService';

interface BlueprintViewerProps {
  blueprint: MovieBlueprint | null;
  step: GenerationStep;
  onReset: () => void;
}

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i += 5;
      if (i > text.length) clearInterval(timer);
    }, 10);
    return () => clearInterval(timer);
  }, [text]);

  return <div className="whitespace-pre-wrap font-mono script-content text-slate-200">{displayedText}</div>;
};

const BlueprintViewer: React.FC<BlueprintViewerProps> = ({ blueprint, step, onReset }) => {
  const [forgingScene, setForgingScene] = useState<Scene | null>(null);
  const [forgedScript, setForgedScript] = useState<string | null>(null);
  const [isForging, setIsForging] = useState(false);

  if (!blueprint) return null;

  const marketingSpend = blueprint.estimatedBudget * 0.5;
  const totalCost = blueprint.estimatedBudget + marketingSpend;
  const profit = blueprint.estimatedBoxOffice - totalCost;
  const roi = (profit / totalCost) * 100;

  const resonanceData = Object.entries(blueprint.globalResonance || {}).map(([subject, A]) => ({ subject, A, fullMark: 100 }));

  const handleForgeScript = async (scene: Scene) => {
    setIsForging(true);
    setForgingScene(scene);
    setForgedScript(null);
    try {
      const service = new GeminiService();
      const script = await service.generateSceneScript(blueprint, scene);
      setForgedScript(script);
    } catch (err) {
      console.error(err);
      setForgedScript("CRITICAL SYSTEM ERROR: Script forge failed to initialize neural pathways.");
    } finally {
      setIsForging(false);
    }
  };

  const getRoiStatus = (val: number) => {
    if (blueprint.isDisruptive) return { label: 'CULTURAL ANOMALY', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' };
    if (val > 200) return { label: 'GLOBAL UNICORN', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' };
    if (val > 50) return { label: 'STABLE HEGEMONY', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' };
    return { label: 'MARKET VENTURE', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' };
  };

  const status = getRoiStatus(roi);
  const formatCurrency = (val: number) => `$${(val / 1000000).toFixed(1)}M`;
  const territorialData = Object.entries(blueprint.territorialRevenue || {}).map(([name, value]) => ({ name, value }));

  return (
    <div className={`space-y-8 pb-20 animate-fade-up ${blueprint.isDisruptive ? 'disruptive-mode' : ''}`}>
      <div className="flex items-center justify-between">
        <button onClick={onReset} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mono text-xs font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> NEW GLOBAL DRAFT
        </button>
        <div className="flex items-center gap-2">
           {blueprint.isDisruptive && (
             <div className="px-3 py-1 bg-rose-500/20 border border-rose-500/50 rounded-lg text-[10px] mono text-rose-400 uppercase tracking-widest flex items-center gap-2 animate-pulse">
               <Skull className="w-3 h-3" /> FRACTURED PATTERN
             </div>
           )}
           <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
             <Globe className="w-3 h-3" /> INTERNATIONAL EMPIRE
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-b ${blueprint.isDisruptive ? 'from-rose-500/40 to-amber-500/40' : 'from-cyan-500/20 to-purple-500/20'} rounded-2xl blur-lg transition-all duration-500`}></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 aspect-[3/4] flex items-center justify-center">
              {blueprint.posterUrl ? (
                <img src={blueprint.posterUrl} alt="Poster" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center space-y-3">
                   <div className={`w-12 h-12 border-2 ${blueprint.isDisruptive ? 'border-rose-500/20 border-t-rose-500' : 'border-cyan-500/20 border-t-cyan-500'} rounded-full animate-spin mx-auto`}></div>
                   <p className="text-[10px] mono text-slate-600 uppercase tracking-widest font-bold">Painting International Vision...</p>
                </div>
              )}
            </div>
          </div>

          <Section title="Imperial Resonance Chart" icon={<Crosshair className="w-4 h-4 text-cyan-500" />}>
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 h-64 flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={resonanceData}>
                  <PolarGrid stroke="#1e293b" />
                  <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={10} fontFamily="JetBrains Mono" />
                  <Radar name="Blueprint" dataKey="A" stroke={blueprint.isDisruptive ? "#f43f5e" : "#06b6d4"} fill={blueprint.isDisruptive ? "#f43f5e" : "#06b6d4"} fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Section>

          <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 space-y-4">
             <div className="flex items-center justify-between">
                <h4 className="text-xs font-black mono text-cyan-500 uppercase tracking-[0.2em]">Global Saturation</h4>
                <span className="text-lg font-black text-white">{blueprint.saturationIndex}%</span>
             </div>
             <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" style={{ width: `${blueprint.saturationIndex}%` }} />
             </div>
             <p className="text-[9px] text-slate-500 mono uppercase">Projected global reach across all localized regions.</p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 ${blueprint.isDisruptive ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'} text-[10px] font-black mono uppercase tracking-widest rounded-full`}>
                {blueprint.genre}
              </span>
              <span className={`px-3 py-1 ${status.bg} border ${status.border} ${status.color} text-[10px] font-black mono uppercase tracking-widest rounded-full`}>
                {status.label}
              </span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none italic">{blueprint.title}</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed italic border-l-4 border-cyan-500/50 pl-6">
              &ldquo;{blueprint.tagline}&rdquo;
            </p>
          </div>

          <Section title="Empire Conquest Roadmap" icon={<Map className="w-4 h-4 text-purple-500" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {blueprint.conquestRoadmap.map((phase, i) => (
                 <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                    <p className="text-[8px] mono text-slate-500 uppercase font-black mb-1">Phase {i+1}: {phase.phase}</p>
                    <p className="text-xs font-black text-white uppercase mb-2">{phase.territory}</p>
                    <p className="text-[10px] text-slate-400 leading-tight mb-3 line-clamp-3">{phase.strategy}</p>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                       <span className="text-[9px] mono text-purple-400 font-bold tracking-tighter">${phase.targetRevenue}M Target</span>
                       <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-purple-400 transition-colors" />
                    </div>
                 </div>
               ))}
            </div>
          </Section>

          <Section title="Consolidated ROI Financials" icon={<TrendingUp className="w-4 h-4"/>}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricItem label="Prod. Budget" value={formatCurrency(blueprint.estimatedBudget)} sub="Liquidity" />
              <MetricItem label="Global Box Office" value={formatCurrency(blueprint.estimatedBoxOffice)} sub="Yield" highlight />
              <MetricItem label="Breakeven" value={formatCurrency(totalCost)} sub="Risk Floor" />
              <MetricItem label="Empire ROI" value={`${roi.toFixed(1)}%`} sub="Alpha Gain" highlight isDisruptive={blueprint.isDisruptive} />
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Section title="The Global Narrative" icon={<Layout className="w-4 h-4"/>}>
              <p className="text-slate-400 text-sm leading-relaxed tracking-wide">{blueprint.synopsis}</p>
            </Section>
            
            <Section title="Imperial Tactics" icon={<Compass className="w-4 h-4"/>}>
              <div className="space-y-4">
                {Object.entries(blueprint.territoryTactics || {}).map(([region, advice]) => (
                  <div key={region} className="p-3 bg-slate-950/30 border-l-2 border-cyan-500/50">
                    <p className="text-[8px] mono text-slate-500 uppercase font-bold mb-1">{region}</p>
                    <p className="text-[10px] text-slate-300 leading-tight">{advice}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <Section title="Global Talent Roster" icon={<Users className="w-4 h-4"/>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blueprint.characters.map((char, i) => (
                <div key={i} className={`p-5 bg-slate-900/50 border border-slate-800 rounded-xl space-y-3 hover:scale-[1.03] transition-all duration-300`}>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black text-white mono uppercase">{char.name}</p>
                    <span className="text-[8px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 border-cyan-500/20 rounded-full mono border">{char.archetype}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">{char.description}</p>
                  <div className="space-y-1 pt-2 border-t border-slate-800/50">
                    <p className="text-[8px] text-slate-600 mono uppercase font-bold">Global Prototype: <span className="text-cyan-400">{char.actorArchetype}</span></p>
                    <p className="text-[8px] text-slate-600 mono uppercase font-bold">Vision: <span className="text-purple-400">{char.directorArchetype}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Cinematic Action Beats" icon={<Zap className="w-4 h-4"/>}>
            <div className="space-y-4">
              {blueprint.keyScenes.map((scene, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-950/30 rounded-xl border border-transparent hover:border-slate-800 transition-all">
                  <div className="flex-none w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-sm font-bold text-cyan-400 mono">{i + 1}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <h5 className="text-sm font-bold text-white uppercase tracking-wider">{scene.title}</h5>
                      <button onClick={() => handleForgeScript(scene)} className={`px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 text-[10px] font-black mono uppercase tracking-widest rounded-lg transition-all`}>
                        Forge Script
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{scene.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {forgingScene && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in">
          <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[90vh] animate-scale-in">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                <div>
                  <h4 className="text-sm font-black mono text-white uppercase tracking-widest">{forgingScene?.title}</h4>
                  <p className="text-[10px] text-slate-500 mono uppercase">NEURAL SCRIPT FORGE • {blueprint.primaryTerritory}</p>
                </div>
              </div>
              <button onClick={() => setForgingScene(null)} className="p-2 text-slate-500 hover:text-white"><X className="w-7 h-7" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-12 bg-[#050811] relative">
              {isForging ? (
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
                  <p className="text-xs mono text-cyan-500 animate-pulse uppercase tracking-[0.3em] font-black">Forging Narrative Data...</p>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">{forgedScript && <TypewriterText text={forgedScript} />}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Section: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }> = ({ title, icon, children, className }) => (
  <div className={`space-y-4 ${className || ''}`}>
    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
      <span className="text-cyan-500">{icon}</span>
      <h3 className="text-[10px] font-black mono text-slate-500 uppercase tracking-[0.3em]">{title}</h3>
    </div>
    {children}
  </div>
);

const MetricItem: React.FC<{ label: string, value: string, sub: string, highlight?: boolean, isDisruptive?: boolean }> = ({ label, value, sub, highlight, isDisruptive }) => (
  <div className={`p-4 rounded-xl border ${highlight ? (isDisruptive ? 'bg-rose-500/10 border-rose-500/50' : 'bg-cyan-500/10 border-cyan-500/50') : 'bg-slate-900/50 border-slate-800'} hover:border-slate-700 transition-all`}>
    <p className="text-[9px] text-slate-500 mono uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-lg font-black tracking-tight ${highlight ? (isDisruptive ? 'text-rose-400' : 'text-cyan-400') : 'text-white'}`}>{value}</p>
    <p className="text-[8px] text-slate-600 mono uppercase mt-1">{sub}</p>
  </div>
);

export default BlueprintViewer;
