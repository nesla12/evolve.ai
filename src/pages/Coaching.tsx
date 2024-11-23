import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Briefcase, 
  Users, 
  Dumbbell, 
  PiggyBank, 
  FolderKanban,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import CoachingArea from '../components/CoachingArea';
import SessionScheduler from '../components/SessionScheduler';
import { useStore } from '../store/useStore';

const coachingAreas = [
  {
    id: 'personal',
    title: 'Personal & Spiritual Development',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    description: 'Discover your purpose and develop spiritual awareness',
    topics: ['Self-discovery', 'Values alignment', 'Life purpose', 'Spiritual practices']
  },
  {
    id: 'career',
    title: 'Career Growth',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Accelerate your professional development',
    topics: ['Career planning', 'Leadership skills', 'Professional networking', 'Work-life balance']
  },
  {
    id: 'relationships',
    title: 'Relationships',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'Build and maintain meaningful connections',
    topics: ['Communication skills', 'Boundary setting', 'Conflict resolution', 'Social confidence']
  },
  {
    id: 'health',
    title: 'Health & Fitness',
    icon: Dumbbell,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Achieve your health and fitness goals',
    topics: ['Exercise routines', 'Nutrition planning', 'Wellness habits', 'Stress management']
  },
  {
    id: 'mental',
    title: 'Mental Wellbeing',
    icon: Brain,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    description: 'Enhance your mental health and emotional balance',
    topics: ['Stress management', 'Anxiety reduction', 'Emotional regulation', 'Mindfulness']
  },
  {
    id: 'financial',
    title: 'Financial Habits',
    icon: PiggyBank,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: 'Develop healthy financial habits',
    topics: ['Budgeting', 'Saving strategies', 'Investment basics', 'Financial planning']
  },
  {
    id: 'organization',
    title: 'Life Organization',
    icon: FolderKanban,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Create structure and order in your life',
    topics: ['Time management', 'Goal setting', 'Productivity systems', 'Home organization']
  }
];

export default function Coaching() {
  const [selectedArea, setSelectedArea] = useState(null);
  const { sessions } = useStore();

  const upcomingSession = sessions?.[0];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Coaching Dashboard</h1>
        <p className="text-gray-600 mt-2">Your personalized growth journey</p>
      </motion.div>

      {upcomingSession && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Upcoming Session</h2>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Tomorrow at 2:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span>Career Development Strategy</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Join Session
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coachingAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedArea(area.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${area.bgColor}`}>
                  <area.icon className={`w-6 h-6 ${area.color}`} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{area.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-4">{area.description}</p>
              
              <div className="space-y-2">
                {area.topics.map((topic, i) => (
                  <div key={i} className="flex items-center text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                Explore Area
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedArea && (
        <CoachingArea
          area={coachingAreas.find(area => area.id === selectedArea)!}
          onClose={() => setSelectedArea(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <SessionScheduler />
      </motion.div>
    </div>
  );
}