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
    <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-800 hover:to-purple-900 border border-gray-700 shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition">
        {title}
      </h3>

      {showContent && (
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
      )}

      <button
        onClick={() => setShowContent(!showContent)}
        className="text-sm px-4 py-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition"
      >
        {showContent ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
});

const Achievement = () => (
  <section className="py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto bg-black">
    <h2 className="text-4xl font-bold mb-14 text-center text-white">
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
