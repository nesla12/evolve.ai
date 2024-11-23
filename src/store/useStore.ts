import { create } from 'zustand';
import {
  Habit,
  Goal,
  CoachingSession,
  JournalEntry,
  MoodLog,
  Assessment,
  ChatMessage,
  Community,
  Challenge,
  DigitalWellness,
  User,
  Connection,
  CommunityPost
} from '../types';

interface Store {
  // Habit state
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  updateHabit: (id: number, updates: Partial<Habit>) => void;
  deleteHabit: (id: number) => void;

  // Journal state
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: JournalEntry) => void;

  // Mood state
  moodLogs: MoodLog[];
  logMood: (log: MoodLog) => void;

  // Chat state
  chatHistory: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;

  // Goals state
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  updateGoal: (id: number, updates: Partial<Goal>) => void;

  // Coaching state
  sessions: CoachingSession[];
  addSession: (session: CoachingSession) => void;

  // Community state
  communities: Community[];
  activeChallenges: Challenge[];
  user: User | null;
  connections: Connection[];
  
  // Digital wellness state
  digitalWellness: DigitalWellness;
  focusMode: boolean;
  
  // Assessment state
  assessmentResults: Record<string, Assessment[]>;
  
  // Actions
  joinCommunity: (communityId: number) => void;
  leaveCommunity: (communityId: number) => void;
  createPost: (communityId: number, post: Partial<CommunityPost>) => void;
  joinChallenge: (challengeId: number) => void;
  updateDigitalWellness: (data: Partial<DigitalWellness>) => void;
  toggleFocusMode: () => void;
  updateAssessmentResults: (category: string, assessment: Assessment) => void;
}

export const useStore = create<Store>((set) => ({
  // Initialize habits with some sample data
  habits: [
    {
      id: 1,
      name: 'Morning Meditation',
      completed: false,
      streak: 3,
      timeOfDay: 'morning',
      stack: 'After waking up',
      reminder: true
    },
    {
      id: 2,
      name: 'Evening Reading',
      completed: false,
      streak: 5,
      timeOfDay: 'evening',
      stack: 'Before bed',
      reminder: true
    }
  ],
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  updateHabit: (id, updates) => set((state) => ({
    habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h))
  })),
  deleteHabit: (id) => set((state) => ({
    habits: state.habits.filter((h) => h.id !== id)
  })),

  // Initialize journal entries
  journalEntries: [],
  addJournalEntry: (entry) => set((state) => ({
    journalEntries: [entry, ...state.journalEntries]
  })),

  // Initialize mood logs
  moodLogs: [],
  logMood: (log) => set((state) => ({
    moodLogs: [log, ...state.moodLogs]
  })),

  // Initialize chat history
  chatHistory: [],
  addChatMessage: (message) => set((state) => ({
    chatHistory: [...state.chatHistory, message]
  })),

  // Initialize goals
  goals: [],
  addGoal: (goal) => set((state) => ({ goals: [...state.goals, goal] })),
  updateGoal: (id, updates) => set((state) => ({
    goals: state.goals.map((g) => (g.id === id ? { ...g, ...updates } : g))
  })),

  // Initialize coaching sessions
  sessions: [],
  addSession: (session) => set((state) => ({
    sessions: [...state.sessions, session]
  })),

  // Initialize community features
  communities: [],
  activeChallenges: [],
  user: null,
  connections: [],
  
  // Initialize digital wellness
  digitalWellness: {
    id: 1,
    screenTime: 0,
    notifications: 0,
    focusSessions: [],
    mindfulBreaks: [],
    weeklyReport: {
      id: 1,
      weekStarting: new Date(),
      averageScreenTime: 0,
      focusSessionsCompleted: 0,
      mindfulBreaksTaken: 0,
      productivityScore: 0,
      improvements: []
    }
  },
  focusMode: false,
  assessmentResults: {},
  
  // Community actions
  joinCommunity: (communityId) => set((state) => ({
    communities: state.communities.map((c) =>
      c.id === communityId ? { ...c, members: c.members + 1 } : c
    ),
  })),
  
  leaveCommunity: (communityId) => set((state) => ({
    communities: state.communities.map((c) =>
      c.id === communityId ? { ...c, members: c.members - 1 } : c
    ),
  })),
  
  createPost: (communityId, post) => set((state) => ({
    communities: state.communities.map((c) =>
      c.id === communityId
        ? {
            ...c,
            posts: [
              {
                id: Date.now(),
                author: state.user!,
                likes: 0,
                comments: [],
                createdAt: new Date(),
                ...post,
              },
              ...c.posts,
            ],
          }
        : c
    ),
  })),
  
  joinChallenge: (challengeId) => set((state) => ({
    activeChallenges: state.activeChallenges.map((c) =>
      c.id === challengeId ? { ...c, participants: c.participants + 1 } : c
    ),
  })),
  
  updateDigitalWellness: (data) => set((state) => ({
    digitalWellness: { ...state.digitalWellness, ...data },
  })),
  
  toggleFocusMode: () => set((state) => ({
    focusMode: !state.focusMode,
  })),
  
  updateAssessmentResults: (category, assessment) => set((state) => ({
    assessmentResults: {
      ...state.assessmentResults,
      [category]: [...(state.assessmentResults[category] || []), assessment],
    },
  })),
}));