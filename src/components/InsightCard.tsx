import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  category: string;
  actionItems: string[];
  onClick: () => void;
}

export default function InsightCard({ title, description, category, actionItems, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-yellow-100 rounded-lg">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {category}
            </span>
          </div>
          
          <p className="text-gray-600 mt-2">{description}</p>
          
          {actionItems.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Action Items:</h4>
              <ul className="space-y-1">
                {actionItems.slice(0, 2).map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                    {item}
                  </li>
                ))}
                {actionItems.length > 2 && (
                  <li className="text-sm text-blue-600">
                    +{actionItems.length - 2} more items
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}