import React from 'react';
import { BarChart2 } from 'lucide-react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function ProgressChart() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());

  const values = React.useMemo(() => {
    const data = [];
    let date = startDate;
    while (date <= today) {
      data.push({
        date: new Date(date),
        count: Math.floor(Math.random() * 4)
      });
      date = new Date(date.setDate(date.getDate() + 1));
    }
    return data;
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Activity</h2>
        <BarChart2 className="w-6 h-6 text-gray-400" />
      </div>
      
      <div className="text-sm text-gray-500">
        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={values}
          classForValue={(value) => {
            if (!value) return 'color-empty';
            return `color-scale-${value.count}`;
          }}
        />
      </div>
    </div>
  );
}