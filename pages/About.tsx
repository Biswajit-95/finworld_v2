import React from 'react';
import Section from '../components/Section';
import { UserCheck, Target, TrendingUp, History, Users, AlertTriangle, FileText, Globe } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { name: 'Scott Pappan', role: 'Board of Directors', bio: '30 years financial planning experience guiding strategic direction.' },
  { name: 'Chris Proskey', role: 'Board Member', bio: 'Patent Attorney specializing in intellectual property and compliance.' },
  { name: 'Mark Gremler', role: 'CTO', bio: '25 years technology/cyber security leadership.' },
  { name: 'Gary Harms', role: 'Tech Executive', bio: '30 years cyber security expertise.' },
  { name: 'Brian Bierstedt', role: 'Operations', bio: '35 years financial services operations management.' },
  { name: 'Zach Jakalski', role: 'Process Development', bio: 'Expert in secure workflow optimization.' },
  { name: 'Aaron Gremler', role: 'Finance', bio: 'Double masters in computer finance.' },
  { name: 'Pat Brogan', role: 'Board Member', bio: 'Strategic advisor with extensive industry network.' },
];

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50">
      {/* Header */}
      <div className="bg-brand-navy text-white py-24 px-4 text-center border-b border-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan/20 to-transparent pointer-events-none"></div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 relative z-10">Why FinWorld?</h1>
        <p className="max-w-3xl mx-auto text-xl text-zinc-300 font-light leading-relaxed relative z-10">
          Over 30 years of financial planning, we've seen the same problems happening over and over.
          Our purpose is to enhance and simplify the use of technology in the collection of personal data in a safe, simple, and secure manner.
        </p>
      </div>

      {/* The Problem (The Why) */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The Problems We Solve</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    { icon: Users, color: "text-brand-navy", title: "Surviving Spouses", text: "Spouses struggling to take over and manage the family's affairs after the death of a partner." },
                    { icon: History, color: "text-brand-cyan", title: "Settling Estates", text: "Children struggling to find everything needed to manage and settle an estate during an emotional time." },
                    { icon: Globe, color: "text-emerald-600", title: "Remote Executors", text: "Out of state executors with limited time to find everything needed to manage and settle the estate." },
                    { icon: FileText, color: "text-zinc-600", title: "Secure Storage", text: "Lack of a secure way to store sensitive documents and conduct financial business electronically." }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-brand-cyan hover:-translate-y-1 hover:bg-white cursor-default">
                        <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
                        <div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      {/* Stats */}
      <div className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-center">
            <div className="p-8">
                <span className="block text-5xl font-bold text-brand-navy mb-2 tracking-tight">100%</span>
                <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Increase in personal attacks on 55+</span>
            </div>
            <div className="p-8">
                <span className="block text-5xl font-bold text-brand-navy mb-2 tracking-tight">Target Shift</span>
                <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold">From Corporations to Individuals</span>
            </div>
        </div>
      </div>

      {/* Leadership */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
                <div key={idx} className="group relative bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-2xl hover:border-brand-cyan transition-all duration-500 h-[300px] hover:-translate-y-2">
                    <div className="absolute inset-0 bg-white z-10 p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-full">
                        <div className="w-24 h-24 bg-zinc-50 rounded-full mb-6 flex items-center justify-center text-zinc-400 font-serif text-3xl font-bold border border-zinc-200 shadow-inner group-hover:scale-110 transition-transform group-hover:border-brand-cyan group-hover:text-brand-cyan">
                            {member.name.charAt(0)}
                        </div>
                        <h3 className="font-bold text-brand-navy text-lg">{member.name}</h3>
                        <p className="text-zinc-500 text-sm uppercase tracking-wide font-bold mt-2">{member.role}</p>
                    </div>
                    
                    {/* Reveal on Hover */}
                    <div className="absolute inset-0 bg-brand-navy z-0 p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="font-bold text-white text-lg mb-2">{member.name}</h3>
                        <div className="w-8 h-0.5 bg-brand-cyan mb-4"></div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{member.bio || "Leading with vision and expertise."}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default About;