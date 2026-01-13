import React, { useState, useEffect } from 'react';
import { Sword, BookOpen, Users, Zap, ChevronRight, PlayCircle, Menu, X, Smartphone, Globe, Shield, Star, Rocket } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Visual representation of your logo in CSS
  const Logo = ({ className = "" }) => (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <div className="flex items-start">
        <span className="text-4xl font-black tracking-tighter">LV</span>
        <span className="text-xl font-black -mt-1 ml-0.5">3</span>
      </div>
      <span className="text-[10px] font-bold tracking-[0.3em] mt-1 uppercase text-gray-400">Studios</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0B0D]/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
             <Logo className="scale-75 origin-left" />
          </div>
          
          <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Nexus VTT</a>
            <a href="#" className="hover:text-white transition-colors">The Chronicler</a>
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
            <button className="px-6 py-2.5 bg-white text-black rounded-lg hover:bg-yellow-500 transition-all transform hover:-translate-y-0.5 font-black text-xs">
              START YOUR ADVENTURE
            </button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0B0D] border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <a href="#" className="text-2xl font-bold">Nexus VTT</a>
            <a href="#" className="text-2xl font-bold">The Chronicler</a>
            <a href="#" className="text-2xl font-bold">Marketplace</a>
            <button className="w-full py-4 bg-yellow-500 text-black font-black rounded-xl">GET STARTED</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <Logo className="mx-auto mb-8 scale-150" />
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            THE NEXT LEVEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              OF TABLETOP.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            LV3 Studios is building the definitive TTRPG suite. Cinematic visuals, AI-driven campaign management, and a thriving creator economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              JOIN THE BETA
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              VIEW THE ROADMAP
            </button>
          </div>

          <div className="pt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale pointer-events-none">
             <div className="font-black italic text-2xl">D&D 5E</div>
             <div className="font-black italic text-2xl">PATHFINDER</div>
             <div className="font-black italic text-2xl">CYBERPUNK</div>
             <div className="font-black italic text-2xl">OSR</div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-yellow-500">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold italic tracking-tight uppercase">Nexus VTT</h3>
              <p className="text-gray-500">A cinematic virtual tabletop that prioritizes atmosphere over math. Dynamic 2.5D lighting and reactive soundscapes.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-yellow-500">
                <Rocket size={28} />
              </div>
              <h3 className="text-2xl font-bold italic tracking-tight uppercase">The Chronicler</h3>
              <p className="text-gray-500">Our AI co-pilot that transcribes sessions, tracks NPC secrets, and generates world-building prompts in your voice.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-yellow-500">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold italic tracking-tight uppercase">The Forge</h3>
              <p className="text-gray-500">The first creator-first marketplace. Build, package, and sell your own homebrew content with native drag-and-drop tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-t border-white/10 pt-20">
          <div className="col-span-2 space-y-6">
            <Logo className="origin-left scale-125" />
            <p className="text-gray-500 max-w-sm">
              Empowering Game Masters and players with tools that make every session legendary. Founded by players, for players.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm">Product</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Early Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VTT Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creator Tools</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
