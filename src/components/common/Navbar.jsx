import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-wider">
              Rabb<span className="text-cyan-500">iul.</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Home</Link>
              <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">About</Link>
              <Link href="/projects" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Projects</Link>
              <Link href="/contact" className="bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 px-5 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Let's Talk
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;