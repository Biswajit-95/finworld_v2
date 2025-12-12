import React from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import ActiveDefense from '../components/ActiveDefense';
import { Shield, Key, Network, ChevronRight, Lock, Activity, Layers, Smartphone, Users, ArrowRight, FileCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-zinc-50">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.1),_transparent_40%)] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none"></div>

        <HeroCanvas />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,144,212,0.15)] text-brand-navy text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                </span>
                System Operational
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-brand-navy mb-8 tracking-tighter leading-[1.05] drop-shadow-sm">
                The Digital Vault <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-navy">For Your Legacy.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-lg font-medium leading-relaxed">
                A private intranet and isolated hardware ecosystem. 
                Separating your wealth from the noise of the internet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/product" className="group relative px-8 py-4 bg-brand-navy text-white rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-navy/30 transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-navy">
                  <div className="absolute inset-0 w-full h-full bg-brand-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Initialize Protocol <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                  </span>
                </Link>
                <Link to="/about" className="px-8 py-4 bg-white border border-zinc-300 text-brand-navy rounded-xl hover:bg-zinc-50 hover:border-brand-navy hover:text-brand-navy transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                  System Architecture
                </Link>
              </div>
            </motion.div>

            {/* Right Space - Reserved for Globe Visibility */}
            <div className="hidden lg:block h-[500px]"></div>

          </div>
        </div>
      </div>

      {/* --- STATS / TICKER --- */}
      <div className="border-y border-brand-navy/10 bg-white overflow-hidden py-5 relative z-20 shadow-sm">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="flex items-center gap-3 text-sm font-mono text-brand-navy font-bold tracking-tight uppercase opacity-80 hover:opacity-100 transition-opacity">
               <Activity className="w-4 h-4 text-brand-cyan" /> AES-256_ENCRYPTION_ACTIVE
               <span className="mx-2 text-zinc-300">///</span>
               <Lock className="w-4 h-4 text-brand-navy" /> ISOLATION_PROTOCOL_READY
             </div>
           ))}
        </div>
      </div>

      {/* --- THE ECOSYSTEM (BENTO GRID) --- */}
      <Section className="bg-zinc-50">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">The Ecosystem</h2>
          <p className="text-xl text-zinc-600 max-w-xl leading-relaxed">Four layers of defense designed to protect assets today and ensure their safe transfer tomorrow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8 h-auto md:h-[800px]">
          
          {/* Main Large Card - Hardware Isolation */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 md:p-10 flex flex-col bg-brand-navy text-white border border-brand-dark shadow-2xl hover:shadow-[0_20px_50px_rgba(0,144,212,0.3)] transition-all duration-500 overflow-hidden relative group hover:border-brand-cyan/50">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             <div className="relative z-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan transition-colors">
                 <Shield className="w-3 h-3 text-brand-cyan" />
                 Layer 01
               </div>
               <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:translate-x-1 transition-transform">Hardware Isolation</h3>
               <p className="text-zinc-300 text-base md:text-lg max-w-md leading-relaxed mb-8 group-hover:text-white transition-colors">
                 A dedicated physical vessel solely for financial activities. Air-gapped from the risks of casual browsing.
               </p>
             </div>

             {/* UI Mockup for "Hardware" */}
             <div className="relative flex-grow w-full h-full min-h-[250px] md:min-h-[300px] mt-auto">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-zinc-950 rounded-t-2xl border-t border-x border-zinc-700 p-2 shadow-2xl transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0 group-hover:border-brand-cyan/30">
                    {/* Simulated Screen */}
                    <div className="w-full h-full bg-zinc-900 rounded-t-xl border border-zinc-800 relative overflow-hidden flex flex-col group-hover:border-zinc-600 transition-colors">
                        {/* Header Bar */}
                        <div className="h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2">
                             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                             <div className="ml-auto flex items-center gap-3">
                                <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-brand-cyan"></div>
                                </div>
                                <span className="text-[10px] text-zinc-500 font-mono">SECURE_BOOT_VERIFIED</span>
                             </div>
                        </div>
                        {/* App Interface */}
                        <div className="p-4 md:p-8 flex flex-col h-full bg-gradient-to-b from-zinc-900 to-zinc-950">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Vault Status</div>
                                    <div className="text-white text-xl md:text-2xl font-mono">LOCKED</div>
                                </div>
                                <Lock className="w-6 h-6 md:w-8 md:h-8 text-brand-cyan animate-pulse" />
                            </div>
                            
                            {/* Grid Icons */}
                            <div className="grid grid-cols-3 gap-3 md:gap-6">
                                {[
                                    { icon: Shield, label: "Vault", color: "text-brand-cyan", border: "border-brand-cyan/20" },
                                    { icon: Layers, label: "Docs", color: "text-white", border: "border-white/20" },
                                    { icon: Users, label: "Heirs", color: "text-zinc-400", border: "border-zinc-400/20" },
                                    { icon: FileCheck, label: "Audit", color: "text-zinc-500", border: "border-zinc-500/20" },
                                    { icon: RefreshCw, label: "Sync", color: "text-zinc-500", border: "border-zinc-500/20" },
                                    { icon: Activity, label: "Log", color: "text-zinc-500", border: "border-zinc-500/20" },
                                ].map((item, i) => (
                                    <div key={i} className={`aspect-square bg-zinc-800/50 rounded-xl flex flex-col items-center justify-center gap-2 md:gap-3 border ${item.border} hover:bg-zinc-800 transition-all group/icon hover:scale-105 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20`}>
                                        <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.color} group-hover/icon:scale-110 transition-transform`} />
                                        <span className="text-[8px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </SpotlightCard>

          {/* Top Right Card - Legacy Protocol */}
          <SpotlightCard className="p-8 flex flex-col h-full bg-white border border-zinc-200 shadow-xl hover:shadow-[0_20px_50px_rgba(0,144,212,0.15)] transition-all duration-300 hover:border-brand-cyan hover:-translate-y-2 relative min-h-[300px] group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Key className="w-32 h-32 text-brand-navy" />
            </div>
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-brand-navy text-xs font-bold uppercase mb-4 border border-zinc-200 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors">
                  <Key className="w-3 h-3" />
                  Layer 02
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">Legacy Protocol</h3>
                
                {/* Timeline Visual */}
                <div className="space-y-4 mb-4">
                    <div className="flex gap-3 group/item">
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover/item:bg-brand-navy transition-colors"></div>
                            <div className="w-0.5 h-full bg-zinc-100"></div>
                        </div>
                        <div className="pb-4">
                            <p className="text-xs font-bold text-zinc-400 uppercase group-hover/item:text-brand-navy transition-colors">Status: Active</p>
                            <p className="text-sm font-semibold text-zinc-800">Owner Control</p>
                        </div>
                    </div>
                    <div className="flex gap-3 group/item">
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <div className="w-0.5 h-full bg-zinc-100"></div>
                        </div>
                        <div className="pb-4">
                            <p className="text-xs font-bold text-amber-500 uppercase">Trigger Event</p>
                            <p className="text-sm font-semibold text-zinc-800">Incapacitation / Death</p>
                        </div>
                    </div>
                    <div className="flex gap-3 group/item">
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-brand-cyan group-hover/item:scale-125 transition-transform"></div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-cyan uppercase">Transfer Complete</p>
                            <p className="text-sm font-semibold text-zinc-800">Heir Access Granted</p>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex items-center text-sm font-bold text-brand-cyan group-hover:translate-x-2 transition-transform cursor-pointer">
                  Explore Protocol <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
          </SpotlightCard>

          {/* Middle Right Card - Intranet */}
          <SpotlightCard className="p-8 flex flex-col h-full bg-white border border-zinc-200 shadow-xl hover:shadow-[0_20px_50px_rgba(0,144,212,0.15)] transition-all duration-300 hover:border-brand-cyan hover:-translate-y-2 min-h-[300px] group">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-brand-navy text-xs font-bold uppercase mb-4 w-fit border border-zinc-200 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors">
               <Network className="w-3 h-3" />
               Layer 03
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">The Intranet</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100 text-center group-hover:bg-zinc-100 transition-colors">
                    <Smartphone className="w-5 h-5 mx-auto mb-2 text-zinc-400 group-hover:text-brand-navy transition-colors" />
                    <span className="text-xs font-bold text-zinc-700 block">Client</span>
                </div>
                <div className="flex items-center justify-center text-zinc-300">
                    <ArrowRight className="w-5 h-5 animate-pulse text-brand-cyan" />
                </div>
                <div className="col-span-2 bg-zinc-50 p-3 rounded-lg border border-zinc-200 text-center relative overflow-hidden group-hover:border-brand-cyan/30 transition-colors">
                    <div className="absolute inset-0 bg-brand-cyan/5"></div>
                    <Lock className="w-5 h-5 mx-auto mb-2 text-brand-cyan relative z-10" />
                    <span className="text-xs font-bold text-brand-navy block relative z-10">Secure Tunnel</span>
                </div>
            </div>

            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Private internal network. No external traffic. Total privacy.
            </p>
            <div className="mt-auto flex items-center text-sm font-bold text-brand-cyan group-hover:translate-x-2 transition-transform cursor-pointer">
              View Architecture <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </SpotlightCard>
        </div>
      </Section>

      {/* --- THREAT VISUALIZATION --- */}
      <Section className="bg-gradient-to-b from-brand-navy to-brand-dark text-white overflow-hidden relative border-y border-zinc-800">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div>
                <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 font-bold text-xs uppercase tracking-widest mb-6">
                    Critical Alert
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter text-white">
                  Why Is This <br/><span className="text-zinc-500">Important?</span>
                </h2>
                <p className="text-zinc-400 mb-8 font-light text-lg">
                    Personal attacks are up over 100% on the 55-plus population as of 2023. This group is targeted because they have wealth and are often perceived as less computer savvy.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-brand-dark border border-white/10 hover:bg-white/5 transition-colors hover:border-brand-cyan/30">
                         <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Old Targets</h3>
                         <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Hospitals</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Oil Companies</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Big Companies</li>
                         </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30 relative overflow-hidden group hover:bg-red-950/30 hover:border-red-500/50 transition-all duration-300">
                         <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                         <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">New Targets</h3>
                         <ul className="space-y-3 text-white font-bold text-sm relative z-10">
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> Mom and Dad</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> Grandparents</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> Individuals</li>
                         </ul>
                    </div>
                </div>
             </div>
             
             {/* Active Defense Animation */}
             <div className="relative h-[400px] md:h-[500px] w-full bg-zinc-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10 mt-8 md:mt-0 shadow-black hover:shadow-brand-cyan/20 transition-shadow">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-mono text-zinc-500">LIVE_THREAT_MONITOR</span>
                </div>
                
                <div className="flex-grow relative">
                    <ActiveDefense />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                        <div>
                            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Status</span>
                            <span className="block text-emerald-500 font-bold font-mono">SECURE</span>
                        </div>
                        <div className="text-right">
                             <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Threats Blocked</span>
                            <span className="block text-white font-bold font-mono">99.9%</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* --- WORKFLOW / TIMELINE (Redesigned) --- */}
      <Section className="bg-white">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">How It Works</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Seamless integration into your life. Absolute protection for your future.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-zinc-100 hidden md:block">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-zinc-200 via-brand-cyan/20 to-zinc-200"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { title: "Acquisition", icon: Smartphone, desc: "Receive your dedicated FinWorld device, pre-hardened and linked to your private portal.", step: "01" },
              { title: "Organization", icon: Layers, desc: "Consolidate your financial life into the Vault. AES-256 encrypted storage.", step: "02" },
              { title: "Succession", icon: Users, desc: "Upon a trigger event, access is cryptographically transferred to your heirs.", step: "03" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                 {/* Number Bubble */}
                 <div className="w-16 h-16 rounded-full bg-white border-4 border-zinc-100 flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:scale-110 group-hover:border-brand-cyan group-hover:text-brand-navy transition-all duration-300">
                     <span className="text-xl font-bold text-zinc-300 group-hover:text-brand-navy transition-colors">{step.step}</span>
                 </div>
                 
                 {/* Card */}
                 <div className="w-full bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-cyan h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner border border-zinc-100">
                        <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm font-medium">{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-24 md:py-32 px-4 bg-brand-navy text-center relative overflow-hidden border-t border-brand-dark">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Secure Your Legacy.</h2>
           <p className="text-lg md:text-xl text-zinc-200 mb-10 font-light">Organization is the ultimate final gift.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-12 py-5 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10 hover:bg-zinc-100">
               Get Started
             </Link>
             <Link to="/pricing" className="px-12 py-5 bg-transparent border border-brand-cyan text-white font-bold rounded-full hover:bg-brand-cyan hover:border-brand-cyan transition-colors">
               View Pricing
             </Link>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Home;