import React from 'react';
import { CheckCircle2, Circle, Clock, Calendar, ArrowRight, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Habit } from '../types';

export default function HabitTracker() {
  const { habits, updateHabit } = useStore();
  const [showCelebration, setShowCelebration] = React.useState<number | null>(null);

  const toggleHabit = (id: number) => {
    const habit = habits.find(h => h.id === id);
    if (!habit) return;

    const completed = !habit.completed;
    const streak = completed ? habit.streak + 1 : habit.streak;

    updateHabit(id, { ...habit, completed, streak });

    if (completed && streak > 0 && streak % 7 === 0) {
      setShowCelebration(id);
      setTimeout(() => setShowCelebration(null), 3000);
    }
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const currentHabits = habits.filter(
    habit => habit.timeOfDay?.toLowerCase().includes(getTimeOfDay())
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daily Habits</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Current streak: {Math.max(...habits.map(h => h.streak))} days</span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {currentHabits.map(habit => (
            <motion.div
              key={habit.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className="focus:outline-none"
                  >
                    {habit.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  <div>
                    <h3 className="font-medium text-gray-800">{habit.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {habit.streak} day streak
                      </span>
                    </div>
                  </div>
                </div>

                {habit.stack && (
                  <div className="flex items-center text-sm text-gray-500">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    <span>After: {habit.stack}</span>
                  </div>
                )}

                {showCelebration === habit.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -right-2 bg-yellow-400 text-white p-2 rounded-full"
                  >
                    <Trophy className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {currentHabits.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No habits scheduled for this time of day.</p>
          </div>
        )}
      </div>
    </div>
  );
}