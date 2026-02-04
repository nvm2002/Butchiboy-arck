
import React from 'react';
import { MovieBlueprint, GenerationStep } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, Legend } from 'recharts';
import { ArrowLeft, Zap, TrendingUp, Loader2, Globe, Target, Trophy, Send, Radio, Megaphone, MapPin, DollarSign, Briefcase, Activity, Star, Play, Film, Users, Sparkles, Landmark, BadgeCheck, Gamepad2, Coins, MousePointer2, ShieldAlert } from 'lucide-react';

interface BlueprintViewerProps {
  blueprint: MovieBlueprint | null;
  step: GenerationStep;
  onReset: () => void;
}

const COLORS = ['#ef4444', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#10b981'];

const LegendaryCheque: React.FC<{ blueprint: MovieBlueprint }> = ({ blueprint }) => {
  const totalRev = blueprint.revenueStreams?.reduce((acc, curr) => acc + (curr.projection || 0), 0) || 0;
  const formattedRev = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRev);
  const cheque = blueprint.legendaryCheque;

  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-yellow-200 via-yellow-600 to-yellow-200 shadow-[0_0_50px_rgba(234,179,8,0.3)] group hover:scale-[1.03] transition-all duration-700 max-w-4xl mx-auto my-12 overflow-hidden">
      {/* Golden Foil Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20 pointer-events-none z-20 mix-blend-overlay animate-pulse"></div>
      
      <div className="relative bg-[#faf9f6] text-slate-900 p-8 md:p-12 rounded-[1.4rem] overflow-hidden font-serif border border-yellow-700/30">
        
        {/* Security Watermark */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex flex-wrap gap-4 overflow-hidden z-0">
          {Array.from({length: 40}).map((_, i) => (
            <span key={i} className="text-2xl font-black uppercase rotate-[-25deg] whitespace-nowrap">BUTCH BANK • BRGY 12 • RALPH MAYPA</span>
          ))}
        </div>

        <div className="relative z-10 flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h2 className="text-4xl font-black italic tracking-tighter text-yellow-900 uppercase leading-none">BUTCH BANK</h2>
            <p className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-yellow-700">{cheque?.issuingBranch || 'GLOBAL SIGNAL BRANCH • BRGY 12'}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-sans font-black text-slate-400">SERIAL NO: {cheque?.serialNumber || '2002-MPA-LEGEND'}</p>
            <p className="text-sm font-sans font-bold text-slate-800">MANIFEST DATE: {new Date().toLocaleDateString()}</p>
            <div className="mt-2 flex items-center justify-end gap-1 text-[8px] font-black text-red-600 uppercase mono tracking-widest bg-red-50 px-2 py-0.5 rounded border border-red-200">
               <ShieldAlert className="w-2 h-2" /> SECURE LEVEL: {cheque?.securityLevel || 'LEGENDARY'}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-end gap-6 mb-10">
          <span className="text-sm font-sans font-black text-slate-500 uppercase tracking-widest min-w-max">Pay To The Order Of:</span>
          <div className="flex-1 border-b-2 border-slate-300 pb-2 text-3xl font-black tracking-tight uppercase text-slate-800 italic">
            THE PEOPLE OF BARANGAY 12 & THE EMPIRE
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 flex items-end gap-4 w-full">
            <span className="text-sm font-sans font-black text-slate-500 uppercase tracking-widest min-w-max">The Manifested Sum:</span>
            <div className="flex-1 border-b-2 border-slate-300 pb-2 text-xl italic font-bold text-slate-700 leading-tight">
              {formattedRev.replace('$', '')} USD (Empire Liquidity Generated via Gaming & Signal Media)
            </div>
          </div>
          <div className="bg-yellow-50 border-4 border-yellow-600/30 p-6 rounded-2xl min-w-[280px] text-center shadow-inner relative group-hover:bg-yellow-100 transition-colors">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-yellow-600 text-white text-[8px] font-black uppercase rounded-full">Imperial Amount</div>
            <span className="text-4xl font-black text-yellow-900 drop-shadow-sm">{formattedRev}</span>
          </div>
        </div>

        <div className="relative z-10 mb-12 text-center py-4 bg-slate-50 rounded-xl border border-slate-200/50 italic text-slate-500 text-sm font-medium">
          &ldquo;{cheque?.manifestationQuote || 'Success is the only option for the Noble Horse of 2002.'}&rdquo;
        </div>

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-4 border-yellow-600/20 flex items-center justify-center relative overflow-hidden group-hover:border-yellow-600/50 transition-all">
               <Landmark className="w-14 h-14 text-yellow-600/30" />
               <div className="absolute inset-0 bg-yellow-600/5 flex items-center justify-center">
                  <Coins className="w-10 h-10 text-yellow-600 animate-[bounce_3s_infinite]" />
               </div>
            </div>
            <p className="text-[9px] font-sans font-black text-yellow-800 mt-3 uppercase tracking-[0.3em]">Empire Authorization Seal</p>
          </div>
          
          <div className="text-center group-hover:scale-110 transition-transform">
             <div className="border-b-4 border-yellow-700/40 px-16 pb-3 mb-2 relative">
                <span className="text-6xl font-serif italic text-red-800 font-black tracking-tighter drop-shadow-sm" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Ralph Luther Maypa
                </span>
                <div className="absolute -bottom-1 -right-4">
                   <BadgeCheck className="w-8 h-8 text-blue-600 fill-white" />
                </div>
             </div>
             <p className="text-[11px] font-sans font-black uppercase tracking-[0.5em] text-yellow-800">Empire Leader • Year of the Horse</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const BlueprintViewer: React.FC<BlueprintViewerProps> = ({ blueprint, step, onReset }) => {
  if (!blueprint) return null;

  return (
    <div className="space-y-8 pb-20 animate-fade-up">
      <div className="flex items-center justify-between">
        <button onClick={onReset} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mono text-xs font-bold uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> TERMINAL RESET
        </button>
        <div className="flex items-center gap-2">
           <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-[10px] mono text-yellow-600 uppercase tracking-widest flex items-center gap-2 font-black">
             <Landmark className="w-3 h-3" /> BUTCH BANK SIGNAL: HIGH LIQUIDITY
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-red-400 bg-red-500/10 text-[10px] font-black mono uppercase tracking-widest rounded-full border border-red-500/30">
              LEADER: {blueprint.leaderIdentity}
            </span>
            <span className="px-3 py-1 text-cyan-400 bg-cyan-500/10 text-[10px] font-black mono uppercase tracking-widest rounded-full border border-cyan-500/30">
              HQ: BRGY 12, CALOOCAN
            </span>
            <span className="px-3 py-1 text-yellow-400 bg-yellow-500/10 text-[10px] font-black mono uppercase tracking-widest rounded-full border border-yellow-500/30">
              BANK: BUTCH GLOBAL BANK
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
            {blueprint.title}
          </h1>
          <p className="text-xl text-slate-400 italic border-l-4 border-yellow-500 pl-6 leading-relaxed max-w-2xl">
            &ldquo;{blueprint.tagline}&rdquo;
          </p>
        </div>
        
        <div className="lg:col-span-4">
           <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 aspect-video shadow-2xl relative group">
              {blueprint.posterUrl ? (
                <img src={blueprint.posterUrl} alt="Empire Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                   <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
                   <p className="text-[10px] mono text-slate-500 uppercase font-black tracking-widest">Rendering Empire Assets...</p>
                </div>
              )}
           </div>
        </div>
      </div>

      <Section title="Legendary Manifestation Cheque" icon={<Trophy className="w-4 h-4 text-yellow-500" />}>
         <LegendaryCheque blueprint={blueprint} />
      </Section>

      {blueprint.teaserUrl && (
        <Section title="Cinematic Broadcast (Veo Link)" icon={<Play className="w-4 h-4 text-red-500" />}>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <video src={blueprint.teaserUrl} className="w-full h-full object-cover" controls autoPlay loop muted />
          </div>
        </Section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          <Section title="Gaming Empire Hub (Revenue Nodes)" icon={<Gamepad2 className="w-4 h-4 text-cyan-400" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {blueprint.gamingEmpire?.map((game, i) => (
                 <div key={i} className="group p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-40 transition-opacity">
                       <TrendingUp className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex justify-between items-start mb-3">
                       <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[8px] mono text-slate-400 uppercase rounded">{game.platform}</span>
                       <span className="text-[10px] font-black text-green-400 mono animate-pulse">+${(game.projectedDailyRevenue || 0).toLocaleString()}/day</span>
                    </div>
                    <h4 className="text-sm font-black text-white uppercase mb-2">{game.title}</h4>
                    <p className="text-[10px] text-slate-400 mb-4 line-clamp-2 leading-relaxed">{game.mechanics}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-900 text-[8px] mono text-slate-500 uppercase font-bold">
                       <Coins className="w-3 h-3 text-yellow-600" /> {game.monetizationModel}
                    </div>
                 </div>
               ))}
            </div>
          </Section>

          <Section title="Billboard PH Signal Strategy" icon={<Megaphone className="w-4 h-4 text-red-500" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {blueprint.billboardCampaigns?.map((campaign, i) => (
                 <div key={i} className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl relative group hover:bg-slate-900 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex flex-col">
                          <h4 className="text-xs font-black text-white uppercase">{campaign.location}</h4>
                          <span className="text-[8px] mono text-slate-500 uppercase">{campaign.targetPartner}</span>
                       </div>
                       <div className="text-right">
                          <span className="text-[9px] font-black text-red-500 mono">{campaign.estimatedImpression}</span>
                       </div>
                    </div>
                    <p className="text-[10px] text-slate-400 italic mb-4 leading-relaxed">{campaign.visualConcept}</p>
                 </div>
               ))}
            </div>
          </Section>
        </div>

        <div className="space-y-6">
           <Section title="Revenue Distribution" icon={<Activity className="w-4 h-4 text-red-500" />}>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-4">
                 {blueprint.revenueStreams?.map((stream, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-[10px] mb-1">
                         <span className="text-slate-400 font-bold uppercase">{stream.stream}</span>
                         <span className="text-green-500 mono font-black">${((stream.projection || 0)/1000000).toFixed(1)}M</span>
                      </div>
                      <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                         <div className="h-full bg-green-500" style={{ width: `${Math.min(100, ((stream.projection || 0) / 5000000) * 100)}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </Section>

           <Section title="Dagat-Dagatan Aid Packages" icon={<Briefcase className="w-4 h-4 text-cyan-500" />}>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                 {blueprint.aidInventory?.map((aid, i) => (
                   <div key={i} className="flex justify-between p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <div>
                         <p className="text-xs font-black text-white uppercase">{aid.item}</p>
                         <p className="text-[8px] mono text-slate-500 uppercase">{aid.quantity}</p>
                      </div>
                      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${aid.priorityLevel === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{aid.priorityLevel}</span>
                   </div>
                 ))}
              </div>
           </Section>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 border-b border-slate-800/50 pb-2">
      <span className="text-red-500">{icon}</span>
      <h3 className="text-[10px] font-black mono text-slate-500 uppercase tracking-[0.3em]">{title}</h3>
    </div>
    {children}
  </div>
);

export default BlueprintViewer;
