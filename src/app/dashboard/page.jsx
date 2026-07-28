export default function DashboardPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Home</h1>
        <p className="text-slate-400">Quick overview of your portfolio admin area.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-sm text-slate-400">Projects</p>
          <p className="mt-2 text-3xl font-bold text-white">Manage</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-sm text-slate-400">Messages</p>
          <p className="mt-2 text-3xl font-bold text-white">Inbox</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-sm text-slate-400">Blogs</p>
          <p className="mt-2 text-3xl font-bold text-white">Posts</p>
        </div>
      </div>
    </div>
  );
}