import { Inter } from 'next/font/google';
import './globals.css';

// Inter ফন্ট লোড করছি
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio | Full-Stack Developer',
  description: 'Professional portfolio showcasing my web development skills and projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}