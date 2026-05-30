export type LearningNode = {
  id: string;
  title: string;
  topic: string;
  status: 'locked' | 'available' | 'completed';
  progress: number;
  position: { x: number; y: number };
};

export type LearningStats = {
  totalXP: number;
  level: number;
  xpToNext: number;
};

export type DailyGoal = {
  id: number;
  label: string;
  progress: number;
};

export type Achievement = {
  id: number;
  title: string;
};

export type DashboardPayload = {
  user: {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  nodes: LearningNode[];
  stats: LearningStats;
  goals: DailyGoal[];
  achievements: Achievement[];
  streak: {
    year: number;
    month: number;
    days: { date: string; completed: boolean }[];
  };
};

export type Lesson = {
  id: string;
  title: string;
  topic: string;
  summary: string;
};

export type LessonStep = {
  id: number;
  title: string;
  content: string;
  task: string;
  order: number;
  type?: string;
  options?: string[];
  answer?: string;
  explanation?: string;
  uiHint?: string;
};

export type LessonPayload = {
  lesson: Lesson;
  steps: LessonStep[];
};

export type ValidatePayload = {
  correct: boolean;
  message: string;
};

export type CompletePayload = {
  message: string;
};

export type RoadmapSection = {
  title: string;
  steps: string[];
};

export type RoadmapTopic = {
  topic: string;
  sections: RoadmapSection[];
};

export type RoadmapPayload = {
  topics: RoadmapTopic[];
  currentTopics: string[];
};

const demoUser = {
  id: 1,
  name: 'Rootsprout Learner',
  email: 'learner@rootsprout.local',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const demoNodes: LearningNode[] = [
  { id: '7', title: 'What is an Operating System?', topic: 'OS', status: 'available', progress: 0, position: { x: 0, y: 0 } },
  { id: '8', title: 'User Mode vs Kernel Mode', topic: 'OS', status: 'locked', progress: 0, position: { x: 80, y: 120 } },
  { id: '9', title: 'System Calls', topic: 'OS', status: 'locked', progress: 0, position: { x: -80, y: 240 } },
  { id: '10', title: 'OS as Resource Manager', topic: 'OS', status: 'locked', progress: 0, position: { x: 120, y: 360 } },
  { id: '11', title: 'Real System Observation', topic: 'OS', status: 'locked', progress: 0, position: { x: 0, y: 480 } },
  { id: '12', title: 'Mental Model Diagram', topic: 'OS', status: 'locked', progress: 0, position: { x: -120, y: 600 } },
  { id: '1', title: 'Process Basics', topic: 'OS', status: 'locked', progress: 0, position: { x: 120, y: 720 } },
  { id: '2', title: 'Memory Layout', topic: 'OS', status: 'locked', progress: 0, position: { x: 0, y: 840 } },
  { id: '3', title: 'File Systems', topic: 'OS', status: 'locked', progress: 0, position: { x: -120, y: 960 } },
  { id: '4', title: 'SQL Fundamentals', topic: 'DB', status: 'available', progress: 0, position: { x: 120, y: 1080 } },
  { id: '5', title: 'Indexing', topic: 'DB', status: 'locked', progress: 0, position: { x: 0, y: 1200 } },
  { id: '6', title: 'TCP/IP Stack', topic: 'Networking', status: 'locked', progress: 0, position: { x: -120, y: 1320 } },
];

const demoLessonSteps: LessonStep[] = [
  {
    id: 1,
    title: 'What Is An Operating System?',
    content: 'An operating system sits between applications and hardware. It manages CPU time, memory, files, devices, and the rules that keep programs from interfering with each other.',
    task: '',
    order: 1,
    type: 'concept',
    uiHint: 'intro_card',
  },
  {
    id: 2,
    title: 'Kernel And User Space',
    content: 'Apps run in user mode. The kernel runs in privileged mode. When an app needs a protected operation, it asks the kernel through a system call.',
    task: '',
    order: 2,
    type: 'concept',
    uiHint: 'bullet_points',
  },
  {
    id: 3,
    title: 'Try A Command',
    content: 'Try it\nps',
    task: 'Run ps to inspect active processes.',
    order: 3,
    type: 'terminal',
  },
  {
    id: 4,
    title: 'Checkpoint',
    content: 'Which layer owns direct access to hardware?',
    task: '',
    order: 4,
    type: 'concept',
    options: ['Kernel', 'Browser tab', 'Text editor', 'Shell prompt'],
    answer: 'Kernel',
    explanation: 'Correct answer: Kernel. Applications request privileged work through the OS.',
    uiHint: 'mcq',
  },
  {
    id: 5,
    title: 'Lesson Complete',
    content: 'You now have the basic mental model: applications request resources, the kernel arbitrates access, and hardware performs the work.',
    task: '',
    order: 5,
    type: 'concept',
    uiHint: 'completion_reward',
  },
];

export async function getDashboard() {
  return {
    user: demoUser,
    nodes: demoNodes,
    stats: {
      totalXP: 2450,
      level: 14,
      xpToNext: 350,
    },
    goals: [
      { id: 1, label: 'Complete one lesson', progress: 60 },
      { id: 2, label: 'Practice one command', progress: 40 },
    ],
    achievements: [
      { id: 1, title: 'Kernel Curious' },
      { id: 2, title: 'Command Line Starter' },
    ],
    streak: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      days: Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() }, (_, index) => ({
        date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`,
        completed: index % 3 === 0,
      })),
    },
  };
}

export async function getLesson(id: string) {
  const node = demoNodes.find((item) => item.id === id);
  return {
    lesson: {
      id,
      title: node?.title || 'Demo Lesson',
      topic: node?.topic || 'OS',
      summary: 'Local demo lesson.',
    },
    steps: demoLessonSteps,
  };
}

export async function validateCommand(lessonId: string, stepId: number, input: string) {
  void lessonId;
  void stepId;
  const normalized = input.trim().toLowerCase();
  const correct = ['ps', 'top', 'whoami', 'ls'].includes(normalized);
  return {
    correct,
    message: correct
      ? 'Success: command accepted in local demo mode.'
      : 'Try ps to inspect active processes.',
  };
}

export async function completeLesson(lessonId: string) {
  void lessonId;
  return {
    message: 'Lesson completed locally.',
  };
}

export async function getRoadmaps() {
  return {
    topics: [
      {
        topic: 'OS',
        sections: [
          {
            title: 'Foundations',
            steps: [
              'What is an Operating System?',
              'User Mode vs Kernel Mode',
              'System Calls',
              'OS as Resource Manager',
              'Real System Observation',
              'Mental Model Diagram',
            ],
          },
          { title: 'Memory Management', steps: ['Memory Layout'] },
          { title: 'CPU Scheduling', steps: ['Process Basics'] },
          { title: 'File Systems', steps: ['File Systems'] },
        ],
      },
      { topic: 'DB', sections: [{ title: 'SQL', steps: ['SQL Fundamentals'] }, { title: 'Indexing', steps: ['Indexing'] }] },
      { topic: 'Networking', sections: [{ title: 'Core', steps: ['TCP/IP Stack'] }] },
    ],
    currentTopics: ['OS', 'DB', 'Networking'],
  };
}
