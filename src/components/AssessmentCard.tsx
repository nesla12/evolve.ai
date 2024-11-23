import React from 'react';
import { ClipboardCheck, ArrowRight } from 'lucide-react';
import { Assessment } from '../types';
import { motion } from 'framer-motion';

interface Props {
  assessment: Assessment;
  onStart: (assessment: Assessment) => void;
}

export default function AssessmentCard({ assessment, onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <ClipboardCheck className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-800">{assessment.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{assessment.description}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          {assessment.category}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {assessment.questions.length} questions
        </span>
        <button
          onClick={() => onStart(assessment)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          <span>Start Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}