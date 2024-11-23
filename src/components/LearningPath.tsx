import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Target } from 'lucide-react';

const learningPaths = [
  {
    id: 1,
    title: 'Mindfulness Mastery',
    description: 'Develop a strong meditation practice and mindful living habits',
    progress: 65,
    modules: [
      { title: 'Introduction to Meditation', completed: true },
      { title: 'Daily Mindfulness Practices', completed: true },
      { title: 'Advanced Meditation Techniques', completed: false },
      { title: 'Mindful Living Integration', completed: false }
    ],
    duration: '8 weeks',
    category: 'Wellbeing'
  },
  {
    id: 2,
    title: 'Productivity Powerhouse',
    description: 'Master time management and achieve peak productivity',
    progress: 30,
    modules: [
      { title: 'Time Management Fundamentals', completed: true },
      { title: 'Goal Setting & Prioritization', completed: false },
      { title: 'Focus & Deep Work', completed: false },
      { title: 'Productivity Systems', completed: false }
    ],
    duration: '6 weeks',
    category: 'Professional Growth'
  }
];

export default function LearningPath() {
  return (
    <div className="space-y-6">
      {learningPaths.map((path) => (
        <motion.div
          key={path.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{path.title}</h2>
              <p className="text-gray-600 mt-1">{path.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {path.duration}
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Target className="w-4 h-4 mr-1" />
                  {path.category}
                </span>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Continue Learning
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-blue-600">{path.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                style={{ width: `${path.progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {path.modules.map((module, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {module.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  )}
                  <span className={module.completed ? 'text-gray-600' : 'text-gray-800'}>
                    {module.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}