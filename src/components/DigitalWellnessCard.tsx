import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Bell, Brain, Focus } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function DigitalWellnessCard() {
  const { digitalWellness, toggleFocusMode } = useStore();
  const { screenTime, notifications, focusSessions, mindfulBreaks } = digitalWellness;

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Digital Wellness</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-800">Screen Time</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{formatTime(screenTime)}</p>
          <p className="text-sm text-gray-600">Today</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Bell className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-800">Notifications</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{notifications}</p>
          <p className="text-sm text-gray-600">Today</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={toggleFocusMode}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Focus className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <h3 className="font-medium text-gray-800">Focus Mode</h3>
              <p className="text-sm text-gray-600">Block distractions</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-11 h-6 bg-gray-200 rounded-full peer"></div>
            <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full"></div>
          </div>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <Brain className="w-5 h-5 text-green-600" />
            <div className="text-left">
              <h3 className="font-medium text-gray-800">Take a Mindful Break</h3>
              <p className="text-sm text-gray-600">5-minute meditation</p>
            </div>
          </div>
          <span className="text-blue-600">Start →</span>
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-gray-800 mb-2">Today's Progress</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Focus Sessions</span>
              <span>{focusSessions.length} completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${(focusSessions.length / 5) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Mindful Breaks</span>
              <span>{mindfulBreaks.length} taken</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 rounded-full h-2"
                style={{ width: `${(mindfulBreaks.length / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}