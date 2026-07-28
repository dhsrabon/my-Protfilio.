import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  const isPublicPath = path === '/login';
  const token = request.cookies.get('admin_token')?.value || '';

  // যদি ইউজার ড্যাশবোর্ডে যাওয়ার চেষ্টা করে কিন্তু টোকেন না থাকে, তবে তাকে লগিন পেজে পাঠিয়ে দাও
  if (path.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // যদি লগিন করা থাকে এবং লগিন পেজে যাওয়ার চেষ্টা করে, তবে ড্যাশবোর্ডে পাঠিয়ে দাও
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

// কোন কোন লিংকের জন্য এই রুলস কাজ করবে
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login'
  ]
};