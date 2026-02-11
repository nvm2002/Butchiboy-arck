
import React from 'react';
import { Sparkles, Music, Zap, Globe, Star, Shield, Play, Mic2 } from 'lucide-react';

const TaylorGangPartnership: React.FC = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Smoke/Mist Effect Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/20 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 relative order-2 lg:order-1">
                        <div className="relative aspect-[4/5] max-w-md mx-auto group">
                            <div className="absolute inset-0 bg-yellow-400/20 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700 blur-xl"></div>
                            <div className="relative h-full w-full bg-slate-900 border-2 border-yellow-500/30 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-end p-8">
                                {/* Mock Graphic Container */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                    <Mic2 className="w-24 h-24 text-yellow-500 mx-auto" />
                                    <p className="text-[10px] font-black tracking-[1em] text-white uppercase mono">TAYLOR GANG</p>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="px-3 py-1 bg-yellow-500 text-slate-950 text-[10px] font-black uppercase rounded-full">OFFICIAL COALITION</div>
                                    </div>
                                    <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">Wiz Khalifa <br />x Butch Empire</h4>
                                    <p className="text-[10px] text-slate-400 mono uppercase tracking-widest leading-relaxed">
                                        The "Young, Wild & Free" Global Initiative. Broadcasting from Barangay 12 to the World Stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mono">Alliance: Global Culture Node</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85]">
                            Taylor Gang <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 animate-gradient">Coalition</span>
                        </h2>

                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            We've partnered with Wiz Khalifa and the Taylor Gang network to merge street luxury with high-stakes humanitarian impact. This is where global influence meets Barangay 12 grit.
                        </p>

                        <div className="space-y-4">
                            <AllianceItem
                                icon={<Music className="w-5 h-5 text-yellow-500" />}
                                title="Sonic Branding"
                                desc="Custom Empire soundscapes developed by TG producers for the 'Empire Games'."
                            />
                            <AllianceItem
                                icon={<Zap className="w-5 h-5 text-yellow-500" />}
                                title="Viral Synchronization"
                                desc="TG's global network amplifying Billboard PH signal peaks to 100M+ impressions."
                            />
                            <AllianceItem
                                icon={<Globe className="w-5 h-5 text-yellow-500" />}
                                title="Global Philanthropy"
                                desc="Co-funding the expansion of Dagat-Dagatan aid nodes through TG merchandise drops."
                            />
                        </div>

                        <div className="pt-8 flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-yellow-500 text-slate-950 font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                                <Play className="w-5 h-5" /> WATCH THE REVEAL
                            </button>
                            <button className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all">
                                VIEW COALITION LEDGER
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const AllianceItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-4 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-yellow-500/30 transition-all group">
        <div className="p-3 bg-slate-950 rounded-xl group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div>
            <h5 className="text-sm font-black text-white uppercase tracking-tight">{title}</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
        </div>
    </div>
);

export default TaylorGangPartnership;
