import Link from 'next/link';
import { FiMessageSquare, FiGrid, FiHome, FiSettings } from 'react-icons/fi';

export const metadata = {
	title: 'Admin Dashboard',
};

export default function DashboardLayout({ children }) {
	return (
		<div className="min-h-screen bg-slate-950 flex text-slate-50">
			<aside className="w-64 bg-slate-900/50 border-r border-slate-800 p-6 hidden md:flex flex-col">
				<div className="mb-12">
					<h2 className="text-2xl font-bold tracking-wider">
						ADMIN<span className="text-cyan-500">.</span>
					</h2>
				</div>

				<nav className="flex flex-col gap-2 flex-grow">
					<Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
						<FiGrid /> Dashboard Home
					</Link>
					<Link href="/dashboard/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
						<FiSettings /> Manage Projects
					</Link>
					<Link href="/dashboard/messages" className="flex items-center gap-3 px-4 py-3 rounded-lg text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 transition-colors">
						<FiMessageSquare /> Inbox Messages
					</Link>
				</nav>

				<div className="mt-auto pt-8 border-t border-slate-800">
					<Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors">
						<FiHome /> Back to Website
					</Link>
				</div>
			</aside>

			<main className="flex-1 overflow-y-auto">
				<div className="p-8">
					{children}
				</div>
			</main>
		</div>
	);
}
