'use client';

import { motion } from 'framer-motion';
// React Icons
import { SiMongodb, SiExpress, SiTailwindcss, SiFramer } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs, TbApi } from 'react-icons/tb';
import { FiLayout, FiDatabase } from 'react-icons/fi';

export default function Skills() {
  // Frontend Skills Data
  const frontendSkills = [
    { name: 'React', icon: <FaReact size={32} className="text-[#61DAFB]" />, hoverBorder: 'hover:border-[#61DAFB]', hoverShadow: 'hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]' },
    { name: 'Next.js', icon: <TbBrandNextjs size={32} className="text-white" />, hoverBorder: 'hover:border-white', hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-[#06B6D4]" />, hoverBorder: 'hover:border-[#06B6D4]', hoverShadow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
    { name: 'Framer Motion', icon: <SiFramer size={32} className="text-white" />, hoverBorder: 'hover:border-white', hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' }
  ];

  // Backend Skills Data
  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs size={32} className="text-[#339933]" />, hoverBorder: 'hover:border-[#339933]', hoverShadow: 'hover:shadow-[0_0_20px_rgba(51,153,51,0.2)]' },
    { name: 'Express.js', icon: <SiExpress size={32} className="text-white" />, hoverBorder: 'hover:border-gray-400', hoverShadow: 'hover:shadow-[0_0_20px_rgba(156,163,175,0.2)]' },
    { name: 'MongoDB', icon: <SiMongodb size={32} className="text-[#47A248]" />, hoverBorder: 'hover:border-[#47A248]', hoverShadow: 'hover:shadow-[0_0_20px_rgba(71,162,72,0.2)]' },
    { name: 'REST APIs', icon: <TbApi size={32} className="text-[#3B82F6]" />, hoverBorder: 'hover:border-[#3B82F6]', hoverShadow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-slate-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Technologies I use to bring ideas to life, from pixel-perfect UI to scalable backend systems.</p>
        </div>

        {/* Two-Column Grid for Frontend & Backend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          
          {/* ================= FRONTEND PANEL ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative"
          >
            {/* Top Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-cyan-400">
                <FiLayout size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Frontend</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group w-full bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer text-slate-300 ${skill.hoverBorder} ${skill.hoverShadow}`}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-semibold transition-colors duration-300 text-sm md:text-base text-center group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* ================= BACKEND PANEL ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative"
          >
            {/* Top Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                <FiDatabase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Backend & DB</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group w-full bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer text-slate-300 ${skill.hoverBorder} ${skill.hoverShadow}`}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-semibold transition-colors duration-300 text-sm md:text-base text-center group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}