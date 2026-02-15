
import React from 'react';
import { Layers, Droplets, Zap, ShieldCheck, Factory, Beaker, Globe, Rocket } from 'lucide-react';

const ResinEmpire: React.FC = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Liquid Mesh Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 blur-[120px] rounded-full animate-pulse animate-delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                            <Droplets className="w-4 h-4 text-cyan-400" />
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mono">Division: Advanced Polymers</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] font-orbitron">
                            Butch <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">RESIN TECH</span>
                        </h2>

                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            Ang material backbone ng 2030 Global Empire. From high-performance gaming hardware to sustainable disaster-relief housing sa Dagat-Dagatan, we are casting the future in premium resin nodes. This is sovereign engineering for the masa.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ProductCard
                                icon={<Layers className="w-6 h-6 text-cyan-400" />}
                                title="Imperial Composite"
                                desc="Ultra-durable, lightweight resin for next-gen gaming consoles and VR gear."
                            />
                            <ProductCard
                                icon={<ShieldCheck className="w-6 h-6 text-green-400" />}
                                title="Eco-Shield Armor"
                                desc="Fast-curing structural resin for rapid-deployment aid shelters in Barangay 12."
                            />
                            <ProductCard
                                icon={<Factory className="w-6 h-6 text-yellow-400" />}
                                title="Automated Casting"
                                desc="24/7 autonomous production lines controlled via the Butch Signal."
                            />
                            <ProductCard
                                icon={<Beaker className="w-6 h-6 text-purple-400" />}
                                title="Molecular Bonding"
                                desc="Proprietary fusion tech that makes our hardware virtually indestructible."
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-video bg-slate-900/50 border border-slate-800 rounded-[3rem] p-1 overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                            <div className="h-full w-full rounded-[2.8rem] bg-slate-950 flex flex-col items-center justify-center p-12 text-center space-y-8 relative">

                                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform duration-500">
                                    <Rocket className="w-12 h-12 text-white" />
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Casting The <br />Future Node</h4>
                                    <p className="text-[10px] text-slate-500 mono uppercase tracking-[0.4em]">Prophetic Manufacturing Protocol</p>
                                </div>

                                <div className="flex gap-4 w-full pt-8">
                                    <div className="flex-1 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                                        <span className="block text-[8px] font-black text-cyan-500 mono uppercase mb-2">Purity Level</span>
                                        <span className="text-xl font-black text-white italic">99.9%</span>
                                    </div>
                                    <div className="flex-1 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                                        <span className="block text-[8px] font-black text-blue-500 mono uppercase mb-2">Market Cap</span>
                                        <span className="text-xl font-black text-white italic">$8.2B</span>
                                    </div>
                                </div>

                                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 animate-[shimmer_2s_infinite] w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ProductCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:bg-slate-900 transition-all group">
        <div className="p-3 bg-slate-950 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h5 className="text-sm font-black text-white uppercase mb-2 tracking-tight">{title}</h5>
        <p className="text-[10px] text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default ResinEmpire;
