
import os

content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BUTCH SIGNAL | The Global Sovereign Empire</title>
    
    <!-- SEO Optimization -->
    <meta name="description" content="Ralph Luther Maypa's Global Empire Gateway. Broadcasting from Barangay 12, Caloocan South. Join the Gaming, Technology, and Philanthropy revolution. Year of the Horse 2002 Heritage." />
    <meta name="keywords" content="Butch Empire, Ralph Luther Maypa, Barangay 12, Caloocan South, Taylor Gang, Wiz Khalifa, Gaming Empire, Philanthropy, Technology, Future Bank, Sovereign Logistics" />
    <meta name="author" content="Ralph Luther Maypa" />
    
    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="BUTCH SIGNAL | Global Sovereign Empire" />
    <meta property="og:description" content="The rurok of street luxury and high-stakes humanitarian impact. Join our global mission from Barangay 12." />
    <meta property="og:image" content="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="BUTCH SIGNAL | Global Sovereign Empire" />
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-red: #ef4444;
            --primary-gold: #fbbf24;
            --deep-slate: #020617;
        }
        
        body { 
            font-family: "Space Grotesk", sans-serif; 
            background-color: var(--deep-slate); 
            color: #f8fafc; 
            margin: 0; 
            overflow-x: hidden;
        }
        
        .mono { font-family: "JetBrains Mono", monospace; }
        .font-orbitron { font-family: "Orbitron", sans-serif; }
        
        .blueprint-grid { 
            background-size: 50px 50px; 
            background-image: 
                linear-gradient(to right, rgba(239, 68, 68, 0.05) 1px, transparent 1px), 
                linear-gradient(to bottom, rgba(239, 68, 68, 0.05) 1px, transparent 1px); 
        }
        
        .neon-glow-red { box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); }
        .neon-glow-gold { box-shadow: 0 0 15px rgba(251, 191, 36, 0.5); }
        
        .scanline { 
            width: 100%; 
            height: 100px; 
            z-index: 100; 
            background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(239, 68, 68, 0.03) 50%, rgba(0, 0, 0, 0) 100%); 
            opacity: 0.2; 
            position: fixed; 
            bottom: 100%; 
            animation: scanline 8s linear infinite; 
            pointer-events: none; 
        }
        
        @keyframes scanline { 0% { bottom: 100%; } 100% { bottom: -100px; } }
        
        @keyframes fadeUp { 
            from { opacity: 0; transform: translateY(30px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
        
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s linear infinite; }
        
        @keyframes gradient { 
            0% { background-position: 0% center; } 
            50% { background-position: 100% center; } 
            100% { background-position: 0% center; } 
        }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--deep-slate); }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary-red); }
        
        #root { min-height: 100vh; display: flex; flex-direction: column; }
    </style>
    
    <script type="importmap">
    {
        "imports": {
            "@google/genai": "https://esm.sh/@google/genai@^1.37.0",
            "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
            "react/": "https://esm.sh/react@^19.2.3/",
            "react": "https://esm.sh/react@^19.2.3",
            "recharts": "https://esm.sh/recharts@^3.6.0",
            "lucide-react": "https://esm.sh/lucide-react@^0.562.0"
        }
    }
    </script>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
</body>
</html>"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
