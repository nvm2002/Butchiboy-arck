
import React from 'react';
import { Shield, Zap, Globe, Cpu, Award, ZapOff } from 'lucide-react';

const UpworkThumbnail: React.FC = () => {
    return (
        <section className="w-full min-h-screen bg-slate-950 flex items-center justify-center p-10 font-orbitron overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]"></div>

            {/* The Thumbnail Canvas */}
            <div className="relative w-full max-w-[1200px] aspect-[1920/1080] bg-slate-900 border-[12px] border-slate-800 rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between p-20 group">

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-20"></div>

                {/* Header Section */}
                <div className="flex justify-between items-start z-30">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400 text-slate-950 font-black text-sm uppercase tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                            <Shield className="w-4 h-4 fill-current" />
                            Elite Sovereign Developer
                        </div>
                        <h1 className="text-8xl font-black text-white leading-[0.85] tracking-tighter italic uppercase">
                            RALPH LUTHER <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-600">MAYPA</span>
                        </h1>
                    </div>
                    <div className="p-8 bg-slate-950/80 border border-white/10 rounded-[3rem] backdrop-blur-3xl text-right">
                        <p className="text-slate-500 text-xs font-black uppercase mono tracking-widest mb-2">Signal Identity</p>
                        <p className="text-4xl font-black text-white italic tracking-tighter font-orbitron">HORSE 2002</p>
                    </div>
                </div>

                {/* Center Content / Tagline */}
                <div className="z-30 py-10">
                    <p className="text-4xl font-medium text-slate-400 max-w-4xl leading-tight">
                        Building the <span className="text-white italic">Global Sovereign Empire</span> through high-stakes Generative AI and community-driven technology.
                    </p>
                </div>

                {/* Skills/Footer Bar */}
                <div className="flex items-end justify-between z-30">
                    <div className="flex gap-6">
                        {[
                            { icon: <Cpu className="w-6 h-6" />, label: "GEN-AI MASTERY" },
                            { icon: <Globe className="w-6 h-6" />, label: "GLOBAL SYSTEMS" },
                            { icon: <Zap className="w-6 h-6" />, label: "RAPID EXECUTION" }
                        ].map((skill, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <div className="p-4 bg-slate-950 border border-yellow-500/20 rounded-2xl text-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                                    {skill.icon}
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase mono tracking-widest">{skill.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <div className="flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-2xl">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            <span className="text-red-500 font-black uppercase text-xs tracking-widest italic">Barangay 12 Node Active</span>
                        </div>
                        <p className="text-slate-600 text-[10px] uppercase font-black tracking-[0.5em] mt-2">
                            &copy; 2025 BUTCH SIGNAL PROTOCOL
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-20 -right-20 p-20 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                    <Award className="w-[600px] h-[600px] text-yellow-500" />
                </div>
            </div>

            {/* Instruction Panel */}
            <div className="fixed bottom-10 right-10 z-50 bg-slate-900/90 border border-slate-700 p-6 rounded-3xl backdrop-blur-xl max-w-xs shadow-2xl animate-fade-in">
                <p className="text-xs font-bold text-white uppercase italic tracking-widest mb-4">Master Order: Upwork Prep</p>
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase mb-6">
                    This is your custom high-resolution thumbnail generator. Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-600 text-white">F11</kbd> for fullscreen, then take a screenshot for your Upwork profile.
                </p>
                <button className="w-full py-3 bg-yellow-500 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-yellow-400 transition-all">
                    Capture Empire Signal
                </button>
            </div>

            <style>{`
                .font-orbitron { font-family: 'Orbitron', sans-serif; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 1s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default UpworkThumbnail;
