import React from 'react';
import { motion } from 'framer-motion';
import JournalSection from '../components/JournalSection';
import MoodTracker from '../components/MoodTracker';

export default function Journal() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Journal</h1>
        <p className="text-gray-600 mt-2">Record your thoughts and track your mood</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <JournalSection />
        </div>
        <div className="space-y-8">
          <MoodTracker />
        </div>
      </div>
    </div>
  );
}