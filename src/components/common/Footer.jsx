import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  // ডাইনামিক সাল দেখানোর জন্য
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold text-white tracking-wider mb-4 inline-block">
              PORT<span className="text-cyan-500">FOLIO.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building scalable, secure, and user-centric web applications. Turning complex ideas into elegant digital realities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors w-fit">Home</Link>
              <Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors w-fit">About Me</Link>
              <Link href="/projects" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors w-fit">Projects</Link>
              <Link href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 tracking-wide">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-sky-500 transition-all duration-300">
                <FiTwitter size={20} />
              </a>
            </div>
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors w-fit">
              <FiMail size={16} />
              your.email@example.com
            </a>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <span className="text-cyan-500 font-medium">Next.js</span> & <span className="text-cyan-500 font-medium">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;