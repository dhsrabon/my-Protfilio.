'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, error: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '' });

    try {
      const response = await axios.post('/api/auth', formData);
      if (response.data.success) {
        // লগিন সফল হলে ড্যাশবোর্ডে নিয়ে যাবে
        router.push('/dashboard');
      }
    } catch (error) {
      setStatus({ 
        loading: false, 
        error: error.response?.data?.error || 'Login failed' 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden px-4">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl relative z-10 shadow-2xl">
        
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-white tracking-wider inline-block mb-2">
            ADMIN<span className="text-cyan-500">.</span>
          </Link>
          <p className="text-slate-400 text-sm">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Admin Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <FiMail />
              </div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <FiLock />
              </div>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {status.error && (
            <p className="text-red-400 text-sm text-center font-medium">{status.error}</p>
          )}

          <button 
            type="submit" 
            disabled={status.loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {status.loading ? 'Signing in...' : 'Sign In'}
            {!status.loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
          </button>
          
        </form>
      </div>
    </div>
  );
}