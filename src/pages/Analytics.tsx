import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsivePie } from '@nivo/pie';
import { Calendar, TrendingUp, Activity, Target } from 'lucide-react';
import WeeklyReflection from '../components/WeeklyReflection';

// Chart data
const progressData = [
  {
    id: 'productivity',
    data: [
      { x: 'Mon', y: 30 },
      { x: 'Tue', y: 45 },
      { x: 'Wed', y: 60 },
      { x: 'Thu', y: 55 },
      { x: 'Fri', y: 70 },
      { x: 'Sat', y: 65 },
      { x: 'Sun', y: 75 },
    ],
  },
];

const skillsData = [
  { skill: 'Mindfulness', value: 80 },
  { skill: 'Productivity', value: 65 },
  { skill: 'Communication', value: 70 },
  { skill: 'Leadership', value: 55 },
  { skill: 'Emotional IQ', value: 75 },
].map(item => ({
  taste: item.skill,
  [item.skill]: item.value,
}));

const habitData = [
  { id: 'Complete', value: 65, color: '#3B82F6' },
  { id: 'In Progress', value: 25, color: '#10B981' },
  { id: 'Not Started', value: 10, color: '#F59E0B' },
];

const LineChart = () => (
  <ResponsiveLine
    data={progressData}
    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 0, max: 100 }}
    curve="cardinal"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    pointSize={10}
    pointColor="#ffffff"
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    colors={['#3B82F6']}
    enableArea={true}
    areaOpacity={0.1}
    theme={{
      axis: {
        ticks: {
          text: {
            fontSize: 12,
            fill: '#6B7280',
          },
        },
      },
      grid: {
        line: {
          stroke: '#E5E7EB',
          strokeWidth: 1,
        },
      },
      crosshair: {
        line: {
          stroke: '#3B82F6',
          strokeWidth: 1,
          strokeOpacity: 0.35,
        },
      },
    }}
  />
);

const RadarChart = () => (
  <ResponsiveRadar
    data={skillsData}
    keys={['Mindfulness', 'Productivity', 'Communication', 'Leadership', 'Emotional IQ']}
    indexBy="taste"
    maxValue={100}
    margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
    curve="linearClosed"
    borderWidth={2}
    borderColor={{ from: 'color' }}
    gridLevels={5}
    gridShape="circular"
    gridLabelOffset={12}
    enableDots={true}
    dotSize={8}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    dotBorderColor={{ from: 'color' }}
    enableDotLabel={false}
    colors={['#3B82F6']}
    fillOpacity={0.25}
    blendMode="multiply"
    animate={true}
    theme={{
      dots: {
        text: {
          fontSize: 12,
          fill: '#6B7280',
        },
      },
      labels: {
        text: {
          fontSize: 12,
          fill: '#6B7280',
        },
      },
    }}
  />
);

const PieChart = () => (
  <ResponsivePie
    data={habitData}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    innerRadius={0.6}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ datum: 'data.color' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    enableArcLinkLabels={true}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={true}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="#ffffff"
    theme={{
      labels: {
        text: {
          fontSize: 12,
          fill: '#ffffff',
        },
      },
      legends: {
        text: {
          fontSize: 12,
          fill: '#6B7280',
        },
      },
    }}
  />
);

export default function Analytics() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your progress and insights</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Progress Overview</h2>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">Last 7 days</span>
              </div>
            </div>
            <div className="h-80">
              <LineChart />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Daily Streak</p>
                    <p className="text-lg font-semibold text-gray-800">7 days</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Goals Completed</p>
                    <p className="text-lg font-semibold text-gray-800">12/15</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Skills Radar</h2>
            <div className="h-64">
              <RadarChart />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <WeeklyReflection />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6">Habit Completion</h2>
          <div className="h-80">
            <PieChart />
          </div>
        </motion.div>
      </div>
    </div>
  );
}