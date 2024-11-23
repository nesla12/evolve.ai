import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Award, Search, Filter, BookMarked, Brain } from 'lucide-react';
import ResourceLibrary from '../components/ResourceLibrary';
import LearningPath from '../components/LearningPath';
import CourseCard from '../components/CourseCard';

export default function Learning() {
  const [activeTab, setActiveTab] = useState('paths');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Learning Hub</h1>
        <p className="text-gray-600 mt-2">Your personalized growth journey</p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('paths')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'paths'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Brain className="w-5 h-5" />
            <span>Learning Paths</span>
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <BookMarked className="w-5 h-5" />
            <span>Courses</span>
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'library'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Resource Library</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {activeTab === 'paths' && <LearningPath />}
      {activeTab === 'courses' && <CourseCard />}
      {activeTab === 'library' && <ResourceLibrary />}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
            <Award className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-medium text-gray-800">Mindfulness Master</h3>
              <p className="text-sm text-gray-600">Completed 30-day meditation course</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
            <Award className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-800">Goal Setter</h3>
              <p className="text-sm text-gray-600">Achieved 5 major goals</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
            <Award className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="font-medium text-gray-800">Knowledge Seeker</h3>
              <p className="text-sm text-gray-600">Completed 10 courses</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}