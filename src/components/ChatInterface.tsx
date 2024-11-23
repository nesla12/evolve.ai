import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image, Sparkles, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { useStore } from '../store/useStore';

export default function ChatInterface() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { chatHistory, addChatMessage } = useStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    addChatMessage({
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    });

    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      addChatMessage({
        id: Date.now() + 1,
        text: "I'm here to help you achieve your goals. What would you like to focus on today?",
        sender: 'ai',
        timestamp: new Date(),
        suggestions: [
          'Set a new goal',
          'Review my progress',
          'Get motivation'
        ]
      });
      setIsTyping(false);
    }, 1500);
  };

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg"
    >
      <Loader className="w-4 h-4 text-blue-600 animate-spin" />
      <span className="text-sm text-gray-500">AI Coach is typing...</span>
    </motion.div>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p>{msg.text}</p>
              {msg.suggestions && (
                <div className="mt-3 space-y-2">
                  {msg.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(suggestion)}
                      className="block w-full text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}