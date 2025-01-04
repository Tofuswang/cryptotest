export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswers: number[];
  type: 'single' | 'multiple';
}

export interface QuizState {
  currentQuestion: number;
  answers: number[][];
  isComplete: boolean;
  showFeedback: boolean;
}

export interface Result {
  score: number;
  recommendation: string;
}