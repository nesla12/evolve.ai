import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const features = [
  'Personalized AI Coaching',
  'Goal Setting & Tracking',
  'Habit Building System',
  'Progress Analytics',
  'Journal & Mood Tracking',
  'Community Access',
  'Resource Library',
  'Weekly Check-ins',
];

export default function Pricing() {
  const navigate = useNavigate();
  const { user, startTrial } = useAuth();

  const handleSubscribe = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    try {
      await startTrial();
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to start trial:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Start Your Growth Journey Today
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Try Evolve free for 30 days. No credit card required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
        >
          <div className="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Premium Membership
            </h3>
            <p className="mt-6 text-base text-gray-500">
              Get full access to all features and start transforming your life with
              personalized AI coaching.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-blue-600">
                  What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
              <span>$4.99</span>
              <span className="ml-3 text-xl font-medium text-gray-500">
                /month
              </span>
            </div>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <button
                  onClick={handleSubscribe}
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p className="font-medium text-gray-900">
                30-day free trial
                <span className="font-normal text-gray-500"> • </span>
                Cancel anytime
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Trusted by 10,000+ users worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}