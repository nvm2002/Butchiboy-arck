
import React, { useState, useEffect } from 'react';
import { Package, LineChart, Shield, Zap, ArrowUpRight, Coins, Boxes, HeartHandshake } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const EmpireVaultModule: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'CASHFLOW' | 'INVENTORY'>('CASHFLOW');

    const cashFlowStrategy = [
        { label: 'Micro-Gaming Revenue', value: '$840k/day', status: 'SCALING', trend: '+12%', color: '#10b981' },
        { label: 'Billboard PH Licensing', value: '$1.2M/mo', status: 'SECURED', trend: '+4%', color: '#3b82f6' },
        { label: 'Taylor Gang Residuals', value: '$240k/wk', status: 'ACTIVE', trend: '+28%', color: '#f59e0b' },
        { label: 'Sovereign Tech Fees', value: '$50k/day', status: 'EMERGING', trend: '+15%', color: '#ef4444' }
    ];

    const inventoryAssets = [
        { item: 'Sovereign Mesh Nodes', qty: '420 Units', value: '$2.1M', category: 'TECH' },
        { item: 'Dagat-Dagatan Aid Kits', qty: '12,000 Kits', value: '$600k', category: 'HUMANITARIAN' },
        { item: 'Empire Lifestyle Gear', qty: '4,500 Units', value: '$850k', category: 'CULTURE' },
        { item: 'Security Node Clusters', qty: '8 Hubs', value: '$4.2M', category: 'INFRA' }
    ];

    const chartData = cashFlowStrategy.map(s => ({ name: s.label.split(' ')[0], value: parseFloat(s.trend) }));

    return (
        <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                            <Zap className="w-3 h-3 text-emerald-500" />
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mono">Capital Efficiency Protocol</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] font-orbitron">
                            Empire <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-600">Vault & Liquidity</span>
                        </h2>
                        <p className="max-w-xl text-slate-400 text-lg font-medium leading-relaxed">
                            To get more opportunities, you must maintain <span className="text-emerald-500">Perfect Liquidity.</span>
                            Your inventory isn't just stock; it's decentralized power.
                            Synchronizing high-velocity cash flow with strategic asset distribution in Barangay 12.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => setActiveTab('CASHFLOW')}
                                className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${activeTab === 'CASHFLOW' ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                            >
                                Cash Flow Matrix
                            </button>
                            <button
                                onClick={() => setActiveTab('INVENTORY')}
                                className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${activeTab === 'INVENTORY' ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                            >
                                Strategic Inventory
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-slate-900/40 border border-slate-800 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>

                        {activeTab === 'CASHFLOW' ? (
                            <div className="space-y-8 animate-fade-in">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-black text-white italic uppercase font-orbitron tracking-tight">Revenue Velocity</h4>
                                    <Coins className="w-6 h-6 text-emerald-500" />
                                </div>
                                <div className="space-y-4">
                                    {cashFlowStrategy.map((item, i) => (
                                        <div key={i} className="p-6 bg-slate-950/50 border border-slate-800 rounded-2xl group hover:border-emerald-500/30 transition-all flex items-center justify-between">
                                            <div className="space-y-1">
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mono">{item.status}</span>
                                                <p className="text-sm font-black text-white uppercase italic">{item.label}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-black text-emerald-500 font-orbitron">{item.value}</p>
                                                <div className="flex items-center gap-1 justify-end">
                                                    <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                                                    <span className="text-[10px] font-bold text-emerald-500 mono">{item.trend}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8 animate-fade-in">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-black text-white italic uppercase font-orbitron tracking-tight">Sovereign Asset Vault</h4>
                                    <Boxes className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {inventoryAssets.map((item, i) => (
                                        <div key={i} className="p-6 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all group">
                                            <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest mono mb-1 block">{item.category}</span>
                                            <p className="text-xs font-black text-white uppercase mb-3">{item.item}</p>
                                            <div className="flex justify-between items-end">
                                                <div className="space-y-1">
                                                    <p className="text-[8px] text-slate-600 uppercase font-black">Stockpile</p>
                                                    <p className="text-sm font-black text-white italic font-orbitron">{item.qty}</p>
                                                </div>
                                                <div className="text-right space-y-1">
                                                    <p className="text-[8px] text-slate-600 uppercase font-black">Valuation</p>
                                                    <p className="text-sm font-black text-blue-400 italic font-orbitron">{item.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
                                    <HeartHandshake className="w-8 h-8 text-blue-500" />
                                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-widest">
                                        Inventory is prioritized for <span className="text-white font-black">Community Resilience</span>. High-demand tech nodes are reserved for Barangay 12 entrepreneurs.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Opportunity Readiness', value: '98.4%', desc: 'Capital available for instant pivots.' },
                        { label: 'Fill Rate', value: '100%', desc: 'No shortages in humanitarian nodes.' },
                        { label: 'Burn Rate', value: '0.02%', desc: 'Optimized efficiency.' },
                        { label: 'Social ROI', value: '4.8x', desc: 'Impact per dollar spent.' }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2 border-l border-slate-800 pl-8">
                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest block">{stat.label}</span>
                            <p className="text-4xl font-black text-white font-orbitron italic">{stat.value}</p>
                            <p className="text-[9px] text-slate-600 mono leading-relaxed">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default EmpireVaultModule;
