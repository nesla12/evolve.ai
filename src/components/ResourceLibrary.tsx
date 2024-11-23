import React from 'react';
import { Book, Video, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'article' | 'video' | 'exercise';
  url: string;
  category: string;
  duration: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Building Resilience Through Mindfulness',
    description: 'Learn practical techniques for developing mental strength',
    type: 'article',
    url: '#',
    category: 'mindfulness',
    duration: '10 min read'
  },
  {
    id: 2,
    title: 'Morning Routine Optimization',
    description: 'Expert tips for creating an energizing morning routine',
    type: 'video',
    url: '#',
    category: 'productivity',
    duration: '15 min watch'
  },
  {
    id: 3,
    title: '5-Minute Desk Stretches',
    description: 'Quick exercises to reduce tension during work',
    type: 'exercise',
    url: '#',
    category: 'health',
    duration: '5 min practice'
  }
];

export default function ResourceLibrary() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <Book className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'exercise':
        return <Dumbbell className="w-6 h-6" />;
      default:
        return <Book className="w-6 h-6" />;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'article':
        return 'text-purple-600 bg-purple-100';
      case 'video':
        return 'text-blue-600 bg-blue-100';
      case 'exercise':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Resource Library</h2>
      
      <div className="grid gap-6">
        {resources.map((resource) => (
          <motion.a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block"
          >
            <div className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${getColorClass(resource.type)}`}>
                  {getIcon(resource.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800">{resource.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {resource.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mt-1">{resource.description}</p>
                  
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{resource.category}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-blue-600">Learn more →</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}