import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Emotional Intelligence Mastery',
    description: 'Develop your EQ and improve relationships',
    instructor: 'Dr. Sarah Chen',
    duration: '4 weeks',
    enrolled: 1234,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    category: 'Personal Development'
  },
  {
    id: 2,
    title: 'Peak Performance Habits',
    description: 'Build habits that lead to exceptional results',
    instructor: 'Mark Thompson',
    duration: '6 weeks',
    enrolled: 2156,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    category: 'Productivity'
  }
];

export default function CourseCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${course.image})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
              <button className="p-4 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                <Play className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {course.category}
              </span>
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm">{course.rating}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {course.enrolled.toLocaleString()} enrolled
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-gray-500">Instructor:</span>
                <span className="ml-1 text-gray-800">{course.instructor}</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Course
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}