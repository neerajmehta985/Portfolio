import React, { useState, memo } from 'react';

const achievements = [
  
  {
    title: "🚀 Enterprise React Apps",
    description: "Delivered performant apps using React, Tailwind & Node.js.",
  },
  {
    title: "📜 Full Stack Certified",
    description: "Certified in frontend & backend stacks with clean architecture.",
  },
  {
    title: "🎯 Freelance Projects",
    description: "Built 5+ industry-level custom websites.",
  },
  {
    title: "📝 Tech Blogger",
    description: "Published blogs on React, UI/UX & performance practices.",
  },
];

const AchievementCard = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-600 shadow-lg hover:shadow-purple-500 transition-all duration-300">
      <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-100 mb-2">
        {title}
      </h3>

      {showContent && (
        <p className="text-sm text-purple-600 dark:text-purple-300 mb-3 leading-relaxed">
          {description}
        </p>
      )}

      <button
        onClick={() => setShowContent(!showContent)}
        className="mt-2 text-sm px-4 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        {showContent ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

const Achievement = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto bg-purple-50 dark:bg-gray-900">
    <h2 className="text-4xl font-bold mb-10 text-center text-purple-800 dark:text-purple-300">
      Achievements
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((item, idx) => (
        <AchievementCard key={idx} title={item.title} description={item.description} />
      ))}
    </div>
  </section>
);

export default memo(Achievement);
