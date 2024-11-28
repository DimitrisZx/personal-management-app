export interface Goal {
  id: string;
  title: string;
  description: string;
  dueDate: Date | null;
  status: 'not-started' | 'in-progress' | 'completed';
  priority: number; // 1 to 5 scale
}

export interface GoalInput {
  title: string;
  description: string;
  dueDate?: Date;
  status?: 'not-started' | 'in-progress' | 'completed';
  priority?: number;
}
