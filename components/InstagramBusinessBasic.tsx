
import React, { useState, useEffect } from 'react';
import { Instagram, Users, Zap, TrendingUp, MessageSquare, Camera, Globe, ShieldCheck, Heart, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const InstagramBusinessBasic: React.FC = () => {
    const [stats, setStats] = useState({
        followers: 12400,
        engagement: 8.4,
        impressions: 450000,
        conversions: 1240,
    });

    const [postData, setPostData] = useState<{ type: string, reach: number, engagement: number }[]>([]);

    useEffect(() => {
        // Mock data for Instagram performance
        const data = [
            { type: 'Static', reach: 4500, engagement: 8.2 },
            { type: 'Reels', reach: 12000, engagement: 12.5 },
            { type: 'Carousel', reach: 6800, engagement: 9.8 },
            { type: 'Stories', reach: 3200, engagement: 15.2 },
        ];
        setPostData(data);

        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                followers: prev.followers + Math.floor(Math.random() * 5),
                impressions: prev.impressions + Math.floor(Math.random() * 100),
                engagement: Math.min(25, prev.engagement + (Math.random() > 0.5 ? 0.01 : -0.005))
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="instagram-business-basic" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Holographic Overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/30 rounded-full">
                                <Instagram className="w-3 h-3 text-pink-500" />
                                <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em] mono">Social Dominance Protocol</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                                INSTAGRAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">BUSINESS BASIC</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                Synchronizing the <span className="text-white">Butch Empire</span> aesthetic with global social algorithms.
                                Real-time attention-capture metrics from Barangay 12 to the Global Feed.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold">Signal Strength</p>
                                <p className="text-xl font-black text-green-500 mono">98.4%</p>
                            </div>
                            <div className="w-[2px] h-12 bg-slate-800"></div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold">Algorithm Sync</p>
                                <p className="text-xl font-black text-pink-500 mono">OPTIMAL</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Empire Followers', value: stats.followers.toLocaleString(), icon: <Users className="text-pink-500" />, trend: '+12%' },
                            { label: 'Engagement Rate', value: `${stats.engagement.toFixed(1)}%`, icon: <Zap className="text-yellow-500" />, trend: 'BOOSTED' },
                            { label: 'Global Impressions', value: `${(stats.impressions / 1000).toFixed(1)}K`, icon: <Camera className="text-blue-500" />, trend: '+45%' },
                            { label: 'Lead Conversions', value: stats.conversions.toString(), icon: <TrendingUp className="text-green-500" />, trend: 'HIGH' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-3xl backdrop-blur-md hover:border-pink-500/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-xl bg-slate-800/50 text-white group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{item.trend}</span>
                                </div>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-2xl font-black text-white font-orbitron">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Content Performance */}
                        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-8">
                                <div className="space-y-1">
                                    <h4 className="text-lg font-black text-white italic uppercase font-orbitron">Content Velocity Matrix</h4>
                                    <p className="text-[9px] text-slate-500 uppercase mono font-bold text-pink-500">Reach vs Engagement by Format</p>
                                </div>
                                <div className="p-2 bg-pink-500/10 rounded-lg">
                                    <BarChart3 className="w-4 h-4 text-pink-500" />
                                </div>
                            </div>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={postData}>
                                        <XAxis dataKey="type" hide />
                                        <YAxis hide />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl">
                                                            <p className="text-[10px] font-black text-pink-500 uppercase mb-2">{payload[0].payload.type} Analysis</p>
                                                            <p className="text-xs text-white font-bold">Reach: {payload[0].value.toLocaleString()}</p>
                                                            <p className="text-xs text-white/60 font-medium">Engagement: {payload[0].payload.engagement}%</p>
                                                        </div>
                                                    )
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="reach" radius={[10, 10, 10, 10]}>
                                            {postData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ec4899' : '#f97316'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-around mt-4">
                                {postData.map((d, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-[10px] font-black text-white uppercase mono">{d.type}</p>
                                        <p className="text-[8px] text-slate-500 font-bold">{d.engagement}% Eng.</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Signals Feed */}
                        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                                    <Globe className="w-5 h-5 text-orange-500" />
                                </div>
                                <h4 className="text-lg font-black text-white italic uppercase font-orbitron">Global Attention Feed</h4>
                            </div>
                            <div className="space-y-4 flex-1 overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                                {[
                                    { user: '@calocan_king', action: 'Shared your Reel to 50k followers', time: '2m ago' },
                                    { user: '@wiz_fan_club', action: 'Commented on Empire Post', time: '15m ago' },
                                    { user: '@taylor_gang_ph', action: 'Mentions in Story: "Elite Branding"', time: '1h ago' },
                                    { user: '@butch_empire_node', action: 'New conversion from BIO link', time: '3h ago' },
                                ].map((signal, i) => (
                                    <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl flex justify-between items-center group hover:border-pink-500/30 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-[10px] font-black text-white">
                                                {signal.user[1].toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-white uppercase">{signal.user}</p>
                                                <p className="text-[9px] text-slate-500 font-medium">{signal.action}</p>
                                            </div>
                                        </div>
                                        <span className="text-[8px] text-slate-600 font-bold mono uppercase">{signal.time}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-pink-500 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:scale-[1.02] transition-all">
                                BOOST NETWORK SIGNAL
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
            `}</style>
        </section>
    );
};

export default InstagramBusinessBasic;
