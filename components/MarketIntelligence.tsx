
import React from 'react';
import { MarketPattern } from '../types';
import { Target, TrendingUp, Sparkles, AlertCircle, Globe } from 'lucide-react';

interface MarketIntelligenceProps {
  patterns: MarketPattern[];
  isLoading: boolean;
  onSelectPattern: (pattern: MarketPattern) => void;
  isGlobalView?: boolean;
}

const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({ patterns, isLoading, onSelectPattern, isGlobalView }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 animate-pulse">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-24 bg-slate-900/50 border border-slate-800 rounded-xl"></div>
        ))}
      </div>
    );
  }

  if (patterns.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        {isGlobalView ? <Globe className="w-3 h-3 text-purple-500" /> : <Target className="w-3 h-3 text-cyan-500" />}
        <h4 className="text-[10px] font-black mono text-slate-500 uppercase tracking-[0.3em]">
          {isGlobalView ? 'International Empire Patterns' : 'Regional Hegemony ROI'}
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {patterns.sort((a, b) => b.roiPotential - a.roiPotential).map((pattern, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPattern(pattern)}
            className="text-left group relative p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all hover:scale-[1.02] overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col">
                <span className="text-xs font-black text-white uppercase tracking-tight">{pattern.genre}</span>
                <span className="text-[8px] mono text-slate-500 uppercase font-black tracking-widest">{pattern.territory}</span>
              </div>
              <span className={`text-[10px] mono font-black ${pattern.roiPotential > 150 ? 'text-green-400 animate-pulse' : 'text-cyan-400'}`}>
                {pattern.roiPotential}% ROI
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {pattern.keyThemes.slice(0, 3).map((theme, i) => (
                <span key={i} className="text-[8px] mono text-slate-500 uppercase border border-slate-800 px-1.5 py-0.5 rounded-full">
                  {theme}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
               <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                 <div 
                   className={`h-full ${pattern.demandIndex > 80 ? 'bg-purple-500' : 'bg-cyan-500'} transition-all duration-1000`} 
                   style={{ width: `${pattern.demandIndex}%` }}
                 />
               </div>
               <span className="text-[8px] mono text-slate-600 uppercase">Index: {pattern.demandIndex}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarketIntelligence;
