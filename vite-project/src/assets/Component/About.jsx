import React, { useMemo, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa' // Load directly (critical icon)
import File from '../Files/Neeraj.pdf'

// Lazy load tech stack icons only
const FaReact = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaReact })))
const FaNodeJs = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaNodeJs })))
const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })))
const FaFigma = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaFigma })))

const About = React.memo(() => {
  const techIcons = useMemo(() => [FaReact, FaNodeJs, FaGithub, FaFigma], [])

  const fadeIn = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }), [])

  return (
    <section className="py-24 px-6 bg-gray-900 text-gray-100 max-w-5xl mx-auto">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-pink-400">About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-lg leading-relaxed text-gray-300"
      >
        I'm a software developer who believes in building elegant, scalable web applications.
        With a passion for React and frontend design, I transform ideas into beautiful, interactive user interfaces that not only work well but also feel intuitive.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-pink-300 mb-3">🔧 Core Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {[
              "React.js, Tailwind CSS, Next.js",
              "Framer Motion & UI/UX Design",
              "REST APIs, Firebase, Node.js",
              "Git, Agile workflows, CI/CD",
            ].map((skill, idx) => (
              <li key={idx} className="hover:text-pink-400 transition">{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-pink-300 mb-3">💡 Developer Mindset</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {[
              "Pixel-perfect attention to detail",
              "Code readability & reusability",
              "Open-source contributor & lifelong learner",
              "Team player who loves collaboration",
            ].map((trait, idx) => (
              <li key={idx} className="hover:text-pink-400 transition">{trait}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 flex justify-center gap-10 text-4xl text-pink-400"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {techIcons.map((Icon, i) => (
          <Suspense fallback={null} key={i}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="transition"
            >
              <Icon />
            </motion.div>
          </Suspense>
        ))}
      </motion.div>

      {/* Resume section loaded immediately with no lazy icons */}
      <motion.div
        className="mt-20"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-pink-400">Resume</h2>

        <a
          href={File}
          download="Neeraj_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-3 border border-pink-500 text-pink-400 rounded-xl hover:bg-pink-500 hover:text-white transition mb-10"
        >
          <FaDownload /> Download Resume
        </a>

        <div className="grid md:grid-cols-2 gap-12 mt-6">
          <div>
            <h3 className="text-2xl font-semibold text-pink-300 mb-4">💼 Work Experience</h3>
            <ul className="space-y-6 text-gray-300">
              <li>
                <strong>Frontend Developer</strong> — XYZ Tech (2023 - Present)
                <br />
                <span className="text-sm text-gray-400">React, Tailwind CSS, UI/UX</span>
              </li>
              <li>
                <strong>Intern - Web Developer</strong> — ABC Corp (2022)
                <br />
                <span className="text-sm text-gray-400">Built landing pages & dashboards</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-pink-300 mb-4">🎓 Education</h3>
            <ul className="space-y-6 text-gray-300">
              <li>
                <strong>Bachelor of Computer Science</strong> — University Name (2020 - 2024)
                <br />
                <span className="text-sm text-gray-400">CGPA: 8.6 / 10</span>
              </li>
              <li>
                <strong>Certifications</strong>
                <br />
                <span className="text-sm text-gray-400">React, Node.js, Firebase - Coursera</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-pink-300 mb-4">🧠 Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400">
            {[
              "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Firebase",
              "Node.js", "Git & GitHub", "MongoDB", "REST APIs", "Figma"
            ].map((skill, idx) => (
              <div key={idx} className="hover:text-pink-400 transition">{skill}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
})

export default About
