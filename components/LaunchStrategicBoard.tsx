
import React from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Rocket, Zap, Globe, Users, TrendingUp, Shield, Trophy } from 'lucide-react';

interface StrategyDay {
    day: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    status: 'COMPLETE' | 'ACTIVE' | 'PENDING';
    milestones: string[];
}

const STRATEGY_DATA: StrategyDay[] = [
    {
        day: 1,
        title: "Signal Ignition",
        description: "Activation of the primary Barangay 12 hub. Synchronizing local nodes with the global BUTCH network.",
        icon: <Zap className="w-5 h-5 text-red-500" />,
        status: 'COMPLETE',
        milestones: ["Brgy 12 Hub Uplink", "Mesh-Network Alpha", "Local Leader Sync"]
    },
    {
        day: 2,
        title: "Coalition Sync",
        description: "Standardizing protocols with the Taylor Gang network. Cultural alignment for international reach.",
        icon: <Users className="w-5 h-5 text-yellow-500" />,
        status: 'COMPLETE',
        milestones: ["TG Protocol Handshake", "Sonic Branding Finalized", "Alliance Ledger Open"]
    },
    {
        day: 3,
        title: "Revenue Node Deploy",
        description: "Deployment of initial liquidity nodes. Establishing high-frequency trade points in Billboard PH sectors.",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        status: 'ACTIVE',
        milestones: ["Trade-Point Alpha Live", "BUX Token Liquidity", "Yield Management Sync"]
    },
    {
        day: 4,
        title: "Cultural Saturation",
        description: "Broadcasting viral hooks across all media targets. Peak resonance in Tagalog-speaking territories.",
        icon: <Globe className="w-5 h-5 text-cyan-500" />,
        status: 'PENDING',
        milestones: ["Trend Feed Domination", "Artist Coalition Drop", "BGY-12 Signal Burst"]
    },
    {
        day: 5,
        title: "Asset Reveal",
        description: "Decryption and public viewing of the Butch-Garage Sovereign fleet. Establishing market value.",
        icon: <Rocket className="w-5 h-5 text-magenta-500" />,
        status: 'PENDING',
        milestones: ["GTR Zenith Unveiling", "Aero-Nexus Demo", "Pre-Order Portal Live"]
    },
    {
        day: 6,
        title: "Humanitarian Wave",
        description: "Large-scale aid distribution via established Dagat-Dagatan nodes. Direct impact measurement.",
        icon: <Shield className="w-5 h-5 text-blue-500" />,
        status: 'PENDING',
        milestones: ["Aid Node Activation", "Scholarship Batch 01", "Infrastructure Fund"]
    },
    {
        day: 7,
        title: "Imperial Hegemony",
        description: "Full system integration. The BUTCH Signal becomes the primary cultural and economic engine.",
        icon: <Trophy className="w-5 h-5 text-yellow-400" />,
        status: 'PENDING',
        milestones: ["System Wide Lock", "Global Signal Peak", "Mission HQ Established"]
    }
];

const LaunchStrategicBoard: React.FC = () => {
    return (
        <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-full bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                            <Calendar className="w-3 h-3 text-red-500" />
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mono">7-Day Strategic Launch</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                            Empire <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Launch Protocol</span>
                        </h2>
                        <p className="max-w-xl text-slate-400 text-sm font-medium leading-relaxed">
                            Ang roadmap tungo sa global dominance. Isang dambuhalang hakbang mula sa Barangay 12
                            hanggang sa rurok ng international hegemony.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right">
                            <span className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Current Protocol Phase</span>
                            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
                                <Clock className="w-4 h-4 text-green-500 animate-pulse" />
                                <span className="text-lg font-black text-white italic tracking-tight font-orbitron">PHASE 03</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {STRATEGY_DATA.map((day) => (
                        <div key={day.day} className={`group relative p-6 rounded-[2rem] border transition-all duration-500 ${day.status === 'COMPLETE' ? 'bg-slate-900/80 border-slate-800 opacity-60' :
                                day.status === 'ACTIVE' ? 'bg-slate-900 border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.2)]' :
                                    'bg-slate-900/30 border-slate-800/50 grayscale hover:grayscale-0'
                            }`}>
                            <div className="flex flex-col h-full gap-6">
                                <div className="flex items-center justify-between">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${day.status === 'COMPLETE' ? 'bg-green-500/10 text-green-500' :
                                            day.status === 'ACTIVE' ? 'bg-red-500/20 text-red-500' : 'bg-slate-950 text-slate-700'
                                        }`}>
                                        {day.status === 'COMPLETE' ? <CheckCircle2 className="w-5 h-5" /> : day.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-600 mono uppercase tracking-widest">Day 0{day.day}</span>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xl font-black text-white italic tracking-tighter uppercase font-orbitron leading-none">{day.title}</h4>
                                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                        {day.description}
                                    </p>
                                </div>

                                <div className="mt-auto space-y-2 pt-4 border-t border-slate-800/50">
                                    {day.milestones.map((milestone, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <Circle className={`w-1.5 h-1.5 ${day.status === 'COMPLETE' ? 'fill-green-500 text-green-500' : 'text-slate-700'}`} />
                                            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mono">{milestone}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {day.status === 'ACTIVE' && (
                                <div className="absolute -top-2 -right-2 px-3 py-1 bg-red-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg neon-glow-red">
                                    Live Protocol
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-xl gap-8">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/30">
                            <Rocket className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <h5 className="text-xl font-black text-white italic uppercase tracking-tight font-orbitron">BGY-12 Launch Sequence</h5>
                            <p className="text-xs text-slate-500 mono uppercase tracking-widest">Global Hegemony confirmed by Luther Maypa</p>
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-slate-950 border border-slate-800 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-red-600 hover:border-red-500 transition-all shadow-xl group">
                        VIEW FULL EXECUTIVE DOCKET <TrendingUp className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LaunchStrategicBoard;
