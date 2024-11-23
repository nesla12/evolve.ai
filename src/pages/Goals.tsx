import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Target, Calendar as CalendarIcon } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Goal } from '../types';
import { useStore } from '../store/useStore';

export default function Goals() {
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [newGoal, setNewGoal] = useState<Partial<Goal>>({
    title: '',
    description: '',
    deadline: new Date(),
    category: 'personal',
    progress: 0
  });

  const { goals, updateGoal } = useStore();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    // Implement drag and drop reordering logic
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new goal logic
    setShowNewGoal(false);
  };

  const goalSections = [
    {
      id: 'in-progress',
      title: 'In Progress',
      goals: goals.filter(goal => !goal.completed && goal.progress > 0)
    },
    {
      id: 'upcoming',
      title: 'Upcoming',
      goals: goals.filter(goal => !goal.completed && goal.progress === 0)
    },
    {
      id: 'completed',
      title: 'Completed',
      goals: goals.filter(goal => goal.completed)
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Goals</h1>
        <button
          onClick={() => setShowNewGoal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Goal</span>
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goalSections.map(section => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.goals.map((goal, index) => (
                      <Draggable
                        key={goal.id.toString()}
                        draggableId={goal.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium text-gray-800">
                                  {goal.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {goal.description}
                                </p>
                              </div>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                {goal.category}
                              </span>
                            </div>
                            <div className="mt-4">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">
                                  {goal.progress}% Complete
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                                  style={{ width: `${goal.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {showNewGoal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">New Goal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, description: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <DatePicker
                  selected={newGoal.deadline}
                  onChange={(date) =>
                    setNewGoal({ ...newGoal, deadline: date || new Date() })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newGoal.category}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, category: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="personal">Personal</option>
                  <option value="career">Career</option>
                  <option value="health">Health</option>
                  <option value="learning">Learning</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewGoal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}