'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '@/data/projects';

const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-slate-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work showcasing complex problem-solving and modern web architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] flex flex-col"
            >
              {/* Project Image Area (Fallback Gradient if image is missing) */}
              <div className="relative h-56 w-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                {/* ইমেজ ট্যাগ (আপাতত ছবির লিংকে কিছু না থাকলে শুধু গ্রেডিয়েন্ট দেখাবে) */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => e.target.style.display = 'none'} // ছবি না পেলে হাইড করবে
                />
                
                {/* Overlay Links on Image Hover */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors">
                    <FiGithub size={22} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors">
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Project Info Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-16 text-center">
          <Link href="/projects" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 hover:border-cyan-500">
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;