'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // নতুন স্টেট: ফর্ম সাবমিটের অবস্থা বোঝার জন্য
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // সাবমিট করার সাথে সাথে লোডিং ট্রু হবে এবং আগের এরর মুছে যাবে
    setStatus({ loading: true, success: false, error: '' });

    try {
      // ব্যাকএন্ড API-তে ডাটা পাঠানো হচ্ছে
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        // ডাটা সফলভাবে গেলে
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' }); // ফর্ম ক্লিয়ার করা
        
        // ৩ সেকেন্ড পর সাকসেস মেসেজ গায়েব করা
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 3000);
      }
    } catch (error) {
      // কোনো সমস্যা হলে এরর দেখানো
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.response?.data?.error || 'Something went wrong! Please try again.' 
      });
    }
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-slate-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8 lg:pr-10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Let's build something amazing together.</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm currently open for new opportunities. Whether you have a question or just want to connect, my inbox is always open.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-950/50 border border-cyan-900/50 flex items-center justify-center text-cyan-400">
                <FiMail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Me At</p>
                <a href="mailto:your.email@example.com" className="text-slate-300 hover:text-cyan-400 transition-colors text-lg">
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-950/50 border border-cyan-900/50 flex items-center justify-center text-cyan-400">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-slate-300 text-lg">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex flex-col gap-6">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                {/* Submit Button & Status Messages */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                    {!status.loading && <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>

                  {/* Success Message */}
                  {status.success && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm mt-4 text-center font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}

                  {/* Error Message */}
                  {status.error && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-4 text-center font-medium">
                      {status.error}
                    </motion.p>
                  )}
                </div>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;