import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa'

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-800 text-gray-100 max-w-5xl mx-auto transition">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-pink-400 animate-glow"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg leading-relaxed text-gray-300"
      >
        I'm a software developer who believes in building elegant, scalable web applications.
        With a passion for React and frontend design, I transform ideas into beautiful, interactive user interfaces that not only work well but also feel intuitive.
      </motion.p>

      {/* Grid Cards */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Core Skills */}
        <div>
          <h3 className="text-xl font-semibold text-pink-300 mb-3 animate-glow">
            🔧 Core Skills
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li className="hover:text-pink-400 transition">React.js, Tailwind CSS, Next.js</li>
            <li className="hover:text-pink-400 transition">Framer Motion & UI/UX Design</li>
            <li className="hover:text-pink-400 transition">REST APIs, Firebase, Node.js</li>
            <li className="hover:text-pink-400 transition">Git, Agile workflows, CI/CD</li>
          </ul>
        </div>

        {/* Mindset */}
        <div>
          <h3 className="text-xl font-semibold text-pink-300 mb-3 animate-glow">
            💡 Developer Mindset
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li className="hover:text-pink-400 transition">Pixel-perfect attention to detail</li>
            <li className="hover:text-pink-400 transition">Code readability & reusability</li>
            <li className="hover:text-pink-400 transition">Open-source contributor & lifelong learner</li>
            <li className="hover:text-pink-400 transition">Team player who loves collaboration</li>
          </ul>
        </div>
      </motion.div>

      {/* Animated & Glowing Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 flex justify-center gap-10 text-4xl text-pink-400"
      >
        {[FaReact, FaNodeJs, FaGithub, FaFigma].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="animate-glow transition duration-300"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
