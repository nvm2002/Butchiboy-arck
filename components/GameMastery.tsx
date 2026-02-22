
import React from 'react';
import { Award, Zap, Shield, Target, Trophy, Flame, ChevronRight, LayoutGrid } from 'lucide-react';

const GameMastery: React.FC = () => {
    const masteryNodes = [
        {
            id: 'NODE-01',
            title: 'Barangay 12 Runner',
            level: 99,
            icon: <Flame className="w-6 h-6" />,
            color: 'from-orange-500 to-red-600',
            description: 'Mastery of street-level navigation and community resource distribution.',
            progress: 100,
            stats: { speed: 'MAX', endurance: 'ELITE' }
        },
        {
            id: 'NODE-02',
            title: 'Signal Dominator',
            level: 82,
            icon: <Zap className="w-6 h-6" />,
            color: 'from-blue-500 to-purple-600',
            description: 'Synchronizing global satellite nodes for the Butch Signal broadcast.',
            progress: 82,
            stats: { range: 'GLOBAL', latency: '0.2ms' }
        },
        {
            id: 'NODE-03',
            title: 'Butch Bank Tycoon',
            level: 75,
            icon: <Award className="w-6 h-6" />,
            color: 'from-yellow-400 to-emerald-600',
            description: 'Strategic management of global liquidity and community reinvestment.',
            progress: 75,
            stats: { cashflow: 'HIGH', impact: 'MAX' }
        },
        {
            id: 'NODE-04',
            title: 'Taylor Gang Tactician',
            level: 64,
            icon: <Trophy className="w-6 h-6" />,
            color: 'from-emerald-400 to-cyan-600',
            description: 'Mastery of high-stakes influence and celebrity coalition synergy.',
            progress: 64,
            stats: { influence: 'ELITE', resonance: 'MAX' }
        }
    ];

    const badges = [
        { name: 'Brgy 12 Founder', icon: <Shield className="w-4 h-4" /> },
        { name: 'Horse 2002 Legend', icon: <Award className="w-4 h-4" /> },
        { name: 'Alpha Signal', icon: <Target className="w-4 h-4" /> }
    ];

    return (
        <section id="game-mastery" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                                <Target className="w-3 h-3 text-yellow-500" />
                                <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mono">Sovereign Mastery Protocol</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                                GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500">MASTERY</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                Unlock the peak potential of the <span className="text-white">Butch Gaming Network</span>.
                                Every achievement in Barangay 12 ripples through the global meta-industry.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            {badges.map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-md">
                                    <div className="text-yellow-500">{badge.icon}</div>
                                    <span className="text-[10px] font-black text-white uppercase mono">{badge.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mastery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {masteryNodes.map((node) => (
                            <div key={node.id} className="group relative p-8 bg-slate-900/40 border border-slate-800 hover:border-yellow-500/30 rounded-[2.5rem] transition-all duration-500 flex flex-col gap-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    {node.icon}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-500 uppercase mono">{node.id}</span>
                                        <span className="text-[10px] font-black text-yellow-500 uppercase mono italic">LVL {node.level}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase italic font-orbitron">{node.title}</h3>
                                    <p className="text-[11px] text-slate-500 leading-relaxed uppercase font-medium line-clamp-2">
                                        {node.description}
                                    </p>
                                </div>

                                <div className="space-y-3 mt-auto">
                                    <div className="flex justify-between items-center text-[9px] font-black uppercase mono">
                                        <span className="text-slate-400">Mastery Progress</span>
                                        <span className="text-white">{node.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden p-[1px] border border-slate-800">
                                        <div className={`h-full bg-gradient-to-r ${node.color} rounded-full transition-all duration-1000`} style={{ width: `${node.progress}%` }}></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                                        {Object.entries(node.stats).map(([key, val]) => (
                                            <div key={key}>
                                                <p className="text-[8px] text-slate-600 uppercase mono font-bold">{key}</p>
                                                <p className="text-[10px] text-white font-black uppercase font-orbitron italic">{val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mastery CTA */}
                    <div className="p-12 bg-gradient-to-r from-red-600/10 via-yellow-500/10 to-transparent border border-white/5 rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-8">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full border-4 border-yellow-500/20 border-t-yellow-500 animate-spin flex items-center justify-center"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <LayoutGrid className="w-8 h-8 text-yellow-500" />
                                </div>
                            </div>
                            <div className="space-y-2 text-center lg:text-left">
                                <h4 className="text-2xl font-black text-white uppercase italic font-orbitron">The Sovereign Path Awaits</h4>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono italic">Syncing Mastery Nodes: 04/12 ACTIVE</p>
                            </div>
                        </div>
                        <button className="px-10 py-5 bg-white text-slate-950 font-black uppercase italic tracking-widest text-xs rounded-2xl hover:bg-yellow-500 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex items-center gap-3">
                            UPGRADE MASTERY SIGNAL <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
      `}</style>
        </section>
    );
};

export default GameMastery;
