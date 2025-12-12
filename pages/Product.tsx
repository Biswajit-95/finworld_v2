import React from 'react';
import Section from '../components/Section';
import { Laptop, Wifi, Shield, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Product: React.FC = () => {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <div className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl overflow-hidden">
         {/* Background Elements - Low Z-Index */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none z-0"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.2),_transparent_50%)] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4 block">The Vessel</span>
                        <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md leading-tight">
                            FinWorld <br/>Secured Device
                        </h1>
                        <p className="text-xl text-zinc-100 mb-8 leading-relaxed font-light opacity-90 max-w-lg">
                            A dedicated hardware vessel for your financial life. Optimized for the intranet portal and air-gapped from the risks of social media and daily browsing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                            <div className="text-4xl font-light text-white tracking-tight">$1,999.99</div>
                            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-brand-cyan font-bold uppercase tracking-wider">Market Price</span>
                        </div>
                        
                        <button className="px-10 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 transform duration-200">
                            Order Now
                        </button>
                    </motion.div>
                </div>
                <div className="relative mt-12 lg:mt-0">
                    {/* Abstract Laptop Representation */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10 mx-auto w-full max-w-lg aspect-video bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl flex items-center justify-center overflow-hidden hover:scale-[1.02] transition-transform duration-500 group"
                    >
                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                        
                        <div className="text-zinc-500 flex flex-col items-center gap-4 relative z-20">
                             <div className="relative">
                                 <div className="absolute inset-0 bg-brand-cyan blur-xl opacity-20 animate-pulse-slow"></div>
                                 <Shield className="w-20 h-20 text-brand-cyan relative z-10 drop-shadow-[0_0_15px_rgba(0,144,212,0.5)]" />
                             </div>
                             <span className="font-serif text-3xl text-white drop-shadow-md tracking-wide">FinWorld OS</span>
                             <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold">System Secure</div>
                             </div>
                        </div>
                    </motion.div>
                    {/* Glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/10 blur-[60px] -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
            {/* Feature Cards */}
            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300 group hover:border-brand-cyan relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-brand-navy transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-navy transition-colors duration-300 shadow-inner">
                    <Laptop className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Dedicated Hardware</h3>
                <p className="text-zinc-600 leading-relaxed">Solely for financial tasks. No games, no casual browsing, no risk. Built from the ground up for security.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300 group hover:border-brand-cyan relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-brand-navy transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-navy transition-colors duration-300 shadow-inner">
                    <Wifi className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Optimized Connectivity</h3>
                <p className="text-zinc-600 leading-relaxed">Pre-configured for the FinWorld Intranet Portal secure tunnel. Automatic VPN initiation on boot.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all duration-300 group hover:border-red-500 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-red-500 transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-inner">
                    <XCircle className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Remote Wipe</h3>
                <p className="text-zinc-600 leading-relaxed">In case of theft, the device can be instantly scrubbed remotely. Your data is never at risk of physical compromise.</p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Product;