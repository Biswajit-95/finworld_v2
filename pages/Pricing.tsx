import React from 'react';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { Check, ShieldCheck, Server, RefreshCw, Users, BadgeCheck, ArrowRight, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="bg-zinc-50">
      
      {/* --- HERO HEADER --- */}
      <div className="relative pt-40 pb-32 md:pt-48 md:pb-48 bg-brand-navy overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-dark rounded-full blur-[80px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Star className="w-3 h-3 fill-current" /> Investment Structure
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-xl">
                Secure Your Legacy
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto leading-relaxed">
                Transparent, premium protection for your most valuable financial data.
            </p>
        </div>
      </div>

      {/* --- PRICING CARDS --- */}
      {/* Negative margin to pull cards up, but with container adjustments */}
      <div className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto -mt-20 md:-mt-32 mb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* 1. Retail Client (White Premium Card) */}
            <SpotlightCard className="flex flex-col h-full bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-900/10 border border-zinc-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="p-8 md:p-12 flex-grow">
                    <div className="flex items-center justify-between mb-8">
                        <div className="bg-zinc-100 p-3 rounded-2xl">
                             <ShieldCheck className="w-8 h-8 text-brand-navy" />
                        </div>
                        <span className="px-4 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider rounded-full">
                            Individual
                        </span>
                    </div>

                    <h3 className="text-4xl font-serif font-bold text-brand-navy mb-2">Retail Client</h3>
                    <p className="text-zinc-500 font-medium mb-10 text-lg">Comprehensive protection for families and individuals.</p>
                    
                    {/* Price Block */}
                    <div className="mb-10 p-8 bg-zinc-50 rounded-3xl border border-zinc-200/60">
                        <div className="mb-6">
                             <div className="flex items-baseline gap-1 text-brand-navy">
                                <span className="text-3xl font-bold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">1,999</span>
                                <span className="text-2xl font-bold text-zinc-400">.99</span>
                            </div>
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mt-1 block pl-1">One-time Hardware Cost</span>
                        </div>
                        
                        <div className="w-full h-px bg-zinc-200 my-4"></div>
                        
                        <div>
                             <div className="flex items-baseline gap-1 text-brand-navy">
                                <span className="text-2xl font-bold">$</span>
                                <span className="text-4xl font-extrabold tracking-tight">200</span>
                                <span className="text-xl font-bold text-zinc-400">/yr</span>
                            </div>
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mt-1 block pl-1">Security & Updates Service</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-brand-navy flex items-center gap-2 text-sm uppercase tracking-wide">
                            <Server className="w-4 h-4 text-brand-cyan" /> Included Features
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "FinWorld Secured Laptop (Market Price)",
                                "Private Intranet Portal Access",
                                "Transfer of Access Protocol",
                                "Military-Grade AES-256 Encryption",
                                "24/7 Endpoint Threat Monitoring"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-brand-navy/30">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-base text-zinc-700 font-medium">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="p-8 md:p-12 bg-zinc-50 border-t border-zinc-100">
                    <button className="w-full py-5 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-dark transition-all shadow-xl shadow-brand-navy/10 hover:shadow-brand-navy/20 flex items-center justify-center gap-2 group">
                        Get Protected <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-zinc-400 mt-4 font-medium">
                        Secure checkout via FinWorld Portal
                    </p>
                </div>
            </SpotlightCard>

            {/* 2. Broker Dealer (Dark Premium Card) */}
            <SpotlightCard className="flex flex-col h-full bg-brand-dark text-white rounded-[2.5rem] shadow-2xl shadow-brand-cyan/10 border border-brand-cyan/20 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 relative">
                 {/* Decorative Glow */}
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="p-8 md:p-12 flex-grow relative z-10">
                    <div className="flex items-center justify-between mb-8">
                         <div className="bg-brand-navy p-3 rounded-2xl border border-white/10">
                             <Users className="w-8 h-8 text-brand-cyan" />
                        </div>
                        <span className="px-4 py-1 bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider rounded-full">
                            Enterprise
                        </span>
                    </div>

                    <h3 className="text-4xl font-serif font-bold text-white mb-2">Broker Dealer</h3>
                    <p className="text-zinc-400 font-medium mb-10 text-lg">Advanced infrastructure for firms and advisors.</p>
                    
                    {/* Price Block */}
                    <div className="mb-10 p-8 bg-brand-navy/50 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-extrabold text-white">100%</span>
                            <span className="text-sm font-medium text-zinc-300 leading-tight">
                                of Hardware Cost<br/>Covered by Dealer
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                                <div className="text-2xl font-bold text-brand-cyan">$200</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">/yr Per Device</div>
                            </div>
                            <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                                <div className="text-2xl font-bold text-white">$300</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">One-time Setup</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-zinc-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <BadgeCheck className="w-4 h-4 text-brand-cyan" /> Dealer Benefits
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Logo Customization on Hardware",
                                "Admin Panel for Client Management",
                                "Reduced Corporate Liability",
                                "2 Hours Dedicated Tech Support",
                                "Exclusive Patented Device Access"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded-full bg-brand-cyan text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 stroke-[3px]" />
                                    </div>
                                    <span className="text-base text-zinc-300 font-medium">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                 
                <div className="p-8 md:p-12 bg-brand-navy/80 border-t border-white/10 relative z-10">
                    <button className="w-full py-5 bg-white text-brand-navy font-bold rounded-2xl hover:bg-zinc-100 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 group">
                        Contact Sales Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                     <p className="text-center text-xs text-zinc-500 mt-4 font-medium">
                        Volume licensing available
                    </p>
                </div>
            </SpotlightCard>
        </div>
      </div>
      
      {/* --- TRANSPARENCY SECTION --- */}
      <Section className="bg-white border-t border-zinc-100">
          <div className="max-w-5xl mx-auto px-4">
              <div className="relative overflow-hidden bg-brand-navy rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center md:text-left">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 shadow-inner backdrop-blur-sm">
                            <RefreshCw className="w-10 h-10 text-brand-cyan" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                             <h4 className="text-3xl font-serif font-bold text-white">Replacement Policy</h4>
                             <span className="px-4 py-1.5 bg-brand-dark border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase rounded-full tracking-wider shadow-lg">
                                 Market Rate + Fees
                             </span>
                        </div>
                        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                           We believe in complete transparency. Replacement devices are charged at current market hardware price + a <strong>$100 reprogramming fee</strong> + shipping. 
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                                 No Hidden Markups
                             </div>
                             <div className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                                 Standard Shipping Rates
                             </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Pricing;