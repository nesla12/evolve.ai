import React from 'react';
import { motion } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';

export default function Chat() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">AI Coach Chat</h1>
        <p className="text-gray-600 mt-2">Get personalized guidance and support</p>
      </motion.div>

      <div className="h-[calc(100vh-12rem)]">
        <ChatInterface />
      </div>
    </div>
  );
}