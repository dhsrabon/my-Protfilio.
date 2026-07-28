import connectToDatabase from '@/lib/db';
import Message from '@/models/Message';

// Next.js-কে বলে দিচ্ছি এই পেজটি যেন ক্যাশ না করে, সবসময় নতুন ডাটা দেখায়
export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // সার্ভার সাইড থেকেই ডাটাবেস কানেক্ট করছি (API কল করার দরকার নেই!)
  await connectToDatabase();
  
  // লেটেস্ট মেসেজগুলো আগে দেখানোর জন্য createdAt: -1 দিয়ে sort করা হয়েছে
  const messages = await Message.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Message Inbox</h1>
        <p className="text-slate-400">Manage and reply to your client inquiries here.</p>
      </div>

      <div className="flex flex-col gap-6">
        {messages.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/30 border border-slate-800 rounded-xl">
            <p className="text-slate-400">Your inbox is currently empty.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200 capitalize">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="text-cyan-400 text-sm hover:underline">
                    {msg.email}
                  </a>
                </div>
                <span className="text-slate-500 text-xs px-3 py-1 bg-slate-800 rounded-full">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-lg">
                {msg.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}