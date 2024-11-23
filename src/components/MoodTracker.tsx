import React from 'react';
import { Smile, Frown, Meh } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function MoodTracker() {
  const { moodLogs, logMood } = useStore();
  const averageMood = moodLogs && moodLogs.length > 0
    ? moodLogs.reduce((acc, log) => acc + log.score, 0) / moodLogs.length
    : 0;

  const handleMoodSelect = (score: number) => {
    logMood({
      id: Date.now(),
      date: new Date(),
      score,
      notes: '',
      factors: [],
      energyLevel: 5
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mood Tracker</h2>

      <div className="flex items-center justify-between mb-8">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={averageMood * 20}
            text={`${Math.round(averageMood * 20)}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${averageMood / 5})`,
              textColor: '#2563eb',
              trailColor: '#d1d5db'
            })}
          />
        </div>

        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5].map((score) => (
            <motion.button
              key={score}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMoodSelect(score)}
              className="p-3 rounded-full hover:bg-gray-100"
            >
              {score <= 2 ? (
                <Frown className="w-8 h-8 text-red-500" />
              ) : score === 3 ? (
                <Meh className="w-8 h-8 text-yellow-500" />
              ) : (
                <Smile className="w-8 h-8 text-green-500" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {moodLogs && moodLogs.slice(-3).map((log) => (
          <div
            key={log.id}
            className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
          >
            <div>
              <span className="text-sm text-gray-500">
                {new Date(log.date).toLocaleDateString()}
              </span>
              <div className="flex items-center mt-1">
                {log.score <= 2 ? (
                  <Frown className="w-5 h-5 text-red-500 mr-2" />
                ) : log.score === 3 ? (
                  <Meh className="w-5 h-5 text-yellow-500 mr-2" />
                ) : (
                  <Smile className="w-5 h-5 text-green-500 mr-2" />
                )}
                <span className="text-gray-700">Energy Level: {log.energyLevel}/10</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}