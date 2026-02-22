
import React from 'react';
import { ShoppingCart, TrendingUp, DollarSign, Package, Truck, Zap, BarChart3, ChevronRight } from 'lucide-react';

const ButchKartProject: React.FC = () => {
    const butchKartProject = {
        unitName: "Butch Kart 2G",
        quantity: 10,
        puhunanPerUnit: 950,
        bentaPerUnit: 1600,
        otherExpenses: 500, // Shipping & Ads

        calculateMetrics() {
            const totalCapital = (this.puhunanPerUnit * this.quantity) + this.otherExpenses;
            const totalRevenue = this.bentaPerUnit * this.quantity;
            const netProfit = totalRevenue - totalCapital;
            const roi = (netProfit / totalCapital) * 100;

            return {
                totalCapital,
                totalRevenue,
                netProfit,
                roi
            };
        }
    };

    const metrics = butchKartProject.calculateMetrics();

    return (
        <section id="butch-kart-project" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(239,68,68,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                                <ShoppingCart className="w-3 h-3 text-red-500" />
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mono">Production Node: Butch Kart</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                                BUTCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-500">KART 2G</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                Optimizing street-level commerce for maximum community velocity.
                                Unit inventory managed via <span className="text-white">Barangay 12 Dynamics</span>.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-md text-right border-l-red-500/50">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold text-red-500/70">Projected Net Profit</p>
                                <p className="text-4xl font-black text-white font-orbitron italic">
                                    ₱ {metrics.netProfit.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Unit Specs */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] backdrop-blur-sm group hover:border-red-500/30 transition-all">
                                <Package className="w-8 h-8 text-red-500 mb-4" />
                                <h4 className="text-[10px] font-black text-slate-500 uppercase mono mb-1">Unit Volume</h4>
                                <p className="text-3xl font-black text-white uppercase italic font-orbitron mb-2">{butchKartProject.quantity} UNITS</p>
                                <p className="text-[10px] text-slate-600 font-bold uppercase">Batch Serial: B12-BK-2G-2025</p>
                            </div>

                            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] backdrop-blur-sm group hover:border-red-500/30 transition-all">
                                <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
                                <h4 className="text-[10px] font-black text-slate-500 uppercase mono mb-1">Return on Investment</h4>
                                <p className="text-3xl font-black text-white uppercase italic font-orbitron mb-2">{metrics.roi.toFixed(2)}%</p>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4">
                                    <div className="h-full bg-gradient-to-r from-red-500 to-green-500" style={{ width: `${metrics.roi}%` }}></div>
                                </div>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="md:col-span-2 p-8 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="text-sm font-black text-white uppercase italic tracking-widest font-orbitron">Financial Architecture</h4>
                                    <BarChart3 className="w-5 h-5 text-slate-500" />
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:border-red-500/30 transition-all">
                                                <DollarSign className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-500 uppercase mono">Capital per Unit</p>
                                                <p className="text-white font-black uppercase text-sm">₱ {butchKartProject.puhunanPerUnit.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-800" />
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-500 uppercase mono">Revenue per Unit</p>
                                            <p className="text-green-500 font-black uppercase text-sm">₱ {butchKartProject.bentaPerUnit.toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-800/50 w-full"></div>

                                    <div className="flex items-center justify-between group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:border-red-500/30 transition-all">
                                                <Truck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-500 uppercase mono">Logistics & Marketing</p>
                                                <p className="text-white font-black uppercase text-sm">₱ {butchKartProject.otherExpenses.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-500 uppercase mono">Distribution Node</p>
                                            <p className="text-slate-400 font-black uppercase text-[10px]">BRGY 12 SATELLITE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Total Summary Sidebar */}
                        <div className="space-y-6">
                            <div className="p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Zap className="w-32 h-32 text-red-500" />
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase mono mb-1">Total Capital Invested</p>
                                        <p className="text-3xl font-black text-white font-orbitron italic">₱ {metrics.totalCapital.toLocaleString()}</p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase mono mb-1">Gross Revenue Target</p>
                                        <p className="text-3xl font-black text-red-500 font-orbitron italic">₱ {metrics.totalRevenue.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-800 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                            <Zap className="w-4 h-4 text-green-400" />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase leading-tight italic">
                                            Horse 2002 Energy levels: <span className="text-white">MAXIMUM</span>
                                        </p>
                                    </div>
                                    <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase italic tracking-widest text-xs rounded-2xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                        Sync Production Signal
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                                <p className="text-[9px] text-red-500 uppercase mono font-black mb-2 tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                                    Live Production Audit
                                </p>
                                <p className="text-[10px] text-slate-500 leading-relaxed italic uppercase font-medium">
                                    Current ROI trajectory exceeds local benchmarks by 24%. Expanding node to Caloocan North in Q3.
                                </p>
                            </div>
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

export default ButchKartProject;
