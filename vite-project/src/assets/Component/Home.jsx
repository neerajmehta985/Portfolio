import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaServer,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";
import Image from "../Images/image.png";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-pink-500 mb-4" />,
    title: "Web Designing",
    description:
      "Crafting visually appealing and user-friendly websites focused on modern UI/UX practices.",
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-pink-500 mb-4" />,
    title: "Training",
    description:
      "Hands-on training in web design and development — frontend to backend technologies.",
  },
  {
    icon: <FaServer className="text-4xl text-pink-500 mb-4" />,
    title: "Frontend & Backend Development",
    description:
      "Full-stack development using React, Node.js, Express, MongoDB, and REST APIs.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-pink-500 mb-4" />,
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across all screen sizes and devices using responsive design.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-500 mb-4" />,
    title: "UI/UX Prototyping",
    description:
      "Designing interactive wireframes and prototypes using Figma for modern digital products.",
  },
  {
    icon: <FaTools className="text-4xl text-pink-500 mb-4" />,
    title: "Maintenance & Optimization",
    description:
      "Continuous support, performance tuning, and SEO optimization for existing web apps.",
  },
];

const Home = () => (
  <section className="py-32 px-6 text-center text-white">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-5xl md:text-6xl font-extrabold mb-4"
    >
      Hello, I’m <span className="text-pink-500 animate-glow">Neeraj</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-xl text-gray-300 mb-12"
    >
      Full Stack Developer • UI/UX Enthusiast • Code Craftsman
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 120 }}
      className="flex justify-center my-12"
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

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-16 flex flex-wrap justify-center gap-10 text-pink-400"
    >
      {[FaReact, FaNodeJs, FaGithub, FaFigma].map((Icon, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col items-center space-y-2"
        >
          <Icon className="text-4xl" />
          <span className="text-sm text-gray-300">
            {["React", "Node.js", "GitHub", "Figma"][i]}
          </span>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="mt-14 inline-block bg-pink-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-pink-500 transition"
    >
      <a href="#contact">Let’s Connect</a>
    </motion.div>

    {/* Services Section */}
    <section className="py-24 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14 text-pink-500"
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-[#1f2937] hover:bg-[#2a2e3a] p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 transition-all duration-300 text-center"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-pink-400 group-hover:text-pink-300 transition">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  </section>
);

export default Home;
