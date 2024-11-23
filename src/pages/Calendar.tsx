import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Tag } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
        <p className="text-gray-600 mt-2">Schedule and manage your activities</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Calendar implementation will go here */}
            <div className="h-[600px] flex items-center justify-center">
              <p className="text-gray-500">Calendar view coming soon</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-800">Coaching Session</h3>
                  <p className="text-sm text-gray-500">Tomorrow at 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reminders</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="font-medium text-gray-800">Daily Meditation</h3>
                  <p className="text-sm text-gray-500">Every day at 8:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Coaching</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Habits</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}