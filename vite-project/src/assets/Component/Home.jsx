import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import Image from "../Images/image.png";

const Home = () => (
  <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center text-white">
    
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-5xl md:text-6xl font-extrabold mb-4"
    >
      Hello, I’m <span className="text-pink-500 animate-glow">Neeraj</span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-xl text-gray-300 mb-12"
    >
      Full Stack Developer • UI/UX Enthusiast • Code Craftsman
    </motion.p>

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 120 }}
      className="flex justify-center mb-12"
    >
      <div className="relative group">
        <div className="absolute inset-0 w-full h-full rounded-full bg-pink-500 opacity-10 group-hover:animate-pulse blur-md z-0" />
        <img
          src={Image}
          alt="Neeraj"
          className="relative w-44 h-44 rounded-full border-4 border-pink-500 object-cover shadow-2xl transition-all duration-500 z-10"
        />
      </div>
    </motion.div>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-2 max-w-2xl mx-auto text-gray-400 leading-relaxed"
    >
      Passionate about building scalable web apps, clean design, and interactive user interfaces.
      With a love for React, Node.js, and modern design tools, I bring ideas to life with code and creativity.
      Inspired by Google’s UX principles and a performance-first engineering mindset.
    </motion.p>

    {/* What I Do */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left"
    >
      <div>
        <h3 className="text-2xl font-semibold text-pink-400 mb-2">🚀 Web Development</h3>
        <p className="text-gray-300">
          Building responsive, high-performance web apps with modern frameworks and clean architecture.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-pink-400 mb-2">🎨 UI/UX Design</h3>
        <p className="text-gray-300">
          Crafting intuitive, engaging interfaces with attention to accessibility and user experience.
        </p>
      </div>
    </motion.div>

    {/* Tech Stack */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-16 flex flex-wrap justify-center gap-10 text-pink-400"
    >
      {[
        { icon: FaReact, label: "React" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: FaGithub, label: "GitHub" },
        { icon: FaFigma, label: "Figma" },
      ].map(({ icon: Icon, label }, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col items-center space-y-2"
        >
          <Icon className="text-4xl" />
          <span className="text-sm text-gray-300">{label}</span>
        </motion.div>
      ))}
    </motion.div>

    {/* Call to Action */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="mt-14 inline-block bg-pink-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-pink-500 transition"
    >
      <a href="#contact">Let’s Connect</a>
    </motion.div>
  </section>
);

export default Home;
