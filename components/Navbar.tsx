import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Security', path: '/security' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40 transition-all duration-300">
          <div className="px-6 flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="group scale-75 origin-left md:scale-90 transition-transform">
                 {/* Force dark logo for visibility on the glass background */}
                 <Logo />
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive 
                        ? 'bg-brand-navy/10 text-brand-navy' 
                        : 'text-zinc-600 hover:text-brand-navy hover:bg-white/50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
               <Link 
                 to="/login" 
                 className="flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all hover:shadow-lg transform hover:-translate-y-0.5 shadow-md shadow-brand-navy/20"
               >
                Client Login
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-brand-navy p-2 hover:bg-brand-navy/10 rounded-lg transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-28 px-6 animate-in fade-in duration-200">
           <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-4 rounded-xl text-lg font-bold transition-colors ${
                    isActive ? 'bg-zinc-100 text-brand-navy' : 'text-zinc-500 hover:text-brand-navy hover:bg-zinc-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
             <Link to="/login" className="w-full mt-8 bg-brand-navy text-white px-5 py-4 rounded-xl text-lg font-bold text-center shadow-xl">
                Client Login
              </Link>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;