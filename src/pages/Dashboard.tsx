import React from 'react';
import { motion } from 'framer-motion';
import HabitTracker from '../components/HabitTracker';
import HabitBuilder from '../components/HabitBuilder';
import HabitReminder from '../components/HabitReminder';
import GoalTracker from '../components/GoalTracker';
import MoodTracker from '../components/MoodTracker';
import JournalSection from '../components/JournalSection';
import CoachingInsights from '../components/CoachingInsights';
import ProgressChart from '../components/ProgressChart';
import WeeklyReflection from '../components/WeeklyReflection';
import Calendar from '../components/Calendar';

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="p-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Alex</h1>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'planner'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Planner
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Analytics
          </button>
        </div>
      </motion.div>
      
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <HabitBuilder />
            <HabitTracker />
            <GoalTracker />
            <MoodTracker />
          </div>
          <div className="space-y-8">
            <CoachingInsights />
            <ProgressChart />
          </div>
        </div>
      )}

      {activeTab === 'planner' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Calendar />
          </div>
          <div className="space-y-8">
            <GoalTracker />
            <JournalSection />
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-8">
          <WeeklyReflection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProgressChart />
            <MoodTracker />
          </div>
        </div>
      )}
      
      <HabitReminder />
    </div>
  );
}