import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto bg-purple-50 dark:bg-gray-900 rounded-xl shadow-md transition-all duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-purple-900 dark:text-purple-300 text-center"
      >
        Let's Connect
      </motion.h2>

      <form className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            defaultValue="Neeraj Mehta"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-purple-300 dark:border-purple-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="email"
            name="email"
            defaultValue="neerajmehta985@gmail.com"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-purple-300 dark:border-purple-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-purple-300 dark:border-purple-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          ></textarea>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md shadow-lg transition hover:shadow-pink-500"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </section>
  );
}
