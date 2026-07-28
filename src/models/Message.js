import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false, // ড্যাশবোর্ডে মেসেজ পড়ার পর এটি true হবে
    },
  },
  { timestamps: true } // এটি স্বয়ংক্রিয়ভাবে মেসেজ পাঠানোর সময় (createdAt) সেভ করবে
);

// Next.js-এ মডেল বারবার রিলোড হয়, তাই আগে থেকে মডেল থাকলে সেটিই ব্যবহার করবে
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

export default Message;