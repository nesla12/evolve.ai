import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuth } from '../hooks/useAuth';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { checkSubscription } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkSubscription();
      }
    });

    return () => unsubscribe();
  }, [checkSubscription]);

  return <>{children}</>;
}