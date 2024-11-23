import React from 'react';
import { motion } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionBanner() {
  const { subscription } = useAuth();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = React.useState(false);

  if (!subscription || subscription.status === 'active' || dismissed) {
    return null;
  }

  const daysLeft = subscription.trialEndsAt
    ? Math.ceil((subscription.trialEndsAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-600 text-white px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>
            {daysLeft > 0
              ? `${daysLeft} days left in your trial. Upgrade now to keep access!`
              : 'Your trial has ended. Upgrade now to continue using all features!'}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/pricing')}
            className="px-4 py-1 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Upgrade Now
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 hover:bg-blue-500 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}