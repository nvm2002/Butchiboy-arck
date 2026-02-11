
import React from 'react';
import { Shield, Star, Zap, Crown, Flame, Award, ChevronRight } from 'lucide-react';

const Horse2002Heritage: React.FC = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mono">Leader DNA: Established 2002</span>
                        </div>

                        <h2 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-6">
                            The Year <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">Of The Horse</span>
                        </h2>

                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                            Born in 2002, Ralph Luther Maypa carries the spirit of the Noble Horse. A symbol of speed, independence, and relentless drive. In Barangay 12, this spirit is the engine of the Empire.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <Trait badge="STRENGTH" title="Relentless Drive" desc="Unstoppable momentum in Gaming & Philanthropy." />
                            <Trait badge="LOALTY" title="Empire Core" desc="Rooted in the soil of Barangay 12, Caloocan." />
                            <Trait badge="VISION" title="Prophetic" desc="Seeing the 2030 liquidity before it manifests." />
                            <Trait badge="FREEDOM" title="LYWF Spirit" desc="Living Young, Wild & Free by design." />
                        </div>
                    </div>

                    <div className="relative">
                        {/* The "Totem" Visual */}
                        <div className="relative aspect-square max-w-md mx-auto group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-yellow-600 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 opacity-20"></div>
                            <div className="absolute inset-0 bg-slate-900 border-2 border-slate-800 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700 overflow-hidden shadow-2xl">
                                <div className="p-12 h-full flex flex-col justify-between relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                        <Shield className="w-32 h-32 text-red-500" />
                                    </div>

                                    <div className="space-y-4">
                                        <Award className="w-12 h-12 text-yellow-500" />
                                        <h4 className="text-4xl font-black text-white uppercase italic leading-none">Imperial <br />Zodiac 2002</h4>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="text-5xl font-black text-red-600">02</div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono">Generation <br />Signal</div>
                                        </div>
                                        <div className="pt-6 border-t border-slate-800">
                                            <p className="text-xs text-slate-400 leading-relaxed italic">
                                                "The Horse of 2002 does not wait for the wind. He creates the storm."
                                            </p>
                                        </div>
                                        <button className="w-full py-4 bg-slate-800 border border-slate-700 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:bg-red-600 hover:border-red-500 transition-all flex items-center justify-center gap-2">
                                            ACTIVATE HORSE SIGNAL <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/30 blur-3xl rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-600/30 blur-3xl rounded-full animate-pulse animate-delay-700"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const Trait: React.FC<{ badge: string; title: string; desc: string }> = ({ badge, title, desc }) => (
    <div className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-red-500/30 transition-all group">
        <span className="text-[8px] font-black text-red-500 mono tracking-[0.2em] mb-2 block">{badge}</span>
        <h5 className="text-sm font-black text-white uppercase mb-1">{title}</h5>
        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
);

export default Horse2002Heritage;
