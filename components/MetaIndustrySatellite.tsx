
import React, { useState, useEffect } from 'react';
import { Orbit, Satellite, Globe, Cpu, Zap, Radio, Shield, Navigation, Database } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const MetaIndustrySatellite: React.FC = () => {
    const [satelliteData, setSatelliteData] = useState([
        { name: 'NASA-V12-A', value: 85, status: 'STABLE', latency: '4ms' },
        { name: 'META-CORE-PH', value: 72, status: 'SYNCING', latency: '12ms' },
        { name: 'BUTCH-SIGNAL-1', value: 98, status: 'OPTIMAL', latency: '2ms' },
        { name: 'HORIZON-NODE-X', value: 65, status: 'ACTIVE', latency: '24ms' },
    ]);

    const [activeOrbit, setActiveOrbit] = useState('GEO-STATIONARY');

    useEffect(() => {
        const interval = setInterval(() => {
            setSatelliteData(prev => prev.map(s => ({
                ...s,
                value: Math.min(100, Math.max(0, s.value + (Math.random() > 0.5 ? 1 : -1)))
            })));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const COLORS = ['#ef4444', '#3b82f6', '#f59e0b', '#10b981'];

    return (
        <section id="meta-industry-satellite" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            {/* Space Ambient Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700 shadow-[0_0_10px_white]"></div>
                <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000 shadow-[0_0_10px_#3b82f6]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    {/* Header: NASA x META Hybrid */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                                <Satellite className="w-3 h-3 text-blue-500" />
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mono">NASA Space Protocol Layer</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] font-orbitron">
                                Meta Industry <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">SATELLITE DOMAIN</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-lg font-medium leading-relaxed italic">
                                Extrapolating the <span className="text-white">Butch Empire</span> into the orbital meta-world.
                                NASA-grade connectivity meeting the high-velocity requirements of Meta's global infrastructure.
                            </p>
                        </div>
                        <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] backdrop-blur-xl flex flex-col gap-4 w-full md:w-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                                <span className="text-xs font-black text-white uppercase mono">Global Uplink: ACTIVE</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] text-slate-500 uppercase mono font-bold">Orbital Range</p>
                                <p className="text-2xl font-black text-blue-400 font-orbitron italic">35,786 KM</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Orbital HUD */}
                        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Orbit className="w-48 h-48 text-blue-500 animate-[spin_20s_linear_infinite]" />
                            </div>

                            <div className="flex justify-between items-center mb-10">
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black text-white italic uppercase font-orbitron">NASA-Meta Relay Map</h4>
                                    <p className="text-[9px] text-slate-500 uppercase mono font-bold">Synchronizing Billboard PH Global Nodes</p>
                                </div>
                                <div className="flex gap-2">
                                    {['LEO', 'MEO', 'GEO'].map(orbit => (
                                        <button
                                            key={orbit}
                                            className={`px-4 py-1.5 rounded-lg text-[9px] font-black mono transition-all border ${activeOrbit.includes(orbit) ? 'bg-blue-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-slate-950 border-slate-800 text-slate-500'}`}
                                            onClick={() => setActiveOrbit(`${orbit}-STATIONARY`)}
                                        >
                                            {orbit}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="h-[300px] relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={satelliteData}
                                                innerRadius={80}
                                                outerRadius={120}
                                                paddingAngle={10}
                                                dataKey="value"
                                            >
                                                {satelliteData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl">
                                                                <p className="text-[10px] font-black text-blue-500 uppercase mb-1">{payload[0].name}</p>
                                                                <p className="text-xs text-white font-bold">Signal: {payload[0].value}%</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <Globe className="w-12 h-12 text-slate-700 mb-2" />
                                        <span className="text-[8px] font-black text-slate-500 uppercase mono">Core HQ</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {satelliteData.map((s, i) => (
                                        <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl flex items-center justify-between hover:border-blue-500/30 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                                                <div>
                                                    <p className="text-[10px] font-black text-white uppercase mono">{s.name}</p>
                                                    <p className="text-[8px] text-slate-600 font-bold mono uppercase">{s.status}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-black text-blue-400 mono">{s.latency}</p>
                                                <div className="w-16 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                                                    <div className="h-full bg-blue-500" style={{ width: `${s.value}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Meta Industry Insight */}
                        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                    <Cpu className="w-5 h-5 text-purple-500" />
                                </div>
                                <h4 className="text-lg font-black text-white italic uppercase font-orbitron">Meta Integration</h4>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-cyan-400" />
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Security Protocol</span>
                                    </div>
                                    <p className="text-xs text-white leading-relaxed uppercase font-medium">NASA-V12 encryption active. All Meta Industry satellite signals are routed through the <span className="text-cyan-400">Barangay 12 Sovereign Server</span>.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl text-center">
                                        <Navigation className="w-4 h-4 text-blue-400 mx-auto mb-2" />
                                        <p className="text-[8px] text-slate-500 uppercase mono font-bold">Orbit Position</p>
                                        <p className="text-xs font-black text-white mono">103.2° E</p>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl text-center">
                                        <Database className="w-4 h-4 text-purple-400 mx-auto mb-2" />
                                        <p className="text-[8px] text-slate-500 uppercase mono font-bold">Data Feed</p>
                                        <p className="text-xs font-black text-white mono">2.4 TB/S</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-blue-600/10 border border-blue-500/30 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                                RECALIBRATE SPACE NODES
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .font-orbitron { font-family: 'Orbitron', sans-serif; }
            `}</style>
        </section>
    );
};

export default MetaIndustrySatellite;
