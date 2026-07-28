import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-950">
      {/* গ্লোবাল ন্যাভবার */}
      <Navbar />
      
      {/* মূল কন্টেন্ট */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* গ্লোবাল ফুটার */}
      <Footer />
    </div>
  );
}