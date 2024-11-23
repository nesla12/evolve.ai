import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function HabitReminder() {
  const [notification, setNotification] = React.useState<{
    habit: string;
    trigger: string;
  } | null>(null);
  const { habits } = useStore();

  useEffect(() => {
    // Simulate smart notifications based on time and user patterns
    const checkHabits = () => {
      const currentHour = new Date().getHours();
      const uncompletedHabits = habits.filter(h => !h.completed && h.reminder);

      if (uncompletedHabits.length > 0) {
        const habit = uncompletedHabits[Math.floor(Math.random() * uncompletedHabits.length)];
        const trigger = currentHour < 12 ? 'morning routine' : 
                       currentHour < 17 ? 'afternoon break' : 'evening routine';

        setNotification({ habit: habit.name, trigger });
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => setNotification(null), 5000);
      }
    };

    const interval = setInterval(checkHabits, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [habits]);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-30"
        >
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Time for: {notification.habit}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Part of your {notification.trigger}
              </p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}