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

const AchievementCard = memo(({ title, description }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="group p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 border border-pink-600 shadow-md hover:shadow-pink-700 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-pink-200 mb-2 group-hover:text-pink-300 transition">
        {title}
      </h3>

      {showContent && (
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
      )}

      <button
        onClick={() => setShowContent(!showContent)}
        className="text-sm mt-2 px-4 py-2 rounded-md bg-pink-600 hover:bg-pink-500 text-white transition"
      >
        {showContent ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
});

const Achievement = () => (
  <section className="py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto  text-white">
    <h2 className="text-4xl font-bold mb-14 text-center text-pink-300">
      Achievements
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((item, idx) => (
        <AchievementCard key={idx} title={item.title} description={item.description} />
      ))}
    </div>
  </section>
);

export default memo(Achievement);
