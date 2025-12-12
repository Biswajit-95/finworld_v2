import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-20 border-t border-brand-dark relative overflow-hidden">
      {/* Subtle Navy/Dark Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-dark via-brand-navy to-brand-navy pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <div className="scale-90 origin-left">
                <Logo light />
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-light">
              Enhancing and simplifying the use of technology in the collection of personal data in a safe, simple, and secure manner.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Platform</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link></li>
              <li><Link to="/product" className="hover:text-brand-cyan transition-colors">The Product</Link></li>
              <li><Link to="/security" className="hover:text-brand-cyan transition-colors">Security</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-cyan transition-colors">Pricing</Link></li>
            </ul>
          </div>

           <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link></li>
              <li><Link to="/services" className="hover:text-brand-cyan transition-colors">Services</Link></li>
              <li><Link to="/faq" className="hover:text-brand-cyan transition-colors flex items-center gap-2">FAQ <ArrowUpRight className="w-3 h-3 text-zinc-500" /></Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Connect</h3>
             <ul className="space-y-4 text-sm text-zinc-400">
               <li className="flex items-center gap-3 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                 </div>
                 <a href="mailto:support@finworld.us" className="group-hover:text-white transition-colors">support@finworld.us</a>
               </li>
               <li className="flex items-center gap-3 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                 </div>
                 <a href="tel:5154443518" className="group-hover:text-white transition-colors">515.444.3518</a>
               </li>
               <li className="flex items-start gap-3 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-white transition-colors mt-1">
                    <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                 </div>
                 <span className="group-hover:text-white transition-colors">405 Railroad Pl,<br/>West Des Moines, IA</span>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-dark/50 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} FinWorld Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/security" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/security" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;