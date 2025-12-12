import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Lock, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-navy overflow-hidden flex-col justify-between p-12 text-white">
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-dark/80"></div>
         <div className="relative z-10">
            <Logo light />
         </div>
         <div className="relative z-10 max-w-md">
             <h2 className="text-4xl font-serif font-bold mb-6">Welcome Back to Your Vault.</h2>
             <p className="text-zinc-300 text-lg leading-relaxed">
                 Access your isolated financial environment securely. All connections are encrypted with AES-256 protocols.
             </p>
         </div>
         <div className="relative z-10 text-xs text-zinc-500">
            System ID: FW-SEC-8821 // Encryption: Active
         </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-zinc-50">
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="lg:hidden mb-10">
                 <Logo />
            </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy font-serif">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Or{' '}
              <Link to="/signup" className="font-medium text-brand-cyan hover:text-brand-navy transition-colors">
                start your 14-day secure trial
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-white py-8 px-8 shadow-2xl shadow-zinc-200 rounded-2xl border border-zinc-100">
              <form className="space-y-6" action="#" method="POST">
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
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-brand-navy sm:text-sm sm:leading-6 bg-zinc-50"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-zinc-300 text-brand-navy focus:ring-brand-navy"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-600">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-brand-cyan hover:text-brand-navy transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-brand-navy px-3 py-3 text-sm font-bold leading-6 text-white shadow-lg hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy transition-all transform active:scale-95 items-center gap-2"
                  >
                    <Lock className="w-4 h-4" /> Secure Login
                  </button>
                </div>
              </form>
            </div>
             <div className="mt-8 text-center">
                <p className="text-xs text-zinc-400">Protected by 256-bit AES Encryption</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;