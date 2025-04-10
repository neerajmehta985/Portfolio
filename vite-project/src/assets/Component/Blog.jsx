import React, { useState, useMemo } from 'react';

const blogPosts = [
  {
    title: "Understanding React Hooks",
    preview: "Dive deep into useState, useEffect, and custom hooks in React development...",
    content: "Hooks provide a more elegant way to use state and lifecycle features...",
  },
  {
    title: "Mastering Tailwind CSS",
    preview: "Discover the utility-first approach Tailwind offers for fast UI design...",
    content: "With Tailwind, style your components directly with utility classes...",
  },
  {
    title: "Deploying with Vercel",
    preview: "An easy guide to deploying your React apps using Vercel’s CI/CD pipeline...",
    content: "Vercel allows for instant deployments directly from GitHub...",
  },
  {
    title: "JavaScript ES6+ Features",
    preview: "Explore modern JavaScript features that make coding faster and cleaner...",
    content: "Destructuring, arrow functions, template literals, and async/await...",
  },
  {
    title: "Optimizing Performance in React",
    preview: "Techniques to make your React applications lightning-fast...",
    content: "React.memo, lazy loading, code splitting, and proper use of useMemo/useCallback...",
  },
  {
    title: "Building a Design System",
    preview: "Why and how to build your own scalable design system...",
    content: "Design systems promote consistency, speed up development...",
  },
  {
    title: "Understanding Async/Await",
    preview: "Learn how async/await simplifies asynchronous JavaScript...",
    content: "Async/await syntax allows writing asynchronous code that looks synchronous...",
  },
  {
    title: "Version Control with Git",
    preview: "The fundamentals of Git for developers and teams...",
    content: "Understand branching, merging, rebasing, pull requests...",
  },
  {
    title: "Creating Animated UI with Framer Motion",
    preview: "Add delightful animations to your React app with ease...",
    content: "Framer Motion provides powerful primitives to animate components...",
  },
  {
    title: "Getting Started with TypeScript",
    preview: "Why TypeScript is taking over JavaScript projects...",
    content: "TypeScript adds type safety, better tooling, and confidence...",
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const posts = useMemo(() => blogPosts, []);

  const toggleContent = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-12 text-purple-300 text-center">
        Latest Blog Posts
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          <article
            key={index}
            className="border border-purple-600 p-6 rounded-xl bg-gray-800 shadow-md hover:shadow-purple-700 transition duration-200"
          >
            <h3 className="text-2xl font-semibold text-purple-200">{post.title}</h3>
            <p className="text-purple-400 mt-2">{post.preview}</p>

            {activeIndex === index && (
              <p className="mt-4 text-gray-300">{post.content}</p>
            )}

            <button
              onClick={() => toggleContent(index)}
              className="mt-4 inline-block bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition"
            >
              {activeIndex === index ? "Show Less" : "Read More"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
