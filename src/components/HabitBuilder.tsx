import React, { useState } from 'react';
import { Plus, Sparkles, Target, Clock, Bell, ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function HabitBuilder() {
  const { addHabit } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newHabit, setNewHabit] = useState({
    name: '',
    frequency: 'daily',
    timeOfDay: 'morning',
    reminder: true,
    stack: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const habit = {
      id: Date.now(),
      ...newHabit,
      completed: false,
      streak: 0,
      category: 'personal'
    };

    addHabit(habit);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setShowForm(false);
      setNewHabit({
        name: '',
        frequency: 'daily',
        timeOfDay: 'morning',
        reminder: true,
        stack: ''
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Build a Habit</h2>
        <button
          onClick={() => setShowForm(true)}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Habit Name
              </label>
              <input
                type="text"
                value={newHabit.name}
                onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Morning Meditation"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frequency
                </label>
                <select
                  value={newHabit.frequency}
                  onChange={(e) => setNewHabit({ ...newHabit, frequency: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time of Day
                </label>
                <select
                  value={newHabit.timeOfDay}
                  onChange={(e) => setNewHabit({ ...newHabit, timeOfDay: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stack With
              </label>
              <input
                type="text"
                value={newHabit.stack}
                onChange={(e) => setNewHabit({ ...newHabit, stack: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., After brushing teeth"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="reminder"
                  checked={newHabit.reminder}
                  onChange={(e) => setNewHabit({ ...newHabit, reminder: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="reminder" className="ml-2 text-sm text-gray-600">
                  Enable reminders
                </label>
              </div>

              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Habit
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {!showForm && (
        <div className="text-center py-8">
          <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">
            Create a new habit to start building positive changes in your life
          </p>
        </div>
      )}

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-white rounded-full p-8"
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}