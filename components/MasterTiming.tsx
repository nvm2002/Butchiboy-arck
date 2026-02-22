import React, { useState, useEffect, useMemo } from 'react';
import { Clock, Timer, Zap, Activity, Globe, MousePointer2, TrendingUp, Cpu, Shield, BarChart3, Radio } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const MasterTiming: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [pulse, setPulse] = useState(0);
    const [resonance, setResonance] = useState(0.984);
    const [throughput, setThroughput] = useState(42.8);
    const [timingData, setTimingData] = useState<{ time: number, value: number, baseline: number }[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            // Pulse logic for "Quantum Synchronization"
            setPulse(prev => {
                const next = prev + 0.5;
                return next > 100 ? 0 : next;
            });

            // Simulate slight variations in resonance and throughput
            setResonance(prev => Math.min(0.999, Math.max(0.980, prev + (Math.random() - 0.5) * 0.001)));
            setThroughput(prev => Math.min(45.0, Math.max(40.0, prev + (Math.random() - 0.5) * 0.1)));

            setTimingData(prev => {
                const timestamp = now.getTime();
                const newValue = 40 + Math.random() * 40 + (Math.sin(timestamp / 2000) * 20);
                const newData = [...prev, {
                    time: timestamp,
                    value: newValue,
                    baseline: 50 + (Math.sin(timestamp / 5000) * 10)
                }];
                if (newData.length > 30) return newData.slice(1);
                return newData;
            });
        }, 500);
        return () => clearInterval(timer);
    }, []);

    const formatBGY12Time = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Manila' });
    };

    const formatUTCTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' });
    };

    const probability = useMemo(() => Math.min(pulse * 1.5, 99.9), [pulse]);

    return (
        <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-y border-red-900/20">
            {/* Visual Background Nodes - More subtle and high-tech */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Timing Metrics */}
                    <div className="flex-1 space-y-10 w-full">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mono">Signal Synchronization Active</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9] font-orbitron">
                                Master The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 animate-gradient">Art Of Timing</span>
                            </h2>
                            <p className="max-w-xl text-slate-400 text-lg font-medium leading-relaxed">
                                Zero-latency decision making. Sa Butch Empire, bawat segundo ay investment.
                                We synchronize the <span className="text-white">Barangay 12 heartbeat</span> with the global financial pulse.
                                <span className="text-red-500 font-bold italic"> Precision is the ultimate luxury.</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 bg-slate-900/40 border border-slate-800/50 rounded-3xl backdrop-blur-2xl group hover:border-red-500/40 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 group-hover:w-2 transition-all"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <Globe className="w-6 h-6 text-red-500" />
                                    <span className="text-[10px] text-slate-500 font-black mono italic tracking-widest">BGY-12 HUB SYNC</span>
                                </div>
                                <p className="text-5xl font-black text-white font-orbitron tabular-nums tracking-tight">
                                    {formatBGY12Time(currentTime)}
                                </p>
                                <p className="text-[10px] text-slate-500 mono uppercase mt-4 tracking-[0.3em] font-bold">Caloocan Strategic Time</p>
                            </div>

                            <div className="p-8 bg-slate-900/40 border border-slate-800/50 rounded-3xl backdrop-blur-2xl group hover:border-yellow-500/40 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50 group-hover:w-2 transition-all"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <Activity className="w-6 h-6 text-yellow-500" />
                                    <span className="text-[10px] text-slate-500 font-black mono italic tracking-widest">GLOBAL LIQUIDITY</span>
                                </div>
                                <p className="text-5xl font-black text-white font-orbitron tabular-nums tracking-tight">
                                    {formatUTCTime(currentTime)}
                                </p>
                                <p className="text-[10px] text-slate-500 mono uppercase mt-4 tracking-[0.3em] font-bold">Universal Coordinated Node</p>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-900/60 border border-red-900/20 rounded-[2.5rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Cpu className="w-8 h-8 text-red-500 animate-spin-slow" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-end">
                                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mono italic">Heuristic Opportunity Window</h4>
                                    <span className="text-4xl font-black text-white font-orbitron italic text-right">
                                        {probability.toFixed(2)}<span className="text-red-500">%</span>
                                    </span>
                                </div>
                                <div className="relative h-4 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
                                    <div
                                        className="h-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(239, 68, 68, 0.4)]"
                                        style={{ width: `${probability}%` }}
                                    ></div>
                                </div>
                                <p className="text-[10px] text-slate-500 mono uppercase leading-relaxed font-bold tracking-[0.2em] max-w-lg">
                                    Real-time probability of <span className="text-red-500">Peak Market Entry</span> synchronized with Philippine Billboard Sector and Taylor Gang global sentiment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Real-time Data Viz */}
                    <div className="w-full lg:w-[500px] aspect-square relative">
                        {/* Decorative background circle */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-red-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>

                        <div className="absolute inset-0 border border-slate-800/80 rounded-[4rem] bg-slate-900/40 backdrop-blur-2xl overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 right-0 p-8 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/60 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_rgba(239, 68, 68, 0.8)]"></div>
                                    <span className="text-[11px] font-black text-white uppercase mono tracking-[0.3em]">Live Empire Pulse</span>
                                </div>
                                <div className="p-2 rounded-lg bg-slate-800/50">
                                    <BarChart3 className="w-4 h-4 text-red-500" />
                                </div>
                            </div>

                            <div className="h-full pt-32 pb-12 px-6">
                                <ResponsiveContainer width="100%" height="75%">
                                    <AreaChart data={timingData}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="time" hide />
                                        <YAxis hide domain={[0, 100]} />
                                        <Tooltip
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md">
                                                            <p className="text-[10px] font-bold text-slate-500 uppercase mono mb-1">Signal Index</p>
                                                            <p className="text-lg font-black text-white font-orbitron italic">
                                                                {Number(payload[0].value).toFixed(2)}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#ef4444"
                                            strokeWidth={4}
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                            isAnimationActive={false}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="baseline"
                                            stroke="#fbbf24"
                                            strokeWidth={1}
                                            strokeDasharray="5 5"
                                            dot={false}
                                            opacity={0.3}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>

                                <div className="mt-8 grid grid-cols-2 gap-8 px-4">
                                    <div className="space-y-2">
                                        <span className="text-[9px] text-slate-500 uppercase font-black mono tracking-widest">Resonance Alpha</span>
                                        <div className="text-xl font-bold text-white uppercase tracking-tighter font-orbitron italic">
                                            {resonance.toFixed(4)}
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <span className="text-[9px] text-slate-500 uppercase font-black mono tracking-widest">Node Integrity</span>
                                        <div className="text-xl font-bold text-green-500 uppercase tracking-tighter font-orbitron italic">
                                            SECURE-v12
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-10 -right-10 p-6 bg-slate-950 border border-slate-800 rounded-[2rem] shadow-2xl rotate-12 group hover:rotate-0 transition-all duration-700 hover:scale-110 z-30">
                            <Zap className="w-12 h-12 text-yellow-500 drop-shadow-[0_0_15px_rgba(251, 191, 36, 0.5)]" />
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-900 pt-16">
                    {[
                        { label: 'Latency', value: '0.002ms', icon: <Clock className="w-5 h-5" /> },
                        { label: 'Throughput', value: `${throughput.toFixed(1)} TB/s`, icon: <TrendingUp className="w-5 h-5" /> },
                        { label: 'Uptime', value: '99.999%', icon: <Shield className="w-5 h-5" /> },
                        { label: 'Precision', value: 'Atomic', icon: <Zap className="w-5 h-5" /> }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="p-4 rounded-3xl bg-slate-900/50 border border-slate-800 text-slate-400 mb-6 group-hover:border-red-500/50 group-hover:text-red-500 transition-all duration-500">
                                {stat.icon}
                            </div>
                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2">{stat.label}</span>
                            <span className="text-2xl font-black text-white font-orbitron italic tracking-widest">{stat.value}</span>
                        </div>
                    ))}
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
            `}</style>
        </section>
    );
};

export default MasterTiming;
