import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Contact Me | Portfolio',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-10">
      {/* আমাদের আগে বানানো কন্টাক্ট ফর্মটি এখানে কল করে দিলাম */}
      <Contact />
    </div>
  );
}