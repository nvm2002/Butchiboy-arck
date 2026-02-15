
import React from 'react';
import { Sparkles, Zap, Globe, Heart, Shield, Rocket } from 'lucide-react';

const LYWFManifesto: React.FC = () => {
    return (
        <div className="w-full py-20 px-4 relative overflow-hidden bg-slate-950">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/20 blur-[120px] rounded-full animate-pulse animate-delay-500"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[10px] font-black tracking-[0.5em] text-red-500 uppercase mono">The LYWF Protocol</h2>
                    <h3 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                        Living <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-gradient">Young, Wild & Free</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
                        Ang fundamental philosophy ng BUTCH Empire. We don't just build; we celebrate.
                        We don't just win; we uplift the whole community from Barangay 12 to the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ManifestoCard
                        icon={<Sparkles className="w-8 h-8 text-yellow-500" />}
                        title="Young"
                        description="Perpetual innovation. Isang mindset na hindi tumatanda. Nanatiling gutom, nanatiling mausisa, at laging bitbit ang energy ng day one synergy."
                        stats="24/7 INNOVATION"
                    />
                    <ManifestoCard
                        icon={<Zap className="w-8 h-8 text-red-500" />}
                        title="Wild"
                        description="Unconstrained creativity. Binabasag natin ang pattern ng global market. Ang ating mga estratehiya ay matapang, disruptive, at unapologetically visionary."
                        stats="PATTERN BREAKER"
                    />
                    <ManifestoCard
                        icon={<Globe className="w-8 h-8 text-cyan-500" />}
                        title="Free"
                        description="Economic and creative sovereignty. Binibigyan natin ng tunay na kapangyarihan ang Barangay 12 at ang Taylor Gang network na itayo ang sariling destiny nang walang limitasyon."
                        stats="SOVEREIGN PROTOCOL"
                    />
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                            <Rocket className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-white italic tracking-tight uppercase font-orbitron">Empire Mission 2025</h4>
                            <p className="text-slate-500 text-sm mono uppercase tracking-widest">Target: Global Signal Dominance</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                            <span className="block text-[8px] mono text-slate-500 uppercase tracking-widest font-black">Community Hub</span>
                            <span className="text-xl font-bold text-red-500 tracking-tighter uppercase font-orbitron">BGY 12</span>
                        </div>
                        <div className="px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                            <span className="block text-[8px] mono text-slate-500 uppercase tracking-widest font-black">Global Alliance</span>
                            <span className="text-xl font-bold text-yellow-500 tracking-tighter uppercase font-orbitron">TAYLOR GANG</span>
                        </div>
                    </div>
                </div>

                <ThankYouSection />
            </div>
        </div>
    );
};

const ManifestoCard: React.FC<{ icon: React.ReactNode; title: string; description: string; stats: string }> = ({ icon, title, description, stats }) => (
    <div className="group p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] hover:bg-slate-900 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-6">
        <div className="p-4 bg-slate-950 rounded-2xl group-hover:scale-110 transition-transform duration-500">
            {icon}
        </div>
        <div className="space-y-3">
            <h4 className="text-3xl font-black text-white italic tracking-tighter uppercase font-orbitron">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto pt-6 border-t border-slate-800 w-full">
            <span className="text-[10px] font-black mono text-slate-600 tracking-[0.3em] uppercase">{stats}</span>
        </div>
    </div>
);

const ThankYouSection: React.FC = () => (
    <div className="mt-32 text-center border-t border-slate-900 pt-20 pb-10">
        <div className="flex justify-center mb-8">
            <div className="relative">
                <Heart className="w-12 h-12 text-red-500 animate-pulse" />
                <Shield className="w-6 h-6 text-yellow-500 absolute -bottom-2 -right-2" />
            </div>
        </div>
        <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-6 font-orbitron">
            Thank You <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">All</span>
        </h3>
        <p className="max-w-xl mx-auto text-slate-400 text-sm leading-relaxed uppercase tracking-widest font-bold">
            To the visionaries of Barangay 12 and the Taylor Gang network.
            Your loyalty is our strength. Your freedom is our mission.
        </p>
        <div className="mt-12 flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 font-orbitron">
            <span className="text-[10px] font-black mono text-white tracking-[0.5em]">B12</span>
            <span className="text-[10px] font-black mono text-white tracking-[0.5em]">TG</span>
            <span className="text-[10px] font-black mono text-white tracking-[0.5em]">BUTCH</span>
        </div>
    </div>
);

export default LYWFManifesto;
