import React from 'react';
import { BarChart, Calendar, TrendingUp } from 'lucide-react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', productivity: 8, mood: 7, energy: 6 },
  { day: 'Tue', productivity: 6, mood: 8, energy: 7 },
  { day: 'Wed', productivity: 9, mood: 8, energy: 8 },
  { day: 'Thu', productivity: 7, mood: 6, energy: 7 },
  { day: 'Fri', productivity: 8, mood: 9, energy: 8 },
  { day: 'Sat', productivity: 9, mood: 9, energy: 9 },
  { day: 'Sun', productivity: 7, mood: 8, energy: 7 },
];

export default function WeeklyReflection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Reflection</h2>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-gray-500">Feb 26 - Mar 4</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="productivity" fill="#3B82F6" name="Productivity" />
              <Bar dataKey="mood" fill="#10B981" name="Mood" />
              <Bar dataKey="energy" fill="#F59E0B" name="Energy" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart className="w-5 h-5 text-blue-600" />
              <h3 className="font-medium text-gray-800">Productivity</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">7.7</p>
            <p className="text-sm text-gray-600">Average score</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="font-medium text-gray-800">Mood</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">7.9</p>
            <p className="text-sm text-gray-600">Average score</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              <h3 className="font-medium text-gray-800">Energy</h3>
            </div>
            <p className="text-2xl font-bold text-yellow-600">7.4</p>
            <p className="text-sm text-gray-600">Average score</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-2">Weekly Insights</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">• Highest productivity on Wednesday</li>
            <li className="text-gray-600">• Consistent mood improvement throughout the week</li>
            <li className="text-gray-600">• Energy levels peaked during weekend</li>
          </ul>
        </div>
      </div>
    </div>
  );
}