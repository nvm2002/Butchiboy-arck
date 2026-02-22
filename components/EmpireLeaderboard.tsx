
import React, { useState, useEffect } from 'react';
import { Trophy, Gamepad2, Users, DollarSign, Award, Star, Zap, ChevronRight, Target } from 'lucide-react';

const EmpireLeaderboard: React.FC = () => {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Caloocan_King_2002', score: 98500, region: 'Barangay 12', status: 'LEGENDARY', avatar: 'C' },
        { id: 2, name: 'TaylorGang_PH_Elite', score: 87200, region: 'Dagat-Dagatan', status: 'PRO', avatar: 'T' },
        { id: 3, name: 'Maypa_Sovereign_99', score: 85900, region: 'Caloocan South', status: 'PRO', avatar: 'M' },
        { id: 4, name: 'Libis_Talisay_Runner', score: 72400, region: 'Libis Talisay', status: 'RISING', avatar: 'L' },
        { id: 5, name: 'Global_Signal_Ghost', score: 68100, region: 'Satellite Node 07', status: 'ACTIVE', avatar: 'G' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayers(prev =>
                prev.map(p => ({
                    ...p,
                    score: p.score + Math.floor(Math.random() * 50)
                })).sort((a, b) => b.score - a.score)
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="empire-leaderboard" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                                <Trophy className="w-3 h-3 text-red-500" />
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mono">Empire Games Rankings</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                                GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">LEADERBOARD</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                Tracking the elite earners and philanthropic champions of the <span className="text-white">Butch Gaming Network</span>.
                                Real-time performance metrics updated across all Barangay 12 nodes.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold">Total Players</p>
                                <p className="text-xl font-black text-white font-orbitron">1.2M+</p>
                            </div>
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold">Daily Prize Pool</p>
                                <p className="text-xl font-black text-yellow-500 font-orbitron">$420K</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Top 3 Spotlight */}
                        <div className="lg:col-span-2 space-y-4">
                            {players.slice(0, 3).map((player, i) => (
                                <div key={player.id} className={`relative p-8 rounded-[2rem] border transition-all group overflow-hidden ${i === 0 ? 'bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-red-500/30 scale-105 shadow-[0_0_50px_rgba(239,68,68,0.1)]' : 'bg-slate-900/40 border-slate-800'
                                    }`}>
                                    {i === 0 && <div className="absolute top-0 right-0 p-6 opacity-20"><Star className="w-16 h-16 text-red-500 animate-spin-slow" /></div>}

                                    <div className="flex items-center gap-6">
                                        <div className="text-4xl font-black text-slate-700 italic font-orbitron w-12 text-center">
                                            0{i + 1}
                                        </div>
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-xl ${i === 0 ? 'bg-gradient-to-tr from-red-500 to-yellow-500' : 'bg-slate-800'
                                            }`}>
                                            {player.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="text-xl font-black text-white uppercase italic font-orbitron">{player.name}</h4>
                                                {i === 0 && <Award className="w-5 h-5 text-yellow-500" />}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-[10px] text-slate-500 font-bold mono uppercase">{player.region}</span>
                                                <span className={`text-[8px] font-black px-2 py-0.5 rounded-full border ${player.status === 'LEGENDARY' ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-blue-500/10 border-blue-500/30 text-blue-500'
                                                    }`}>
                                                    {player.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-500 font-black uppercase mono mb-1">Score Matrix</p>
                                            <p className={`text-3xl font-black font-orbitron italic ${i === 0 ? 'text-red-500' : 'text-white'}`}>
                                                {player.score.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity / Mini Board */}
                        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
                                    <Zap className="w-5 h-5 text-yellow-500" />
                                </div>
                                <h4 className="text-lg font-black text-white italic uppercase font-orbitron">Live Activity</h4>
                            </div>

                            <div className="space-y-4 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                                {players.map((p, i) => (
                                    <div key={p.id} className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-red-500/30 transition-all">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-slate-600 font-orbitron">{i + 1}</span>
                                            <p className="text-[11px] font-black text-white uppercase tracking-tight italic">{p.name}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[11px] font-black text-red-500 mono">+{Math.floor(Math.random() * 100)}</p>
                                            <p className="text-[8px] text-slate-500 font-bold mono uppercase">{p.region}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Mock Entries */}
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-slate-950/20 border border-slate-800/30 rounded-2xl opacity-50">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-slate-700 font-orbitron">--</span>
                                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-tight italic">Analyzing Node...</p>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-red-500/30 animate-pulse"></div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-4 bg-red-500/10 border border-red-500/30 text-red-500 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-red-500 hover:text-white transition-all group">
                                <span className="flex items-center justify-center gap-2">
                                    ENTER TOURNAMENT <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
            `}</style>
        </section>
    );
};

export default EmpireLeaderboard;
