import React from 'react';
import { Target, ChevronRight } from 'lucide-react';
import { Goal } from '../types';
import { format } from 'date-fns';

export default function GoalTracker() {
  const [goals] = React.useState<Goal[]>([
    {
      id: 1,
      title: 'Complete Web Development Course',
      description: 'Finish all modules and build final project',
      deadline: new Date(2024, 3, 15),
      progress: 65,
      category: 'learning'
    },
    {
      id: 2,
      title: 'Run 5K',
      description: 'Train and complete a 5K run',
      deadline: new Date(2024, 4, 1),
      progress: 40,
      category: 'health'
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Goals</h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-800">{goal.title}</h3>
                  <p className="text-sm text-gray-500">{goal.description}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                Due {format(goal.deadline, 'MMM d')}
              </span>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">{goal.progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}