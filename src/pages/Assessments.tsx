import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Heart, Book, Users } from 'lucide-react';
import AssessmentCard from '../components/AssessmentCard';
import AssessmentModal from '../components/AssessmentModal';
import { Assessment } from '../types';

const assessments: Assessment[] = [
  {
    id: 1,
    category: 'mindfulness',
    title: 'Mindfulness Assessment',
    description: 'Evaluate your current mindfulness practices and awareness levels',
    questions: [
      {
        id: 1,
        text: 'How often do you practice mindfulness or meditation?',
        type: 'scale',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Daily']
      },
      {
        id: 2,
        text: 'How would you rate your ability to stay present in the moment?',
        type: 'scale',
        options: ['Very Poor', 'Poor', 'Average', 'Good', 'Excellent']
      },
      {
        id: 3,
        text: 'What challenges do you face in maintaining mindfulness?',
        type: 'multiple',
        options: [
          'Busy schedule',
          'Difficulty focusing',
          'Environmental distractions',
          'Lack of motivation',
          'Other'
        ]
      }
    ],
    completed: false
  },
  {
    id: 2,
    category: 'productivity',
    title: 'Productivity Assessment',
    description: 'Analyze your work habits and time management skills',
    questions: [
      {
        id: 1,
        text: 'How do you prioritize your daily tasks?',
        type: 'multiple',
        options: [
          'To-do lists',
          'Priority matrix',
          'Time blocking',
          'No specific system'
        ]
      },
      {
        id: 2,
        text: 'How often do you feel overwhelmed by your workload?',
        type: 'scale',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
      }
    ],
    completed: false
  },
  {
    id: 3,
    category: 'relationships',
    title: 'Relationship Assessment',
    description: 'Evaluate your interpersonal skills and emotional intelligence',
    questions: [
      {
        id: 1,
        text: 'How comfortable are you expressing your emotions?',
        type: 'scale',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely']
      },
      {
        id: 2,
        text: 'How well do you handle conflict in relationships?',
        type: 'scale',
        options: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
      }
    ],
    completed: false
  }
];

const categoryIcons = {
  mindfulness: Brain,
  productivity: Target,
  health: Heart,
  learning: Book,
  relationships: Users
};

export default function Assessments() {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [completedAssessments, setCompletedAssessments] = useState<number[]>([]);

  const handleStartAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
  };

  const handleCompleteAssessment = (answers: Record<number, string | number>) => {
    if (selectedAssessment) {
      setCompletedAssessments([...completedAssessments, selectedAssessment.id]);
      // Here you would typically send the answers to your backend
      console.log('Assessment completed:', { assessmentId: selectedAssessment.id, answers });
      setSelectedAssessment(null);
    }
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Assessments</h1>
        <p className="text-gray-600 mt-2">
          Evaluate your progress and get personalized insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment) => {
          const Icon = categoryIcons[assessment.category as keyof typeof categoryIcons];
          return (
            <motion.div
              key={assessment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: assessment.id * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {assessment.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">{assessment.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {assessment.questions.length} questions
                  </span>
                  {completedAssessments.includes(assessment.id) ? (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleStartAssessment(assessment)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Assessment
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedAssessment && (
        <AssessmentModal
          assessment={selectedAssessment}
          onClose={() => setSelectedAssessment(null)}
          onComplete={handleCompleteAssessment}
        />
      )}
    </div>
  );
}