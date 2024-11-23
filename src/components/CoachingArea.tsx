import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, BookOpen, Target, MessageSquare } from 'lucide-react';

interface CoachingAreaProps {
  area: {
    id: string;
    title: string;
    icon: any;
    color: string;
    bgColor: string;
    description: string;
    topics: string[];
  };
  onClose: () => void;
}

export default function CoachingArea({ area, onClose }: CoachingAreaProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-lg ${area.bgColor}`}>
                <area.icon className={`w-6 h-6 ${area.color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{area.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Topics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {area.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recommended Resources
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium text-gray-800">Getting Started Guide</h4>
                      <p className="text-sm text-gray-600">
                        Essential concepts and practices for your journey
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className="font-medium text-gray-800">Community Discussion</h4>
                      <p className="text-sm text-gray-600">
                        Connect with others on similar paths
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Schedule a Session
                </h3>
                <div className="space-y-4">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    30-minute initial consultation
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Progress Tracking
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Overall Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2"
                        style={{ width: '45%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Sessions Completed</span>
                      <span>3/8</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 rounded-full h-2"
                        style={{ width: '37.5%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}