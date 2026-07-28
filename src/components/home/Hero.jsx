'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-10">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-900/30 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/30 blur-[150px] rounded-full pointer-events-none"
      />

      {/* Main Container - Added lg:-mt-12 to pull content up on laptops */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE: TEXT CONTENT ================= */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={childVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                AVAILABLE FOR NEW PROJECTS
              </span>
            </motion.div>

            {/* Greeting & Role */}
            <motion.div variants={childVariants} className="mb-3">
              <h2 className="text-xl md:text-2xl font-medium text-slate-300">
                Hi, I'm <span className="font-bold text-white">Deluar Hossen Srabon</span>
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mt-1">
                Full-Stack Developer
              </h3>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={childVariants} className="mb-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                Crafting Digital <br />
                Ma<span className="text-[#0ea5e9]">sterpieces.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={childVariants} className="max-w-xl text-base sm:text-lg text-slate-400 mb-8 leading-relaxed font-light">
              I don't just write code; I solve complex problems. Specializing in modern web technologies to build fast, scalable, and visually stunning applications.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={childVariants} className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <Link 
                href="/projects" 
                className="group relative px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link 
                href="/contact" 
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 font-semibold text-base sm:text-lg hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={childVariants} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"><FiGithub size={22} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"><FiLinkedin size={22} /></a>
              <a href="mailto:your@email.com" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"><FiMail size={22} /></a>
            </motion.div>
          </motion.div>


          {/* ================= RIGHT SIDE: IMAGE ================= */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Floating Animation Wrapper - Responsive Image Size */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            >
              {/* Glowing Background Effect behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full p-2 rounded-full border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                <img 
                  src="/IMG_0904.JPG" 
                  alt="Deluar Hossen Srabon" 
                  className="w-full h-full object-cover rounded-full border border-slate-800"
                />
              </div>

              {/* Floating React Icon */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 -left-4 sm:top-10 sm:-left-6 bg-slate-900/80 border border-slate-700 p-2 sm:p-3 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-md"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 sm:w-8 sm:h-8 animate-[spin_10s_linear_infinite]" />
              </motion.div>
              
              {/* Floating Node.js Icon */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-8 -right-2 sm:bottom-10 sm:-right-4 bg-slate-900/80 border border-slate-700 p-2 sm:p-3 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-md"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}