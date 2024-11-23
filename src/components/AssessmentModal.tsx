import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Assessment, Question } from '../types';

interface Props {
  assessment: Assessment;
  onClose: () => void;
  onComplete: (answers: Record<number, string | number>) => void;
}

export default function AssessmentModal({ assessment, onClose, onComplete }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});

  const handleAnswer = (answer: string | number) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{assessment.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / assessment.questions.length) * 100}%`,
              }}
            />
          </div>
          
          <motion.div
            key={currentQuestion}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl text-gray-800">
              {assessment.questions[currentQuestion].text}
            </h3>
            
            <div className="space-y-3">
              {assessment.questions[currentQuestion].options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    answers[currentQuestion] === option
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 text-gray-600 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-500">
            Question {currentQuestion + 1} of {assessment.questions.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}