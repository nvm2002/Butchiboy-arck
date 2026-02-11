
import React from 'react';
import { BookOpen, TrendingUp, ShieldCheck, Gem } from 'lucide-react';

const EmpireWisdom: React.FC = () => {
    return (
        <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-y border-slate-900">
            {/* Background Texture/Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.1)_0%,_transparent_70%)]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
                        <BookOpen className="w-6 h-6 text-yellow-500" />
                    </div>

                    <h2 className="text-[10px] font-black tracking-[0.6em] text-yellow-500 uppercase mono">Ancient Protocol • Proverbs 13:11</h2>

                    <div className="relative">
                        <span className="absolute -top-12 -left-8 text-9xl text-yellow-500/10 font-serif leading-none">"</span>
                        <blockquote className="text-3xl md:text-5xl font-black text-white italic tracking-tight leading-tight max-w-4xl">
                            Money wrongly gained will <span className="text-red-500 underline decoration-red-500/50 underline-offset-8">disappear bit by bit</span>;
                            money earned little by little will <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 italic">grow and grow</span>.
                        </blockquote>
                        <span className="absolute -bottom-20 -right-8 text-9xl text-yellow-500/10 font-serif leading-none rotate-180">"</span>
                    </div>

                    <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm space-y-4 hover:border-red-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-red-500" />
                                <h4 className="text-sm font-black text-white uppercase tracking-widest mono">The Risk of Shortcut</h4>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed text-left group-hover:text-slate-400 transition-colors">
                                Ill-gotten gains lack the structural integrity to withstand time. In the BUTCH Empire, we avoid the 'corrupt signal' that leads to inevitable decay.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm space-y-4 hover:border-yellow-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-yellow-500" />
                                <h4 className="text-sm font-black text-white uppercase tracking-widest mono">The Compound Effect</h4>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed text-left group-hover:text-slate-400 transition-colors">
                                Sustainable growth is built brick by brick. Every small win in Barangay 12 compounds into a global hegemony. Patience is the ultimate fuel.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 opacity-30 flex items-center gap-4">
                        <Gem className="w-4 h-4 text-yellow-500" />
                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] mono">Building the Future Foundation</span>
                        <Gem className="w-4 h-4 text-yellow-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpireWisdom;
