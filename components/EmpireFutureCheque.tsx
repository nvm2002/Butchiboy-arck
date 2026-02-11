
import React, { useState } from 'react';
import { Landmark, BadgeCheck, ShieldAlert, Coins, Sparkles, Send, Download } from 'lucide-react';

interface ChequeData {
    amount: string;
    payee: string;
    memo: string;
    date: string;
    serial: string;
}

const EmpireFutureCheque: React.FC = () => {
    const [vision, setVision] = useState('');
    const [generatedCheque, setGeneratedCheque] = useState<ChequeData | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateCheque = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setGeneratedCheque({
                amount: "$150,000,000.00",
                payee: "THE BUTCH EMPIRE COMMAND",
                memo: vision || "GLOBAL SIGNAL SUPREMACY",
                date: "DECEMBER 31, 2030",
                serial: `BTCH-${Math.floor(1000 + Math.random() * 9000)}-EMPIRE`
            });
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="w-full py-20 px-4 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-[10px] font-black tracking-[0.5em] text-yellow-500 uppercase mono">The Manifestation Node</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">Empire Cheque</span>
                    </h3>
                    <p className="max-w-xl mx-auto text-slate-400 text-sm font-medium">
                        Project your wealth into the future. Write your vision, and Butch Bank will manifest the liquidity.
                    </p>
                </div>

                {!generatedCheque ? (
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] backdrop-blur-xl space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase mono tracking-widest pl-2">Your 2030 Grand Vision</label>
                            <input
                                type="text"
                                value={vision}
                                onChange={(e) => setVision(e.target.value)}
                                placeholder="e.g. Interstellar Charity Network, 100 Gaming Hubs..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
                            />
                        </div>
                        <button
                            onClick={generateCheque}
                            disabled={isGenerating}
                            className="w-full py-5 bg-gradient-to-r from-yellow-600 to-yellow-400 text-slate-950 font-black uppercase tracking-widest rounded-2xl hover:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {isGenerating ? (
                                <>
                                    <Sparkles className="w-5 h-5 animate-spin" />
                                    MANIFESTING LIQUIDITY...
                                </>
                            ) : (
                                <>
                                    <Landmark className="w-5 h-5" />
                                    GENERATE FUTURE CHEQUE
                                </>
                            )}
                        </button>
                    </div>
                ) : (
                    <div className="animate-scale-in">
                        {/* The Cheque Component */}
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-yellow-200 via-yellow-600 to-yellow-200 shadow-[0_0_80px_rgba(234,179,8,0.4)] group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/30 pointer-events-none z-20 mix-blend-overlay"></div>

                            <div className="relative bg-[#faf9f6] text-slate-900 p-8 md:p-12 rounded-[1.4rem] overflow-hidden font-serif border border-yellow-700/30">
                                {/* Security Watermark */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-4 overflow-hidden z-0">
                                    {Array.from({ length: 40 }).map((_, i) => (
                                        <span key={i} className="text-2xl font-black uppercase rotate-[-25deg] whitespace-nowrap">FUTURE EMPIRE • BUTCH BANK • RALPH MAYPA</span>
                                    ))}
                                </div>

                                <div className="relative z-10 flex justify-between items-start mb-12">
                                    <div className="space-y-1">
                                        <h2 className="text-5xl font-black italic tracking-tighter text-yellow-900 uppercase leading-none">BUTCH BANK</h2>
                                        <p className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-yellow-700">PREMIUM FUTURE REWARDS • BRGY 12</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[11px] font-sans font-black text-slate-400 uppercase">SERIAL NO: {generatedCheque.serial}</p>
                                        <p className="text-sm font-sans font-bold text-slate-800">EXPIRATION DATE: {generatedCheque.date}</p>
                                        <div className="mt-2 flex items-center justify-end gap-1 text-[8px] font-black text-yellow-600 uppercase mono tracking-widest bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200">
                                            <BadgeCheck className="w-2 h-2" /> GUARANTEED FUTURE LIQUIDITY
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-end gap-6 mb-10">
                                    <span className="text-sm font-sans font-black text-slate-500 uppercase tracking-widest min-w-max">Pay To The Order Of:</span>
                                    <div className="flex-1 border-b-2 border-slate-300 pb-2 text-3xl font-black tracking-tight uppercase text-slate-800 italic">
                                        {generatedCheque.payee}
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 mb-12">
                                    <div className="flex-1 flex items-end gap-4 w-full">
                                        <span className="text-sm font-sans font-black text-slate-500 uppercase tracking-widest min-w-max">Manifested Amount:</span>
                                        <div className="flex-1 border-b-2 border-slate-300 pb-2 text-xl italic font-bold text-slate-700 leading-tight">
                                            One Hundred Fifty Million United States Dollars
                                        </div>
                                    </div>
                                    <div className="bg-yellow-100/50 border-4 border-yellow-600/30 p-6 rounded-2xl min-w-[300px] text-center shadow-inner relative">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-yellow-600 text-white text-[8px] font-black uppercase rounded-full">Imperial Future Value</div>
                                        <span className="text-4xl font-black text-yellow-900 drop-shadow-sm">{generatedCheque.amount}</span>
                                    </div>
                                </div>

                                <div className="relative z-10 mb-12 text-center py-4 bg-slate-50 rounded-xl border border-slate-200/50 italic text-slate-900 text-sm font-bold uppercase tracking-widest">
                                    MEMO: {generatedCheque.memo}
                                </div>

                                <div className="relative z-10 flex justify-between items-center">
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full border-4 border-yellow-600/20 flex items-center justify-center relative overflow-hidden">
                                            <Coins className="w-12 h-12 text-yellow-600 animate-bounce" />
                                        </div>
                                        <p className="text-[9px] font-sans font-black text-yellow-800 mt-3 uppercase tracking-[0.3em]">Empire Manifestation Seal</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="border-b-4 border-yellow-700/40 px-16 pb-3 mb-2 relative">
                                            <span className="text-6xl font-serif italic text-red-800 font-black tracking-tighter drop-shadow-sm" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                                                Ralph Luther Maypa
                                            </span>
                                        </div>
                                        <p className="text-[11px] font-sans font-black uppercase tracking-[0.5em] text-yellow-800">Empire Leader • Prophecy Confirmed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center gap-4">
                            <button
                                onClick={() => setGeneratedCheque(null)}
                                className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
                            >
                                GENERATE ANOTHER
                            </button>
                            <button
                                className="px-8 py-4 bg-yellow-500 text-slate-950 font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                            >
                                <Download className="w-5 h-5" /> DOWNLOAD PROPHECY
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmpireFutureCheque;
