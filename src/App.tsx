import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Coaching from './pages/Coaching';
import Learning from './pages/Learning';
import Settings from './pages/Settings';
import Auth from './pages/Auth';
import Pricing from './pages/Pricing';
import FloatingChatButton from './components/FloatingChatButton';
import SubscriptionBanner from './components/SubscriptionBanner';
import { useAuth } from './hooks/useAuth';

const queryClient = new QueryClient();

function App() {
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {user ? (
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <SubscriptionBanner />
                <div className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/coaching" element={<Coaching />} />
                    <Route path="/learning" element={<Learning />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
                <FloatingChatButton />
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<Auth />} />
            </Routes>
          )}
        </div>
        <Toaster position="top-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;