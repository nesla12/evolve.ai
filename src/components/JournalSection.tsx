import React, { useState } from 'react';
import { Book, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';

export default function JournalSection() {
  const { journalEntries, addJournalEntry } = useStore();
  const [newEntry, setNewEntry] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.trim()) return;

    addJournalEntry({
      id: Date.now(),
      date: new Date(),
      content: newEntry,
      mood: 5,
      tags: [],
      reflections: []
    });

    setNewEntry('');
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Journal</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="mb-6"
        >
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="What's on your mind today?"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Entry
          </button>
        </motion.form>
      )}

      <div className="space-y-4">
        {journalEntries && journalEntries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-start space-x-3">
              <Book className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {format(new Date(entry.date), 'MMM d, yyyy')}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{entry.content}</p>
                {entry.tags && entry.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}