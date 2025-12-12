import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-dark overflow-hidden flex-col justify-between p-12 text-white">
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#80808012_1px,transparent_1px),linear-gradient(-45deg,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
         <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Logo light />
         </div>
         <div className="relative z-10 max-w-md">
             <h2 className="text-4xl font-serif font-bold mb-6">Begin Your Legacy Protection.</h2>
             <ul className="space-y-4 text-zinc-300">
                 <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-cyan"/> Hardware Isolation Protocol</li>
                 <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-cyan"/> Legacy Transfer System</li>
                 <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-cyan"/> 24/7 Threat Monitoring</li>
             </ul>
         </div>
         <div className="relative z-10 text-xs text-zinc-500">
            FinWorld v5 // Registration Node
         </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-zinc-50">
        <div className="mx-auto w-full max-w-md">
            <div className="lg:hidden mb-10">
                 <Logo />
            </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy font-serif">
              Create your secure account
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-brand-cyan hover:text-brand-navy transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-white py-8 px-8 shadow-2xl shadow-zinc-200 rounded-2xl border border-zinc-100">
              <form className="space-y-6" action="#" method="POST">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-bold text-zinc-700">
                        First Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          required
                          className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-brand-navy sm:text-sm sm:leading-6 bg-zinc-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-bold text-zinc-700">
                        Last Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          required
                          className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-brand-navy sm:text-sm sm:leading-6 bg-zinc-50"
                        />
                      </div>
                    </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-zinc-700">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-brand-navy sm:text-sm sm:leading-6 bg-zinc-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-zinc-700">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-brand-navy sm:text-sm sm:leading-6 bg-zinc-50"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-brand-navy px-3 py-3 text-sm font-bold leading-6 text-white shadow-lg hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy transition-all transform active:scale-95 items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" /> Create Account
                  </button>
                </div>
              </form>

               <div className="mt-6">
                <p className="text-center text-xs text-zinc-500">
                  By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;