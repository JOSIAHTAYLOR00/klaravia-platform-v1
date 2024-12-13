export interface Lesson {
  slug: string;
  title: string;
  description: string; // For SEO meta description
  keywords: string[]; // For SEO meta keywords
  content: {
    type: 
      | 'text' 
      | 'list' 
      | 'callout' 
      | 'heading' 
      | 'subheading' 
      | 'image' 
      | 'code' 
      | 'quote' 
      | 'divider';
    title?: string; // Used for callouts, lists, or other titled sections
    body?: string; // Text or code content
    url?: string; // For images
    description?: string; // Image description or alt text
  }[];
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  lessons: Lesson[];
}

export interface CourseProgress {
  completedLessons: Record<string, boolean>; // moduleSlug/lessonSlug as key
  completedQuizzes: string[]; // moduleSlug as key
  certificateEarned: boolean;
}

// For proper typing of our context
export interface CourseContextType {
  progress: CourseProgress;
  completeLesson: (moduleSlug: string, lessonSlug: string) => void;
  completeQuiz: (moduleSlug: string) => void;
  earnCertificate: () => void;
  calculateProgress: () => number; // Returns percentage complete
  canTakeCertificate: () => boolean;
}