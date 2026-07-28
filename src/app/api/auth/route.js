import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // ইমেইল এবং পাসওয়ার্ড .env ফাইলের সাথে মিলছে কি না চেক করা
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      
      // মিললে একটি টোকেন তৈরি করা (১ দিনের জন্য মেয়াদ)
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
      
      const response = NextResponse.json({ success: true, message: 'Login successful' }, { status: 200 });
      
      // ব্রাউজারে টোকেনটি সিকিউর কুকি হিসেবে সেট করা
      response.cookies.set('admin_token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 60 * 60 * 24 
      });

      return response;
    }

    // পাসওয়ার্ড ভুল হলে
    return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });
  }
}