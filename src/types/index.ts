// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  subscription?: Subscription;
  preferences: UserPreferences;
  stats: UserStats;
}

export interface Subscription {
  status: 'active' | 'trialing' | 'canceled' | null;
  trialEndsAt: Date | null;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
  language: string;
  timezone: string;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  reminders: boolean;
  newsletter: boolean;
}

export interface PrivacySettings {
  shareProgress: boolean;
  showOnLeaderboard: boolean;
  publicProfile: boolean;
}

export interface UserStats {
  streakDays: number;
  totalSessions: number;
  goalsCompleted: number;
  habitsFormed: number;
  mindfulMinutes: number;
}

// Coaching related types
export interface CoachingSession {
  id: number;
  userId: string;
  date: Date;
  topic: string;
  summary: string;
  actionItems: string[];
  mood: number;
  notes?: string;
  recording?: string;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'exercise' | 'meditation';
  url: string;
  duration: string;
  category: string;
  description: string;
  thumbnail?: string;
}

// Assessment related types
export interface Assessment {
  id: number;
  category: string;
  title: string;
  description: string;
  questions: Question[];
  completed: boolean;
  results?: AssessmentResult;
}

export interface Question {
  id: number;
  text: string;
  type: 'scale' | 'multiple' | 'text';
  options?: string[];
}

export interface AssessmentResult {
  id: number;
  assessmentId: number;
  userId: string;
  date: Date;
  scores: Record<string, number>;
  insights: string[];
  recommendations: string[];
}

// Habit related types
export interface Habit {
  id: number;
  name: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  timeOfDay?: string;
  reminder: boolean;
  stack?: string;
  streak: number;
  completed: boolean;
  category: string;
  startDate: Date;
  history: HabitLog[];
}

export interface HabitLog {
  id: number;
  habitId: number;
  date: Date;
  completed: boolean;
  notes?: string;
}

// Goal related types
export interface Goal {
  id: number;
  title: string;
  description: string;
  category: string;
  deadline: Date;
  progress: number;
  completed?: boolean;
  milestones: Milestone[];
  priority: 'low' | 'medium' | 'high';
}

export interface Milestone {
  id: number;
  goalId: number;
  title: string;
  completed: boolean;
  dueDate: Date;
}

// Journal related types
export interface JournalEntry {
  id: number;
  date: Date;
  content: string;
  mood: number;
  tags: string[];
  reflections: Reflection[];
  visibility: 'private' | 'public' | 'shared';
}

export interface Reflection {
  id: number;
  entryId: number;
  prompt: string;
  response: string;
  date: Date;
}

// Mood tracking types
export interface MoodLog {
  id: number;
  date: Date;
  score: number;
  notes: string;
  factors: string[];
  energyLevel: number;
}

// Chat related types
export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  suggestions?: string[];
  type?: 'text' | 'exercise' | 'reflection';
  metadata?: any;
}

// Community related types
export interface Community {
  id: number;
  name: string;
  description: string;
  members: number;
  category: string;
  posts: CommunityPost[];
  challenges: Challenge[];
}

export interface CommunityPost {
  id: number;
  author: User;
  content: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: number;
  postId: number;
  author: User;
  content: string;
  likes: number;
  createdAt: Date;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  duration: number;
  participants: number;
  startDate: Date;
  endDate: Date;
  milestones: string[];
  rewards: string[];
}

// Digital wellness types
export interface DigitalWellness {
  id: number;
  screenTime: number;
  notifications: number;
  focusSessions: FocusSession[];
  mindfulBreaks: MindfulBreak[];
  weeklyReport: DigitalWellnessReport;
}

export interface FocusSession {
  id: number;
  duration: number;
  startTime: Date;
  endTime: Date;
  task: string;
}

export interface MindfulBreak {
  id: number;
  duration: number;
  type: 'meditation' | 'stretching' | 'breathing';
  completed: boolean;
}

export interface DigitalWellnessReport {
  id: number;
  weekStarting: Date;
  averageScreenTime: number;
  focusSessionsCompleted: number;
  mindfulBreaksTaken: number;
  productivityScore: number;
  improvements: string[];
}