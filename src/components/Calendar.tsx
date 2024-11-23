import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Tag } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Calendar</h2>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500">
            {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          inline
          calendarClassName="!border-0"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-800">Coaching Session</h3>
              <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
            </div>
          </div>
          <Tag className="w-4 h-4 text-blue-600" />
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CalendarIcon className="w-5 h-5 text-green-600" />
            <div>
              <h3 className="font-medium text-gray-800">Meditation</h3>
              <p className="text-sm text-gray-600">8:00 AM - 8:30 AM</p>
            </div>
          </div>
          <Tag className="w-4 h-4 text-green-600" />
        </div>
      </div>
    </div>
  );
}