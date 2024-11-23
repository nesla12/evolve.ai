import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';
import { CoachingSession } from '../types';
import { format } from 'date-fns';

export default function CoachingInsights() {
  const [sessions] = React.useState<CoachingSession[]>([
    {
      id: 1,
      date: new Date(),
      topic: 'Goal Setting & Motivation',
      summary: 'Discussed long-term career aspirations and created actionable steps',
      actionItems: ['Create a skill development plan', 'Research industry trends'],
      mood: 4
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Coaching Insights</h2>
        <TrendingUp className="w-6 h-6 text-gray-400" />
      </div>
      
      <div className="space-y-6">
        {sessions.map(session => (
          <div key={session.id} className="space-y-4">
            <div className="flex items-start space-x-4">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-800">{session.topic}</h3>
                  <span className="text-sm text-gray-500">
                    {format(session.date, 'MMM d')}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{session.summary}</p>
              </div>
            </div>
            
            <div className="pl-10">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Action Items:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {session.actionItems.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}