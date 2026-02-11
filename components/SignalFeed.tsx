
import React, { useState, useEffect } from 'react';
import { Radio, MapPin, Zap, Heart, DollarSign, Activity, Users } from 'lucide-react';

interface SignalEvent {
    id: string;
    type: 'AID' | 'REVENUE' | 'SIGNAL' | 'GAME';
    message: string;
    location: string;
    timestamp: string;
    value?: string;
}

const SignalFeed: React.FC = () => {
    const [events, setEvents] = useState<SignalEvent[]>([]);

    const mockLocations = [
        "Barangay 12 HQ",
        "Libis Talisay Dulo",
        "Caloocan South Node",
        "Dagat-Dagatan Hub",
        "Billboard PH Satellite",
        "Taylor Gang HQ (Relay)"
    ];

    const mockMessages = [
        { type: 'AID', msg: "Medical supplies batch distributed", val: "500 Units" },
        { type: 'REVENUE', msg: "Ad revenue sync completed", val: "+$12.5k" },
        { type: 'SIGNAL', msg: "Viral hook detected in trend feed", val: "99% Resonance" },
        { type: 'GAME', msg: "Empire Games: New session peak", val: "4.2k Users" },
        { type: 'AID', msg: "Scholarship fund allocated", val: "10 Recipients" }
    ];

    useEffect(() => {
        // Initial events
        const initialEvents: SignalEvent[] = Array.from({ length: 4 }).map((_, i) => ({
            id: Math.random().toString(36).substr(2, 9),
            type: mockMessages[i % mockMessages.length].type as any,
            message: mockMessages[i % mockMessages.length].msg,
            location: mockLocations[i % mockLocations.length],
            timestamp: new Date().toLocaleTimeString(),
            value: mockMessages[i % mockMessages.length].val
        }));
        setEvents(initialEvents);

        const interval = setInterval(() => {
            const randomMsg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
            const newEvent: SignalEvent = {
                id: Math.random().toString(36).substr(2, 9),
                type: randomMsg.type as any,
                message: randomMsg.msg,
                location: mockLocations[Math.floor(Math.random() * mockLocations.length)],
                timestamp: new Date().toLocaleTimeString(),
                value: randomMsg.val
            };
            setEvents(prev => [newEvent, ...prev.slice(0, 5)]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Activity className="w-24 h-24 text-red-500 animate-pulse" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-500/20 rounded-2xl border border-red-500/30">
                            <Radio className="w-8 h-8 text-red-500 animate-[pulse_2s_infinite]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Global Signal Live</h3>
                            <p className="text-[10px] text-slate-500 mono uppercase tracking-[0.4em]">Real-time Empire Synchronization</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-3">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-black text-white mono uppercase animate-pulse">1.2M REACH</span>
                        </div>
                        <div className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-3">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-black text-white mono uppercase">$24.8M LIQUID</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {events.map((event, i) => (
                        <div
                            key={event.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-950/50 border border-slate-800/50 rounded-2xl hover:border-red-500/30 transition-all animate-fade-up"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-2 h-2 rounded-full animate-pulse ${event.type === 'AID' ? 'bg-cyan-500' :
                                        event.type === 'REVENUE' ? 'bg-green-500' :
                                            event.type === 'SIGNAL' ? 'bg-red-500' : 'bg-yellow-500'
                                    }`}></div>
                                <div>
                                    <p className="text-sm font-bold text-white uppercase">{event.message}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <MapPin className="w-3 h-3 text-slate-600" />
                                        <span className="text-[9px] mono text-slate-600 uppercase font-black">{event.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                {event.value && (
                                    <span className={`text-xs font-black mono px-3 py-1 rounded-lg ${event.type === 'REVENUE' ? 'bg-green-500/10 text-green-500' :
                                            event.type === 'AID' ? 'bg-cyan-500/10 text-cyan-500' :
                                                'bg-slate-800 text-slate-400'
                                        }`}>
                                        {event.value}
                                    </span>
                                )}
                                <span className="text-[10px] mono text-slate-700 font-bold">{event.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SignalFeed;
