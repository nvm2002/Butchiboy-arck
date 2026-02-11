import fs from 'fs';
const content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Butch Blueprint</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
body { font-family: "Space Grotesk", sans-serif; background-color: #020617; color: #f8fafc; margin: 0; }
.mono { font-family: "JetBrains Mono", monospace; }
.blueprint-grid { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(30, 58, 138, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 58, 138, 0.1) 1px, transparent 1px); }
.neon-glow { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); }
.scanline { width: 100%; height: 100px; z-index: 10; background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0, 0, 0, 0) 100%); opacity: 0.1; position: absolute; bottom: 100%; animation: scanline 10s linear infinite; pointer-events: none; }
@keyframes scanline { 0% { bottom: 100%; } 100% { bottom: -100px; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
.animate-fade-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.animate-gradient { background-size: 200% auto; animation: gradient 3s linear infinite; }
@keyframes gradient { 0% { background-position: 0% center; } 50% { background-position: 100% center; } 100% { background-position: 0% center; } }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #020617; }
::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #ef4444; }
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
</html>`;
fs.writeFileSync('index.html', content);
