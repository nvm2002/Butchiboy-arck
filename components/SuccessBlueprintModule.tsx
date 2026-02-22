
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Globe, Award, Heart, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const SuccessBlueprintModule: React.FC = () => {
    const [stats, setStats] = useState({
        globalReach: 120,
        peopleHelped: 45000,
        cashflow: 1.2, // in billions
        dominationIndex: 88,
    });

    const [chartData, setChartData] = useState<{ name: string, cash: number, impact: number }[]>([]);

    useEffect(() => {
        // Mock historical growth data
        const data = Array.from({ length: 12 }, (_, i) => ({
            name: `Month ${i + 1}`,
            cash: 200 + Math.random() * 800 + (i * 100),
            impact: 1000 + Math.random() * 5000 + (i * 4000),
        }));
        setChartData(data);

        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                peopleHelped: prev.peopleHelped + Math.floor(Math.random() * 10),
                cashflow: prev.cashflow + 0.001,
                dominationIndex: Math.min(99, prev.dominationIndex + (Math.random() > 0.5 ? 0.1 : -0.05))
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" />
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mono">Hegemony Protocol v.2025</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] font-orbitron">
                            Cashflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 animate-gradient">DOMINATION</span>
                        </h2>
                        <p className="max-w-2xl text-slate-400 text-lg font-medium leading-relaxed">
                            Ang rurok ng financial intelligence meets social responsibility.
                            We don't just dominate markets; <span className="text-white">we elevate humanity.</span>
                            Synchronizing high-frequency revenue streams from Dagat-Dagatan to Wall Street.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Metric Cards */}
                        {[
                            { label: 'Global Cashflow', value: `$${stats.cashflow.toFixed(3)}B`, icon: <DollarSign className="text-emerald-500" />, color: 'emerald' },
                            { label: 'Market Domination', value: `${stats.dominationIndex.toFixed(1)}%`, icon: <TrendingUp className="text-blue-500" />, color: 'blue' },
                            { label: 'Community Impact', value: stats.peopleHelped.toLocaleString(), icon: <Heart className="text-red-500" />, color: 'red' },
                            { label: 'Satellite Nodes', value: stats.globalReach.toString(), icon: <Globe className="text-purple-500" />, color: 'purple' },
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}
                                    </div>
                                    <Zap className="w-4 h-4 text-slate-700 group-hover:text-emerald-500/50 transition-colors" />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">{item.label}</span>
                                <p className="text-3xl font-black text-white font-orbitron italic">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Real-time Growth Viz */}
                        <div className="lg:col-span-2 p-8 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden">
                            <div className="flex justify-between items-center mb-8">
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black text-white italic uppercase font-orbitron">Imperial Growth Matrix</h4>
                                    <p className="text-[9px] text-slate-500 uppercase mono font-bold">Revenue vs Scaled Philanthropy</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <span className="text-[8px] font-black text-slate-400 uppercase mono">Cash</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-[8px] font-black text-slate-400 uppercase mono">Impact</span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="name" hide />
                                        <YAxis hide />
                                        <Tooltip
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md">
                                                            <p className="text-xs font-black text-emerald-500 uppercase mb-2">Matrix Reading</p>
                                                            <div className="space-y-1">
                                                                <p className="text-[10px] text-slate-400 mono">Revenue: ${Number(payload[0].value).toFixed(0)}M</p>
                                                                <p className="text-[10px] text-slate-400 mono">People Reached: {Number(payload[1].value).toLocaleString()}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                return null;
                                            }}
                                        />
                                        <Area type="monotone" dataKey="cash" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCash)" />
                                        <Area type="monotone" dataKey="impact" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorImpact)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Philanthropy Feed */}
                        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                    <Users className="w-5 h-5 text-blue-500" />
                                </div>
                                <h4 className="text-xl font-black text-white italic uppercase font-orbitron">Community Feed</h4>
                            </div>

                            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                                {[
                                    { territory: 'Dagat-Dagatan', action: 'Digital Literacy Hub Operational', status: 'SUCCESS' },
                                    { territory: 'Barangay 12', action: 'Micro-Entrepreneur Liquidity Drop', status: 'ACTIVE' },
                                    { territory: 'Caloocan South', action: 'Future-Bank Scholarship Batch 09', status: 'COMPLETED' },
                                    { territory: 'Libis Talisay', action: 'High-Speed Mesh Network Node-12', status: 'ONLINE' },
                                ].map((feed, i) => (
                                    <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl group hover:border-blue-500/30 transition-all">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[8px] font-black text-blue-500 uppercase mono tracking-widest">{feed.territory}</span>
                                            <div className="flex items-center gap-1">
                                                <div className="w-1 h-1 rounded-full bg-green-500 animate-ping"></div>
                                                <span className="text-[7px] text-slate-500 font-bold mono">{feed.status}</span>
                                            </div>
                                        </div>
                                        <p className="text-[11px] font-black text-white uppercase tracking-tight italic leading-tight">{feed.action}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-auto w-full py-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-emerald-500 hover:text-white transition-all">
                                INITIATE LIQUIDITY EVENT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
            `}</style>
        </section>
    );
};

export default SuccessBlueprintModule;
