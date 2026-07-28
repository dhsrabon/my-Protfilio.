import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Message from '@/models/Message';

export async function POST(request) {
  try {
    // ১. ডাটাবেস কানেক্ট করা
    await connectToDatabase();

    // ২. ফ্রন্টএন্ড থেকে আসা ডাটা রিসিভ করা
    const body = await request.json();
    const { name, email, message } = body;

    // ৩. ভ্যালিডেশন (সব ফিল্ড পূরণ করেছে কি না)
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    // ৪. ডাটাবেসে সেভ করা
    const newMessage = await Message.create({ name, email, message });

    // ৫. সাকসেস রেসপন্স পাঠানো
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', data: newMessage },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}