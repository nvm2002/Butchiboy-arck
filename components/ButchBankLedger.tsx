
import React, { useState, useEffect } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownLeft, Wallet, ShieldCheck, PieChart, Activity, Briefcase } from 'lucide-react';

const ButchBankLedger: React.FC = () => {
    const [transactions, setTransactions] = useState([
        { id: 'TX-9021', type: 'INCOMING', amount: 125400, desc: 'Billboard PH Ad Sync', status: 'VERIFIED', time: '14:02' },
        { id: 'TX-9020', type: 'OUTGOING', amount: 45000, desc: 'Brgy 12 Community Aid', status: 'DISPATCHED', time: '13:45' },
        { id: 'TX-9019', type: 'INCOMING', amount: 8200, desc: 'Merch Royalty Relay', status: 'VERIFIED', time: '12:30' },
        { id: 'TX-9018', type: 'OUTGOING', amount: 15000, desc: 'Satellite Node Maintenance', status: 'COMPLETED', time: '11:15' },
        { id: 'TX-9017', type: 'INCOMING', amount: 330500, desc: 'Taylor Gang Partnership ROI', status: 'VERIFIED', time: '09:00' },
    ]);

    const [totalBalance, setTotalBalance] = useState(24850600);

    useEffect(() => {
        const interval = setInterval(() => {
            const isIncoming = Math.random() > 0.4;
            const amount = Math.floor(Math.random() * 50000) + 1000;
            const newTx = {
                id: `TX-${Math.floor(Math.random() * 9000) + 1000}`,
                type: isIncoming ? 'INCOMING' : 'OUTGOING',
                amount,
                desc: isIncoming ? 'Global Signal Revenue' : 'Local Community Impact',
                status: 'PROCESSING',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setTransactions(prev => [newTx, ...prev.slice(0, 7)]);
            setTotalBalance(prev => isIncoming ? prev + amount : prev - amount);

            setTimeout(() => {
                setTransactions(prev => prev.map(t => t.id === newTx.id ? { ...t, status: 'VERIFIED' } : t));
            }, 2000);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="butch-bank-ledger" className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                                <Wallet className="w-3 h-3 text-green-500" />
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] mono">Sovereign Financial Ledger</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none font-orbitron">
                                BUTCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-green-500">BANK LIVE</span>
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                Tracking the velocity of impact. Every peso synced from <span className="text-white">Billboard PH</span>
                                is directly re-routed to the upliftment of the <span className="text-white">Barangay 12</span> community.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-md text-right">
                                <p className="text-[10px] text-slate-500 uppercase mono font-bold">Total Liquid Capital</p>
                                <p className="text-3xl font-black text-white font-orbitron italic">
                                    ₱ {totalBalance.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Transaction List */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center justify-between px-6 mb-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase mono">Live Ledger Flow</span>
                                <span className="text-[10px] font-black text-slate-500 uppercase mono">Status Matrix</span>
                            </div>
                            {transactions.map((tx, i) => (
                                <div key={tx.id} className="group relative p-6 bg-slate-900/40 border border-slate-800 hover:border-green-500/30 rounded-2xl transition-all animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="flex items-center gap-6">
                                        <div className={`p-3 rounded-xl ${tx.type === 'INCOMING' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                            {tx.type === 'INCOMING' ? <ArrowUpRight className="w-6 h-6" /> : <ArrowDownLeft className="w-6 h-6" />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-white font-black uppercase text-sm italic">{tx.desc}</h4>
                                                <span className="text-[8px] mono text-slate-600 font-bold">{tx.id}</span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">{tx.time} • Global Hub Relay</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-xl font-black font-orbitron ${tx.type === 'INCOMING' ? 'text-green-500' : 'text-white'}`}>
                                                {tx.type === 'INCOMING' ? '+' : '-'} ₱{tx.amount.toLocaleString()}
                                            </p>
                                            <span className={`text-[8px] font-black px-2 py-0.5 rounded-full border ${tx.status === 'VERIFIED' ? 'bg-green-500/10 border-green-500/30 text-green-500' : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500 animate-pulse'
                                                }`}>
                                                {tx.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Financial Intelligence Sidebar */}
                        <div className="space-y-8">
                            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                                        <PieChart className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h4 className="text-lg font-black text-white italic uppercase font-orbitron">Asset Synergy</h4>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: 'Community Aid', val: 42, color: 'bg-green-500' },
                                        { label: 'Street Luxury R&D', val: 28, color: 'bg-blue-500' },
                                        { label: 'Signal Expansion', val: 18, color: 'bg-purple-500' },
                                        { label: 'Operational Reserve', val: 12, color: 'bg-slate-500' },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase mono">
                                                <span className="text-slate-400">{item.label}</span>
                                                <span className="text-white">{item.val}%</span>
                                            </div>
                                            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                                <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShieldCheck className="w-4 h-4 text-green-400" />
                                        <span className="text-[9px] font-black text-green-400 uppercase mono">Sovereign Audit: SECURE</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic uppercase">
                                        End-to-end encryption verified by NASA-grade protocols. Zero-latency reporting enabled for all Barangay 12 hubs.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-[3rem] text-center space-y-4">
                                <Activity className="w-8 h-8 text-green-500 mx-auto" />
                                <h4 className="text-xl font-black text-white uppercase italic font-orbitron">Wealth Multiplication</h4>
                                <p className="text-[10px] text-slate-300 uppercase mono">Next Community Payout in:</p>
                                <p className="text-3xl font-black text-green-400 font-orbitron">04:22:15</p>
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

export default ButchBankLedger;
