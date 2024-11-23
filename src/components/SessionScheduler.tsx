import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Video } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function SessionScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule a Session</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            inline
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Times</h3>
          <div className="grid grid-cols-2 gap-4">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border ${
                  selectedTime === time
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600'
                } transition-colors`}
              >
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {time}
                </div>
              </button>
            ))}
          </div>

          {selectedDate && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-blue-800 mb-2">Selected Session</h4>
                <div className="flex items-center text-blue-600">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {selectedDate.toLocaleDateString()} at {selectedTime}
                </div>
              </div>

              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Video className="w-5 h-5 mr-2" />
                Schedule Video Session
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}