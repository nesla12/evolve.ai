import { create } from 'zustand';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface User extends FirebaseUser {
  subscription?: {
    status: 'active' | 'trialing' | 'canceled' | null;
    trialEndsAt: Date | null;
  };
}

interface AuthStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  startTrial: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set({ user: user as User, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  signup: async (email: string, password: string, name?: string) => {
    try {
      set({ loading: true, error: null });
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      if (name) {
        await updateProfile(user, { displayName: name });
      }

      // Start trial automatically for new users
      const userWithTrial = {
        ...user,
        subscription: {
          status: 'trialing',
          trialEndsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      };

      set({ user: userWithTrial as User, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null, loading: false });
    } catch (error: any) {
      set({ error: error.message });
      throw error;
    }
  },

  startTrial: async () => {
    set((state) => ({
      user: state.user ? {
        ...state.user,
        subscription: {
          status: 'trialing',
          trialEndsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      } : null,
    }));
  },

  clearError: () => set({ error: null }),
}));

// Initialize auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    useAuth.setState({ user: user as User, loading: false });
  } else {
    useAuth.setState({ user: null, loading: false });
  }
});