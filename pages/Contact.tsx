import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <h1 className="font-serif text-5xl font-bold text-brand-navy mb-8">Get in Touch</h1>
                <p className="text-zinc-600 mb-12 text-lg leading-relaxed">
                    Whether you are a retail client looking to secure your legacy or a broker wanting to protect your clients, we are here to help.
                </p>
                
                <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 hover:shadow-lg">
                        <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors border border-zinc-200 shadow-sm">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-navy text-lg">Visit Us</h4>
                            <p className="text-zinc-600">405 Railroad Pl,<br />West Des Moines, Iowa 50265</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 hover:shadow-lg">
                        <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors border border-zinc-200 shadow-sm">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-navy text-lg">Call Us</h4>
                            <p className="text-zinc-600">515.444.3518</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 hover:shadow-lg">
                        <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors border border-zinc-200 shadow-sm">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-navy text-lg">Email Us</h4>
                            <p className="text-zinc-600">support@finworld.us</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-300 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-brand-cyan transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-brand-navy focus:ring-0 outline-none transition-colors bg-white text-brand-navy font-medium placeholder-zinc-400" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-brand-navy focus:ring-0 outline-none transition-colors bg-white text-brand-navy font-medium placeholder-zinc-400" placeholder="Doe" />
                    </div>
                </div>
                <div className="mb-6">
                     <label className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                     <input type="email" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-brand-navy focus:ring-0 outline-none transition-colors bg-white text-brand-navy font-medium placeholder-zinc-400" placeholder="john@example.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold text-zinc-700 mb-2">I am a...</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-brand-navy focus:ring-0 outline-none transition-colors bg-white appearance-none text-brand-navy font-medium">
                        <option>Retail Client</option>
                        <option>Broker / Dealer</option>
                        <option>Financial Advisor</option>
                    </select>
                </div>
                <div className="mb-8">
                     <label className="block text-sm font-bold text-zinc-700 mb-2">Message</label>
                     <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-brand-navy focus:ring-0 outline-none transition-colors bg-white text-brand-navy font-medium placeholder-zinc-400" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-dark transition-all transform active:scale-95 shadow-lg">
                    Send Message
                </button>
            </form>
        </div>
      </Section>

      {/* FAQ Link Section */}
      <Section className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Still have questions?</h2>
            <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                We've compiled a comprehensive list of commonly asked questions regarding our hardware, security protocols, and pricing models.
            </p>
            
            <Link to="/faq" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-zinc-300 text-brand-navy rounded-full font-bold shadow-sm hover:shadow-xl hover:border-brand-navy hover:text-brand-navy hover:-translate-y-1 transition-all">
                Visit Knowledge Base <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </Section>
    </div>
  );
};

export default Contact;