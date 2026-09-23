'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* এই Main Container টি ভুলবশত মুছে গিয়েছিল */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Code</span>
          </h1>
          <div className="w-24 h-1.5 bg-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image / Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
              
              {/* ছবির অংশ */}
              <div className="absolute inset-0 bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden z-10 flex items-center justify-center">
                <img 
                  src="/rabbiul.png" 
                  alt="My Profile Picture" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="absolute -bottom-6 -right-6 z-20 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-extrabold text-cyan-400 mb-1">2+</p>
                <p className="text-slate-400 text-sm font-medium">Years of<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-cyan-400">Rabbiul Islam </span>
            </h2>
            <h3 className="text-xl text-slate-400 font-medium">
              Full-Stack Developer based in Bangladesh
            </h3>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a passionate web developer with a strong focus on creating scalable, secure, and user-friendly digital experiences. My journey in tech started with a curiosity about how things work on the internet, which quickly turned into a full-blown career path.
              </p>
              <p>
                Currently, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern frameworks like Next.js. I love turning complex problems into elegant, intuitive, and efficient solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="/resume.pdf" 
                download="My_Resume.pdf"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-semibold transition-all duration-300"
              >
                <FiDownload size={18} /> Download Resume
              </a>
              
              <Link 
                href="/contact" 
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 group"
              >
                Let's Talk <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}